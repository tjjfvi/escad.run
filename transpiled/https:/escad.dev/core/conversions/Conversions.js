// A is assignable to B, and B is assignable to C, but A is not assignable to C
export let TransitivityOverride;

(function (_TransitivityOverride) {})(TransitivityOverride || (TransitivityOverride = {}));
/* Tests */
// declare global {
//   namespace escad {
//     interface ConversionsObj {
//       stuff: (
//         | Conversion<ProductA, ProductB>
//         | Conversion<ProductB, ProductA>
//         | Conversion<ArrayProduct<ProductA>, ProductA>
//       ),
//     }
//   }
// }
// type Assert<T, U extends T> = U;
// interface ProductA extends LeafProduct {
//   a: 5,
// }
// interface ProductB extends LeafProduct {
//   b: 5,
// }
// interface ProductC extends LeafProduct {
//   c: 5,
// }
// type _ = [A, B, C, E, F, G, W<Product>, X__<Product>, X_<Product, Product>, X, Y, Y_<Product, Product>, Z, __]
// type __ = _;
// type A = Assert<ConvertibleTo<ArrayProduct<ProductA>>, ArrayProduct<ProductB>>
// // @ts-expect-error anti-axiom
// type B = Assert<ConvertibleTo<ArrayProduct<ProductA>>, ArrayProduct<ProductC>>
// type C = Assert<
//   ConvertibleTo<ArrayProduct<ProductA>>,
//   TupleProduct<[ProductA, TupleProduct<[ProductB, ProductA]>, ArrayProduct<ProductB>]>
// >
// // // @ts-expect-error anti-axiom
// // type D = Assert<ConvertibleTo<ArrayProduct<ProductA>>, TupleProduct<[]>>
// type E = Assert<ConvertibleTo<ProductA>, ArrayProduct<ConvertibleTo<ProductA>>>;
// type F = Assert<ConvertibleTo<ProductA>, TupleProduct<ConvertibleTo<ProductA>[]>>;
// type G = Assert<
//   ConvertibleTo<TupleProduct<[ProductC, ProductA]>>,
//   TupleProduct<[ProductC, TupleProduct<ConvertibleTo<ProductA>[]>]>
// >;
// // type A0 = Assert<A1, A2>
// // type A1 = ConvertibleTo<TupleProduct<[ProductC, ProductA]>>;
// // type A2 = TupleProduct<[ProductC, TupleProduct<ConvertibleTo<ProductA>[]>]>;
// // type A3 = UnionToTuple<
// //   NonNullable<A2> extends infer Y ? Y extends Y ? NonNullable<A1> extends infer X ? X extends X ?
// //     Y extends X ? never : [X, Y]
// //   : never : never : never : never
// // >[0]
// // type A4 = Assert<A3[0], A3[1]>
// // type A5 = keyof A3[1]["children"]
// // type A6 = Assert<ConvertibleTo<ProductA>, ConvertibleTo<ProductB>>;
// type W<A extends Product> = Assert<_ConvertibleTo<A>, _ConvertibleTo<ConvertibleTo<A>>>;
// type X__<A extends Product> = Assert<ConvertibleTo<A>, ConvertibleTo<ConvertibleTo<A>>>;
// type X_<B extends Product, A extends ConvertibleTo<B>> = Assert<ConvertibleTo<B>, ConvertibleTo<A>>
// type X = Assert<__Element__<ProductB>, __Element__<ProductA>>
// type Y = Assert<Elementish<ProductB>, Elementish<ProductA>>
// type Y_<B extends Product, A extends ConvertibleTo<B>> = Assert<Elementish<B>, Elementish<A>>
// type Z = Assert<__Element__<ProductB>, __Element__<TupleProduct<[ProductB, ProductA]>>>
// type UnionToTuple<T> = (
//   (
//       (
//           T extends any
//               ? (t: T) => T
//               : never
//       ) extends infer U
//           ? (U extends any
//               ? (u: U) => any
//               : never
//           ) extends (v: infer V) => any
//               ? V
//               : never
//           : never
//   ) extends (_: any) => infer W
//       ? [...UnionToTuple<Exclude<T, W>>, W]
//       : []
// );