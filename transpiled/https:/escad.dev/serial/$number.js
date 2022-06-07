import * as ieee754 from "/transpiled/https://escad.dev/deps/ieee754.js";
import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
export const $number = new Serializer({
  s: value => Serializer.write(8, ({
    buffer,
    offset
  }) => ieee754.write(buffer, value, offset, true, 52, 8)),
  d: () => Serializer.read(8, ({
    buffer,
    offset
  }) => ieee754.read(buffer, offset, true, 52, 8))
});
export const $uint8 = new Serializer({
  s: value => Serializer.write(1, ({
    dataView,
    offset
  }) => dataView.setUint8(offset, value)),
  d: () => Serializer.read(1, ({
    dataView,
    offset
  }) => dataView.getUint8(offset))
});
export const $uint16le = new Serializer({
  s: value => Serializer.write(2, ({
    dataView,
    offset
  }) => dataView.setUint16(offset, value, true)),
  d: () => Serializer.read(2, ({
    dataView,
    offset
  }) => dataView.getUint16(offset, true))
});
export const $uint16be = new Serializer({
  s: value => Serializer.write(2, ({
    dataView,
    offset
  }) => dataView.setUint16(offset, value, false)),
  d: () => Serializer.read(2, ({
    dataView,
    offset
  }) => dataView.getUint16(offset, false))
});
export const $uint32le = new Serializer({
  s: value => Serializer.write(4, ({
    dataView,
    offset
  }) => dataView.setUint32(offset, value, true)),
  d: () => Serializer.read(4, ({
    dataView,
    offset
  }) => dataView.getUint32(offset, true))
});
export const $uint32be = new Serializer({
  s: value => Serializer.write(4, ({
    dataView,
    offset
  }) => dataView.setUint32(offset, value, false)),
  d: () => Serializer.read(4, ({
    dataView,
    offset
  }) => dataView.getUint32(offset, false))
});
export const $int8 = new Serializer({
  s: value => Serializer.write(1, ({
    dataView,
    offset
  }) => dataView.setInt8(offset, value)),
  d: () => Serializer.read(1, ({
    dataView,
    offset
  }) => dataView.getInt8(offset))
});
export const $int16le = new Serializer({
  s: value => Serializer.write(2, ({
    dataView,
    offset
  }) => dataView.setInt16(offset, value, true)),
  d: () => Serializer.read(2, ({
    dataView,
    offset
  }) => dataView.getInt16(offset, true))
});
export const $int16be = new Serializer({
  s: value => Serializer.write(2, ({
    dataView,
    offset
  }) => dataView.setInt16(offset, value, false)),
  d: () => Serializer.read(2, ({
    dataView,
    offset
  }) => dataView.getInt16(offset, false))
});
export const $int32le = new Serializer({
  s: value => Serializer.write(4, ({
    dataView,
    offset
  }) => dataView.setInt32(offset, value, true)),
  d: () => Serializer.read(4, ({
    dataView,
    offset
  }) => dataView.getInt32(offset, true))
});
export const $int32be = new Serializer({
  s: value => Serializer.write(4, ({
    dataView,
    offset
  }) => dataView.setInt32(offset, value, false)),
  d: () => Serializer.read(4, ({
    dataView,
    offset
  }) => dataView.getInt32(offset, false))
});
export const $float32le = new Serializer({
  s: value => Serializer.write(4, ({
    dataView,
    offset
  }) => dataView.setFloat32(offset, value, true)),
  d: () => Serializer.read(4, ({
    dataView,
    offset
  }) => dataView.getFloat32(offset, true))
});
export const $float32be = new Serializer({
  s: value => Serializer.write(4, ({
    dataView,
    offset
  }) => dataView.setFloat32(offset, value, false)),
  d: () => Serializer.read(4, ({
    dataView,
    offset
  }) => dataView.getFloat32(offset, false))
});
export const $float64le = new Serializer({
  s: value => Serializer.write(8, ({
    dataView,
    offset
  }) => dataView.setFloat64(offset, value, true)),
  d: () => Serializer.read(8, ({
    dataView,
    offset
  }) => dataView.getFloat64(offset, true))
});
export const $float64be = new Serializer({
  s: value => Serializer.write(8, ({
    dataView,
    offset
  }) => dataView.setFloat64(offset, value, false)),
  d: () => Serializer.read(8, ({
    dataView,
    offset
  }) => dataView.getFloat64(offset, false))
});