export const BufferInfo = {
  create: (buffer, offset = 0) => ({
    buffer,
    dataView: new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength),
    offset
  })
};