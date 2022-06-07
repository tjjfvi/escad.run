export const registeredTypes = Object.create(null);
export function registerType(type, serializer) {
  if (type in registeredTypes) {
    throw new Error(`Duplicate serializer registration for type ${type}`);
  }

  registeredTypes[type] = serializer;
}