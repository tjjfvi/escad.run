import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { delegateEvents as _$delegateEvents } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="DisplayPane loading"></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div><span>Export</span></div>`, 4),
      _tmpl$3 = /*#__PURE__*/_$template(`<div class="DisplayPane"><div class="menubar"><div><span>Viewer</span></div></div></div>`, 8),
      _tmpl$4 = /*#__PURE__*/_$template(`<div class="DisplayPane none"><span class="header">No products to display.</span></div>`, 4),
      _tmpl$5 = /*#__PURE__*/_$template(`<span></span>`, 2),
      _tmpl$6 = /*#__PURE__*/_$template(`<div class="Stats"><span>Stats</span><div class="content"></div></div>`, 6),
      _tmpl$7 = /*#__PURE__*/_$template(`<div class="stat"><span></span></div>`, 4);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/DisplayPane.styl.js";
import { createResource, createSignal, Dynamic, For, Show } from "/transpiled/https://escad.dev/deps/solid.js";
import { ExportTypeRegistry, Product, ProductType } from "/transpiled/https://escad.dev/core/mod.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
import { MemoShow } from "/transpiled/https://escad.dev/client/MemoShow.js";
export const DisplayPane = props => {
  const [sig] = createResource(() => props.productHashes, async hashes => {
    const productPromises = hashes.map(async hash => {
      const product = await props.artifactManager.lookupRaw(hash);
      if (!product) throw new Error("Unexpected null");
      return product;
    });
    const [viewers, stats, exportTypes] = await Promise.all([filterDisplays(viewerRegistry, props.conversionRegistry, productPromises), filterDisplays(statRegistry, props.conversionRegistry, productPromises), filterDisplays(props.exportTypes, props.conversionRegistry, productPromises)]);
    return {
      productPromises,
      viewers,
      stats,
      exportTypes
    };
  });
  const [selectedViewer, setSelectedViewer] = createSignal();

  const viewer = () => selectedViewer() && sig().viewers.includes(selectedViewer()) ? selectedViewer() : sig().viewers[0];

  return _$createComponent(MemoShow, {
    get when() {
      return sig();
    },

    get fallback() {
      return (() => {
        const _el$ = _tmpl$.cloneNode(true);

        _$insert(_el$, _$createComponent(Loading, {}));

        return _el$;
      })();
    },

    children: sig => _$createComponent(Show, {
      get when() {
        return sig().productPromises.length;
      },

      get fallback() {
        return _tmpl$4.cloneNode(true);
      },

      get children() {
        const _el$2 = _tmpl$3.cloneNode(true),
              _el$3 = _el$2.firstChild,
              _el$4 = _el$3.firstChild,
              _el$5 = _el$4.firstChild;

        _$insert(_el$2, _$createComponent(Dynamic, {
          get component() {
            return viewer().component;
          },

          get productPromises() {
            return sig().productPromises.map(async product => await props.conversionRegistry.convertProduct(ProductType.fromProductTypeish(viewer().productType), await product));
          }

        }), _el$3);

        _$insert(_el$4, _$createComponent(For, {
          get each() {
            return sig().viewers;
          },

          children: v => (() => {
            const _el$9 = _tmpl$5.cloneNode(true);

            _el$9.$$click = () => setSelectedViewer(v);

            _$insert(_el$9, () => v.name);

            return _el$9;
          })()
        }), _el$5);

        _$insert(_el$3, _$createComponent(Show, {
          get when() {
            return sig().exportTypes.length;
          },

          get children() {
            const _el$6 = _tmpl$2.cloneNode(true),
                  _el$7 = _el$6.firstChild;

            _$insert(_el$6, _$createComponent(For, {
              get each() {
                return sig().exportTypes;
              },

              children: exportType => (() => {
                const _el$10 = _tmpl$5.cloneNode(true);

                _el$10.$$click = () => exportProducts(props.artifactManager, exportType, sig().productPromises);

                _$insert(_el$10, () => exportType.name);

                return _el$10;
              })()
            }), _el$7);

            return _el$6;
          }

        }), null);

        _$insert(_el$2, _$createComponent(Stats, {
          get conversionRegistry() {
            return props.conversionRegistry;
          },

          get stats() {
            return sig().stats;
          },

          get productPromises() {
            return sig().productPromises;
          }

        }), null);

        return _el$2;
      }

    })
  });
};

const Stats = props => {
  const [statsOpen, setStatsOpen] = createSignal(false);
  return _$createComponent(Show, {
    get when() {
      return props.stats.length;
    },

    get children() {
      const _el$11 = _tmpl$6.cloneNode(true),
            _el$12 = _el$11.firstChild,
            _el$13 = _el$12.nextSibling;

      _el$12.$$click = () => setStatsOpen(x => !x);

      _$insert(_el$13, _$createComponent(For, {
        get each() {
          return props.stats;
        },

        children: stat => {
          const [value] = createResource(() => props.productPromises, async productPromises => {
            const products = await Promise.all(productPromises.map(async productPromise => {
              const product = await productPromise;
              return props.conversionRegistry.convertProduct(ProductType.fromProductTypeish(stat.productType), product);
            }));
            return await stat.value(products);
          });
          return (() => {
            const _el$14 = _tmpl$7.cloneNode(true),
                  _el$15 = _el$14.firstChild;

            _$insert(_el$15, () => stat.label);

            _$insert(_el$14, _$createComponent(Show, {
              get when() {
                return value();
              },

              get fallback() {
                return _$createComponent(Loading, {});
              },

              get children() {
                const _el$16 = _tmpl$5.cloneNode(true);

                _$insert(_el$16, value);

                return _el$16;
              }

            }), null);

            return _el$14;
          })();
        }
      }));

      _$effect(() => _el$11.classList.toggle("open", !!statsOpen()));

      return _el$11;
    }

  });
};

const viewerRegistry = [];
const statRegistry = [];
export function registerViewer(viewer) {
  viewerRegistry.push(viewer);
  viewerRegistry.sort((a, b) => b.weight - a.weight);
}
export function registerStat(stat) {
  statRegistry.push(stat);
  statRegistry.sort((a, b) => b.weight - a.weight);
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