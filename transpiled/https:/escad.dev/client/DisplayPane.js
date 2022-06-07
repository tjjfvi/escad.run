import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { delegateEvents as _$delegateEvents } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="DisplayPane loading"></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="DisplayPane none"><span class="header">No products to display.</span></div>`, 4),
      _tmpl$3 = /*#__PURE__*/_$template(`<div><span>Export</span></div>`, 4),
      _tmpl$4 = /*#__PURE__*/_$template(`<div class="DisplayPane"><div class="menubar"><div><span>Viewer</span></div></div></div>`, 8),
      _tmpl$5 = /*#__PURE__*/_$template(`<span></span>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/DisplayPane.styl.js";
import { createResource, createSignal, Dynamic, Show } from "/transpiled/https://escad.dev/deps/solid.js";
import { ExportTypeRegistry, Product, ProductType } from "/transpiled/https://escad.dev/core/mod.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
export const DisplayPane = props => {
  const [sig] = createResource(() => props.productHashes, async hashes => {
    const productPromises = hashes.map(async hash => {
      const product = await props.artifactManager.lookupRaw(hash);
      if (!product) throw new Error("Unexpected null");
      return product;
    });
    const [viewers, exportTypes] = await Promise.all([filterDisplays(viewerRegistry, props.conversionRegistry, productPromises), filterDisplays(props.exportTypes, props.conversionRegistry, productPromises)]);
    return {
      productPromises,
      viewers,
      exportTypes
    };
  });
  const [selectedViewer, setSelectedViewer] = createSignal();
  return () => {
    const val = sig();

    if (!val) {
      return (() => {
        const _el$ = _tmpl$.cloneNode(true);

        _$insert(_el$, _$createComponent(Loading, {}));

        return _el$;
      })();
    }

    const {
      productPromises,
      viewers,
      exportTypes
    } = val;

    if (!productPromises.length) {
      return _tmpl$2.cloneNode(true);
    }

    const viewer = () => selectedViewer() && viewers.includes(selectedViewer()) ? selectedViewer() : viewers[0];

    return (() => {
      const _el$3 = _tmpl$4.cloneNode(true),
            _el$4 = _el$3.firstChild,
            _el$5 = _el$4.firstChild,
            _el$6 = _el$5.firstChild;

      _$insert(_el$3, _$createComponent(Dynamic, {
        get component() {
          return viewer().component;
        },

        get productPromises() {
          return productPromises.map(async product => await props.conversionRegistry.convertProduct(ProductType.fromProductTypeish(viewer().productType), await product));
        }

      }), _el$4);

      _$insert(_el$5, () => viewers.map(v => (() => {
        const _el$9 = _tmpl$5.cloneNode(true);

        _el$9.$$click = () => setSelectedViewer(v);

        _$insert(_el$9, () => v.name);

        return _el$9;
      })()), _el$6);

      _$insert(_el$4, _$createComponent(Show, {
        get when() {
          return exportTypes.length;
        },

        get children() {
          const _el$7 = _tmpl$3.cloneNode(true),
                _el$8 = _el$7.firstChild;

          _$insert(_el$7, () => exportTypes.map(exportType => (() => {
            const _el$10 = _tmpl$5.cloneNode(true);

            _el$10.$$click = () => exportProducts(props.artifactManager, exportType, productPromises);

            _$insert(_el$10, () => exportType.name);

            return _el$10;
          })()), _el$8);

          return _el$7;
        }

      }), null);

      return _el$3;
    })();
  };
};
const viewerRegistry = [];
export function registerViewer(display) {
  viewerRegistry.push(display);
  viewerRegistry.sort((a, b) => b.weight - a.weight);
}

async function filterDisplays(displays, conversionRegistry, productPromises) {
  return (await Promise.all(displays.map(async display => {
    const displayProductType = ProductType.fromProductTypeish(display.productType);
    let anyFalse = false;
    let resolveFalse;
    let falsePromise = new Promise(r => resolveFalse = r);
    const result = await Promise.race([falsePromise, Promise.all(productPromises.map(async productPromise => {
      const product = await productPromise;
      if (anyFalse) return;
      const result = await conversionRegistry.has(Product.getProductType(product), displayProductType);
      console.log(displayProductType);

      if (!result) {
        anyFalse = true;
        resolveFalse(false);
      }
    })).then(() => !anyFalse)]);
    return result ? [display] : [];
  }))).flat();
}

async function exportProducts(artifactManager, exportType, productPromises) {
  const data = await artifactManager.lookupRef([ExportTypeRegistry.artifactStoreId, exportType.id, await Promise.all(productPromises)]);
  if (!(data instanceof Uint8Array)) throw new Error("Export failed");
  download(URL.createObjectURL(new Blob([data])), "export" + exportType.extension);
}

function download(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.setAttribute("download", filename);
  a.click();
}

_$delegateEvents(["click"]);