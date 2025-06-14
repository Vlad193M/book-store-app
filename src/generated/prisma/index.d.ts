/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Users
 *
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>;
/**
 * Model Books
 *
 */
export type Books = $Result.DefaultSelection<Prisma.$BooksPayload>;
/**
 * Model Authors
 *
 */
export type Authors = $Result.DefaultSelection<Prisma.$AuthorsPayload>;
/**
 * Model Categories
 *
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>;
/**
 * Model BookCategories
 *
 */
export type BookCategories =
  $Result.DefaultSelection<Prisma.$BookCategoriesPayload>;
/**
 * Model BookImages
 *
 */
export type BookImages = $Result.DefaultSelection<Prisma.$BookImagesPayload>;
/**
 * Model Inventories
 *
 */
export type Inventories = $Result.DefaultSelection<Prisma.$InventoriesPayload>;
/**
 * Model Carts
 *
 */
export type Carts = $Result.DefaultSelection<Prisma.$CartsPayload>;
/**
 * Model CartItems
 *
 */
export type CartItems = $Result.DefaultSelection<Prisma.$CartItemsPayload>;
/**
 * Model Reviews
 *
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>;
/**
 * Model Orders
 *
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>;
/**
 * Model OrderItems
 *
 */
export type OrderItems = $Result.DefaultSelection<Prisma.$OrderItemsPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    ADMIN: 'ADMIN';
    USER: 'USER';
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const OrderStatus: {
    PENDING: 'PENDING';
    SHIPPED: 'SHIPPED';
    DELIVERED: 'DELIVERED';
    CANCELED: 'CANCELED';
  };

  export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type OrderStatus = $Enums.OrderStatus;

export const OrderStatus: typeof $Enums.OrderStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **Books** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Books
   * const books = await prisma.books.findMany()
   * ```
   */
  get books(): Prisma.BooksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authors`: Exposes CRUD operations for the **Authors** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Authors
   * const authors = await prisma.authors.findMany()
   * ```
   */
  get authors(): Prisma.AuthorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookCategories`: Exposes CRUD operations for the **BookCategories** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BookCategories
   * const bookCategories = await prisma.bookCategories.findMany()
   * ```
   */
  get bookCategories(): Prisma.BookCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookImages`: Exposes CRUD operations for the **BookImages** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BookImages
   * const bookImages = await prisma.bookImages.findMany()
   * ```
   */
  get bookImages(): Prisma.BookImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventories`: Exposes CRUD operations for the **Inventories** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventories.findMany()
   * ```
   */
  get inventories(): Prisma.InventoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **Carts** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Carts
   * const carts = await prisma.carts.findMany()
   * ```
   */
  get carts(): Prisma.CartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItems`: Exposes CRUD operations for the **CartItems** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CartItems
   * const cartItems = await prisma.cartItems.findMany()
   * ```
   */
  get cartItems(): Prisma.CartItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.reviews.findMany()
   * ```
   */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Orders
   * const orders = await prisma.orders.findMany()
   * ```
   */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **OrderItems** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OrderItems
   * const orderItems = await prisma.orderItems.findMany()
   * ```
   */
  get orderItems(): Prisma.OrderItemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Users: 'Users';
    Books: 'Books';
    Authors: 'Authors';
    Categories: 'Categories';
    BookCategories: 'BookCategories';
    BookImages: 'BookImages';
    Inventories: 'Inventories';
    Carts: 'Carts';
    CartItems: 'CartItems';
    Reviews: 'Reviews';
    Orders: 'Orders';
    OrderItems: 'OrderItems';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'users'
        | 'books'
        | 'authors'
        | 'categories'
        | 'bookCategories'
        | 'bookImages'
        | 'inventories'
        | 'carts'
        | 'cartItems'
        | 'reviews'
        | 'orders'
        | 'orderItems';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>;
        fields: Prisma.UsersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[];
          };
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[];
          };
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[];
          };
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUsers>;
          };
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UsersGroupByOutputType>[];
          };
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>;
            result: $Utils.Optional<UsersCountAggregateOutputType> | number;
          };
        };
      };
      Books: {
        payload: Prisma.$BooksPayload<ExtArgs>;
        fields: Prisma.BooksFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BooksFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BooksFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>;
          };
          findFirst: {
            args: Prisma.BooksFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BooksFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>;
          };
          findMany: {
            args: Prisma.BooksFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[];
          };
          create: {
            args: Prisma.BooksCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>;
          };
          createMany: {
            args: Prisma.BooksCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BooksCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[];
          };
          delete: {
            args: Prisma.BooksDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>;
          };
          update: {
            args: Prisma.BooksUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>;
          };
          deleteMany: {
            args: Prisma.BooksDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BooksUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BooksUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[];
          };
          upsert: {
            args: Prisma.BooksUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>;
          };
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooks>;
          };
          groupBy: {
            args: Prisma.BooksGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BooksGroupByOutputType>[];
          };
          count: {
            args: Prisma.BooksCountArgs<ExtArgs>;
            result: $Utils.Optional<BooksCountAggregateOutputType> | number;
          };
        };
      };
      Authors: {
        payload: Prisma.$AuthorsPayload<ExtArgs>;
        fields: Prisma.AuthorsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AuthorsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AuthorsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>;
          };
          findFirst: {
            args: Prisma.AuthorsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AuthorsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>;
          };
          findMany: {
            args: Prisma.AuthorsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>[];
          };
          create: {
            args: Prisma.AuthorsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>;
          };
          createMany: {
            args: Prisma.AuthorsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AuthorsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>[];
          };
          delete: {
            args: Prisma.AuthorsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>;
          };
          update: {
            args: Prisma.AuthorsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>;
          };
          deleteMany: {
            args: Prisma.AuthorsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AuthorsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AuthorsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>[];
          };
          upsert: {
            args: Prisma.AuthorsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>;
          };
          aggregate: {
            args: Prisma.AuthorsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAuthors>;
          };
          groupBy: {
            args: Prisma.AuthorsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuthorsGroupByOutputType>[];
          };
          count: {
            args: Prisma.AuthorsCountArgs<ExtArgs>;
            result: $Utils.Optional<AuthorsCountAggregateOutputType> | number;
          };
        };
      };
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>;
        fields: Prisma.CategoriesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>;
          };
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>;
          };
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[];
          };
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>;
          };
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[];
          };
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>;
          };
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>;
          };
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[];
          };
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>;
          };
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategories>;
          };
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoriesGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CategoriesCountAggregateOutputType>
              | number;
          };
        };
      };
      BookCategories: {
        payload: Prisma.$BookCategoriesPayload<ExtArgs>;
        fields: Prisma.BookCategoriesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookCategoriesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookCategoriesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload>;
          };
          findFirst: {
            args: Prisma.BookCategoriesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookCategoriesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload>;
          };
          findMany: {
            args: Prisma.BookCategoriesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload>[];
          };
          create: {
            args: Prisma.BookCategoriesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload>;
          };
          createMany: {
            args: Prisma.BookCategoriesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookCategoriesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload>[];
          };
          delete: {
            args: Prisma.BookCategoriesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload>;
          };
          update: {
            args: Prisma.BookCategoriesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload>;
          };
          deleteMany: {
            args: Prisma.BookCategoriesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookCategoriesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookCategoriesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload>[];
          };
          upsert: {
            args: Prisma.BookCategoriesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoriesPayload>;
          };
          aggregate: {
            args: Prisma.BookCategoriesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBookCategories>;
          };
          groupBy: {
            args: Prisma.BookCategoriesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookCategoriesGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookCategoriesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<BookCategoriesCountAggregateOutputType>
              | number;
          };
        };
      };
      BookImages: {
        payload: Prisma.$BookImagesPayload<ExtArgs>;
        fields: Prisma.BookImagesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookImagesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookImagesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload>;
          };
          findFirst: {
            args: Prisma.BookImagesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookImagesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload>;
          };
          findMany: {
            args: Prisma.BookImagesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload>[];
          };
          create: {
            args: Prisma.BookImagesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload>;
          };
          createMany: {
            args: Prisma.BookImagesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookImagesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload>[];
          };
          delete: {
            args: Prisma.BookImagesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload>;
          };
          update: {
            args: Prisma.BookImagesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload>;
          };
          deleteMany: {
            args: Prisma.BookImagesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookImagesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookImagesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload>[];
          };
          upsert: {
            args: Prisma.BookImagesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookImagesPayload>;
          };
          aggregate: {
            args: Prisma.BookImagesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBookImages>;
          };
          groupBy: {
            args: Prisma.BookImagesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookImagesGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookImagesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<BookImagesCountAggregateOutputType>
              | number;
          };
        };
      };
      Inventories: {
        payload: Prisma.$InventoriesPayload<ExtArgs>;
        fields: Prisma.InventoriesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InventoriesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InventoriesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload>;
          };
          findFirst: {
            args: Prisma.InventoriesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InventoriesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload>;
          };
          findMany: {
            args: Prisma.InventoriesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload>[];
          };
          create: {
            args: Prisma.InventoriesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload>;
          };
          createMany: {
            args: Prisma.InventoriesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InventoriesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload>[];
          };
          delete: {
            args: Prisma.InventoriesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload>;
          };
          update: {
            args: Prisma.InventoriesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload>;
          };
          deleteMany: {
            args: Prisma.InventoriesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InventoriesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InventoriesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload>[];
          };
          upsert: {
            args: Prisma.InventoriesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoriesPayload>;
          };
          aggregate: {
            args: Prisma.InventoriesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInventories>;
          };
          groupBy: {
            args: Prisma.InventoriesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InventoriesGroupByOutputType>[];
          };
          count: {
            args: Prisma.InventoriesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<InventoriesCountAggregateOutputType>
              | number;
          };
        };
      };
      Carts: {
        payload: Prisma.$CartsPayload<ExtArgs>;
        fields: Prisma.CartsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CartsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CartsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>;
          };
          findFirst: {
            args: Prisma.CartsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CartsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>;
          };
          findMany: {
            args: Prisma.CartsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[];
          };
          create: {
            args: Prisma.CartsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>;
          };
          createMany: {
            args: Prisma.CartsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CartsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[];
          };
          delete: {
            args: Prisma.CartsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>;
          };
          update: {
            args: Prisma.CartsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>;
          };
          deleteMany: {
            args: Prisma.CartsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CartsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CartsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[];
          };
          upsert: {
            args: Prisma.CartsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>;
          };
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCarts>;
          };
          groupBy: {
            args: Prisma.CartsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CartsGroupByOutputType>[];
          };
          count: {
            args: Prisma.CartsCountArgs<ExtArgs>;
            result: $Utils.Optional<CartsCountAggregateOutputType> | number;
          };
        };
      };
      CartItems: {
        payload: Prisma.$CartItemsPayload<ExtArgs>;
        fields: Prisma.CartItemsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CartItemsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CartItemsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>;
          };
          findFirst: {
            args: Prisma.CartItemsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CartItemsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>;
          };
          findMany: {
            args: Prisma.CartItemsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[];
          };
          create: {
            args: Prisma.CartItemsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>;
          };
          createMany: {
            args: Prisma.CartItemsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CartItemsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[];
          };
          delete: {
            args: Prisma.CartItemsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>;
          };
          update: {
            args: Prisma.CartItemsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>;
          };
          deleteMany: {
            args: Prisma.CartItemsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CartItemsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CartItemsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[];
          };
          upsert: {
            args: Prisma.CartItemsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>;
          };
          aggregate: {
            args: Prisma.CartItemsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCartItems>;
          };
          groupBy: {
            args: Prisma.CartItemsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CartItemsGroupByOutputType>[];
          };
          count: {
            args: Prisma.CartItemsCountArgs<ExtArgs>;
            result: $Utils.Optional<CartItemsCountAggregateOutputType> | number;
          };
        };
      };
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>;
        fields: Prisma.ReviewsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>;
          };
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>;
          };
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[];
          };
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>;
          };
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[];
          };
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>;
          };
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>;
          };
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[];
          };
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>;
          };
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReviews>;
          };
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewsGroupByOutputType>[];
          };
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number;
          };
        };
      };
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>;
        fields: Prisma.OrdersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>;
          };
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>;
          };
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[];
          };
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>;
          };
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[];
          };
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>;
          };
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>;
          };
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[];
          };
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>;
          };
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrders>;
          };
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrdersGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>;
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number;
          };
        };
      };
      OrderItems: {
        payload: Prisma.$OrderItemsPayload<ExtArgs>;
        fields: Prisma.OrderItemsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrderItemsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrderItemsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>;
          };
          findFirst: {
            args: Prisma.OrderItemsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrderItemsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>;
          };
          findMany: {
            args: Prisma.OrderItemsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[];
          };
          create: {
            args: Prisma.OrderItemsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>;
          };
          createMany: {
            args: Prisma.OrderItemsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrderItemsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[];
          };
          delete: {
            args: Prisma.OrderItemsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>;
          };
          update: {
            args: Prisma.OrderItemsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>;
          };
          deleteMany: {
            args: Prisma.OrderItemsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrderItemsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrderItemsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[];
          };
          upsert: {
            args: Prisma.OrderItemsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>;
          };
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrderItems>;
          };
          groupBy: {
            args: Prisma.OrderItemsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderItemsGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrderItemsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrderItemsCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit;
    books?: BooksOmit;
    authors?: AuthorsOmit;
    categories?: CategoriesOmit;
    bookCategories?: BookCategoriesOmit;
    bookImages?: BookImagesOmit;
    inventories?: InventoriesOmit;
    carts?: CartsOmit;
    cartItems?: CartItemsOmit;
    reviews?: ReviewsOmit;
    orders?: OrdersOmit;
    orderItems?: OrderItemsOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    carts: number;
    reviews: number;
    orders: number;
  };

  export type UsersCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    carts?: boolean | UsersCountOutputTypeCountCartsArgs;
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs;
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs;
  };

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCartsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartsWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewsWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrdersWhereInput;
  };

  /**
   * Count Type BooksCountOutputType
   */

  export type BooksCountOutputType = {
    book_categories: number;
    book_images: number;
    reviews: number;
    cart_items: number;
    order_items: number;
  };

  export type BooksCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book_categories?: boolean | BooksCountOutputTypeCountBook_categoriesArgs;
    book_images?: boolean | BooksCountOutputTypeCountBook_imagesArgs;
    reviews?: boolean | BooksCountOutputTypeCountReviewsArgs;
    cart_items?: boolean | BooksCountOutputTypeCountCart_itemsArgs;
    order_items?: boolean | BooksCountOutputTypeCountOrder_itemsArgs;
  };

  // Custom InputTypes
  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BooksCountOutputType
     */
    select?: BooksCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountBook_categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookCategoriesWhereInput;
  };

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountBook_imagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookImagesWhereInput;
  };

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountReviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewsWhereInput;
  };

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountCart_itemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartItemsWhereInput;
  };

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountOrder_itemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderItemsWhereInput;
  };

  /**
   * Count Type AuthorsCountOutputType
   */

  export type AuthorsCountOutputType = {
    books: number;
  };

  export type AuthorsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    books?: boolean | AuthorsCountOutputTypeCountBooksArgs;
  };

  // Custom InputTypes
  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuthorsCountOutputType
     */
    select?: AuthorsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeCountBooksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BooksWhereInput;
  };

  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    children: number;
    book_categories: number;
  };

  export type CategoriesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    children?: boolean | CategoriesCountOutputTypeCountChildrenArgs;
    book_categories?:
      | boolean
      | CategoriesCountOutputTypeCountBook_categoriesArgs;
  };

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountChildrenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoriesWhereInput;
  };

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountBook_categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookCategoriesWhereInput;
  };

  /**
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cart_items: number;
  };

  export type CartsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs;
  };

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_itemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartItemsWhereInput;
  };

  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number;
  };

  export type OrdersCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs;
  };

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderItemsWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  export type UsersMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password_hash: string | null;
    role: $Enums.Role | null;
    created_at: Date | null;
  };

  export type UsersMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password_hash: string | null;
    role: $Enums.Role | null;
    created_at: Date | null;
  };

  export type UsersCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    password_hash: number;
    role: number;
    created_at: number;
    _all: number;
  };

  export type UsersMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password_hash?: true;
    role?: true;
    created_at?: true;
  };

  export type UsersMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password_hash?: true;
    role?: true;
    created_at?: true;
  };

  export type UsersCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password_hash?: true;
    role?: true;
    created_at?: true;
    _all?: true;
  };

  export type UsersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UsersMaxAggregateInputType;
  };

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>;
  };

  export type UsersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UsersWhereInput;
    orderBy?:
      | UsersOrderByWithAggregationInput
      | UsersOrderByWithAggregationInput[];
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum;
    having?: UsersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
  };

  export type UsersGroupByOutputType = {
    id: string;
    email: string;
    name: string;
    password_hash: string;
    role: $Enums.Role;
    created_at: Date;
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UsersGroupByOutputType, T['by']> & {
          [P in keyof T & keyof UsersGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>;
        }
      >
    >;

  export type UsersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password_hash?: boolean;
      role?: boolean;
      created_at?: boolean;
      carts?: boolean | Users$cartsArgs<ExtArgs>;
      reviews?: boolean | Users$reviewsArgs<ExtArgs>;
      orders?: boolean | Users$ordersArgs<ExtArgs>;
      _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['users']
  >;

  export type UsersSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password_hash?: boolean;
      role?: boolean;
      created_at?: boolean;
    },
    ExtArgs['result']['users']
  >;

  export type UsersSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password_hash?: boolean;
      role?: boolean;
      created_at?: boolean;
    },
    ExtArgs['result']['users']
  >;

  export type UsersSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password_hash?: boolean;
    role?: boolean;
    created_at?: boolean;
  };

  export type UsersOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'email' | 'name' | 'password_hash' | 'role' | 'created_at',
    ExtArgs['result']['users']
  >;
  export type UsersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    carts?: boolean | Users$cartsArgs<ExtArgs>;
    reviews?: boolean | Users$reviewsArgs<ExtArgs>;
    orders?: boolean | Users$ordersArgs<ExtArgs>;
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UsersIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UsersIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UsersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Users';
    objects: {
      carts: Prisma.$CartsPayload<ExtArgs>[];
      reviews: Prisma.$ReviewsPayload<ExtArgs>[];
      orders: Prisma.$OrdersPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        name: string;
        password_hash: string;
        role: $Enums.Role;
        created_at: Date;
      },
      ExtArgs['result']['users']
    >;
    composites: {};
  };

  type UsersGetPayload<
    S extends boolean | null | undefined | UsersDefaultArgs,
  > = $Result.GetResult<Prisma.$UsersPayload, S>;

  type UsersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
  };

  export interface UsersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Users'];
      meta: { name: 'Users' };
    };
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     */
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     */
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<
        Prisma.$UsersPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UsersAggregateArgs>(
      args: Subset<T, UsersAggregateArgs>,
    ): Prisma.PrismaPromise<GetUsersAggregateType<T>>;

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUsersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Users model
     */
    readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    carts<T extends Users$cartsArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$cartsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CartsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    reviews<T extends Users$reviewsArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$reviewsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReviewsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    orders<T extends Users$ordersArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$ordersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrdersPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<'Users', 'String'>;
    readonly email: FieldRef<'Users', 'String'>;
    readonly name: FieldRef<'Users', 'String'>;
    readonly password_hash: FieldRef<'Users', 'String'>;
    readonly role: FieldRef<'Users', 'Role'>;
    readonly created_at: FieldRef<'Users', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Users create
   */
  export type UsersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>;
  };

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Users update
   */
  export type UsersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>;
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput;
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>;
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>;
  };

  /**
   * Users delete
   */
  export type UsersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * Users.carts
   */
  export type Users$cartsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    where?: CartsWhereInput;
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[];
    cursor?: CartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[];
  };

  /**
   * Users.reviews
   */
  export type Users$reviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    where?: ReviewsWhereInput;
    orderBy?:
      | ReviewsOrderByWithRelationInput
      | ReviewsOrderByWithRelationInput[];
    cursor?: ReviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[];
  };

  /**
   * Users.orders
   */
  export type Users$ordersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    where?: OrdersWhereInput;
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[];
    cursor?: OrdersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[];
  };

  /**
   * Users without action
   */
  export type UsersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null;
  };

  /**
   * Model Books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null;
    _avg: BooksAvgAggregateOutputType | null;
    _sum: BooksSumAggregateOutputType | null;
    _min: BooksMinAggregateOutputType | null;
    _max: BooksMaxAggregateOutputType | null;
  };

  export type BooksAvgAggregateOutputType = {
    price: number | null;
    publication_year: number | null;
  };

  export type BooksSumAggregateOutputType = {
    price: number | null;
    publication_year: number | null;
  };

  export type BooksMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    author_id: string | null;
    price: number | null;
    description: string | null;
    publisher: string | null;
    publication_year: number | null;
  };

  export type BooksMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    author_id: string | null;
    price: number | null;
    description: string | null;
    publisher: string | null;
    publication_year: number | null;
  };

  export type BooksCountAggregateOutputType = {
    id: number;
    name: number;
    author_id: number;
    price: number;
    description: number;
    publisher: number;
    publication_year: number;
    _all: number;
  };

  export type BooksAvgAggregateInputType = {
    price?: true;
    publication_year?: true;
  };

  export type BooksSumAggregateInputType = {
    price?: true;
    publication_year?: true;
  };

  export type BooksMinAggregateInputType = {
    id?: true;
    name?: true;
    author_id?: true;
    price?: true;
    description?: true;
    publisher?: true;
    publication_year?: true;
  };

  export type BooksMaxAggregateInputType = {
    id?: true;
    name?: true;
    author_id?: true;
    price?: true;
    description?: true;
    publisher?: true;
    publication_year?: true;
  };

  export type BooksCountAggregateInputType = {
    id?: true;
    name?: true;
    author_id?: true;
    price?: true;
    description?: true;
    publisher?: true;
    publication_year?: true;
    _all?: true;
  };

  export type BooksAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Books to aggregate.
     */
    where?: BooksWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BooksWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Books
     **/
    _count?: true | BooksCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BooksAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BooksSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BooksMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BooksMaxAggregateInputType;
  };

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
    [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>;
  };

  export type BooksGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BooksWhereInput;
    orderBy?:
      | BooksOrderByWithAggregationInput
      | BooksOrderByWithAggregationInput[];
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum;
    having?: BooksScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BooksCountAggregateInputType | true;
    _avg?: BooksAvgAggregateInputType;
    _sum?: BooksSumAggregateInputType;
    _min?: BooksMinAggregateInputType;
    _max?: BooksMaxAggregateInputType;
  };

  export type BooksGroupByOutputType = {
    id: string;
    name: string;
    author_id: string;
    price: number;
    description: string | null;
    publisher: string | null;
    publication_year: number | null;
    _count: BooksCountAggregateOutputType | null;
    _avg: BooksAvgAggregateOutputType | null;
    _sum: BooksSumAggregateOutputType | null;
    _min: BooksMinAggregateOutputType | null;
    _max: BooksMaxAggregateOutputType | null;
  };

  type GetBooksGroupByPayload<T extends BooksGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BooksGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BooksGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>;
        }
      >
    >;

  export type BooksSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      author_id?: boolean;
      price?: boolean;
      description?: boolean;
      publisher?: boolean;
      publication_year?: boolean;
      author?: boolean | AuthorsDefaultArgs<ExtArgs>;
      book_categories?: boolean | Books$book_categoriesArgs<ExtArgs>;
      book_images?: boolean | Books$book_imagesArgs<ExtArgs>;
      inventories?: boolean | Books$inventoriesArgs<ExtArgs>;
      reviews?: boolean | Books$reviewsArgs<ExtArgs>;
      cart_items?: boolean | Books$cart_itemsArgs<ExtArgs>;
      order_items?: boolean | Books$order_itemsArgs<ExtArgs>;
      _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['books']
  >;

  export type BooksSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      author_id?: boolean;
      price?: boolean;
      description?: boolean;
      publisher?: boolean;
      publication_year?: boolean;
      author?: boolean | AuthorsDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['books']
  >;

  export type BooksSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      author_id?: boolean;
      price?: boolean;
      description?: boolean;
      publisher?: boolean;
      publication_year?: boolean;
      author?: boolean | AuthorsDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['books']
  >;

  export type BooksSelectScalar = {
    id?: boolean;
    name?: boolean;
    author_id?: boolean;
    price?: boolean;
    description?: boolean;
    publisher?: boolean;
    publication_year?: boolean;
  };

  export type BooksOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'author_id'
    | 'price'
    | 'description'
    | 'publisher'
    | 'publication_year',
    ExtArgs['result']['books']
  >;
  export type BooksInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>;
    book_categories?: boolean | Books$book_categoriesArgs<ExtArgs>;
    book_images?: boolean | Books$book_imagesArgs<ExtArgs>;
    inventories?: boolean | Books$inventoriesArgs<ExtArgs>;
    reviews?: boolean | Books$reviewsArgs<ExtArgs>;
    cart_items?: boolean | Books$cart_itemsArgs<ExtArgs>;
    order_items?: boolean | Books$order_itemsArgs<ExtArgs>;
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type BooksIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>;
  };
  export type BooksIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>;
  };

  export type $BooksPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Books';
    objects: {
      author: Prisma.$AuthorsPayload<ExtArgs>;
      book_categories: Prisma.$BookCategoriesPayload<ExtArgs>[];
      book_images: Prisma.$BookImagesPayload<ExtArgs>[];
      inventories: Prisma.$InventoriesPayload<ExtArgs> | null;
      reviews: Prisma.$ReviewsPayload<ExtArgs>[];
      cart_items: Prisma.$CartItemsPayload<ExtArgs>[];
      order_items: Prisma.$OrderItemsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        author_id: string;
        price: number;
        description: string | null;
        publisher: string | null;
        publication_year: number | null;
      },
      ExtArgs['result']['books']
    >;
    composites: {};
  };

  type BooksGetPayload<
    S extends boolean | null | undefined | BooksDefaultArgs,
  > = $Result.GetResult<Prisma.$BooksPayload, S>;

  type BooksCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<BooksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BooksCountAggregateInputType | true;
  };

  export interface BooksDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Books'];
      meta: { name: 'Books' };
    };
    /**
     * Find zero or one Books that matches the filter.
     * @param {BooksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BooksFindUniqueArgs>(
      args: SelectSubset<T, BooksFindUniqueArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Books that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BooksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BooksFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BooksFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BooksFindFirstArgs>(
      args?: SelectSubset<T, BooksFindFirstArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BooksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BooksFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     *
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BooksFindManyArgs>(
      args?: SelectSubset<T, BooksFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Books.
     * @param {BooksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     *
     */
    create<T extends BooksCreateArgs>(
      args: SelectSubset<T, BooksCreateArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Books.
     * @param {BooksCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BooksCreateManyArgs>(
      args?: SelectSubset<T, BooksCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BooksCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BooksCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BooksCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Books.
     * @param {BooksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     *
     */
    delete<T extends BooksDeleteArgs>(
      args: SelectSubset<T, BooksDeleteArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Books.
     * @param {BooksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BooksUpdateArgs>(
      args: SelectSubset<T, BooksUpdateArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Books.
     * @param {BooksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BooksDeleteManyArgs>(
      args?: SelectSubset<T, BooksDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BooksUpdateManyArgs>(
      args: SelectSubset<T, BooksUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BooksUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BooksUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BooksUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Books.
     * @param {BooksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
     */
    upsert<T extends BooksUpsertArgs>(
      args: SelectSubset<T, BooksUpsertArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      $Result.GetResult<
        Prisma.$BooksPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
     **/
    count<T extends BooksCountArgs>(
      args?: Subset<T, BooksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BooksAggregateArgs>(
      args: Subset<T, BooksAggregateArgs>,
    ): Prisma.PrismaPromise<GetBooksAggregateType<T>>;

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BooksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksGroupByArgs['orderBy'] }
        : { orderBy?: BooksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BooksGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetBooksGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Books model
     */
    readonly fields: BooksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BooksClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    author<T extends AuthorsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AuthorsDefaultArgs<ExtArgs>>,
    ): Prisma__AuthorsClient<
      | $Result.GetResult<
          Prisma.$AuthorsPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    book_categories<T extends Books$book_categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Books$book_categoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookCategoriesPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    book_images<T extends Books$book_imagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Books$book_imagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookImagesPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    inventories<T extends Books$inventoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Books$inventoriesArgs<ExtArgs>>,
    ): Prisma__InventoriesClient<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    reviews<T extends Books$reviewsArgs<ExtArgs> = {}>(
      args?: Subset<T, Books$reviewsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReviewsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    cart_items<T extends Books$cart_itemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Books$cart_itemsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CartItemsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    order_items<T extends Books$order_itemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Books$order_itemsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderItemsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Books model
   */
  interface BooksFieldRefs {
    readonly id: FieldRef<'Books', 'String'>;
    readonly name: FieldRef<'Books', 'String'>;
    readonly author_id: FieldRef<'Books', 'String'>;
    readonly price: FieldRef<'Books', 'Float'>;
    readonly description: FieldRef<'Books', 'String'>;
    readonly publisher: FieldRef<'Books', 'String'>;
    readonly publication_year: FieldRef<'Books', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Books findUnique
   */
  export type BooksFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput;
  };

  /**
   * Books findUniqueOrThrow
   */
  export type BooksFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput;
  };

  /**
   * Books findFirst
   */
  export type BooksFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[];
  };

  /**
   * Books findFirstOrThrow
   */
  export type BooksFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[];
  };

  /**
   * Books findMany
   */
  export type BooksFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Books.
     */
    cursor?: BooksWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[];
  };

  /**
   * Books create
   */
  export type BooksCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    /**
     * The data needed to create a Books.
     */
    data: XOR<BooksCreateInput, BooksUncheckedCreateInput>;
  };

  /**
   * Books createMany
   */
  export type BooksCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Books.
     */
    data: BooksCreateManyInput | BooksCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Books createManyAndReturn
   */
  export type BooksCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * The data used to create many Books.
     */
    data: BooksCreateManyInput | BooksCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Books update
   */
  export type BooksUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    /**
     * The data needed to update a Books.
     */
    data: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>;
    /**
     * Choose, which Books to update.
     */
    where: BooksWhereUniqueInput;
  };

  /**
   * Books updateMany
   */
  export type BooksUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Books.
     */
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>;
    /**
     * Filter which Books to update
     */
    where?: BooksWhereInput;
    /**
     * Limit how many Books to update.
     */
    limit?: number;
  };

  /**
   * Books updateManyAndReturn
   */
  export type BooksUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * The data used to update Books.
     */
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>;
    /**
     * Filter which Books to update
     */
    where?: BooksWhereInput;
    /**
     * Limit how many Books to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Books upsert
   */
  export type BooksUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    /**
     * The filter to search for the Books to update in case it exists.
     */
    where: BooksWhereUniqueInput;
    /**
     * In case the Books found by the `where` argument doesn't exist, create a new Books with this data.
     */
    create: XOR<BooksCreateInput, BooksUncheckedCreateInput>;
    /**
     * In case the Books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>;
  };

  /**
   * Books delete
   */
  export type BooksDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    /**
     * Filter which Books to delete.
     */
    where: BooksWhereUniqueInput;
  };

  /**
   * Books deleteMany
   */
  export type BooksDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Books to delete
     */
    where?: BooksWhereInput;
    /**
     * Limit how many Books to delete.
     */
    limit?: number;
  };

  /**
   * Books.book_categories
   */
  export type Books$book_categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    where?: BookCategoriesWhereInput;
    orderBy?:
      | BookCategoriesOrderByWithRelationInput
      | BookCategoriesOrderByWithRelationInput[];
    cursor?: BookCategoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookCategoriesScalarFieldEnum | BookCategoriesScalarFieldEnum[];
  };

  /**
   * Books.book_images
   */
  export type Books$book_imagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    where?: BookImagesWhereInput;
    orderBy?:
      | BookImagesOrderByWithRelationInput
      | BookImagesOrderByWithRelationInput[];
    cursor?: BookImagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookImagesScalarFieldEnum | BookImagesScalarFieldEnum[];
  };

  /**
   * Books.inventories
   */
  export type Books$inventoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    where?: InventoriesWhereInput;
  };

  /**
   * Books.reviews
   */
  export type Books$reviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    where?: ReviewsWhereInput;
    orderBy?:
      | ReviewsOrderByWithRelationInput
      | ReviewsOrderByWithRelationInput[];
    cursor?: ReviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[];
  };

  /**
   * Books.cart_items
   */
  export type Books$cart_itemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    where?: CartItemsWhereInput;
    orderBy?:
      | CartItemsOrderByWithRelationInput
      | CartItemsOrderByWithRelationInput[];
    cursor?: CartItemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[];
  };

  /**
   * Books.order_items
   */
  export type Books$order_itemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    where?: OrderItemsWhereInput;
    orderBy?:
      | OrderItemsOrderByWithRelationInput
      | OrderItemsOrderByWithRelationInput[];
    cursor?: OrderItemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[];
  };

  /**
   * Books without action
   */
  export type BooksDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
  };

  /**
   * Model Authors
   */

  export type AggregateAuthors = {
    _count: AuthorsCountAggregateOutputType | null;
    _min: AuthorsMinAggregateOutputType | null;
    _max: AuthorsMaxAggregateOutputType | null;
  };

  export type AuthorsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
  };

  export type AuthorsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
  };

  export type AuthorsCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    _all: number;
  };

  export type AuthorsMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
  };

  export type AuthorsMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
  };

  export type AuthorsCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    _all?: true;
  };

  export type AuthorsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Authors to aggregate.
     */
    where?: AuthorsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?:
      | AuthorsOrderByWithRelationInput
      | AuthorsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuthorsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Authors
     **/
    _count?: true | AuthorsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuthorsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuthorsMaxAggregateInputType;
  };

  export type GetAuthorsAggregateType<T extends AuthorsAggregateArgs> = {
    [P in keyof T & keyof AggregateAuthors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthors[P]>
      : GetScalarType<T[P], AggregateAuthors[P]>;
  };

  export type AuthorsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuthorsWhereInput;
    orderBy?:
      | AuthorsOrderByWithAggregationInput
      | AuthorsOrderByWithAggregationInput[];
    by: AuthorsScalarFieldEnum[] | AuthorsScalarFieldEnum;
    having?: AuthorsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthorsCountAggregateInputType | true;
    _min?: AuthorsMinAggregateInputType;
    _max?: AuthorsMaxAggregateInputType;
  };

  export type AuthorsGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    _count: AuthorsCountAggregateOutputType | null;
    _min: AuthorsMinAggregateOutputType | null;
    _max: AuthorsMaxAggregateOutputType | null;
  };

  type GetAuthorsGroupByPayload<T extends AuthorsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AuthorsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AuthorsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorsGroupByOutputType[P]>;
        }
      >
    >;

  export type AuthorsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      books?: boolean | Authors$booksArgs<ExtArgs>;
      _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['authors']
  >;

  export type AuthorsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
    },
    ExtArgs['result']['authors']
  >;

  export type AuthorsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
    },
    ExtArgs['result']['authors']
  >;

  export type AuthorsSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
  };

  export type AuthorsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'description',
    ExtArgs['result']['authors']
  >;
  export type AuthorsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    books?: boolean | Authors$booksArgs<ExtArgs>;
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AuthorsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type AuthorsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $AuthorsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Authors';
    objects: {
      books: Prisma.$BooksPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
      },
      ExtArgs['result']['authors']
    >;
    composites: {};
  };

  type AuthorsGetPayload<
    S extends boolean | null | undefined | AuthorsDefaultArgs,
  > = $Result.GetResult<Prisma.$AuthorsPayload, S>;

  type AuthorsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AuthorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuthorsCountAggregateInputType | true;
  };

  export interface AuthorsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Authors'];
      meta: { name: 'Authors' };
    };
    /**
     * Find zero or one Authors that matches the filter.
     * @param {AuthorsFindUniqueArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorsFindUniqueArgs>(
      args: SelectSubset<T, AuthorsFindUniqueArgs<ExtArgs>>,
    ): Prisma__AuthorsClient<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Authors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorsFindUniqueOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AuthorsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AuthorsClient<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsFindFirstArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorsFindFirstArgs>(
      args?: SelectSubset<T, AuthorsFindFirstArgs<ExtArgs>>,
    ): Prisma__AuthorsClient<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Authors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsFindFirstOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuthorsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AuthorsClient<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.authors.findMany()
     *
     * // Get first 10 Authors
     * const authors = await prisma.authors.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const authorsWithIdOnly = await prisma.authors.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuthorsFindManyArgs>(
      args?: SelectSubset<T, AuthorsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Authors.
     * @param {AuthorsCreateArgs} args - Arguments to create a Authors.
     * @example
     * // Create one Authors
     * const Authors = await prisma.authors.create({
     *   data: {
     *     // ... data to create a Authors
     *   }
     * })
     *
     */
    create<T extends AuthorsCreateArgs>(
      args: SelectSubset<T, AuthorsCreateArgs<ExtArgs>>,
    ): Prisma__AuthorsClient<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Authors.
     * @param {AuthorsCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuthorsCreateManyArgs>(
      args?: SelectSubset<T, AuthorsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorsCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuthorsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AuthorsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Authors.
     * @param {AuthorsDeleteArgs} args - Arguments to delete one Authors.
     * @example
     * // Delete one Authors
     * const Authors = await prisma.authors.delete({
     *   where: {
     *     // ... filter to delete one Authors
     *   }
     * })
     *
     */
    delete<T extends AuthorsDeleteArgs>(
      args: SelectSubset<T, AuthorsDeleteArgs<ExtArgs>>,
    ): Prisma__AuthorsClient<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Authors.
     * @param {AuthorsUpdateArgs} args - Arguments to update one Authors.
     * @example
     * // Update one Authors
     * const authors = await prisma.authors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuthorsUpdateArgs>(
      args: SelectSubset<T, AuthorsUpdateArgs<ExtArgs>>,
    ): Prisma__AuthorsClient<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Authors.
     * @param {AuthorsDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.authors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuthorsDeleteManyArgs>(
      args?: SelectSubset<T, AuthorsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuthorsUpdateManyArgs>(
      args: SelectSubset<T, AuthorsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorsUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AuthorsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AuthorsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Authors.
     * @param {AuthorsUpsertArgs} args - Arguments to update or create a Authors.
     * @example
     * // Update or create a Authors
     * const authors = await prisma.authors.upsert({
     *   create: {
     *     // ... data to create a Authors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authors we want to update
     *   }
     * })
     */
    upsert<T extends AuthorsUpsertArgs>(
      args: SelectSubset<T, AuthorsUpsertArgs<ExtArgs>>,
    ): Prisma__AuthorsClient<
      $Result.GetResult<
        Prisma.$AuthorsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.authors.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
     **/
    count<T extends AuthorsCountArgs>(
      args?: Subset<T, AuthorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AuthorsAggregateArgs>(
      args: Subset<T, AuthorsAggregateArgs>,
    ): Prisma.PrismaPromise<GetAuthorsAggregateType<T>>;

    /**
     * Group by Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AuthorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorsGroupByArgs['orderBy'] }
        : { orderBy?: AuthorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AuthorsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAuthorsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Authors model
     */
    readonly fields: AuthorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    books<T extends Authors$booksArgs<ExtArgs> = {}>(
      args?: Subset<T, Authors$booksArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BooksPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Authors model
   */
  interface AuthorsFieldRefs {
    readonly id: FieldRef<'Authors', 'String'>;
    readonly name: FieldRef<'Authors', 'String'>;
    readonly description: FieldRef<'Authors', 'String'>;
  }

  // Custom InputTypes
  /**
   * Authors findUnique
   */
  export type AuthorsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
    /**
     * Filter, which Authors to fetch.
     */
    where: AuthorsWhereUniqueInput;
  };

  /**
   * Authors findUniqueOrThrow
   */
  export type AuthorsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
    /**
     * Filter, which Authors to fetch.
     */
    where: AuthorsWhereUniqueInput;
  };

  /**
   * Authors findFirst
   */
  export type AuthorsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?:
      | AuthorsOrderByWithRelationInput
      | AuthorsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[];
  };

  /**
   * Authors findFirstOrThrow
   */
  export type AuthorsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?:
      | AuthorsOrderByWithRelationInput
      | AuthorsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[];
  };

  /**
   * Authors findMany
   */
  export type AuthorsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?:
      | AuthorsOrderByWithRelationInput
      | AuthorsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Authors.
     */
    cursor?: AuthorsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[];
  };

  /**
   * Authors create
   */
  export type AuthorsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Authors.
     */
    data: XOR<AuthorsCreateInput, AuthorsUncheckedCreateInput>;
  };

  /**
   * Authors createMany
   */
  export type AuthorsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorsCreateManyInput | AuthorsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Authors createManyAndReturn
   */
  export type AuthorsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * The data used to create many Authors.
     */
    data: AuthorsCreateManyInput | AuthorsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Authors update
   */
  export type AuthorsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Authors.
     */
    data: XOR<AuthorsUpdateInput, AuthorsUncheckedUpdateInput>;
    /**
     * Choose, which Authors to update.
     */
    where: AuthorsWhereUniqueInput;
  };

  /**
   * Authors updateMany
   */
  export type AuthorsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorsUpdateManyMutationInput, AuthorsUncheckedUpdateManyInput>;
    /**
     * Filter which Authors to update
     */
    where?: AuthorsWhereInput;
    /**
     * Limit how many Authors to update.
     */
    limit?: number;
  };

  /**
   * Authors updateManyAndReturn
   */
  export type AuthorsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorsUpdateManyMutationInput, AuthorsUncheckedUpdateManyInput>;
    /**
     * Filter which Authors to update
     */
    where?: AuthorsWhereInput;
    /**
     * Limit how many Authors to update.
     */
    limit?: number;
  };

  /**
   * Authors upsert
   */
  export type AuthorsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Authors to update in case it exists.
     */
    where: AuthorsWhereUniqueInput;
    /**
     * In case the Authors found by the `where` argument doesn't exist, create a new Authors with this data.
     */
    create: XOR<AuthorsCreateInput, AuthorsUncheckedCreateInput>;
    /**
     * In case the Authors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorsUpdateInput, AuthorsUncheckedUpdateInput>;
  };

  /**
   * Authors delete
   */
  export type AuthorsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
    /**
     * Filter which Authors to delete.
     */
    where: AuthorsWhereUniqueInput;
  };

  /**
   * Authors deleteMany
   */
  export type AuthorsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorsWhereInput;
    /**
     * Limit how many Authors to delete.
     */
    limit?: number;
  };

  /**
   * Authors.books
   */
  export type Authors$booksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null;
    where?: BooksWhereInput;
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[];
    cursor?: BooksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[];
  };

  /**
   * Authors without action
   */
  export type AuthorsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null;
  };

  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
  };

  export type CategoriesMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    parent_id: string | null;
    description: string | null;
  };

  export type CategoriesMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    parent_id: string | null;
    description: string | null;
  };

  export type CategoriesCountAggregateOutputType = {
    id: number;
    name: number;
    parent_id: number;
    description: number;
    _all: number;
  };

  export type CategoriesMinAggregateInputType = {
    id?: true;
    name?: true;
    parent_id?: true;
    description?: true;
  };

  export type CategoriesMaxAggregateInputType = {
    id?: true;
    name?: true;
    parent_id?: true;
    description?: true;
  };

  export type CategoriesCountAggregateInputType = {
    id?: true;
    name?: true;
    parent_id?: true;
    description?: true;
    _all?: true;
  };

  export type CategoriesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoriesOrderByWithRelationInput
      | CategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoriesMaxAggregateInputType;
  };

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>;
  };

  export type CategoriesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoriesWhereInput;
    orderBy?:
      | CategoriesOrderByWithAggregationInput
      | CategoriesOrderByWithAggregationInput[];
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum;
    having?: CategoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriesCountAggregateInputType | true;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
  };

  export type CategoriesGroupByOutputType = {
    id: string;
    name: string;
    parent_id: string | null;
    description: string | null;
    _count: CategoriesCountAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
  };

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoriesGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CategoriesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>;
        }
      >
    >;

  export type CategoriesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      parent_id?: boolean;
      description?: boolean;
      parent?: boolean | Categories$parentArgs<ExtArgs>;
      children?: boolean | Categories$childrenArgs<ExtArgs>;
      book_categories?: boolean | Categories$book_categoriesArgs<ExtArgs>;
      _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['categories']
  >;

  export type CategoriesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      parent_id?: boolean;
      description?: boolean;
      parent?: boolean | Categories$parentArgs<ExtArgs>;
    },
    ExtArgs['result']['categories']
  >;

  export type CategoriesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      parent_id?: boolean;
      description?: boolean;
      parent?: boolean | Categories$parentArgs<ExtArgs>;
    },
    ExtArgs['result']['categories']
  >;

  export type CategoriesSelectScalar = {
    id?: boolean;
    name?: boolean;
    parent_id?: boolean;
    description?: boolean;
  };

  export type CategoriesOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'parent_id' | 'description',
    ExtArgs['result']['categories']
  >;
  export type CategoriesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    parent?: boolean | Categories$parentArgs<ExtArgs>;
    children?: boolean | Categories$childrenArgs<ExtArgs>;
    book_categories?: boolean | Categories$book_categoriesArgs<ExtArgs>;
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoriesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    parent?: boolean | Categories$parentArgs<ExtArgs>;
  };
  export type CategoriesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    parent?: boolean | Categories$parentArgs<ExtArgs>;
  };

  export type $CategoriesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Categories';
    objects: {
      parent: Prisma.$CategoriesPayload<ExtArgs> | null;
      children: Prisma.$CategoriesPayload<ExtArgs>[];
      book_categories: Prisma.$BookCategoriesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        parent_id: string | null;
        description: string | null;
      },
      ExtArgs['result']['categories']
    >;
    composites: {};
  };

  type CategoriesGetPayload<
    S extends boolean | null | undefined | CategoriesDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoriesPayload, S>;

  type CategoriesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CategoriesFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CategoriesCountAggregateInputType | true;
  };

  export interface CategoriesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Categories'];
      meta: { name: 'Categories' };
    };
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(
      args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(
      args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoriesFindManyArgs>(
      args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     *
     */
    create<T extends CategoriesCreateArgs>(
      args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoriesCreateManyArgs>(
      args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     *
     */
    delete<T extends CategoriesDeleteArgs>(
      args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoriesUpdateArgs>(
      args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(
      args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoriesUpdateManyArgs>(
      args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(
      args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoriesAggregateArgs>(
      args: Subset<T, CategoriesAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>;

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoriesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Categories model
     */
    readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    parent<T extends Categories$parentArgs<ExtArgs> = {}>(
      args?: Subset<T, Categories$parentArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      $Result.GetResult<
        Prisma.$CategoriesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    children<T extends Categories$childrenArgs<ExtArgs> = {}>(
      args?: Subset<T, Categories$childrenArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CategoriesPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    book_categories<T extends Categories$book_categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Categories$book_categoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookCategoriesPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<'Categories', 'String'>;
    readonly name: FieldRef<'Categories', 'String'>;
    readonly parent_id: FieldRef<'Categories', 'String'>;
    readonly description: FieldRef<'Categories', 'String'>;
  }

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput;
  };

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput;
  };

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoriesOrderByWithRelationInput
      | CategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoriesOrderByWithRelationInput
      | CategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoriesOrderByWithRelationInput
      | CategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>;
  };

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>;
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput;
  };

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoriesUpdateManyMutationInput,
      CategoriesUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoriesUpdateManyMutationInput,
      CategoriesUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput;
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>;
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>;
  };

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput;
  };

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Categories.parent
   */
  export type Categories$parentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    where?: CategoriesWhereInput;
  };

  /**
   * Categories.children
   */
  export type Categories$childrenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
    where?: CategoriesWhereInput;
    orderBy?:
      | CategoriesOrderByWithRelationInput
      | CategoriesOrderByWithRelationInput[];
    cursor?: CategoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * Categories.book_categories
   */
  export type Categories$book_categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    where?: BookCategoriesWhereInput;
    orderBy?:
      | BookCategoriesOrderByWithRelationInput
      | BookCategoriesOrderByWithRelationInput[];
    cursor?: BookCategoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookCategoriesScalarFieldEnum | BookCategoriesScalarFieldEnum[];
  };

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null;
  };

  /**
   * Model BookCategories
   */

  export type AggregateBookCategories = {
    _count: BookCategoriesCountAggregateOutputType | null;
    _min: BookCategoriesMinAggregateOutputType | null;
    _max: BookCategoriesMaxAggregateOutputType | null;
  };

  export type BookCategoriesMinAggregateOutputType = {
    book_id: string | null;
    category_id: string | null;
  };

  export type BookCategoriesMaxAggregateOutputType = {
    book_id: string | null;
    category_id: string | null;
  };

  export type BookCategoriesCountAggregateOutputType = {
    book_id: number;
    category_id: number;
    _all: number;
  };

  export type BookCategoriesMinAggregateInputType = {
    book_id?: true;
    category_id?: true;
  };

  export type BookCategoriesMaxAggregateInputType = {
    book_id?: true;
    category_id?: true;
  };

  export type BookCategoriesCountAggregateInputType = {
    book_id?: true;
    category_id?: true;
    _all?: true;
  };

  export type BookCategoriesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookCategories to aggregate.
     */
    where?: BookCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookCategories to fetch.
     */
    orderBy?:
      | BookCategoriesOrderByWithRelationInput
      | BookCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BookCategories
     **/
    _count?: true | BookCategoriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookCategoriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookCategoriesMaxAggregateInputType;
  };

  export type GetBookCategoriesAggregateType<
    T extends BookCategoriesAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateBookCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookCategories[P]>
      : GetScalarType<T[P], AggregateBookCategories[P]>;
  };

  export type BookCategoriesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookCategoriesWhereInput;
    orderBy?:
      | BookCategoriesOrderByWithAggregationInput
      | BookCategoriesOrderByWithAggregationInput[];
    by: BookCategoriesScalarFieldEnum[] | BookCategoriesScalarFieldEnum;
    having?: BookCategoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCategoriesCountAggregateInputType | true;
    _min?: BookCategoriesMinAggregateInputType;
    _max?: BookCategoriesMaxAggregateInputType;
  };

  export type BookCategoriesGroupByOutputType = {
    book_id: string;
    category_id: string;
    _count: BookCategoriesCountAggregateOutputType | null;
    _min: BookCategoriesMinAggregateOutputType | null;
    _max: BookCategoriesMaxAggregateOutputType | null;
  };

  type GetBookCategoriesGroupByPayload<T extends BookCategoriesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookCategoriesGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof BookCategoriesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], BookCategoriesGroupByOutputType[P]>;
        }
      >
    >;

  export type BookCategoriesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      book_id?: boolean;
      category_id?: boolean;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
      category?: boolean | CategoriesDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookCategories']
  >;

  export type BookCategoriesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      book_id?: boolean;
      category_id?: boolean;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
      category?: boolean | CategoriesDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookCategories']
  >;

  export type BookCategoriesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      book_id?: boolean;
      category_id?: boolean;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
      category?: boolean | CategoriesDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookCategories']
  >;

  export type BookCategoriesSelectScalar = {
    book_id?: boolean;
    category_id?: boolean;
  };

  export type BookCategoriesOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'book_id' | 'category_id',
    ExtArgs['result']['bookCategories']
  >;
  export type BookCategoriesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BooksDefaultArgs<ExtArgs>;
    category?: boolean | CategoriesDefaultArgs<ExtArgs>;
  };
  export type BookCategoriesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BooksDefaultArgs<ExtArgs>;
    category?: boolean | CategoriesDefaultArgs<ExtArgs>;
  };
  export type BookCategoriesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BooksDefaultArgs<ExtArgs>;
    category?: boolean | CategoriesDefaultArgs<ExtArgs>;
  };

  export type $BookCategoriesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'BookCategories';
    objects: {
      book: Prisma.$BooksPayload<ExtArgs>;
      category: Prisma.$CategoriesPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        book_id: string;
        category_id: string;
      },
      ExtArgs['result']['bookCategories']
    >;
    composites: {};
  };

  type BookCategoriesGetPayload<
    S extends boolean | null | undefined | BookCategoriesDefaultArgs,
  > = $Result.GetResult<Prisma.$BookCategoriesPayload, S>;

  type BookCategoriesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    BookCategoriesFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: BookCategoriesCountAggregateInputType | true;
  };

  export interface BookCategoriesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['BookCategories'];
      meta: { name: 'BookCategories' };
    };
    /**
     * Find zero or one BookCategories that matches the filter.
     * @param {BookCategoriesFindUniqueArgs} args - Arguments to find a BookCategories
     * @example
     * // Get one BookCategories
     * const bookCategories = await prisma.bookCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookCategoriesFindUniqueArgs>(
      args: SelectSubset<T, BookCategoriesFindUniqueArgs<ExtArgs>>,
    ): Prisma__BookCategoriesClient<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one BookCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookCategoriesFindUniqueOrThrowArgs} args - Arguments to find a BookCategories
     * @example
     * // Get one BookCategories
     * const bookCategories = await prisma.bookCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookCategoriesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookCategoriesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BookCategoriesClient<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoriesFindFirstArgs} args - Arguments to find a BookCategories
     * @example
     * // Get one BookCategories
     * const bookCategories = await prisma.bookCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookCategoriesFindFirstArgs>(
      args?: SelectSubset<T, BookCategoriesFindFirstArgs<ExtArgs>>,
    ): Prisma__BookCategoriesClient<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoriesFindFirstOrThrowArgs} args - Arguments to find a BookCategories
     * @example
     * // Get one BookCategories
     * const bookCategories = await prisma.bookCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookCategoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookCategoriesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BookCategoriesClient<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more BookCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookCategories
     * const bookCategories = await prisma.bookCategories.findMany()
     *
     * // Get first 10 BookCategories
     * const bookCategories = await prisma.bookCategories.findMany({ take: 10 })
     *
     * // Only select the `book_id`
     * const bookCategoriesWithBook_idOnly = await prisma.bookCategories.findMany({ select: { book_id: true } })
     *
     */
    findMany<T extends BookCategoriesFindManyArgs>(
      args?: SelectSubset<T, BookCategoriesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a BookCategories.
     * @param {BookCategoriesCreateArgs} args - Arguments to create a BookCategories.
     * @example
     * // Create one BookCategories
     * const BookCategories = await prisma.bookCategories.create({
     *   data: {
     *     // ... data to create a BookCategories
     *   }
     * })
     *
     */
    create<T extends BookCategoriesCreateArgs>(
      args: SelectSubset<T, BookCategoriesCreateArgs<ExtArgs>>,
    ): Prisma__BookCategoriesClient<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many BookCategories.
     * @param {BookCategoriesCreateManyArgs} args - Arguments to create many BookCategories.
     * @example
     * // Create many BookCategories
     * const bookCategories = await prisma.bookCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookCategoriesCreateManyArgs>(
      args?: SelectSubset<T, BookCategoriesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many BookCategories and returns the data saved in the database.
     * @param {BookCategoriesCreateManyAndReturnArgs} args - Arguments to create many BookCategories.
     * @example
     * // Create many BookCategories
     * const bookCategories = await prisma.bookCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BookCategories and only return the `book_id`
     * const bookCategoriesWithBook_idOnly = await prisma.bookCategories.createManyAndReturn({
     *   select: { book_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookCategoriesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookCategoriesCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a BookCategories.
     * @param {BookCategoriesDeleteArgs} args - Arguments to delete one BookCategories.
     * @example
     * // Delete one BookCategories
     * const BookCategories = await prisma.bookCategories.delete({
     *   where: {
     *     // ... filter to delete one BookCategories
     *   }
     * })
     *
     */
    delete<T extends BookCategoriesDeleteArgs>(
      args: SelectSubset<T, BookCategoriesDeleteArgs<ExtArgs>>,
    ): Prisma__BookCategoriesClient<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one BookCategories.
     * @param {BookCategoriesUpdateArgs} args - Arguments to update one BookCategories.
     * @example
     * // Update one BookCategories
     * const bookCategories = await prisma.bookCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookCategoriesUpdateArgs>(
      args: SelectSubset<T, BookCategoriesUpdateArgs<ExtArgs>>,
    ): Prisma__BookCategoriesClient<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more BookCategories.
     * @param {BookCategoriesDeleteManyArgs} args - Arguments to filter BookCategories to delete.
     * @example
     * // Delete a few BookCategories
     * const { count } = await prisma.bookCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookCategoriesDeleteManyArgs>(
      args?: SelectSubset<T, BookCategoriesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookCategories
     * const bookCategories = await prisma.bookCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookCategoriesUpdateManyArgs>(
      args: SelectSubset<T, BookCategoriesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookCategories and returns the data updated in the database.
     * @param {BookCategoriesUpdateManyAndReturnArgs} args - Arguments to update many BookCategories.
     * @example
     * // Update many BookCategories
     * const bookCategories = await prisma.bookCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BookCategories and only return the `book_id`
     * const bookCategoriesWithBook_idOnly = await prisma.bookCategories.updateManyAndReturn({
     *   select: { book_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BookCategoriesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookCategoriesUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one BookCategories.
     * @param {BookCategoriesUpsertArgs} args - Arguments to update or create a BookCategories.
     * @example
     * // Update or create a BookCategories
     * const bookCategories = await prisma.bookCategories.upsert({
     *   create: {
     *     // ... data to create a BookCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookCategories we want to update
     *   }
     * })
     */
    upsert<T extends BookCategoriesUpsertArgs>(
      args: SelectSubset<T, BookCategoriesUpsertArgs<ExtArgs>>,
    ): Prisma__BookCategoriesClient<
      $Result.GetResult<
        Prisma.$BookCategoriesPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoriesCountArgs} args - Arguments to filter BookCategories to count.
     * @example
     * // Count the number of BookCategories
     * const count = await prisma.bookCategories.count({
     *   where: {
     *     // ... the filter for the BookCategories we want to count
     *   }
     * })
     **/
    count<T extends BookCategoriesCountArgs>(
      args?: Subset<T, BookCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCategoriesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookCategoriesAggregateArgs>(
      args: Subset<T, BookCategoriesAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookCategoriesAggregateType<T>>;

    /**
     * Group by BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BookCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: BookCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BookCategoriesGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetBookCategoriesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BookCategories model
     */
    readonly fields: BookCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookCategoriesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BooksDefaultArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      | $Result.GetResult<
          Prisma.$BooksPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>,
    ): Prisma__CategoriesClient<
      | $Result.GetResult<
          Prisma.$CategoriesPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the BookCategories model
   */
  interface BookCategoriesFieldRefs {
    readonly book_id: FieldRef<'BookCategories', 'String'>;
    readonly category_id: FieldRef<'BookCategories', 'String'>;
  }

  // Custom InputTypes
  /**
   * BookCategories findUnique
   */
  export type BookCategoriesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategories to fetch.
     */
    where: BookCategoriesWhereUniqueInput;
  };

  /**
   * BookCategories findUniqueOrThrow
   */
  export type BookCategoriesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategories to fetch.
     */
    where: BookCategoriesWhereUniqueInput;
  };

  /**
   * BookCategories findFirst
   */
  export type BookCategoriesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategories to fetch.
     */
    where?: BookCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookCategories to fetch.
     */
    orderBy?:
      | BookCategoriesOrderByWithRelationInput
      | BookCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookCategories.
     */
    cursor?: BookCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookCategories.
     */
    distinct?: BookCategoriesScalarFieldEnum | BookCategoriesScalarFieldEnum[];
  };

  /**
   * BookCategories findFirstOrThrow
   */
  export type BookCategoriesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategories to fetch.
     */
    where?: BookCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookCategories to fetch.
     */
    orderBy?:
      | BookCategoriesOrderByWithRelationInput
      | BookCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookCategories.
     */
    cursor?: BookCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookCategories.
     */
    distinct?: BookCategoriesScalarFieldEnum | BookCategoriesScalarFieldEnum[];
  };

  /**
   * BookCategories findMany
   */
  export type BookCategoriesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategories to fetch.
     */
    where?: BookCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookCategories to fetch.
     */
    orderBy?:
      | BookCategoriesOrderByWithRelationInput
      | BookCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BookCategories.
     */
    cursor?: BookCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookCategories.
     */
    skip?: number;
    distinct?: BookCategoriesScalarFieldEnum | BookCategoriesScalarFieldEnum[];
  };

  /**
   * BookCategories create
   */
  export type BookCategoriesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    /**
     * The data needed to create a BookCategories.
     */
    data: XOR<BookCategoriesCreateInput, BookCategoriesUncheckedCreateInput>;
  };

  /**
   * BookCategories createMany
   */
  export type BookCategoriesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many BookCategories.
     */
    data: BookCategoriesCreateManyInput | BookCategoriesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * BookCategories createManyAndReturn
   */
  export type BookCategoriesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * The data used to create many BookCategories.
     */
    data: BookCategoriesCreateManyInput | BookCategoriesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookCategories update
   */
  export type BookCategoriesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    /**
     * The data needed to update a BookCategories.
     */
    data: XOR<BookCategoriesUpdateInput, BookCategoriesUncheckedUpdateInput>;
    /**
     * Choose, which BookCategories to update.
     */
    where: BookCategoriesWhereUniqueInput;
  };

  /**
   * BookCategories updateMany
   */
  export type BookCategoriesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update BookCategories.
     */
    data: XOR<
      BookCategoriesUpdateManyMutationInput,
      BookCategoriesUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookCategories to update
     */
    where?: BookCategoriesWhereInput;
    /**
     * Limit how many BookCategories to update.
     */
    limit?: number;
  };

  /**
   * BookCategories updateManyAndReturn
   */
  export type BookCategoriesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * The data used to update BookCategories.
     */
    data: XOR<
      BookCategoriesUpdateManyMutationInput,
      BookCategoriesUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookCategories to update
     */
    where?: BookCategoriesWhereInput;
    /**
     * Limit how many BookCategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookCategories upsert
   */
  export type BookCategoriesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    /**
     * The filter to search for the BookCategories to update in case it exists.
     */
    where: BookCategoriesWhereUniqueInput;
    /**
     * In case the BookCategories found by the `where` argument doesn't exist, create a new BookCategories with this data.
     */
    create: XOR<BookCategoriesCreateInput, BookCategoriesUncheckedCreateInput>;
    /**
     * In case the BookCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookCategoriesUpdateInput, BookCategoriesUncheckedUpdateInput>;
  };

  /**
   * BookCategories delete
   */
  export type BookCategoriesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
    /**
     * Filter which BookCategories to delete.
     */
    where: BookCategoriesWhereUniqueInput;
  };

  /**
   * BookCategories deleteMany
   */
  export type BookCategoriesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookCategories to delete
     */
    where?: BookCategoriesWhereInput;
    /**
     * Limit how many BookCategories to delete.
     */
    limit?: number;
  };

  /**
   * BookCategories without action
   */
  export type BookCategoriesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategories
     */
    select?: BookCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategories
     */
    omit?: BookCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoriesInclude<ExtArgs> | null;
  };

  /**
   * Model BookImages
   */

  export type AggregateBookImages = {
    _count: BookImagesCountAggregateOutputType | null;
    _min: BookImagesMinAggregateOutputType | null;
    _max: BookImagesMaxAggregateOutputType | null;
  };

  export type BookImagesMinAggregateOutputType = {
    id: string | null;
    book_id: string | null;
    image_url: string | null;
    is_primary: boolean | null;
  };

  export type BookImagesMaxAggregateOutputType = {
    id: string | null;
    book_id: string | null;
    image_url: string | null;
    is_primary: boolean | null;
  };

  export type BookImagesCountAggregateOutputType = {
    id: number;
    book_id: number;
    image_url: number;
    is_primary: number;
    _all: number;
  };

  export type BookImagesMinAggregateInputType = {
    id?: true;
    book_id?: true;
    image_url?: true;
    is_primary?: true;
  };

  export type BookImagesMaxAggregateInputType = {
    id?: true;
    book_id?: true;
    image_url?: true;
    is_primary?: true;
  };

  export type BookImagesCountAggregateInputType = {
    id?: true;
    book_id?: true;
    image_url?: true;
    is_primary?: true;
    _all?: true;
  };

  export type BookImagesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookImages to aggregate.
     */
    where?: BookImagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookImages to fetch.
     */
    orderBy?:
      | BookImagesOrderByWithRelationInput
      | BookImagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookImagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BookImages
     **/
    _count?: true | BookImagesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookImagesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookImagesMaxAggregateInputType;
  };

  export type GetBookImagesAggregateType<T extends BookImagesAggregateArgs> = {
    [P in keyof T & keyof AggregateBookImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookImages[P]>
      : GetScalarType<T[P], AggregateBookImages[P]>;
  };

  export type BookImagesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookImagesWhereInput;
    orderBy?:
      | BookImagesOrderByWithAggregationInput
      | BookImagesOrderByWithAggregationInput[];
    by: BookImagesScalarFieldEnum[] | BookImagesScalarFieldEnum;
    having?: BookImagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookImagesCountAggregateInputType | true;
    _min?: BookImagesMinAggregateInputType;
    _max?: BookImagesMaxAggregateInputType;
  };

  export type BookImagesGroupByOutputType = {
    id: string;
    book_id: string;
    image_url: string;
    is_primary: boolean;
    _count: BookImagesCountAggregateOutputType | null;
    _min: BookImagesMinAggregateOutputType | null;
    _max: BookImagesMaxAggregateOutputType | null;
  };

  type GetBookImagesGroupByPayload<T extends BookImagesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookImagesGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BookImagesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookImagesGroupByOutputType[P]>
            : GetScalarType<T[P], BookImagesGroupByOutputType[P]>;
        }
      >
    >;

  export type BookImagesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      book_id?: boolean;
      image_url?: boolean;
      is_primary?: boolean;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookImages']
  >;

  export type BookImagesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      book_id?: boolean;
      image_url?: boolean;
      is_primary?: boolean;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookImages']
  >;

  export type BookImagesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      book_id?: boolean;
      image_url?: boolean;
      is_primary?: boolean;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookImages']
  >;

  export type BookImagesSelectScalar = {
    id?: boolean;
    book_id?: boolean;
    image_url?: boolean;
    is_primary?: boolean;
  };

  export type BookImagesOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'book_id' | 'image_url' | 'is_primary',
    ExtArgs['result']['bookImages']
  >;
  export type BookImagesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type BookImagesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type BookImagesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };

  export type $BookImagesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'BookImages';
    objects: {
      book: Prisma.$BooksPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        book_id: string;
        image_url: string;
        is_primary: boolean;
      },
      ExtArgs['result']['bookImages']
    >;
    composites: {};
  };

  type BookImagesGetPayload<
    S extends boolean | null | undefined | BookImagesDefaultArgs,
  > = $Result.GetResult<Prisma.$BookImagesPayload, S>;

  type BookImagesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    BookImagesFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: BookImagesCountAggregateInputType | true;
  };

  export interface BookImagesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['BookImages'];
      meta: { name: 'BookImages' };
    };
    /**
     * Find zero or one BookImages that matches the filter.
     * @param {BookImagesFindUniqueArgs} args - Arguments to find a BookImages
     * @example
     * // Get one BookImages
     * const bookImages = await prisma.bookImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookImagesFindUniqueArgs>(
      args: SelectSubset<T, BookImagesFindUniqueArgs<ExtArgs>>,
    ): Prisma__BookImagesClient<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one BookImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookImagesFindUniqueOrThrowArgs} args - Arguments to find a BookImages
     * @example
     * // Get one BookImages
     * const bookImages = await prisma.bookImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookImagesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookImagesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BookImagesClient<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImagesFindFirstArgs} args - Arguments to find a BookImages
     * @example
     * // Get one BookImages
     * const bookImages = await prisma.bookImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookImagesFindFirstArgs>(
      args?: SelectSubset<T, BookImagesFindFirstArgs<ExtArgs>>,
    ): Prisma__BookImagesClient<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImagesFindFirstOrThrowArgs} args - Arguments to find a BookImages
     * @example
     * // Get one BookImages
     * const bookImages = await prisma.bookImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookImagesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookImagesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BookImagesClient<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more BookImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookImages
     * const bookImages = await prisma.bookImages.findMany()
     *
     * // Get first 10 BookImages
     * const bookImages = await prisma.bookImages.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookImagesWithIdOnly = await prisma.bookImages.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BookImagesFindManyArgs>(
      args?: SelectSubset<T, BookImagesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a BookImages.
     * @param {BookImagesCreateArgs} args - Arguments to create a BookImages.
     * @example
     * // Create one BookImages
     * const BookImages = await prisma.bookImages.create({
     *   data: {
     *     // ... data to create a BookImages
     *   }
     * })
     *
     */
    create<T extends BookImagesCreateArgs>(
      args: SelectSubset<T, BookImagesCreateArgs<ExtArgs>>,
    ): Prisma__BookImagesClient<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many BookImages.
     * @param {BookImagesCreateManyArgs} args - Arguments to create many BookImages.
     * @example
     * // Create many BookImages
     * const bookImages = await prisma.bookImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookImagesCreateManyArgs>(
      args?: SelectSubset<T, BookImagesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many BookImages and returns the data saved in the database.
     * @param {BookImagesCreateManyAndReturnArgs} args - Arguments to create many BookImages.
     * @example
     * // Create many BookImages
     * const bookImages = await prisma.bookImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BookImages and only return the `id`
     * const bookImagesWithIdOnly = await prisma.bookImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookImagesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookImagesCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a BookImages.
     * @param {BookImagesDeleteArgs} args - Arguments to delete one BookImages.
     * @example
     * // Delete one BookImages
     * const BookImages = await prisma.bookImages.delete({
     *   where: {
     *     // ... filter to delete one BookImages
     *   }
     * })
     *
     */
    delete<T extends BookImagesDeleteArgs>(
      args: SelectSubset<T, BookImagesDeleteArgs<ExtArgs>>,
    ): Prisma__BookImagesClient<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one BookImages.
     * @param {BookImagesUpdateArgs} args - Arguments to update one BookImages.
     * @example
     * // Update one BookImages
     * const bookImages = await prisma.bookImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookImagesUpdateArgs>(
      args: SelectSubset<T, BookImagesUpdateArgs<ExtArgs>>,
    ): Prisma__BookImagesClient<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more BookImages.
     * @param {BookImagesDeleteManyArgs} args - Arguments to filter BookImages to delete.
     * @example
     * // Delete a few BookImages
     * const { count } = await prisma.bookImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookImagesDeleteManyArgs>(
      args?: SelectSubset<T, BookImagesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookImages
     * const bookImages = await prisma.bookImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookImagesUpdateManyArgs>(
      args: SelectSubset<T, BookImagesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookImages and returns the data updated in the database.
     * @param {BookImagesUpdateManyAndReturnArgs} args - Arguments to update many BookImages.
     * @example
     * // Update many BookImages
     * const bookImages = await prisma.bookImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BookImages and only return the `id`
     * const bookImagesWithIdOnly = await prisma.bookImages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BookImagesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookImagesUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one BookImages.
     * @param {BookImagesUpsertArgs} args - Arguments to update or create a BookImages.
     * @example
     * // Update or create a BookImages
     * const bookImages = await prisma.bookImages.upsert({
     *   create: {
     *     // ... data to create a BookImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookImages we want to update
     *   }
     * })
     */
    upsert<T extends BookImagesUpsertArgs>(
      args: SelectSubset<T, BookImagesUpsertArgs<ExtArgs>>,
    ): Prisma__BookImagesClient<
      $Result.GetResult<
        Prisma.$BookImagesPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of BookImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImagesCountArgs} args - Arguments to filter BookImages to count.
     * @example
     * // Count the number of BookImages
     * const count = await prisma.bookImages.count({
     *   where: {
     *     // ... the filter for the BookImages we want to count
     *   }
     * })
     **/
    count<T extends BookImagesCountArgs>(
      args?: Subset<T, BookImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookImagesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a BookImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookImagesAggregateArgs>(
      args: Subset<T, BookImagesAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookImagesAggregateType<T>>;

    /**
     * Group by BookImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BookImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookImagesGroupByArgs['orderBy'] }
        : { orderBy?: BookImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BookImagesGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetBookImagesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BookImages model
     */
    readonly fields: BookImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookImagesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BooksDefaultArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      | $Result.GetResult<
          Prisma.$BooksPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the BookImages model
   */
  interface BookImagesFieldRefs {
    readonly id: FieldRef<'BookImages', 'String'>;
    readonly book_id: FieldRef<'BookImages', 'String'>;
    readonly image_url: FieldRef<'BookImages', 'String'>;
    readonly is_primary: FieldRef<'BookImages', 'Boolean'>;
  }

  // Custom InputTypes
  /**
   * BookImages findUnique
   */
  export type BookImagesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    /**
     * Filter, which BookImages to fetch.
     */
    where: BookImagesWhereUniqueInput;
  };

  /**
   * BookImages findUniqueOrThrow
   */
  export type BookImagesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    /**
     * Filter, which BookImages to fetch.
     */
    where: BookImagesWhereUniqueInput;
  };

  /**
   * BookImages findFirst
   */
  export type BookImagesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    /**
     * Filter, which BookImages to fetch.
     */
    where?: BookImagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookImages to fetch.
     */
    orderBy?:
      | BookImagesOrderByWithRelationInput
      | BookImagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookImages.
     */
    cursor?: BookImagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookImages.
     */
    distinct?: BookImagesScalarFieldEnum | BookImagesScalarFieldEnum[];
  };

  /**
   * BookImages findFirstOrThrow
   */
  export type BookImagesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    /**
     * Filter, which BookImages to fetch.
     */
    where?: BookImagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookImages to fetch.
     */
    orderBy?:
      | BookImagesOrderByWithRelationInput
      | BookImagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookImages.
     */
    cursor?: BookImagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookImages.
     */
    distinct?: BookImagesScalarFieldEnum | BookImagesScalarFieldEnum[];
  };

  /**
   * BookImages findMany
   */
  export type BookImagesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    /**
     * Filter, which BookImages to fetch.
     */
    where?: BookImagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookImages to fetch.
     */
    orderBy?:
      | BookImagesOrderByWithRelationInput
      | BookImagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BookImages.
     */
    cursor?: BookImagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookImages.
     */
    skip?: number;
    distinct?: BookImagesScalarFieldEnum | BookImagesScalarFieldEnum[];
  };

  /**
   * BookImages create
   */
  export type BookImagesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    /**
     * The data needed to create a BookImages.
     */
    data: XOR<BookImagesCreateInput, BookImagesUncheckedCreateInput>;
  };

  /**
   * BookImages createMany
   */
  export type BookImagesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many BookImages.
     */
    data: BookImagesCreateManyInput | BookImagesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * BookImages createManyAndReturn
   */
  export type BookImagesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * The data used to create many BookImages.
     */
    data: BookImagesCreateManyInput | BookImagesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookImages update
   */
  export type BookImagesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    /**
     * The data needed to update a BookImages.
     */
    data: XOR<BookImagesUpdateInput, BookImagesUncheckedUpdateInput>;
    /**
     * Choose, which BookImages to update.
     */
    where: BookImagesWhereUniqueInput;
  };

  /**
   * BookImages updateMany
   */
  export type BookImagesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update BookImages.
     */
    data: XOR<
      BookImagesUpdateManyMutationInput,
      BookImagesUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookImages to update
     */
    where?: BookImagesWhereInput;
    /**
     * Limit how many BookImages to update.
     */
    limit?: number;
  };

  /**
   * BookImages updateManyAndReturn
   */
  export type BookImagesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * The data used to update BookImages.
     */
    data: XOR<
      BookImagesUpdateManyMutationInput,
      BookImagesUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookImages to update
     */
    where?: BookImagesWhereInput;
    /**
     * Limit how many BookImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookImages upsert
   */
  export type BookImagesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    /**
     * The filter to search for the BookImages to update in case it exists.
     */
    where: BookImagesWhereUniqueInput;
    /**
     * In case the BookImages found by the `where` argument doesn't exist, create a new BookImages with this data.
     */
    create: XOR<BookImagesCreateInput, BookImagesUncheckedCreateInput>;
    /**
     * In case the BookImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookImagesUpdateInput, BookImagesUncheckedUpdateInput>;
  };

  /**
   * BookImages delete
   */
  export type BookImagesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
    /**
     * Filter which BookImages to delete.
     */
    where: BookImagesWhereUniqueInput;
  };

  /**
   * BookImages deleteMany
   */
  export type BookImagesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookImages to delete
     */
    where?: BookImagesWhereInput;
    /**
     * Limit how many BookImages to delete.
     */
    limit?: number;
  };

  /**
   * BookImages without action
   */
  export type BookImagesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookImages
     */
    select?: BookImagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookImages
     */
    omit?: BookImagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImagesInclude<ExtArgs> | null;
  };

  /**
   * Model Inventories
   */

  export type AggregateInventories = {
    _count: InventoriesCountAggregateOutputType | null;
    _avg: InventoriesAvgAggregateOutputType | null;
    _sum: InventoriesSumAggregateOutputType | null;
    _min: InventoriesMinAggregateOutputType | null;
    _max: InventoriesMaxAggregateOutputType | null;
  };

  export type InventoriesAvgAggregateOutputType = {
    quantity: number | null;
  };

  export type InventoriesSumAggregateOutputType = {
    quantity: number | null;
  };

  export type InventoriesMinAggregateOutputType = {
    id: string | null;
    book_id: string | null;
    quantity: number | null;
  };

  export type InventoriesMaxAggregateOutputType = {
    id: string | null;
    book_id: string | null;
    quantity: number | null;
  };

  export type InventoriesCountAggregateOutputType = {
    id: number;
    book_id: number;
    quantity: number;
    _all: number;
  };

  export type InventoriesAvgAggregateInputType = {
    quantity?: true;
  };

  export type InventoriesSumAggregateInputType = {
    quantity?: true;
  };

  export type InventoriesMinAggregateInputType = {
    id?: true;
    book_id?: true;
    quantity?: true;
  };

  export type InventoriesMaxAggregateInputType = {
    id?: true;
    book_id?: true;
    quantity?: true;
  };

  export type InventoriesCountAggregateInputType = {
    id?: true;
    book_id?: true;
    quantity?: true;
    _all?: true;
  };

  export type InventoriesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Inventories to aggregate.
     */
    where?: InventoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?:
      | InventoriesOrderByWithRelationInput
      | InventoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InventoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Inventories
     **/
    _count?: true | InventoriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InventoriesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InventoriesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InventoriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InventoriesMaxAggregateInputType;
  };

  export type GetInventoriesAggregateType<T extends InventoriesAggregateArgs> =
    {
      [P in keyof T & keyof AggregateInventories]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateInventories[P]>
        : GetScalarType<T[P], AggregateInventories[P]>;
    };

  export type InventoriesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InventoriesWhereInput;
    orderBy?:
      | InventoriesOrderByWithAggregationInput
      | InventoriesOrderByWithAggregationInput[];
    by: InventoriesScalarFieldEnum[] | InventoriesScalarFieldEnum;
    having?: InventoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoriesCountAggregateInputType | true;
    _avg?: InventoriesAvgAggregateInputType;
    _sum?: InventoriesSumAggregateInputType;
    _min?: InventoriesMinAggregateInputType;
    _max?: InventoriesMaxAggregateInputType;
  };

  export type InventoriesGroupByOutputType = {
    id: string;
    book_id: string;
    quantity: number;
    _count: InventoriesCountAggregateOutputType | null;
    _avg: InventoriesAvgAggregateOutputType | null;
    _sum: InventoriesSumAggregateOutputType | null;
    _min: InventoriesMinAggregateOutputType | null;
    _max: InventoriesMaxAggregateOutputType | null;
  };

  type GetInventoriesGroupByPayload<T extends InventoriesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InventoriesGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof InventoriesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoriesGroupByOutputType[P]>
            : GetScalarType<T[P], InventoriesGroupByOutputType[P]>;
        }
      >
    >;

  export type InventoriesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      book_id?: boolean;
      quantity?: boolean;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['inventories']
  >;

  export type InventoriesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      book_id?: boolean;
      quantity?: boolean;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['inventories']
  >;

  export type InventoriesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      book_id?: boolean;
      quantity?: boolean;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['inventories']
  >;

  export type InventoriesSelectScalar = {
    id?: boolean;
    book_id?: boolean;
    quantity?: boolean;
  };

  export type InventoriesOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'book_id' | 'quantity',
    ExtArgs['result']['inventories']
  >;
  export type InventoriesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type InventoriesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type InventoriesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };

  export type $InventoriesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Inventories';
    objects: {
      book: Prisma.$BooksPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        book_id: string;
        quantity: number;
      },
      ExtArgs['result']['inventories']
    >;
    composites: {};
  };

  type InventoriesGetPayload<
    S extends boolean | null | undefined | InventoriesDefaultArgs,
  > = $Result.GetResult<Prisma.$InventoriesPayload, S>;

  type InventoriesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    InventoriesFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: InventoriesCountAggregateInputType | true;
  };

  export interface InventoriesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Inventories'];
      meta: { name: 'Inventories' };
    };
    /**
     * Find zero or one Inventories that matches the filter.
     * @param {InventoriesFindUniqueArgs} args - Arguments to find a Inventories
     * @example
     * // Get one Inventories
     * const inventories = await prisma.inventories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoriesFindUniqueArgs>(
      args: SelectSubset<T, InventoriesFindUniqueArgs<ExtArgs>>,
    ): Prisma__InventoriesClient<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Inventories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoriesFindUniqueOrThrowArgs} args - Arguments to find a Inventories
     * @example
     * // Get one Inventories
     * const inventories = await prisma.inventories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoriesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InventoriesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__InventoriesClient<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoriesFindFirstArgs} args - Arguments to find a Inventories
     * @example
     * // Get one Inventories
     * const inventories = await prisma.inventories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoriesFindFirstArgs>(
      args?: SelectSubset<T, InventoriesFindFirstArgs<ExtArgs>>,
    ): Prisma__InventoriesClient<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inventories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoriesFindFirstOrThrowArgs} args - Arguments to find a Inventories
     * @example
     * // Get one Inventories
     * const inventories = await prisma.inventories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InventoriesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__InventoriesClient<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventories.findMany()
     *
     * // Get first 10 Inventories
     * const inventories = await prisma.inventories.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventoriesWithIdOnly = await prisma.inventories.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InventoriesFindManyArgs>(
      args?: SelectSubset<T, InventoriesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Inventories.
     * @param {InventoriesCreateArgs} args - Arguments to create a Inventories.
     * @example
     * // Create one Inventories
     * const Inventories = await prisma.inventories.create({
     *   data: {
     *     // ... data to create a Inventories
     *   }
     * })
     *
     */
    create<T extends InventoriesCreateArgs>(
      args: SelectSubset<T, InventoriesCreateArgs<ExtArgs>>,
    ): Prisma__InventoriesClient<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Inventories.
     * @param {InventoriesCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventories = await prisma.inventories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InventoriesCreateManyArgs>(
      args?: SelectSubset<T, InventoriesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoriesCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventories = await prisma.inventories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Inventories and only return the `id`
     * const inventoriesWithIdOnly = await prisma.inventories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InventoriesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InventoriesCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Inventories.
     * @param {InventoriesDeleteArgs} args - Arguments to delete one Inventories.
     * @example
     * // Delete one Inventories
     * const Inventories = await prisma.inventories.delete({
     *   where: {
     *     // ... filter to delete one Inventories
     *   }
     * })
     *
     */
    delete<T extends InventoriesDeleteArgs>(
      args: SelectSubset<T, InventoriesDeleteArgs<ExtArgs>>,
    ): Prisma__InventoriesClient<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Inventories.
     * @param {InventoriesUpdateArgs} args - Arguments to update one Inventories.
     * @example
     * // Update one Inventories
     * const inventories = await prisma.inventories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InventoriesUpdateArgs>(
      args: SelectSubset<T, InventoriesUpdateArgs<ExtArgs>>,
    ): Prisma__InventoriesClient<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Inventories.
     * @param {InventoriesDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InventoriesDeleteManyArgs>(
      args?: SelectSubset<T, InventoriesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventories = await prisma.inventories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InventoriesUpdateManyArgs>(
      args: SelectSubset<T, InventoriesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoriesUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventories = await prisma.inventories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Inventories and only return the `id`
     * const inventoriesWithIdOnly = await prisma.inventories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends InventoriesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InventoriesUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Inventories.
     * @param {InventoriesUpsertArgs} args - Arguments to update or create a Inventories.
     * @example
     * // Update or create a Inventories
     * const inventories = await prisma.inventories.upsert({
     *   create: {
     *     // ... data to create a Inventories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventories we want to update
     *   }
     * })
     */
    upsert<T extends InventoriesUpsertArgs>(
      args: SelectSubset<T, InventoriesUpsertArgs<ExtArgs>>,
    ): Prisma__InventoriesClient<
      $Result.GetResult<
        Prisma.$InventoriesPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoriesCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventories.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
     **/
    count<T extends InventoriesCountArgs>(
      args?: Subset<T, InventoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoriesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InventoriesAggregateArgs>(
      args: Subset<T, InventoriesAggregateArgs>,
    ): Prisma.PrismaPromise<GetInventoriesAggregateType<T>>;

    /**
     * Group by Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends InventoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoriesGroupByArgs['orderBy'] }
        : { orderBy?: InventoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, InventoriesGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetInventoriesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Inventories model
     */
    readonly fields: InventoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoriesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BooksDefaultArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      | $Result.GetResult<
          Prisma.$BooksPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Inventories model
   */
  interface InventoriesFieldRefs {
    readonly id: FieldRef<'Inventories', 'String'>;
    readonly book_id: FieldRef<'Inventories', 'String'>;
    readonly quantity: FieldRef<'Inventories', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Inventories findUnique
   */
  export type InventoriesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Inventories to fetch.
     */
    where: InventoriesWhereUniqueInput;
  };

  /**
   * Inventories findUniqueOrThrow
   */
  export type InventoriesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Inventories to fetch.
     */
    where: InventoriesWhereUniqueInput;
  };

  /**
   * Inventories findFirst
   */
  export type InventoriesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?:
      | InventoriesOrderByWithRelationInput
      | InventoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoriesScalarFieldEnum | InventoriesScalarFieldEnum[];
  };

  /**
   * Inventories findFirstOrThrow
   */
  export type InventoriesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?:
      | InventoriesOrderByWithRelationInput
      | InventoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoriesScalarFieldEnum | InventoriesScalarFieldEnum[];
  };

  /**
   * Inventories findMany
   */
  export type InventoriesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?:
      | InventoriesOrderByWithRelationInput
      | InventoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Inventories.
     */
    cursor?: InventoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    distinct?: InventoriesScalarFieldEnum | InventoriesScalarFieldEnum[];
  };

  /**
   * Inventories create
   */
  export type InventoriesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Inventories.
     */
    data: XOR<InventoriesCreateInput, InventoriesUncheckedCreateInput>;
  };

  /**
   * Inventories createMany
   */
  export type InventoriesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoriesCreateManyInput | InventoriesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Inventories createManyAndReturn
   */
  export type InventoriesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * The data used to create many Inventories.
     */
    data: InventoriesCreateManyInput | InventoriesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Inventories update
   */
  export type InventoriesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Inventories.
     */
    data: XOR<InventoriesUpdateInput, InventoriesUncheckedUpdateInput>;
    /**
     * Choose, which Inventories to update.
     */
    where: InventoriesWhereUniqueInput;
  };

  /**
   * Inventories updateMany
   */
  export type InventoriesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<
      InventoriesUpdateManyMutationInput,
      InventoriesUncheckedUpdateManyInput
    >;
    /**
     * Filter which Inventories to update
     */
    where?: InventoriesWhereInput;
    /**
     * Limit how many Inventories to update.
     */
    limit?: number;
  };

  /**
   * Inventories updateManyAndReturn
   */
  export type InventoriesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * The data used to update Inventories.
     */
    data: XOR<
      InventoriesUpdateManyMutationInput,
      InventoriesUncheckedUpdateManyInput
    >;
    /**
     * Filter which Inventories to update
     */
    where?: InventoriesWhereInput;
    /**
     * Limit how many Inventories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Inventories upsert
   */
  export type InventoriesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Inventories to update in case it exists.
     */
    where: InventoriesWhereUniqueInput;
    /**
     * In case the Inventories found by the `where` argument doesn't exist, create a new Inventories with this data.
     */
    create: XOR<InventoriesCreateInput, InventoriesUncheckedCreateInput>;
    /**
     * In case the Inventories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoriesUpdateInput, InventoriesUncheckedUpdateInput>;
  };

  /**
   * Inventories delete
   */
  export type InventoriesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
    /**
     * Filter which Inventories to delete.
     */
    where: InventoriesWhereUniqueInput;
  };

  /**
   * Inventories deleteMany
   */
  export type InventoriesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoriesWhereInput;
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number;
  };

  /**
   * Inventories without action
   */
  export type InventoriesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventories
     */
    select?: InventoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventories
     */
    omit?: InventoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoriesInclude<ExtArgs> | null;
  };

  /**
   * Model Carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null;
    _min: CartsMinAggregateOutputType | null;
    _max: CartsMaxAggregateOutputType | null;
  };

  export type CartsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    date: Date | null;
  };

  export type CartsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    date: Date | null;
  };

  export type CartsCountAggregateOutputType = {
    id: number;
    user_id: number;
    date: number;
    _all: number;
  };

  export type CartsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    date?: true;
  };

  export type CartsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    date?: true;
  };

  export type CartsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    date?: true;
    _all?: true;
  };

  export type CartsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Carts to aggregate.
     */
    where?: CartsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CartsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Carts
     **/
    _count?: true | CartsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CartsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CartsMaxAggregateInputType;
  };

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
    [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>;
  };

  export type CartsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartsWhereInput;
    orderBy?:
      | CartsOrderByWithAggregationInput
      | CartsOrderByWithAggregationInput[];
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum;
    having?: CartsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartsCountAggregateInputType | true;
    _min?: CartsMinAggregateInputType;
    _max?: CartsMaxAggregateInputType;
  };

  export type CartsGroupByOutputType = {
    id: string;
    user_id: string;
    date: Date;
    _count: CartsCountAggregateOutputType | null;
    _min: CartsMinAggregateOutputType | null;
    _max: CartsMaxAggregateOutputType | null;
  };

  type GetCartsGroupByPayload<T extends CartsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CartsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CartsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>;
        }
      >
    >;

  export type CartsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      cart_items?: boolean | Carts$cart_itemsArgs<ExtArgs>;
      _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['carts']
  >;

  export type CartsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['carts']
  >;

  export type CartsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['carts']
  >;

  export type CartsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    date?: boolean;
  };

  export type CartsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'user_id' | 'date',
    ExtArgs['result']['carts']
  >;
  export type CartsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    cart_items?: boolean | Carts$cart_itemsArgs<ExtArgs>;
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CartsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
  };
  export type CartsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
  };

  export type $CartsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Carts';
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
      cart_items: Prisma.$CartItemsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        date: Date;
      },
      ExtArgs['result']['carts']
    >;
    composites: {};
  };

  type CartsGetPayload<
    S extends boolean | null | undefined | CartsDefaultArgs,
  > = $Result.GetResult<Prisma.$CartsPayload, S>;

  type CartsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartsCountAggregateInputType | true;
  };

  export interface CartsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Carts'];
      meta: { name: 'Carts' };
    };
    /**
     * Find zero or one Carts that matches the filter.
     * @param {CartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartsFindUniqueArgs>(
      args: SelectSubset<T, CartsFindUniqueArgs<ExtArgs>>,
    ): Prisma__CartsClient<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CartsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CartsClient<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartsFindFirstArgs>(
      args?: SelectSubset<T, CartsFindFirstArgs<ExtArgs>>,
    ): Prisma__CartsClient<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CartsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CartsClient<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     *
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CartsFindManyArgs>(
      args?: SelectSubset<T, CartsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Carts.
     * @param {CartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     *
     */
    create<T extends CartsCreateArgs>(
      args: SelectSubset<T, CartsCreateArgs<ExtArgs>>,
    ): Prisma__CartsClient<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Carts.
     * @param {CartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CartsCreateManyArgs>(
      args?: SelectSubset<T, CartsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CartsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CartsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Carts.
     * @param {CartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     *
     */
    delete<T extends CartsDeleteArgs>(
      args: SelectSubset<T, CartsDeleteArgs<ExtArgs>>,
    ): Prisma__CartsClient<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Carts.
     * @param {CartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CartsUpdateArgs>(
      args: SelectSubset<T, CartsUpdateArgs<ExtArgs>>,
    ): Prisma__CartsClient<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Carts.
     * @param {CartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CartsDeleteManyArgs>(
      args?: SelectSubset<T, CartsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CartsUpdateManyArgs>(
      args: SelectSubset<T, CartsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CartsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CartsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Carts.
     * @param {CartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends CartsUpsertArgs>(
      args: SelectSubset<T, CartsUpsertArgs<ExtArgs>>,
    ): Prisma__CartsClient<
      $Result.GetResult<
        Prisma.$CartsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
     **/
    count<T extends CartsCountArgs>(
      args?: Subset<T, CartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CartsAggregateArgs>(
      args: Subset<T, CartsAggregateArgs>,
    ): Prisma.PrismaPromise<GetCartsAggregateType<T>>;

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartsGroupByArgs['orderBy'] }
        : { orderBy?: CartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CartsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCartsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Carts model
     */
    readonly fields: CartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      | $Result.GetResult<
          Prisma.$UsersPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    cart_items<T extends Carts$cart_itemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Carts$cart_itemsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CartItemsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Carts model
   */
  interface CartsFieldRefs {
    readonly id: FieldRef<'Carts', 'String'>;
    readonly user_id: FieldRef<'Carts', 'String'>;
    readonly date: FieldRef<'Carts', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Carts findUnique
   */
  export type CartsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput;
  };

  /**
   * Carts findUniqueOrThrow
   */
  export type CartsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput;
  };

  /**
   * Carts findFirst
   */
  export type CartsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[];
  };

  /**
   * Carts findFirstOrThrow
   */
  export type CartsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[];
  };

  /**
   * Carts findMany
   */
  export type CartsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Carts.
     */
    cursor?: CartsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[];
  };

  /**
   * Carts create
   */
  export type CartsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Carts.
     */
    data: XOR<CartsCreateInput, CartsUncheckedCreateInput>;
  };

  /**
   * Carts createMany
   */
  export type CartsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Carts createManyAndReturn
   */
  export type CartsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Carts update
   */
  export type CartsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Carts.
     */
    data: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>;
    /**
     * Choose, which Carts to update.
     */
    where: CartsWhereUniqueInput;
  };

  /**
   * Carts updateMany
   */
  export type CartsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>;
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput;
    /**
     * Limit how many Carts to update.
     */
    limit?: number;
  };

  /**
   * Carts updateManyAndReturn
   */
  export type CartsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>;
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput;
    /**
     * Limit how many Carts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Carts upsert
   */
  export type CartsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Carts to update in case it exists.
     */
    where: CartsWhereUniqueInput;
    /**
     * In case the Carts found by the `where` argument doesn't exist, create a new Carts with this data.
     */
    create: XOR<CartsCreateInput, CartsUncheckedCreateInput>;
    /**
     * In case the Carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>;
  };

  /**
   * Carts delete
   */
  export type CartsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
    /**
     * Filter which Carts to delete.
     */
    where: CartsWhereUniqueInput;
  };

  /**
   * Carts deleteMany
   */
  export type CartsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Carts to delete
     */
    where?: CartsWhereInput;
    /**
     * Limit how many Carts to delete.
     */
    limit?: number;
  };

  /**
   * Carts.cart_items
   */
  export type Carts$cart_itemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    where?: CartItemsWhereInput;
    orderBy?:
      | CartItemsOrderByWithRelationInput
      | CartItemsOrderByWithRelationInput[];
    cursor?: CartItemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[];
  };

  /**
   * Carts without action
   */
  export type CartsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null;
  };

  /**
   * Model CartItems
   */

  export type AggregateCartItems = {
    _count: CartItemsCountAggregateOutputType | null;
    _avg: CartItemsAvgAggregateOutputType | null;
    _sum: CartItemsSumAggregateOutputType | null;
    _min: CartItemsMinAggregateOutputType | null;
    _max: CartItemsMaxAggregateOutputType | null;
  };

  export type CartItemsAvgAggregateOutputType = {
    quantity: number | null;
  };

  export type CartItemsSumAggregateOutputType = {
    quantity: number | null;
  };

  export type CartItemsMinAggregateOutputType = {
    id: string | null;
    cart_id: string | null;
    book_id: string | null;
    quantity: number | null;
  };

  export type CartItemsMaxAggregateOutputType = {
    id: string | null;
    cart_id: string | null;
    book_id: string | null;
    quantity: number | null;
  };

  export type CartItemsCountAggregateOutputType = {
    id: number;
    cart_id: number;
    book_id: number;
    quantity: number;
    _all: number;
  };

  export type CartItemsAvgAggregateInputType = {
    quantity?: true;
  };

  export type CartItemsSumAggregateInputType = {
    quantity?: true;
  };

  export type CartItemsMinAggregateInputType = {
    id?: true;
    cart_id?: true;
    book_id?: true;
    quantity?: true;
  };

  export type CartItemsMaxAggregateInputType = {
    id?: true;
    cart_id?: true;
    book_id?: true;
    quantity?: true;
  };

  export type CartItemsCountAggregateInputType = {
    id?: true;
    cart_id?: true;
    book_id?: true;
    quantity?: true;
    _all?: true;
  };

  export type CartItemsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CartItems to aggregate.
     */
    where?: CartItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?:
      | CartItemsOrderByWithRelationInput
      | CartItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CartItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CartItems
     **/
    _count?: true | CartItemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CartItemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CartItemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CartItemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CartItemsMaxAggregateInputType;
  };

  export type GetCartItemsAggregateType<T extends CartItemsAggregateArgs> = {
    [P in keyof T & keyof AggregateCartItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItems[P]>
      : GetScalarType<T[P], AggregateCartItems[P]>;
  };

  export type CartItemsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartItemsWhereInput;
    orderBy?:
      | CartItemsOrderByWithAggregationInput
      | CartItemsOrderByWithAggregationInput[];
    by: CartItemsScalarFieldEnum[] | CartItemsScalarFieldEnum;
    having?: CartItemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartItemsCountAggregateInputType | true;
    _avg?: CartItemsAvgAggregateInputType;
    _sum?: CartItemsSumAggregateInputType;
    _min?: CartItemsMinAggregateInputType;
    _max?: CartItemsMaxAggregateInputType;
  };

  export type CartItemsGroupByOutputType = {
    id: string;
    cart_id: string;
    book_id: string;
    quantity: number;
    _count: CartItemsCountAggregateOutputType | null;
    _avg: CartItemsAvgAggregateOutputType | null;
    _sum: CartItemsSumAggregateOutputType | null;
    _min: CartItemsMinAggregateOutputType | null;
    _max: CartItemsMaxAggregateOutputType | null;
  };

  type GetCartItemsGroupByPayload<T extends CartItemsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CartItemsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CartItemsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemsGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemsGroupByOutputType[P]>;
        }
      >
    >;

  export type CartItemsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      cart_id?: boolean;
      book_id?: boolean;
      quantity?: boolean;
      cart?: boolean | CartsDefaultArgs<ExtArgs>;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cartItems']
  >;

  export type CartItemsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      cart_id?: boolean;
      book_id?: boolean;
      quantity?: boolean;
      cart?: boolean | CartsDefaultArgs<ExtArgs>;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cartItems']
  >;

  export type CartItemsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      cart_id?: boolean;
      book_id?: boolean;
      quantity?: boolean;
      cart?: boolean | CartsDefaultArgs<ExtArgs>;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cartItems']
  >;

  export type CartItemsSelectScalar = {
    id?: boolean;
    cart_id?: boolean;
    book_id?: boolean;
    quantity?: boolean;
  };

  export type CartItemsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'cart_id' | 'book_id' | 'quantity',
    ExtArgs['result']['cartItems']
  >;
  export type CartItemsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    cart?: boolean | CartsDefaultArgs<ExtArgs>;
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type CartItemsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    cart?: boolean | CartsDefaultArgs<ExtArgs>;
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type CartItemsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    cart?: boolean | CartsDefaultArgs<ExtArgs>;
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };

  export type $CartItemsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CartItems';
    objects: {
      cart: Prisma.$CartsPayload<ExtArgs>;
      book: Prisma.$BooksPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        cart_id: string;
        book_id: string;
        quantity: number;
      },
      ExtArgs['result']['cartItems']
    >;
    composites: {};
  };

  type CartItemsGetPayload<
    S extends boolean | null | undefined | CartItemsDefaultArgs,
  > = $Result.GetResult<Prisma.$CartItemsPayload, S>;

  type CartItemsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CartItemsFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CartItemsCountAggregateInputType | true;
  };

  export interface CartItemsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CartItems'];
      meta: { name: 'CartItems' };
    };
    /**
     * Find zero or one CartItems that matches the filter.
     * @param {CartItemsFindUniqueArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemsFindUniqueArgs>(
      args: SelectSubset<T, CartItemsFindUniqueArgs<ExtArgs>>,
    ): Prisma__CartItemsClient<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CartItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemsFindUniqueOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CartItemsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CartItemsClient<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemsFindFirstArgs>(
      args?: SelectSubset<T, CartItemsFindFirstArgs<ExtArgs>>,
    ): Prisma__CartItemsClient<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CartItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CartItemsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CartItemsClient<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItems.findMany()
     *
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItems.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CartItemsFindManyArgs>(
      args?: SelectSubset<T, CartItemsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CartItems.
     * @param {CartItemsCreateArgs} args - Arguments to create a CartItems.
     * @example
     * // Create one CartItems
     * const CartItems = await prisma.cartItems.create({
     *   data: {
     *     // ... data to create a CartItems
     *   }
     * })
     *
     */
    create<T extends CartItemsCreateArgs>(
      args: SelectSubset<T, CartItemsCreateArgs<ExtArgs>>,
    ): Prisma__CartItemsClient<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CartItems.
     * @param {CartItemsCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CartItemsCreateManyArgs>(
      args?: SelectSubset<T, CartItemsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemsCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CartItems and only return the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CartItemsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CartItemsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CartItems.
     * @param {CartItemsDeleteArgs} args - Arguments to delete one CartItems.
     * @example
     * // Delete one CartItems
     * const CartItems = await prisma.cartItems.delete({
     *   where: {
     *     // ... filter to delete one CartItems
     *   }
     * })
     *
     */
    delete<T extends CartItemsDeleteArgs>(
      args: SelectSubset<T, CartItemsDeleteArgs<ExtArgs>>,
    ): Prisma__CartItemsClient<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CartItems.
     * @param {CartItemsUpdateArgs} args - Arguments to update one CartItems.
     * @example
     * // Update one CartItems
     * const cartItems = await prisma.cartItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CartItemsUpdateArgs>(
      args: SelectSubset<T, CartItemsUpdateArgs<ExtArgs>>,
    ): Prisma__CartItemsClient<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CartItems.
     * @param {CartItemsDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CartItemsDeleteManyArgs>(
      args?: SelectSubset<T, CartItemsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CartItemsUpdateManyArgs>(
      args: SelectSubset<T, CartItemsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemsUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CartItems and only return the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CartItemsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CartItemsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CartItems.
     * @param {CartItemsUpsertArgs} args - Arguments to update or create a CartItems.
     * @example
     * // Update or create a CartItems
     * const cartItems = await prisma.cartItems.upsert({
     *   create: {
     *     // ... data to create a CartItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItems we want to update
     *   }
     * })
     */
    upsert<T extends CartItemsUpsertArgs>(
      args: SelectSubset<T, CartItemsUpsertArgs<ExtArgs>>,
    ): Prisma__CartItemsClient<
      $Result.GetResult<
        Prisma.$CartItemsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItems.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
     **/
    count<T extends CartItemsCountArgs>(
      args?: Subset<T, CartItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CartItemsAggregateArgs>(
      args: Subset<T, CartItemsAggregateArgs>,
    ): Prisma.PrismaPromise<GetCartItemsAggregateType<T>>;

    /**
     * Group by CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CartItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemsGroupByArgs['orderBy'] }
        : { orderBy?: CartItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CartItemsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCartItemsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CartItems model
     */
    readonly fields: CartItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    cart<T extends CartsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CartsDefaultArgs<ExtArgs>>,
    ): Prisma__CartsClient<
      | $Result.GetResult<
          Prisma.$CartsPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BooksDefaultArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      | $Result.GetResult<
          Prisma.$BooksPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CartItems model
   */
  interface CartItemsFieldRefs {
    readonly id: FieldRef<'CartItems', 'String'>;
    readonly cart_id: FieldRef<'CartItems', 'String'>;
    readonly book_id: FieldRef<'CartItems', 'String'>;
    readonly quantity: FieldRef<'CartItems', 'Int'>;
  }

  // Custom InputTypes
  /**
   * CartItems findUnique
   */
  export type CartItemsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput;
  };

  /**
   * CartItems findUniqueOrThrow
   */
  export type CartItemsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput;
  };

  /**
   * CartItems findFirst
   */
  export type CartItemsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?:
      | CartItemsOrderByWithRelationInput
      | CartItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[];
  };

  /**
   * CartItems findFirstOrThrow
   */
  export type CartItemsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?:
      | CartItemsOrderByWithRelationInput
      | CartItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[];
  };

  /**
   * CartItems findMany
   */
  export type CartItemsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?:
      | CartItemsOrderByWithRelationInput
      | CartItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[];
  };

  /**
   * CartItems create
   */
  export type CartItemsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a CartItems.
     */
    data: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>;
  };

  /**
   * CartItems createMany
   */
  export type CartItemsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemsCreateManyInput | CartItemsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CartItems createManyAndReturn
   */
  export type CartItemsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * The data used to create many CartItems.
     */
    data: CartItemsCreateManyInput | CartItemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CartItems update
   */
  export type CartItemsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a CartItems.
     */
    data: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>;
    /**
     * Choose, which CartItems to update.
     */
    where: CartItemsWhereUniqueInput;
  };

  /**
   * CartItems updateMany
   */
  export type CartItemsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<
      CartItemsUpdateManyMutationInput,
      CartItemsUncheckedUpdateManyInput
    >;
    /**
     * Filter which CartItems to update
     */
    where?: CartItemsWhereInput;
    /**
     * Limit how many CartItems to update.
     */
    limit?: number;
  };

  /**
   * CartItems updateManyAndReturn
   */
  export type CartItemsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * The data used to update CartItems.
     */
    data: XOR<
      CartItemsUpdateManyMutationInput,
      CartItemsUncheckedUpdateManyInput
    >;
    /**
     * Filter which CartItems to update
     */
    where?: CartItemsWhereInput;
    /**
     * Limit how many CartItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CartItems upsert
   */
  export type CartItemsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the CartItems to update in case it exists.
     */
    where: CartItemsWhereUniqueInput;
    /**
     * In case the CartItems found by the `where` argument doesn't exist, create a new CartItems with this data.
     */
    create: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>;
    /**
     * In case the CartItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>;
  };

  /**
   * CartItems delete
   */
  export type CartItemsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
    /**
     * Filter which CartItems to delete.
     */
    where: CartItemsWhereUniqueInput;
  };

  /**
   * CartItems deleteMany
   */
  export type CartItemsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemsWhereInput;
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number;
  };

  /**
   * CartItems without action
   */
  export type CartItemsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null;
  };

  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null;
    _avg: ReviewsAvgAggregateOutputType | null;
    _sum: ReviewsSumAggregateOutputType | null;
    _min: ReviewsMinAggregateOutputType | null;
    _max: ReviewsMaxAggregateOutputType | null;
  };

  export type ReviewsAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewsSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    book_id: string | null;
    text: string | null;
    rating: number | null;
    date: Date | null;
  };

  export type ReviewsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    book_id: string | null;
    text: string | null;
    rating: number | null;
    date: Date | null;
  };

  export type ReviewsCountAggregateOutputType = {
    id: number;
    user_id: number;
    book_id: number;
    text: number;
    rating: number;
    date: number;
    _all: number;
  };

  export type ReviewsAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewsSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    book_id?: true;
    text?: true;
    rating?: true;
    date?: true;
  };

  export type ReviewsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    book_id?: true;
    text?: true;
    rating?: true;
    date?: true;
  };

  export type ReviewsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    book_id?: true;
    text?: true;
    rating?: true;
    date?: true;
    _all?: true;
  };

  export type ReviewsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?:
      | ReviewsOrderByWithRelationInput
      | ReviewsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Reviews
     **/
    _count?: true | ReviewsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewsMaxAggregateInputType;
  };

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
    [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>;
  };

  export type ReviewsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReviewsWhereInput;
    orderBy?:
      | ReviewsOrderByWithAggregationInput
      | ReviewsOrderByWithAggregationInput[];
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum;
    having?: ReviewsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewsCountAggregateInputType | true;
    _avg?: ReviewsAvgAggregateInputType;
    _sum?: ReviewsSumAggregateInputType;
    _min?: ReviewsMinAggregateInputType;
    _max?: ReviewsMaxAggregateInputType;
  };

  export type ReviewsGroupByOutputType = {
    id: string;
    user_id: string;
    book_id: string;
    text: string;
    rating: number;
    date: Date;
    _count: ReviewsCountAggregateOutputType | null;
    _avg: ReviewsAvgAggregateOutputType | null;
    _sum: ReviewsSumAggregateOutputType | null;
    _min: ReviewsMinAggregateOutputType | null;
    _max: ReviewsMaxAggregateOutputType | null;
  };

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ReviewsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ReviewsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>;
        }
      >
    >;

  export type ReviewsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      book_id?: boolean;
      text?: boolean;
      rating?: boolean;
      date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['reviews']
  >;

  export type ReviewsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      book_id?: boolean;
      text?: boolean;
      rating?: boolean;
      date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['reviews']
  >;

  export type ReviewsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      book_id?: boolean;
      text?: boolean;
      rating?: boolean;
      date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['reviews']
  >;

  export type ReviewsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    book_id?: boolean;
    text?: boolean;
    rating?: boolean;
    date?: boolean;
  };

  export type ReviewsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'user_id' | 'book_id' | 'text' | 'rating' | 'date',
    ExtArgs['result']['reviews']
  >;
  export type ReviewsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type ReviewsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type ReviewsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };

  export type $ReviewsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Reviews';
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
      book: Prisma.$BooksPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        book_id: string;
        text: string;
        rating: number;
        date: Date;
      },
      ExtArgs['result']['reviews']
    >;
    composites: {};
  };

  type ReviewsGetPayload<
    S extends boolean | null | undefined | ReviewsDefaultArgs,
  > = $Result.GetResult<Prisma.$ReviewsPayload, S>;

  type ReviewsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReviewsCountAggregateInputType | true;
  };

  export interface ReviewsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Reviews'];
      meta: { name: 'Reviews' };
    };
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(
      args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>,
    ): Prisma__ReviewsClient<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ReviewsClient<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(
      args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>,
    ): Prisma__ReviewsClient<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ReviewsClient<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReviewsFindManyArgs>(
      args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     *
     */
    create<T extends ReviewsCreateArgs>(
      args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>,
    ): Prisma__ReviewsClient<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReviewsCreateManyArgs>(
      args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     *
     */
    delete<T extends ReviewsDeleteArgs>(
      args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>,
    ): Prisma__ReviewsClient<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReviewsUpdateArgs>(
      args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>,
    ): Prisma__ReviewsClient<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(
      args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReviewsUpdateManyArgs>(
      args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(
      args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>,
    ): Prisma__ReviewsClient<
      $Result.GetResult<
        Prisma.$ReviewsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReviewsAggregateArgs>(
      args: Subset<T, ReviewsAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewsAggregateType<T>>;

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetReviewsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Reviews model
     */
    readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      | $Result.GetResult<
          Prisma.$UsersPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BooksDefaultArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      | $Result.GetResult<
          Prisma.$BooksPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<'Reviews', 'String'>;
    readonly user_id: FieldRef<'Reviews', 'String'>;
    readonly book_id: FieldRef<'Reviews', 'String'>;
    readonly text: FieldRef<'Reviews', 'String'>;
    readonly rating: FieldRef<'Reviews', 'Int'>;
    readonly date: FieldRef<'Reviews', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput;
  };

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput;
  };

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?:
      | ReviewsOrderByWithRelationInput
      | ReviewsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[];
  };

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?:
      | ReviewsOrderByWithRelationInput
      | ReviewsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[];
  };

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?:
      | ReviewsOrderByWithRelationInput
      | ReviewsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[];
  };

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>;
  };

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>;
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput;
  };

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>;
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput;
    /**
     * Limit how many Reviews to update.
     */
    limit?: number;
  };

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>;
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput;
    /**
     * Limit how many Reviews to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput;
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>;
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>;
  };

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput;
  };

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput;
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number;
  };

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null;
  };

  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
  };

  export type OrdersAvgAggregateOutputType = {
    total_price: number | null;
  };

  export type OrdersSumAggregateOutputType = {
    total_price: number | null;
  };

  export type OrdersMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    total_price: number | null;
    shipping_address: string | null;
    payment_method: string | null;
    date: Date | null;
    status: $Enums.OrderStatus | null;
  };

  export type OrdersMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    total_price: number | null;
    shipping_address: string | null;
    payment_method: string | null;
    date: Date | null;
    status: $Enums.OrderStatus | null;
  };

  export type OrdersCountAggregateOutputType = {
    id: number;
    user_id: number;
    total_price: number;
    shipping_address: number;
    payment_method: number;
    date: number;
    status: number;
    _all: number;
  };

  export type OrdersAvgAggregateInputType = {
    total_price?: true;
  };

  export type OrdersSumAggregateInputType = {
    total_price?: true;
  };

  export type OrdersMinAggregateInputType = {
    id?: true;
    user_id?: true;
    total_price?: true;
    shipping_address?: true;
    payment_method?: true;
    date?: true;
    status?: true;
  };

  export type OrdersMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    total_price?: true;
    shipping_address?: true;
    payment_method?: true;
    date?: true;
    status?: true;
  };

  export type OrdersCountAggregateInputType = {
    id?: true;
    user_id?: true;
    total_price?: true;
    shipping_address?: true;
    payment_method?: true;
    date?: true;
    status?: true;
    _all?: true;
  };

  export type OrdersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Orders
     **/
    _count?: true | OrdersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrdersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrdersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrdersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrdersMaxAggregateInputType;
  };

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
    [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>;
  };

  export type OrdersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrdersWhereInput;
    orderBy?:
      | OrdersOrderByWithAggregationInput
      | OrdersOrderByWithAggregationInput[];
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum;
    having?: OrdersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrdersCountAggregateInputType | true;
    _avg?: OrdersAvgAggregateInputType;
    _sum?: OrdersSumAggregateInputType;
    _min?: OrdersMinAggregateInputType;
    _max?: OrdersMaxAggregateInputType;
  };

  export type OrdersGroupByOutputType = {
    id: string;
    user_id: string;
    total_price: number;
    shipping_address: string;
    payment_method: string;
    date: Date;
    status: $Enums.OrderStatus;
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
  };

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrdersGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OrdersGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>;
        }
      >
    >;

  export type OrdersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      total_price?: boolean;
      shipping_address?: boolean;
      payment_method?: boolean;
      date?: boolean;
      status?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      order_items?: boolean | Orders$order_itemsArgs<ExtArgs>;
      _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orders']
  >;

  export type OrdersSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      total_price?: boolean;
      shipping_address?: boolean;
      payment_method?: boolean;
      date?: boolean;
      status?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orders']
  >;

  export type OrdersSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      total_price?: boolean;
      shipping_address?: boolean;
      payment_method?: boolean;
      date?: boolean;
      status?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orders']
  >;

  export type OrdersSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    total_price?: boolean;
    shipping_address?: boolean;
    payment_method?: boolean;
    date?: boolean;
    status?: boolean;
  };

  export type OrdersOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'user_id'
    | 'total_price'
    | 'shipping_address'
    | 'payment_method'
    | 'date'
    | 'status',
    ExtArgs['result']['orders']
  >;
  export type OrdersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    order_items?: boolean | Orders$order_itemsArgs<ExtArgs>;
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type OrdersIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
  };
  export type OrdersIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
  };

  export type $OrdersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Orders';
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
      order_items: Prisma.$OrderItemsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        total_price: number;
        shipping_address: string;
        payment_method: string;
        date: Date;
        status: $Enums.OrderStatus;
      },
      ExtArgs['result']['orders']
    >;
    composites: {};
  };

  type OrdersGetPayload<
    S extends boolean | null | undefined | OrdersDefaultArgs,
  > = $Result.GetResult<Prisma.$OrdersPayload, S>;

  type OrdersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrdersCountAggregateInputType | true;
  };

  export interface OrdersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Orders'];
      meta: { name: 'Orders' };
    };
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(
      args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrdersClient<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrdersClient<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(
      args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>,
    ): Prisma__OrdersClient<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrdersClient<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrdersFindManyArgs>(
      args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     *
     */
    create<T extends OrdersCreateArgs>(
      args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>,
    ): Prisma__OrdersClient<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrdersCreateManyArgs>(
      args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     *
     */
    delete<T extends OrdersDeleteArgs>(
      args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>,
    ): Prisma__OrdersClient<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrdersUpdateArgs>(
      args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>,
    ): Prisma__OrdersClient<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrdersDeleteManyArgs>(
      args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrdersUpdateManyArgs>(
      args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(
      args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>,
    ): Prisma__OrdersClient<
      $Result.GetResult<
        Prisma.$OrdersPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
     **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrdersAggregateArgs>(
      args: Subset<T, OrdersAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrdersAggregateType<T>>;

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetOrdersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Orders model
     */
    readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      | $Result.GetResult<
          Prisma.$UsersPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    order_items<T extends Orders$order_itemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Orders$order_itemsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderItemsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<'Orders', 'String'>;
    readonly user_id: FieldRef<'Orders', 'String'>;
    readonly total_price: FieldRef<'Orders', 'Float'>;
    readonly shipping_address: FieldRef<'Orders', 'String'>;
    readonly payment_method: FieldRef<'Orders', 'String'>;
    readonly date: FieldRef<'Orders', 'DateTime'>;
    readonly status: FieldRef<'Orders', 'OrderStatus'>;
  }

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput;
  };

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput;
  };

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[];
  };

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[];
  };

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[];
  };

  /**
   * Orders create
   */
  export type OrdersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>;
  };

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>;
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput;
  };

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
  };

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput;
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>;
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>;
  };

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput;
  };

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput;
    /**
     * Limit how many Orders to delete.
     */
    limit?: number;
  };

  /**
   * Orders.order_items
   */
  export type Orders$order_itemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    where?: OrderItemsWhereInput;
    orderBy?:
      | OrderItemsOrderByWithRelationInput
      | OrderItemsOrderByWithRelationInput[];
    cursor?: OrderItemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[];
  };

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null;
  };

  /**
   * Model OrderItems
   */

  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null;
    _avg: OrderItemsAvgAggregateOutputType | null;
    _sum: OrderItemsSumAggregateOutputType | null;
    _min: OrderItemsMinAggregateOutputType | null;
    _max: OrderItemsMaxAggregateOutputType | null;
  };

  export type OrderItemsAvgAggregateOutputType = {
    quantity: number | null;
  };

  export type OrderItemsSumAggregateOutputType = {
    quantity: number | null;
  };

  export type OrderItemsMinAggregateOutputType = {
    id: string | null;
    order_id: string | null;
    book_id: string | null;
    quantity: number | null;
  };

  export type OrderItemsMaxAggregateOutputType = {
    id: string | null;
    order_id: string | null;
    book_id: string | null;
    quantity: number | null;
  };

  export type OrderItemsCountAggregateOutputType = {
    id: number;
    order_id: number;
    book_id: number;
    quantity: number;
    _all: number;
  };

  export type OrderItemsAvgAggregateInputType = {
    quantity?: true;
  };

  export type OrderItemsSumAggregateInputType = {
    quantity?: true;
  };

  export type OrderItemsMinAggregateInputType = {
    id?: true;
    order_id?: true;
    book_id?: true;
    quantity?: true;
  };

  export type OrderItemsMaxAggregateInputType = {
    id?: true;
    order_id?: true;
    book_id?: true;
    quantity?: true;
  };

  export type OrderItemsCountAggregateInputType = {
    id?: true;
    order_id?: true;
    book_id?: true;
    quantity?: true;
    _all?: true;
  };

  export type OrderItemsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderItems to aggregate.
     */
    where?: OrderItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?:
      | OrderItemsOrderByWithRelationInput
      | OrderItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrderItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrderItems
     **/
    _count?: true | OrderItemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderItemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderItemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderItemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderItemsMaxAggregateInputType;
  };

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>;
  };

  export type OrderItemsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderItemsWhereInput;
    orderBy?:
      | OrderItemsOrderByWithAggregationInput
      | OrderItemsOrderByWithAggregationInput[];
    by: OrderItemsScalarFieldEnum[] | OrderItemsScalarFieldEnum;
    having?: OrderItemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderItemsCountAggregateInputType | true;
    _avg?: OrderItemsAvgAggregateInputType;
    _sum?: OrderItemsSumAggregateInputType;
    _min?: OrderItemsMinAggregateInputType;
    _max?: OrderItemsMaxAggregateInputType;
  };

  export type OrderItemsGroupByOutputType = {
    id: string;
    order_id: string;
    book_id: string;
    quantity: number;
    _count: OrderItemsCountAggregateOutputType | null;
    _avg: OrderItemsAvgAggregateOutputType | null;
    _sum: OrderItemsSumAggregateOutputType | null;
    _min: OrderItemsMinAggregateOutputType | null;
    _max: OrderItemsMaxAggregateOutputType | null;
  };

  type GetOrderItemsGroupByPayload<T extends OrderItemsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrderItemsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OrderItemsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>;
        }
      >
    >;

  export type OrderItemsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      order_id?: boolean;
      book_id?: boolean;
      quantity?: boolean;
      order?: boolean | OrdersDefaultArgs<ExtArgs>;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orderItems']
  >;

  export type OrderItemsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      order_id?: boolean;
      book_id?: boolean;
      quantity?: boolean;
      order?: boolean | OrdersDefaultArgs<ExtArgs>;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orderItems']
  >;

  export type OrderItemsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      order_id?: boolean;
      book_id?: boolean;
      quantity?: boolean;
      order?: boolean | OrdersDefaultArgs<ExtArgs>;
      book?: boolean | BooksDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orderItems']
  >;

  export type OrderItemsSelectScalar = {
    id?: boolean;
    order_id?: boolean;
    book_id?: boolean;
    quantity?: boolean;
  };

  export type OrderItemsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'order_id' | 'book_id' | 'quantity',
    ExtArgs['result']['orderItems']
  >;
  export type OrderItemsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>;
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type OrderItemsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>;
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };
  export type OrderItemsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>;
    book?: boolean | BooksDefaultArgs<ExtArgs>;
  };

  export type $OrderItemsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OrderItems';
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>;
      book: Prisma.$BooksPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        order_id: string;
        book_id: string;
        quantity: number;
      },
      ExtArgs['result']['orderItems']
    >;
    composites: {};
  };

  type OrderItemsGetPayload<
    S extends boolean | null | undefined | OrderItemsDefaultArgs,
  > = $Result.GetResult<Prisma.$OrderItemsPayload, S>;

  type OrderItemsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrderItemsFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: OrderItemsCountAggregateInputType | true;
  };

  export interface OrderItemsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OrderItems'];
      meta: { name: 'OrderItems' };
    };
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {OrderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemsFindUniqueArgs>(
      args: SelectSubset<T, OrderItemsFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrderItemsClient<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one OrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrderItemsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderItemsClient<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemsFindFirstArgs>(
      args?: SelectSubset<T, OrderItemsFindFirstArgs<ExtArgs>>,
    ): Prisma__OrderItemsClient<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderItemsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderItemsClient<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     *
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderItemsFindManyArgs>(
      args?: SelectSubset<T, OrderItemsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a OrderItems.
     * @param {OrderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     *
     */
    create<T extends OrderItemsCreateArgs>(
      args: SelectSubset<T, OrderItemsCreateArgs<ExtArgs>>,
    ): Prisma__OrderItemsClient<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many OrderItems.
     * @param {OrderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderItemsCreateManyArgs>(
      args?: SelectSubset<T, OrderItemsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemsCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrderItemsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrderItemsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a OrderItems.
     * @param {OrderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     *
     */
    delete<T extends OrderItemsDeleteArgs>(
      args: SelectSubset<T, OrderItemsDeleteArgs<ExtArgs>>,
    ): Prisma__OrderItemsClient<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one OrderItems.
     * @param {OrderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderItemsUpdateArgs>(
      args: SelectSubset<T, OrderItemsUpdateArgs<ExtArgs>>,
    ): Prisma__OrderItemsClient<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderItemsDeleteManyArgs>(
      args?: SelectSubset<T, OrderItemsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderItemsUpdateManyArgs>(
      args: SelectSubset<T, OrderItemsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemsUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends OrderItemsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrderItemsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one OrderItems.
     * @param {OrderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemsUpsertArgs>(
      args: SelectSubset<T, OrderItemsUpsertArgs<ExtArgs>>,
    ): Prisma__OrderItemsClient<
      $Result.GetResult<
        Prisma.$OrderItemsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
     **/
    count<T extends OrderItemsCountArgs>(
      args?: Subset<T, OrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrderItemsAggregateArgs>(
      args: Subset<T, OrderItemsAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>;

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrderItemsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrderItemsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrderItems model
     */
    readonly fields: OrderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrdersDefaultArgs<ExtArgs>>,
    ): Prisma__OrdersClient<
      | $Result.GetResult<
          Prisma.$OrdersPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BooksDefaultArgs<ExtArgs>>,
    ): Prisma__BooksClient<
      | $Result.GetResult<
          Prisma.$BooksPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OrderItems model
   */
  interface OrderItemsFieldRefs {
    readonly id: FieldRef<'OrderItems', 'String'>;
    readonly order_id: FieldRef<'OrderItems', 'String'>;
    readonly book_id: FieldRef<'OrderItems', 'String'>;
    readonly quantity: FieldRef<'OrderItems', 'Int'>;
  }

  // Custom InputTypes
  /**
   * OrderItems findUnique
   */
  export type OrderItemsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput;
  };

  /**
   * OrderItems findUniqueOrThrow
   */
  export type OrderItemsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput;
  };

  /**
   * OrderItems findFirst
   */
  export type OrderItemsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?:
      | OrderItemsOrderByWithRelationInput
      | OrderItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[];
  };

  /**
   * OrderItems findFirstOrThrow
   */
  export type OrderItemsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?:
      | OrderItemsOrderByWithRelationInput
      | OrderItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[];
  };

  /**
   * OrderItems findMany
   */
  export type OrderItemsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?:
      | OrderItemsOrderByWithRelationInput
      | OrderItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[];
  };

  /**
   * OrderItems create
   */
  export type OrderItemsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrderItems.
     */
    data: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>;
  };

  /**
   * OrderItems createMany
   */
  export type OrderItemsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OrderItems createManyAndReturn
   */
  export type OrderItemsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OrderItems update
   */
  export type OrderItemsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrderItems.
     */
    data: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>;
    /**
     * Choose, which OrderItems to update.
     */
    where: OrderItemsWhereUniqueInput;
  };

  /**
   * OrderItems updateMany
   */
  export type OrderItemsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<
      OrderItemsUpdateManyMutationInput,
      OrderItemsUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput;
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number;
  };

  /**
   * OrderItems updateManyAndReturn
   */
  export type OrderItemsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * The data used to update OrderItems.
     */
    data: XOR<
      OrderItemsUpdateManyMutationInput,
      OrderItemsUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput;
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OrderItems upsert
   */
  export type OrderItemsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrderItems to update in case it exists.
     */
    where: OrderItemsWhereUniqueInput;
    /**
     * In case the OrderItems found by the `where` argument doesn't exist, create a new OrderItems with this data.
     */
    create: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>;
    /**
     * In case the OrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>;
  };

  /**
   * OrderItems delete
   */
  export type OrderItemsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
    /**
     * Filter which OrderItems to delete.
     */
    where: OrderItemsWhereUniqueInput;
  };

  /**
   * OrderItems deleteMany
   */
  export type OrderItemsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemsWhereInput;
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number;
  };

  /**
   * OrderItems without action
   */
  export type OrderItemsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UsersScalarFieldEnum: {
    id: 'id';
    email: 'email';
    name: 'name';
    password_hash: 'password_hash';
    role: 'role';
    created_at: 'created_at';
  };

  export type UsersScalarFieldEnum =
    (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];

  export const BooksScalarFieldEnum: {
    id: 'id';
    name: 'name';
    author_id: 'author_id';
    price: 'price';
    description: 'description';
    publisher: 'publisher';
    publication_year: 'publication_year';
  };

  export type BooksScalarFieldEnum =
    (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum];

  export const AuthorsScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
  };

  export type AuthorsScalarFieldEnum =
    (typeof AuthorsScalarFieldEnum)[keyof typeof AuthorsScalarFieldEnum];

  export const CategoriesScalarFieldEnum: {
    id: 'id';
    name: 'name';
    parent_id: 'parent_id';
    description: 'description';
  };

  export type CategoriesScalarFieldEnum =
    (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];

  export const BookCategoriesScalarFieldEnum: {
    book_id: 'book_id';
    category_id: 'category_id';
  };

  export type BookCategoriesScalarFieldEnum =
    (typeof BookCategoriesScalarFieldEnum)[keyof typeof BookCategoriesScalarFieldEnum];

  export const BookImagesScalarFieldEnum: {
    id: 'id';
    book_id: 'book_id';
    image_url: 'image_url';
    is_primary: 'is_primary';
  };

  export type BookImagesScalarFieldEnum =
    (typeof BookImagesScalarFieldEnum)[keyof typeof BookImagesScalarFieldEnum];

  export const InventoriesScalarFieldEnum: {
    id: 'id';
    book_id: 'book_id';
    quantity: 'quantity';
  };

  export type InventoriesScalarFieldEnum =
    (typeof InventoriesScalarFieldEnum)[keyof typeof InventoriesScalarFieldEnum];

  export const CartsScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    date: 'date';
  };

  export type CartsScalarFieldEnum =
    (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum];

  export const CartItemsScalarFieldEnum: {
    id: 'id';
    cart_id: 'cart_id';
    book_id: 'book_id';
    quantity: 'quantity';
  };

  export type CartItemsScalarFieldEnum =
    (typeof CartItemsScalarFieldEnum)[keyof typeof CartItemsScalarFieldEnum];

  export const ReviewsScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    book_id: 'book_id';
    text: 'text';
    rating: 'rating';
    date: 'date';
  };

  export type ReviewsScalarFieldEnum =
    (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum];

  export const OrdersScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    total_price: 'total_price';
    shipping_address: 'shipping_address';
    payment_method: 'payment_method';
    date: 'date';
    status: 'status';
  };

  export type OrdersScalarFieldEnum =
    (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum];

  export const OrderItemsScalarFieldEnum: {
    id: 'id';
    order_id: 'order_id';
    book_id: 'book_id';
    quantity: 'quantity';
  };

  export type OrderItemsScalarFieldEnum =
    (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role'
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'OrderStatus'
  >;

  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'OrderStatus[]'>;

  /**
   * Deep Input Types
   */

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[];
    OR?: UsersWhereInput[];
    NOT?: UsersWhereInput | UsersWhereInput[];
    id?: StringFilter<'Users'> | string;
    email?: StringFilter<'Users'> | string;
    name?: StringFilter<'Users'> | string;
    password_hash?: StringFilter<'Users'> | string;
    role?: EnumRoleFilter<'Users'> | $Enums.Role;
    created_at?: DateTimeFilter<'Users'> | Date | string;
    carts?: CartsListRelationFilter;
    reviews?: ReviewsListRelationFilter;
    orders?: OrdersListRelationFilter;
  };

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    carts?: CartsOrderByRelationAggregateInput;
    reviews?: ReviewsOrderByRelationAggregateInput;
    orders?: OrdersOrderByRelationAggregateInput;
  };

  export type UsersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UsersWhereInput | UsersWhereInput[];
      OR?: UsersWhereInput[];
      NOT?: UsersWhereInput | UsersWhereInput[];
      name?: StringFilter<'Users'> | string;
      password_hash?: StringFilter<'Users'> | string;
      role?: EnumRoleFilter<'Users'> | $Enums.Role;
      created_at?: DateTimeFilter<'Users'> | Date | string;
      carts?: CartsListRelationFilter;
      reviews?: ReviewsListRelationFilter;
      orders?: OrdersListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    _count?: UsersCountOrderByAggregateInput;
    _max?: UsersMaxOrderByAggregateInput;
    _min?: UsersMinOrderByAggregateInput;
  };

  export type UsersScalarWhereWithAggregatesInput = {
    AND?:
      | UsersScalarWhereWithAggregatesInput
      | UsersScalarWhereWithAggregatesInput[];
    OR?: UsersScalarWhereWithAggregatesInput[];
    NOT?:
      | UsersScalarWhereWithAggregatesInput
      | UsersScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Users'> | string;
    email?: StringWithAggregatesFilter<'Users'> | string;
    name?: StringWithAggregatesFilter<'Users'> | string;
    password_hash?: StringWithAggregatesFilter<'Users'> | string;
    role?: EnumRoleWithAggregatesFilter<'Users'> | $Enums.Role;
    created_at?: DateTimeWithAggregatesFilter<'Users'> | Date | string;
  };

  export type BooksWhereInput = {
    AND?: BooksWhereInput | BooksWhereInput[];
    OR?: BooksWhereInput[];
    NOT?: BooksWhereInput | BooksWhereInput[];
    id?: StringFilter<'Books'> | string;
    name?: StringFilter<'Books'> | string;
    author_id?: StringFilter<'Books'> | string;
    price?: FloatFilter<'Books'> | number;
    description?: StringNullableFilter<'Books'> | string | null;
    publisher?: StringNullableFilter<'Books'> | string | null;
    publication_year?: IntNullableFilter<'Books'> | number | null;
    author?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>;
    book_categories?: BookCategoriesListRelationFilter;
    book_images?: BookImagesListRelationFilter;
    inventories?: XOR<
      InventoriesNullableScalarRelationFilter,
      InventoriesWhereInput
    > | null;
    reviews?: ReviewsListRelationFilter;
    cart_items?: CartItemsListRelationFilter;
    order_items?: OrderItemsListRelationFilter;
  };

  export type BooksOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    author_id?: SortOrder;
    price?: SortOrder;
    description?: SortOrderInput | SortOrder;
    publisher?: SortOrderInput | SortOrder;
    publication_year?: SortOrderInput | SortOrder;
    author?: AuthorsOrderByWithRelationInput;
    book_categories?: BookCategoriesOrderByRelationAggregateInput;
    book_images?: BookImagesOrderByRelationAggregateInput;
    inventories?: InventoriesOrderByWithRelationInput;
    reviews?: ReviewsOrderByRelationAggregateInput;
    cart_items?: CartItemsOrderByRelationAggregateInput;
    order_items?: OrderItemsOrderByRelationAggregateInput;
  };

  export type BooksWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BooksWhereInput | BooksWhereInput[];
      OR?: BooksWhereInput[];
      NOT?: BooksWhereInput | BooksWhereInput[];
      name?: StringFilter<'Books'> | string;
      author_id?: StringFilter<'Books'> | string;
      price?: FloatFilter<'Books'> | number;
      description?: StringNullableFilter<'Books'> | string | null;
      publisher?: StringNullableFilter<'Books'> | string | null;
      publication_year?: IntNullableFilter<'Books'> | number | null;
      author?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>;
      book_categories?: BookCategoriesListRelationFilter;
      book_images?: BookImagesListRelationFilter;
      inventories?: XOR<
        InventoriesNullableScalarRelationFilter,
        InventoriesWhereInput
      > | null;
      reviews?: ReviewsListRelationFilter;
      cart_items?: CartItemsListRelationFilter;
      order_items?: OrderItemsListRelationFilter;
    },
    'id'
  >;

  export type BooksOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    author_id?: SortOrder;
    price?: SortOrder;
    description?: SortOrderInput | SortOrder;
    publisher?: SortOrderInput | SortOrder;
    publication_year?: SortOrderInput | SortOrder;
    _count?: BooksCountOrderByAggregateInput;
    _avg?: BooksAvgOrderByAggregateInput;
    _max?: BooksMaxOrderByAggregateInput;
    _min?: BooksMinOrderByAggregateInput;
    _sum?: BooksSumOrderByAggregateInput;
  };

  export type BooksScalarWhereWithAggregatesInput = {
    AND?:
      | BooksScalarWhereWithAggregatesInput
      | BooksScalarWhereWithAggregatesInput[];
    OR?: BooksScalarWhereWithAggregatesInput[];
    NOT?:
      | BooksScalarWhereWithAggregatesInput
      | BooksScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Books'> | string;
    name?: StringWithAggregatesFilter<'Books'> | string;
    author_id?: StringWithAggregatesFilter<'Books'> | string;
    price?: FloatWithAggregatesFilter<'Books'> | number;
    description?: StringNullableWithAggregatesFilter<'Books'> | string | null;
    publisher?: StringNullableWithAggregatesFilter<'Books'> | string | null;
    publication_year?: IntNullableWithAggregatesFilter<'Books'> | number | null;
  };

  export type AuthorsWhereInput = {
    AND?: AuthorsWhereInput | AuthorsWhereInput[];
    OR?: AuthorsWhereInput[];
    NOT?: AuthorsWhereInput | AuthorsWhereInput[];
    id?: StringFilter<'Authors'> | string;
    name?: StringFilter<'Authors'> | string;
    description?: StringNullableFilter<'Authors'> | string | null;
    books?: BooksListRelationFilter;
  };

  export type AuthorsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    books?: BooksOrderByRelationAggregateInput;
  };

  export type AuthorsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AuthorsWhereInput | AuthorsWhereInput[];
      OR?: AuthorsWhereInput[];
      NOT?: AuthorsWhereInput | AuthorsWhereInput[];
      name?: StringFilter<'Authors'> | string;
      description?: StringNullableFilter<'Authors'> | string | null;
      books?: BooksListRelationFilter;
    },
    'id'
  >;

  export type AuthorsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    _count?: AuthorsCountOrderByAggregateInput;
    _max?: AuthorsMaxOrderByAggregateInput;
    _min?: AuthorsMinOrderByAggregateInput;
  };

  export type AuthorsScalarWhereWithAggregatesInput = {
    AND?:
      | AuthorsScalarWhereWithAggregatesInput
      | AuthorsScalarWhereWithAggregatesInput[];
    OR?: AuthorsScalarWhereWithAggregatesInput[];
    NOT?:
      | AuthorsScalarWhereWithAggregatesInput
      | AuthorsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Authors'> | string;
    name?: StringWithAggregatesFilter<'Authors'> | string;
    description?: StringNullableWithAggregatesFilter<'Authors'> | string | null;
  };

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[];
    OR?: CategoriesWhereInput[];
    NOT?: CategoriesWhereInput | CategoriesWhereInput[];
    id?: StringFilter<'Categories'> | string;
    name?: StringFilter<'Categories'> | string;
    parent_id?: StringNullableFilter<'Categories'> | string | null;
    description?: StringNullableFilter<'Categories'> | string | null;
    parent?: XOR<
      CategoriesNullableScalarRelationFilter,
      CategoriesWhereInput
    > | null;
    children?: CategoriesListRelationFilter;
    book_categories?: BookCategoriesListRelationFilter;
  };

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    parent_id?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    parent?: CategoriesOrderByWithRelationInput;
    children?: CategoriesOrderByRelationAggregateInput;
    book_categories?: BookCategoriesOrderByRelationAggregateInput;
  };

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CategoriesWhereInput | CategoriesWhereInput[];
      OR?: CategoriesWhereInput[];
      NOT?: CategoriesWhereInput | CategoriesWhereInput[];
      name?: StringFilter<'Categories'> | string;
      parent_id?: StringNullableFilter<'Categories'> | string | null;
      description?: StringNullableFilter<'Categories'> | string | null;
      parent?: XOR<
        CategoriesNullableScalarRelationFilter,
        CategoriesWhereInput
      > | null;
      children?: CategoriesListRelationFilter;
      book_categories?: BookCategoriesListRelationFilter;
    },
    'id'
  >;

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    parent_id?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    _count?: CategoriesCountOrderByAggregateInput;
    _max?: CategoriesMaxOrderByAggregateInput;
    _min?: CategoriesMinOrderByAggregateInput;
  };

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?:
      | CategoriesScalarWhereWithAggregatesInput
      | CategoriesScalarWhereWithAggregatesInput[];
    OR?: CategoriesScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoriesScalarWhereWithAggregatesInput
      | CategoriesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Categories'> | string;
    name?: StringWithAggregatesFilter<'Categories'> | string;
    parent_id?:
      | StringNullableWithAggregatesFilter<'Categories'>
      | string
      | null;
    description?:
      | StringNullableWithAggregatesFilter<'Categories'>
      | string
      | null;
  };

  export type BookCategoriesWhereInput = {
    AND?: BookCategoriesWhereInput | BookCategoriesWhereInput[];
    OR?: BookCategoriesWhereInput[];
    NOT?: BookCategoriesWhereInput | BookCategoriesWhereInput[];
    book_id?: StringFilter<'BookCategories'> | string;
    category_id?: StringFilter<'BookCategories'> | string;
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>;
  };

  export type BookCategoriesOrderByWithRelationInput = {
    book_id?: SortOrder;
    category_id?: SortOrder;
    book?: BooksOrderByWithRelationInput;
    category?: CategoriesOrderByWithRelationInput;
  };

  export type BookCategoriesWhereUniqueInput = Prisma.AtLeast<
    {
      book_id_category_id?: BookCategoriesBook_idCategory_idCompoundUniqueInput;
      AND?: BookCategoriesWhereInput | BookCategoriesWhereInput[];
      OR?: BookCategoriesWhereInput[];
      NOT?: BookCategoriesWhereInput | BookCategoriesWhereInput[];
      book_id?: StringFilter<'BookCategories'> | string;
      category_id?: StringFilter<'BookCategories'> | string;
      book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
      category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>;
    },
    'book_id_category_id'
  >;

  export type BookCategoriesOrderByWithAggregationInput = {
    book_id?: SortOrder;
    category_id?: SortOrder;
    _count?: BookCategoriesCountOrderByAggregateInput;
    _max?: BookCategoriesMaxOrderByAggregateInput;
    _min?: BookCategoriesMinOrderByAggregateInput;
  };

  export type BookCategoriesScalarWhereWithAggregatesInput = {
    AND?:
      | BookCategoriesScalarWhereWithAggregatesInput
      | BookCategoriesScalarWhereWithAggregatesInput[];
    OR?: BookCategoriesScalarWhereWithAggregatesInput[];
    NOT?:
      | BookCategoriesScalarWhereWithAggregatesInput
      | BookCategoriesScalarWhereWithAggregatesInput[];
    book_id?: StringWithAggregatesFilter<'BookCategories'> | string;
    category_id?: StringWithAggregatesFilter<'BookCategories'> | string;
  };

  export type BookImagesWhereInput = {
    AND?: BookImagesWhereInput | BookImagesWhereInput[];
    OR?: BookImagesWhereInput[];
    NOT?: BookImagesWhereInput | BookImagesWhereInput[];
    id?: StringFilter<'BookImages'> | string;
    book_id?: StringFilter<'BookImages'> | string;
    image_url?: StringFilter<'BookImages'> | string;
    is_primary?: BoolFilter<'BookImages'> | boolean;
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
  };

  export type BookImagesOrderByWithRelationInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    image_url?: SortOrder;
    is_primary?: SortOrder;
    book?: BooksOrderByWithRelationInput;
  };

  export type BookImagesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BookImagesWhereInput | BookImagesWhereInput[];
      OR?: BookImagesWhereInput[];
      NOT?: BookImagesWhereInput | BookImagesWhereInput[];
      book_id?: StringFilter<'BookImages'> | string;
      image_url?: StringFilter<'BookImages'> | string;
      is_primary?: BoolFilter<'BookImages'> | boolean;
      book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
    },
    'id'
  >;

  export type BookImagesOrderByWithAggregationInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    image_url?: SortOrder;
    is_primary?: SortOrder;
    _count?: BookImagesCountOrderByAggregateInput;
    _max?: BookImagesMaxOrderByAggregateInput;
    _min?: BookImagesMinOrderByAggregateInput;
  };

  export type BookImagesScalarWhereWithAggregatesInput = {
    AND?:
      | BookImagesScalarWhereWithAggregatesInput
      | BookImagesScalarWhereWithAggregatesInput[];
    OR?: BookImagesScalarWhereWithAggregatesInput[];
    NOT?:
      | BookImagesScalarWhereWithAggregatesInput
      | BookImagesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'BookImages'> | string;
    book_id?: StringWithAggregatesFilter<'BookImages'> | string;
    image_url?: StringWithAggregatesFilter<'BookImages'> | string;
    is_primary?: BoolWithAggregatesFilter<'BookImages'> | boolean;
  };

  export type InventoriesWhereInput = {
    AND?: InventoriesWhereInput | InventoriesWhereInput[];
    OR?: InventoriesWhereInput[];
    NOT?: InventoriesWhereInput | InventoriesWhereInput[];
    id?: StringFilter<'Inventories'> | string;
    book_id?: StringFilter<'Inventories'> | string;
    quantity?: IntFilter<'Inventories'> | number;
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
  };

  export type InventoriesOrderByWithRelationInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
    book?: BooksOrderByWithRelationInput;
  };

  export type InventoriesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      book_id?: string;
      AND?: InventoriesWhereInput | InventoriesWhereInput[];
      OR?: InventoriesWhereInput[];
      NOT?: InventoriesWhereInput | InventoriesWhereInput[];
      quantity?: IntFilter<'Inventories'> | number;
      book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
    },
    'id' | 'book_id'
  >;

  export type InventoriesOrderByWithAggregationInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
    _count?: InventoriesCountOrderByAggregateInput;
    _avg?: InventoriesAvgOrderByAggregateInput;
    _max?: InventoriesMaxOrderByAggregateInput;
    _min?: InventoriesMinOrderByAggregateInput;
    _sum?: InventoriesSumOrderByAggregateInput;
  };

  export type InventoriesScalarWhereWithAggregatesInput = {
    AND?:
      | InventoriesScalarWhereWithAggregatesInput
      | InventoriesScalarWhereWithAggregatesInput[];
    OR?: InventoriesScalarWhereWithAggregatesInput[];
    NOT?:
      | InventoriesScalarWhereWithAggregatesInput
      | InventoriesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Inventories'> | string;
    book_id?: StringWithAggregatesFilter<'Inventories'> | string;
    quantity?: IntWithAggregatesFilter<'Inventories'> | number;
  };

  export type CartsWhereInput = {
    AND?: CartsWhereInput | CartsWhereInput[];
    OR?: CartsWhereInput[];
    NOT?: CartsWhereInput | CartsWhereInput[];
    id?: StringFilter<'Carts'> | string;
    user_id?: StringFilter<'Carts'> | string;
    date?: DateTimeFilter<'Carts'> | Date | string;
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>;
    cart_items?: CartItemsListRelationFilter;
  };

  export type CartsOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    date?: SortOrder;
    user?: UsersOrderByWithRelationInput;
    cart_items?: CartItemsOrderByRelationAggregateInput;
  };

  export type CartsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CartsWhereInput | CartsWhereInput[];
      OR?: CartsWhereInput[];
      NOT?: CartsWhereInput | CartsWhereInput[];
      user_id?: StringFilter<'Carts'> | string;
      date?: DateTimeFilter<'Carts'> | Date | string;
      user?: XOR<UsersScalarRelationFilter, UsersWhereInput>;
      cart_items?: CartItemsListRelationFilter;
    },
    'id'
  >;

  export type CartsOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    date?: SortOrder;
    _count?: CartsCountOrderByAggregateInput;
    _max?: CartsMaxOrderByAggregateInput;
    _min?: CartsMinOrderByAggregateInput;
  };

  export type CartsScalarWhereWithAggregatesInput = {
    AND?:
      | CartsScalarWhereWithAggregatesInput
      | CartsScalarWhereWithAggregatesInput[];
    OR?: CartsScalarWhereWithAggregatesInput[];
    NOT?:
      | CartsScalarWhereWithAggregatesInput
      | CartsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Carts'> | string;
    user_id?: StringWithAggregatesFilter<'Carts'> | string;
    date?: DateTimeWithAggregatesFilter<'Carts'> | Date | string;
  };

  export type CartItemsWhereInput = {
    AND?: CartItemsWhereInput | CartItemsWhereInput[];
    OR?: CartItemsWhereInput[];
    NOT?: CartItemsWhereInput | CartItemsWhereInput[];
    id?: StringFilter<'CartItems'> | string;
    cart_id?: StringFilter<'CartItems'> | string;
    book_id?: StringFilter<'CartItems'> | string;
    quantity?: IntFilter<'CartItems'> | number;
    cart?: XOR<CartsScalarRelationFilter, CartsWhereInput>;
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
  };

  export type CartItemsOrderByWithRelationInput = {
    id?: SortOrder;
    cart_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
    cart?: CartsOrderByWithRelationInput;
    book?: BooksOrderByWithRelationInput;
  };

  export type CartItemsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CartItemsWhereInput | CartItemsWhereInput[];
      OR?: CartItemsWhereInput[];
      NOT?: CartItemsWhereInput | CartItemsWhereInput[];
      cart_id?: StringFilter<'CartItems'> | string;
      book_id?: StringFilter<'CartItems'> | string;
      quantity?: IntFilter<'CartItems'> | number;
      cart?: XOR<CartsScalarRelationFilter, CartsWhereInput>;
      book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
    },
    'id'
  >;

  export type CartItemsOrderByWithAggregationInput = {
    id?: SortOrder;
    cart_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
    _count?: CartItemsCountOrderByAggregateInput;
    _avg?: CartItemsAvgOrderByAggregateInput;
    _max?: CartItemsMaxOrderByAggregateInput;
    _min?: CartItemsMinOrderByAggregateInput;
    _sum?: CartItemsSumOrderByAggregateInput;
  };

  export type CartItemsScalarWhereWithAggregatesInput = {
    AND?:
      | CartItemsScalarWhereWithAggregatesInput
      | CartItemsScalarWhereWithAggregatesInput[];
    OR?: CartItemsScalarWhereWithAggregatesInput[];
    NOT?:
      | CartItemsScalarWhereWithAggregatesInput
      | CartItemsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'CartItems'> | string;
    cart_id?: StringWithAggregatesFilter<'CartItems'> | string;
    book_id?: StringWithAggregatesFilter<'CartItems'> | string;
    quantity?: IntWithAggregatesFilter<'CartItems'> | number;
  };

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[];
    OR?: ReviewsWhereInput[];
    NOT?: ReviewsWhereInput | ReviewsWhereInput[];
    id?: StringFilter<'Reviews'> | string;
    user_id?: StringFilter<'Reviews'> | string;
    book_id?: StringFilter<'Reviews'> | string;
    text?: StringFilter<'Reviews'> | string;
    rating?: IntFilter<'Reviews'> | number;
    date?: DateTimeFilter<'Reviews'> | Date | string;
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>;
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
  };

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    date?: SortOrder;
    user?: UsersOrderByWithRelationInput;
    book?: BooksOrderByWithRelationInput;
  };

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ReviewsWhereInput | ReviewsWhereInput[];
      OR?: ReviewsWhereInput[];
      NOT?: ReviewsWhereInput | ReviewsWhereInput[];
      user_id?: StringFilter<'Reviews'> | string;
      book_id?: StringFilter<'Reviews'> | string;
      text?: StringFilter<'Reviews'> | string;
      rating?: IntFilter<'Reviews'> | number;
      date?: DateTimeFilter<'Reviews'> | Date | string;
      user?: XOR<UsersScalarRelationFilter, UsersWhereInput>;
      book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
    },
    'id'
  >;

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    date?: SortOrder;
    _count?: ReviewsCountOrderByAggregateInput;
    _avg?: ReviewsAvgOrderByAggregateInput;
    _max?: ReviewsMaxOrderByAggregateInput;
    _min?: ReviewsMinOrderByAggregateInput;
    _sum?: ReviewsSumOrderByAggregateInput;
  };

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?:
      | ReviewsScalarWhereWithAggregatesInput
      | ReviewsScalarWhereWithAggregatesInput[];
    OR?: ReviewsScalarWhereWithAggregatesInput[];
    NOT?:
      | ReviewsScalarWhereWithAggregatesInput
      | ReviewsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Reviews'> | string;
    user_id?: StringWithAggregatesFilter<'Reviews'> | string;
    book_id?: StringWithAggregatesFilter<'Reviews'> | string;
    text?: StringWithAggregatesFilter<'Reviews'> | string;
    rating?: IntWithAggregatesFilter<'Reviews'> | number;
    date?: DateTimeWithAggregatesFilter<'Reviews'> | Date | string;
  };

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[];
    OR?: OrdersWhereInput[];
    NOT?: OrdersWhereInput | OrdersWhereInput[];
    id?: StringFilter<'Orders'> | string;
    user_id?: StringFilter<'Orders'> | string;
    total_price?: FloatFilter<'Orders'> | number;
    shipping_address?: StringFilter<'Orders'> | string;
    payment_method?: StringFilter<'Orders'> | string;
    date?: DateTimeFilter<'Orders'> | Date | string;
    status?: EnumOrderStatusFilter<'Orders'> | $Enums.OrderStatus;
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>;
    order_items?: OrderItemsListRelationFilter;
  };

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    total_price?: SortOrder;
    shipping_address?: SortOrder;
    payment_method?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    user?: UsersOrderByWithRelationInput;
    order_items?: OrderItemsOrderByRelationAggregateInput;
  };

  export type OrdersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OrdersWhereInput | OrdersWhereInput[];
      OR?: OrdersWhereInput[];
      NOT?: OrdersWhereInput | OrdersWhereInput[];
      user_id?: StringFilter<'Orders'> | string;
      total_price?: FloatFilter<'Orders'> | number;
      shipping_address?: StringFilter<'Orders'> | string;
      payment_method?: StringFilter<'Orders'> | string;
      date?: DateTimeFilter<'Orders'> | Date | string;
      status?: EnumOrderStatusFilter<'Orders'> | $Enums.OrderStatus;
      user?: XOR<UsersScalarRelationFilter, UsersWhereInput>;
      order_items?: OrderItemsListRelationFilter;
    },
    'id'
  >;

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    total_price?: SortOrder;
    shipping_address?: SortOrder;
    payment_method?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    _count?: OrdersCountOrderByAggregateInput;
    _avg?: OrdersAvgOrderByAggregateInput;
    _max?: OrdersMaxOrderByAggregateInput;
    _min?: OrdersMinOrderByAggregateInput;
    _sum?: OrdersSumOrderByAggregateInput;
  };

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?:
      | OrdersScalarWhereWithAggregatesInput
      | OrdersScalarWhereWithAggregatesInput[];
    OR?: OrdersScalarWhereWithAggregatesInput[];
    NOT?:
      | OrdersScalarWhereWithAggregatesInput
      | OrdersScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Orders'> | string;
    user_id?: StringWithAggregatesFilter<'Orders'> | string;
    total_price?: FloatWithAggregatesFilter<'Orders'> | number;
    shipping_address?: StringWithAggregatesFilter<'Orders'> | string;
    payment_method?: StringWithAggregatesFilter<'Orders'> | string;
    date?: DateTimeWithAggregatesFilter<'Orders'> | Date | string;
    status?: EnumOrderStatusWithAggregatesFilter<'Orders'> | $Enums.OrderStatus;
  };

  export type OrderItemsWhereInput = {
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[];
    OR?: OrderItemsWhereInput[];
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[];
    id?: StringFilter<'OrderItems'> | string;
    order_id?: StringFilter<'OrderItems'> | string;
    book_id?: StringFilter<'OrderItems'> | string;
    quantity?: IntFilter<'OrderItems'> | number;
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>;
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
  };

  export type OrderItemsOrderByWithRelationInput = {
    id?: SortOrder;
    order_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
    order?: OrdersOrderByWithRelationInput;
    book?: BooksOrderByWithRelationInput;
  };

  export type OrderItemsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OrderItemsWhereInput | OrderItemsWhereInput[];
      OR?: OrderItemsWhereInput[];
      NOT?: OrderItemsWhereInput | OrderItemsWhereInput[];
      order_id?: StringFilter<'OrderItems'> | string;
      book_id?: StringFilter<'OrderItems'> | string;
      quantity?: IntFilter<'OrderItems'> | number;
      order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>;
      book?: XOR<BooksScalarRelationFilter, BooksWhereInput>;
    },
    'id'
  >;

  export type OrderItemsOrderByWithAggregationInput = {
    id?: SortOrder;
    order_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
    _count?: OrderItemsCountOrderByAggregateInput;
    _avg?: OrderItemsAvgOrderByAggregateInput;
    _max?: OrderItemsMaxOrderByAggregateInput;
    _min?: OrderItemsMinOrderByAggregateInput;
    _sum?: OrderItemsSumOrderByAggregateInput;
  };

  export type OrderItemsScalarWhereWithAggregatesInput = {
    AND?:
      | OrderItemsScalarWhereWithAggregatesInput
      | OrderItemsScalarWhereWithAggregatesInput[];
    OR?: OrderItemsScalarWhereWithAggregatesInput[];
    NOT?:
      | OrderItemsScalarWhereWithAggregatesInput
      | OrderItemsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'OrderItems'> | string;
    order_id?: StringWithAggregatesFilter<'OrderItems'> | string;
    book_id?: StringWithAggregatesFilter<'OrderItems'> | string;
    quantity?: IntWithAggregatesFilter<'OrderItems'> | number;
  };

  export type UsersCreateInput = {
    id?: string;
    email: string;
    name: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    carts?: CartsCreateNestedManyWithoutUserInput;
    reviews?: ReviewsCreateNestedManyWithoutUserInput;
    orders?: OrdersCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateInput = {
    id?: string;
    email: string;
    name: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    carts?: CartsUncheckedCreateNestedManyWithoutUserInput;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput;
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    carts?: CartsUpdateManyWithoutUserNestedInput;
    reviews?: ReviewsUpdateManyWithoutUserNestedInput;
    orders?: OrdersUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    carts?: CartsUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput;
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UsersCreateManyInput = {
    id?: string;
    email: string;
    name: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
  };

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BooksCreateInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    author: AuthorsCreateNestedOneWithoutBooksInput;
    book_categories?: BookCategoriesCreateNestedManyWithoutBookInput;
    book_images?: BookImagesCreateNestedManyWithoutBookInput;
    inventories?: InventoriesCreateNestedOneWithoutBookInput;
    reviews?: ReviewsCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsCreateNestedManyWithoutBookInput;
  };

  export type BooksUncheckedCreateInput = {
    id?: string;
    name: string;
    author_id: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutBookInput;
    book_images?: BookImagesUncheckedCreateNestedManyWithoutBookInput;
    inventories?: InventoriesUncheckedCreateNestedOneWithoutBookInput;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BooksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    author?: AuthorsUpdateOneRequiredWithoutBooksNestedInput;
    book_categories?: BookCategoriesUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUpdateManyWithoutBookNestedInput;
  };

  export type BooksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUncheckedUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUncheckedUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUncheckedUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUncheckedUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type BooksCreateManyInput = {
    id?: string;
    name: string;
    author_id: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
  };

  export type BooksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type BooksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type AuthorsCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    books?: BooksCreateNestedManyWithoutAuthorInput;
  };

  export type AuthorsUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    books?: BooksUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type AuthorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    books?: BooksUpdateManyWithoutAuthorNestedInput;
  };

  export type AuthorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    books?: BooksUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type AuthorsCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
  };

  export type AuthorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoriesCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    parent?: CategoriesCreateNestedOneWithoutChildrenInput;
    children?: CategoriesCreateNestedManyWithoutParentInput;
    book_categories?: BookCategoriesCreateNestedManyWithoutCategoryInput;
  };

  export type CategoriesUncheckedCreateInput = {
    id?: string;
    name: string;
    parent_id?: string | null;
    description?: string | null;
    children?: CategoriesUncheckedCreateNestedManyWithoutParentInput;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    parent?: CategoriesUpdateOneWithoutChildrenNestedInput;
    children?: CategoriesUpdateManyWithoutParentNestedInput;
    book_categories?: BookCategoriesUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    children?: CategoriesUncheckedUpdateManyWithoutParentNestedInput;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoriesCreateManyInput = {
    id?: string;
    name: string;
    parent_id?: string | null;
    description?: string | null;
  };

  export type CategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type BookCategoriesCreateInput = {
    book: BooksCreateNestedOneWithoutBook_categoriesInput;
    category: CategoriesCreateNestedOneWithoutBook_categoriesInput;
  };

  export type BookCategoriesUncheckedCreateInput = {
    book_id: string;
    category_id: string;
  };

  export type BookCategoriesUpdateInput = {
    book?: BooksUpdateOneRequiredWithoutBook_categoriesNestedInput;
    category?: CategoriesUpdateOneRequiredWithoutBook_categoriesNestedInput;
  };

  export type BookCategoriesUncheckedUpdateInput = {
    book_id?: StringFieldUpdateOperationsInput | string;
    category_id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookCategoriesCreateManyInput = {
    book_id: string;
    category_id: string;
  };

  export type BookCategoriesUpdateManyMutationInput = {};

  export type BookCategoriesUncheckedUpdateManyInput = {
    book_id?: StringFieldUpdateOperationsInput | string;
    category_id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookImagesCreateInput = {
    id?: string;
    image_url: string;
    is_primary?: boolean;
    book: BooksCreateNestedOneWithoutBook_imagesInput;
  };

  export type BookImagesUncheckedCreateInput = {
    id?: string;
    book_id: string;
    image_url: string;
    is_primary?: boolean;
  };

  export type BookImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image_url?: StringFieldUpdateOperationsInput | string;
    is_primary?: BoolFieldUpdateOperationsInput | boolean;
    book?: BooksUpdateOneRequiredWithoutBook_imagesNestedInput;
  };

  export type BookImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    image_url?: StringFieldUpdateOperationsInput | string;
    is_primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type BookImagesCreateManyInput = {
    id?: string;
    book_id: string;
    image_url: string;
    is_primary?: boolean;
  };

  export type BookImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image_url?: StringFieldUpdateOperationsInput | string;
    is_primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type BookImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    image_url?: StringFieldUpdateOperationsInput | string;
    is_primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type InventoriesCreateInput = {
    id?: string;
    quantity: number;
    book: BooksCreateNestedOneWithoutInventoriesInput;
  };

  export type InventoriesUncheckedCreateInput = {
    id?: string;
    book_id: string;
    quantity: number;
  };

  export type InventoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    book?: BooksUpdateOneRequiredWithoutInventoriesNestedInput;
  };

  export type InventoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type InventoriesCreateManyInput = {
    id?: string;
    book_id: string;
    quantity: number;
  };

  export type InventoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type InventoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type CartsCreateInput = {
    id?: string;
    date?: Date | string;
    user: UsersCreateNestedOneWithoutCartsInput;
    cart_items?: CartItemsCreateNestedManyWithoutCartInput;
  };

  export type CartsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    date?: Date | string;
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutCartInput;
  };

  export type CartsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutCartsNestedInput;
    cart_items?: CartItemsUpdateManyWithoutCartNestedInput;
  };

  export type CartsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: CartItemsUncheckedUpdateManyWithoutCartNestedInput;
  };

  export type CartsCreateManyInput = {
    id?: string;
    user_id: string;
    date?: Date | string;
  };

  export type CartsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartItemsCreateInput = {
    id?: string;
    quantity: number;
    cart: CartsCreateNestedOneWithoutCart_itemsInput;
    book: BooksCreateNestedOneWithoutCart_itemsInput;
  };

  export type CartItemsUncheckedCreateInput = {
    id?: string;
    cart_id: string;
    book_id: string;
    quantity: number;
  };

  export type CartItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    cart?: CartsUpdateOneRequiredWithoutCart_itemsNestedInput;
    book?: BooksUpdateOneRequiredWithoutCart_itemsNestedInput;
  };

  export type CartItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cart_id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type CartItemsCreateManyInput = {
    id?: string;
    cart_id: string;
    book_id: string;
    quantity: number;
  };

  export type CartItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type CartItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cart_id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type ReviewsCreateInput = {
    id?: string;
    text: string;
    rating: number;
    date?: Date | string;
    user: UsersCreateNestedOneWithoutReviewsInput;
    book: BooksCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    book_id: string;
    text: string;
    rating: number;
    date?: Date | string;
  };

  export type ReviewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput;
    book?: BooksUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewsCreateManyInput = {
    id?: string;
    user_id: string;
    book_id: string;
    text: string;
    rating: number;
    date?: Date | string;
  };

  export type ReviewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrdersCreateInput = {
    id?: string;
    total_price: number;
    shipping_address: string;
    payment_method: string;
    date?: Date | string;
    status?: $Enums.OrderStatus;
    user: UsersCreateNestedOneWithoutOrdersInput;
    order_items?: OrderItemsCreateNestedManyWithoutOrderInput;
  };

  export type OrdersUncheckedCreateInput = {
    id?: string;
    user_id: string;
    total_price: number;
    shipping_address: string;
    payment_method: string;
    date?: Date | string;
    status?: $Enums.OrderStatus;
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_price?: FloatFieldUpdateOperationsInput | number;
    shipping_address?: StringFieldUpdateOperationsInput | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: OrderItemsUpdateManyWithoutOrderNestedInput;
  };

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_price?: FloatFieldUpdateOperationsInput | number;
    shipping_address?: StringFieldUpdateOperationsInput | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrdersCreateManyInput = {
    id?: string;
    user_id: string;
    total_price: number;
    shipping_address: string;
    payment_method: string;
    date?: Date | string;
    status?: $Enums.OrderStatus;
  };

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_price?: FloatFieldUpdateOperationsInput | number;
    shipping_address?: StringFieldUpdateOperationsInput | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
  };

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_price?: FloatFieldUpdateOperationsInput | number;
    shipping_address?: StringFieldUpdateOperationsInput | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
  };

  export type OrderItemsCreateInput = {
    id?: string;
    quantity: number;
    order: OrdersCreateNestedOneWithoutOrder_itemsInput;
    book: BooksCreateNestedOneWithoutOrder_itemsInput;
  };

  export type OrderItemsUncheckedCreateInput = {
    id?: string;
    order_id: string;
    book_id: string;
    quantity: number;
  };

  export type OrderItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    order?: OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput;
    book?: BooksUpdateOneRequiredWithoutOrder_itemsNestedInput;
  };

  export type OrderItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type OrderItemsCreateManyInput = {
    id?: string;
    order_id: string;
    book_id: string;
    quantity: number;
  };

  export type OrderItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type OrderItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CartsListRelationFilter = {
    every?: CartsWhereInput;
    some?: CartsWhereInput;
    none?: CartsWhereInput;
  };

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput;
    some?: ReviewsWhereInput;
    none?: ReviewsWhereInput;
  };

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput;
    some?: OrdersWhereInput;
    none?: OrdersWhereInput;
  };

  export type CartsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
  };

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
  };

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type AuthorsScalarRelationFilter = {
    is?: AuthorsWhereInput;
    isNot?: AuthorsWhereInput;
  };

  export type BookCategoriesListRelationFilter = {
    every?: BookCategoriesWhereInput;
    some?: BookCategoriesWhereInput;
    none?: BookCategoriesWhereInput;
  };

  export type BookImagesListRelationFilter = {
    every?: BookImagesWhereInput;
    some?: BookImagesWhereInput;
    none?: BookImagesWhereInput;
  };

  export type InventoriesNullableScalarRelationFilter = {
    is?: InventoriesWhereInput | null;
    isNot?: InventoriesWhereInput | null;
  };

  export type CartItemsListRelationFilter = {
    every?: CartItemsWhereInput;
    some?: CartItemsWhereInput;
    none?: CartItemsWhereInput;
  };

  export type OrderItemsListRelationFilter = {
    every?: OrderItemsWhereInput;
    some?: OrderItemsWhereInput;
    none?: OrderItemsWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type BookCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BookImagesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CartItemsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BooksCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    author_id?: SortOrder;
    price?: SortOrder;
    description?: SortOrder;
    publisher?: SortOrder;
    publication_year?: SortOrder;
  };

  export type BooksAvgOrderByAggregateInput = {
    price?: SortOrder;
    publication_year?: SortOrder;
  };

  export type BooksMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    author_id?: SortOrder;
    price?: SortOrder;
    description?: SortOrder;
    publisher?: SortOrder;
    publication_year?: SortOrder;
  };

  export type BooksMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    author_id?: SortOrder;
    price?: SortOrder;
    description?: SortOrder;
    publisher?: SortOrder;
    publication_year?: SortOrder;
  };

  export type BooksSumOrderByAggregateInput = {
    price?: SortOrder;
    publication_year?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type BooksListRelationFilter = {
    every?: BooksWhereInput;
    some?: BooksWhereInput;
    none?: BooksWhereInput;
  };

  export type BooksOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AuthorsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
  };

  export type AuthorsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
  };

  export type AuthorsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
  };

  export type CategoriesNullableScalarRelationFilter = {
    is?: CategoriesWhereInput | null;
    isNot?: CategoriesWhereInput | null;
  };

  export type CategoriesListRelationFilter = {
    every?: CategoriesWhereInput;
    some?: CategoriesWhereInput;
    none?: CategoriesWhereInput;
  };

  export type CategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    parent_id?: SortOrder;
    description?: SortOrder;
  };

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    parent_id?: SortOrder;
    description?: SortOrder;
  };

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    parent_id?: SortOrder;
    description?: SortOrder;
  };

  export type BooksScalarRelationFilter = {
    is?: BooksWhereInput;
    isNot?: BooksWhereInput;
  };

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput;
    isNot?: CategoriesWhereInput;
  };

  export type BookCategoriesBook_idCategory_idCompoundUniqueInput = {
    book_id: string;
    category_id: string;
  };

  export type BookCategoriesCountOrderByAggregateInput = {
    book_id?: SortOrder;
    category_id?: SortOrder;
  };

  export type BookCategoriesMaxOrderByAggregateInput = {
    book_id?: SortOrder;
    category_id?: SortOrder;
  };

  export type BookCategoriesMinOrderByAggregateInput = {
    book_id?: SortOrder;
    category_id?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type BookImagesCountOrderByAggregateInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    image_url?: SortOrder;
    is_primary?: SortOrder;
  };

  export type BookImagesMaxOrderByAggregateInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    image_url?: SortOrder;
    is_primary?: SortOrder;
  };

  export type BookImagesMinOrderByAggregateInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    image_url?: SortOrder;
    is_primary?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type InventoriesCountOrderByAggregateInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
  };

  export type InventoriesAvgOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type InventoriesMaxOrderByAggregateInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
  };

  export type InventoriesMinOrderByAggregateInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
  };

  export type InventoriesSumOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput;
    isNot?: UsersWhereInput;
  };

  export type CartsCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    date?: SortOrder;
  };

  export type CartsMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    date?: SortOrder;
  };

  export type CartsMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    date?: SortOrder;
  };

  export type CartsScalarRelationFilter = {
    is?: CartsWhereInput;
    isNot?: CartsWhereInput;
  };

  export type CartItemsCountOrderByAggregateInput = {
    id?: SortOrder;
    cart_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
  };

  export type CartItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type CartItemsMaxOrderByAggregateInput = {
    id?: SortOrder;
    cart_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
  };

  export type CartItemsMinOrderByAggregateInput = {
    id?: SortOrder;
    cart_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
  };

  export type CartItemsSumOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    date?: SortOrder;
  };

  export type ReviewsAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    date?: SortOrder;
  };

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    text?: SortOrder;
    rating?: SortOrder;
    date?: SortOrder;
  };

  export type ReviewsSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrderStatus[]
      | ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
  };

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    total_price?: SortOrder;
    shipping_address?: SortOrder;
    payment_method?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
  };

  export type OrdersAvgOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    total_price?: SortOrder;
    shipping_address?: SortOrder;
    payment_method?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
  };

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    total_price?: SortOrder;
    shipping_address?: SortOrder;
    payment_method?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
  };

  export type OrdersSumOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrderStatus[]
      | ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.OrderStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>;
  };

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput;
    isNot?: OrdersWhereInput;
  };

  export type OrderItemsCountOrderByAggregateInput = {
    id?: SortOrder;
    order_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
  };

  export type OrderItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type OrderItemsMaxOrderByAggregateInput = {
    id?: SortOrder;
    order_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
  };

  export type OrderItemsMinOrderByAggregateInput = {
    id?: SortOrder;
    order_id?: SortOrder;
    book_id?: SortOrder;
    quantity?: SortOrder;
  };

  export type OrderItemsSumOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type CartsCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
      | CartsCreateWithoutUserInput[]
      | CartsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CartsCreateOrConnectWithoutUserInput
      | CartsCreateOrConnectWithoutUserInput[];
    createMany?: CartsCreateManyUserInputEnvelope;
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
  };

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ReviewsCreateWithoutUserInput,
          ReviewsUncheckedCreateWithoutUserInput
        >
      | ReviewsCreateWithoutUserInput[]
      | ReviewsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewsCreateOrConnectWithoutUserInput
      | ReviewsCreateOrConnectWithoutUserInput[];
    createMany?: ReviewsCreateManyUserInputEnvelope;
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
  };

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
      | OrdersCreateWithoutUserInput[]
      | OrdersUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrdersCreateOrConnectWithoutUserInput
      | OrdersCreateOrConnectWithoutUserInput[];
    createMany?: OrdersCreateManyUserInputEnvelope;
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
  };

  export type CartsUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
      | CartsCreateWithoutUserInput[]
      | CartsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CartsCreateOrConnectWithoutUserInput
      | CartsCreateOrConnectWithoutUserInput[];
    createMany?: CartsCreateManyUserInputEnvelope;
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
  };

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ReviewsCreateWithoutUserInput,
          ReviewsUncheckedCreateWithoutUserInput
        >
      | ReviewsCreateWithoutUserInput[]
      | ReviewsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewsCreateOrConnectWithoutUserInput
      | ReviewsCreateOrConnectWithoutUserInput[];
    createMany?: ReviewsCreateManyUserInputEnvelope;
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
  };

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
      | OrdersCreateWithoutUserInput[]
      | OrdersUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrdersCreateOrConnectWithoutUserInput
      | OrdersCreateOrConnectWithoutUserInput[];
    createMany?: OrdersCreateManyUserInputEnvelope;
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CartsUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
      | CartsCreateWithoutUserInput[]
      | CartsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CartsCreateOrConnectWithoutUserInput
      | CartsCreateOrConnectWithoutUserInput[];
    upsert?:
      | CartsUpsertWithWhereUniqueWithoutUserInput
      | CartsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CartsCreateManyUserInputEnvelope;
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
    update?:
      | CartsUpdateWithWhereUniqueWithoutUserInput
      | CartsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CartsUpdateManyWithWhereWithoutUserInput
      | CartsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[];
  };

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ReviewsCreateWithoutUserInput,
          ReviewsUncheckedCreateWithoutUserInput
        >
      | ReviewsCreateWithoutUserInput[]
      | ReviewsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewsCreateOrConnectWithoutUserInput
      | ReviewsCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReviewsUpsertWithWhereUniqueWithoutUserInput
      | ReviewsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReviewsCreateManyUserInputEnvelope;
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    update?:
      | ReviewsUpdateWithWhereUniqueWithoutUserInput
      | ReviewsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReviewsUpdateManyWithWhereWithoutUserInput
      | ReviewsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[];
  };

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
      | OrdersCreateWithoutUserInput[]
      | OrdersUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrdersCreateOrConnectWithoutUserInput
      | OrdersCreateOrConnectWithoutUserInput[];
    upsert?:
      | OrdersUpsertWithWhereUniqueWithoutUserInput
      | OrdersUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OrdersCreateManyUserInputEnvelope;
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
    update?:
      | OrdersUpdateWithWhereUniqueWithoutUserInput
      | OrdersUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OrdersUpdateManyWithWhereWithoutUserInput
      | OrdersUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[];
  };

  export type CartsUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
      | CartsCreateWithoutUserInput[]
      | CartsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CartsCreateOrConnectWithoutUserInput
      | CartsCreateOrConnectWithoutUserInput[];
    upsert?:
      | CartsUpsertWithWhereUniqueWithoutUserInput
      | CartsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CartsCreateManyUserInputEnvelope;
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[];
    update?:
      | CartsUpdateWithWhereUniqueWithoutUserInput
      | CartsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CartsUpdateManyWithWhereWithoutUserInput
      | CartsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[];
  };

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ReviewsCreateWithoutUserInput,
          ReviewsUncheckedCreateWithoutUserInput
        >
      | ReviewsCreateWithoutUserInput[]
      | ReviewsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewsCreateOrConnectWithoutUserInput
      | ReviewsCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReviewsUpsertWithWhereUniqueWithoutUserInput
      | ReviewsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReviewsCreateManyUserInputEnvelope;
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    update?:
      | ReviewsUpdateWithWhereUniqueWithoutUserInput
      | ReviewsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReviewsUpdateManyWithWhereWithoutUserInput
      | ReviewsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[];
  };

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
      | OrdersCreateWithoutUserInput[]
      | OrdersUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrdersCreateOrConnectWithoutUserInput
      | OrdersCreateOrConnectWithoutUserInput[];
    upsert?:
      | OrdersUpsertWithWhereUniqueWithoutUserInput
      | OrdersUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OrdersCreateManyUserInputEnvelope;
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[];
    update?:
      | OrdersUpdateWithWhereUniqueWithoutUserInput
      | OrdersUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OrdersUpdateManyWithWhereWithoutUserInput
      | OrdersUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[];
  };

  export type AuthorsCreateNestedOneWithoutBooksInput = {
    create?: XOR<
      AuthorsCreateWithoutBooksInput,
      AuthorsUncheckedCreateWithoutBooksInput
    >;
    connectOrCreate?: AuthorsCreateOrConnectWithoutBooksInput;
    connect?: AuthorsWhereUniqueInput;
  };

  export type BookCategoriesCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          BookCategoriesCreateWithoutBookInput,
          BookCategoriesUncheckedCreateWithoutBookInput
        >
      | BookCategoriesCreateWithoutBookInput[]
      | BookCategoriesUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookCategoriesCreateOrConnectWithoutBookInput
      | BookCategoriesCreateOrConnectWithoutBookInput[];
    createMany?: BookCategoriesCreateManyBookInputEnvelope;
    connect?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
  };

  export type BookImagesCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          BookImagesCreateWithoutBookInput,
          BookImagesUncheckedCreateWithoutBookInput
        >
      | BookImagesCreateWithoutBookInput[]
      | BookImagesUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookImagesCreateOrConnectWithoutBookInput
      | BookImagesCreateOrConnectWithoutBookInput[];
    createMany?: BookImagesCreateManyBookInputEnvelope;
    connect?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
  };

  export type InventoriesCreateNestedOneWithoutBookInput = {
    create?: XOR<
      InventoriesCreateWithoutBookInput,
      InventoriesUncheckedCreateWithoutBookInput
    >;
    connectOrCreate?: InventoriesCreateOrConnectWithoutBookInput;
    connect?: InventoriesWhereUniqueInput;
  };

  export type ReviewsCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          ReviewsCreateWithoutBookInput,
          ReviewsUncheckedCreateWithoutBookInput
        >
      | ReviewsCreateWithoutBookInput[]
      | ReviewsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | ReviewsCreateOrConnectWithoutBookInput
      | ReviewsCreateOrConnectWithoutBookInput[];
    createMany?: ReviewsCreateManyBookInputEnvelope;
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
  };

  export type CartItemsCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          CartItemsCreateWithoutBookInput,
          CartItemsUncheckedCreateWithoutBookInput
        >
      | CartItemsCreateWithoutBookInput[]
      | CartItemsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | CartItemsCreateOrConnectWithoutBookInput
      | CartItemsCreateOrConnectWithoutBookInput[];
    createMany?: CartItemsCreateManyBookInputEnvelope;
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
  };

  export type OrderItemsCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          OrderItemsCreateWithoutBookInput,
          OrderItemsUncheckedCreateWithoutBookInput
        >
      | OrderItemsCreateWithoutBookInput[]
      | OrderItemsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | OrderItemsCreateOrConnectWithoutBookInput
      | OrderItemsCreateOrConnectWithoutBookInput[];
    createMany?: OrderItemsCreateManyBookInputEnvelope;
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
  };

  export type BookCategoriesUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          BookCategoriesCreateWithoutBookInput,
          BookCategoriesUncheckedCreateWithoutBookInput
        >
      | BookCategoriesCreateWithoutBookInput[]
      | BookCategoriesUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookCategoriesCreateOrConnectWithoutBookInput
      | BookCategoriesCreateOrConnectWithoutBookInput[];
    createMany?: BookCategoriesCreateManyBookInputEnvelope;
    connect?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
  };

  export type BookImagesUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          BookImagesCreateWithoutBookInput,
          BookImagesUncheckedCreateWithoutBookInput
        >
      | BookImagesCreateWithoutBookInput[]
      | BookImagesUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookImagesCreateOrConnectWithoutBookInput
      | BookImagesCreateOrConnectWithoutBookInput[];
    createMany?: BookImagesCreateManyBookInputEnvelope;
    connect?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
  };

  export type InventoriesUncheckedCreateNestedOneWithoutBookInput = {
    create?: XOR<
      InventoriesCreateWithoutBookInput,
      InventoriesUncheckedCreateWithoutBookInput
    >;
    connectOrCreate?: InventoriesCreateOrConnectWithoutBookInput;
    connect?: InventoriesWhereUniqueInput;
  };

  export type ReviewsUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          ReviewsCreateWithoutBookInput,
          ReviewsUncheckedCreateWithoutBookInput
        >
      | ReviewsCreateWithoutBookInput[]
      | ReviewsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | ReviewsCreateOrConnectWithoutBookInput
      | ReviewsCreateOrConnectWithoutBookInput[];
    createMany?: ReviewsCreateManyBookInputEnvelope;
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
  };

  export type CartItemsUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          CartItemsCreateWithoutBookInput,
          CartItemsUncheckedCreateWithoutBookInput
        >
      | CartItemsCreateWithoutBookInput[]
      | CartItemsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | CartItemsCreateOrConnectWithoutBookInput
      | CartItemsCreateOrConnectWithoutBookInput[];
    createMany?: CartItemsCreateManyBookInputEnvelope;
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
  };

  export type OrderItemsUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          OrderItemsCreateWithoutBookInput,
          OrderItemsUncheckedCreateWithoutBookInput
        >
      | OrderItemsCreateWithoutBookInput[]
      | OrderItemsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | OrderItemsCreateOrConnectWithoutBookInput
      | OrderItemsCreateOrConnectWithoutBookInput[];
    createMany?: OrderItemsCreateManyBookInputEnvelope;
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type AuthorsUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<
      AuthorsCreateWithoutBooksInput,
      AuthorsUncheckedCreateWithoutBooksInput
    >;
    connectOrCreate?: AuthorsCreateOrConnectWithoutBooksInput;
    upsert?: AuthorsUpsertWithoutBooksInput;
    connect?: AuthorsWhereUniqueInput;
    update?: XOR<
      XOR<
        AuthorsUpdateToOneWithWhereWithoutBooksInput,
        AuthorsUpdateWithoutBooksInput
      >,
      AuthorsUncheckedUpdateWithoutBooksInput
    >;
  };

  export type BookCategoriesUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          BookCategoriesCreateWithoutBookInput,
          BookCategoriesUncheckedCreateWithoutBookInput
        >
      | BookCategoriesCreateWithoutBookInput[]
      | BookCategoriesUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookCategoriesCreateOrConnectWithoutBookInput
      | BookCategoriesCreateOrConnectWithoutBookInput[];
    upsert?:
      | BookCategoriesUpsertWithWhereUniqueWithoutBookInput
      | BookCategoriesUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: BookCategoriesCreateManyBookInputEnvelope;
    set?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    disconnect?:
      | BookCategoriesWhereUniqueInput
      | BookCategoriesWhereUniqueInput[];
    delete?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    connect?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    update?:
      | BookCategoriesUpdateWithWhereUniqueWithoutBookInput
      | BookCategoriesUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | BookCategoriesUpdateManyWithWhereWithoutBookInput
      | BookCategoriesUpdateManyWithWhereWithoutBookInput[];
    deleteMany?:
      | BookCategoriesScalarWhereInput
      | BookCategoriesScalarWhereInput[];
  };

  export type BookImagesUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          BookImagesCreateWithoutBookInput,
          BookImagesUncheckedCreateWithoutBookInput
        >
      | BookImagesCreateWithoutBookInput[]
      | BookImagesUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookImagesCreateOrConnectWithoutBookInput
      | BookImagesCreateOrConnectWithoutBookInput[];
    upsert?:
      | BookImagesUpsertWithWhereUniqueWithoutBookInput
      | BookImagesUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: BookImagesCreateManyBookInputEnvelope;
    set?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
    disconnect?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
    delete?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
    connect?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
    update?:
      | BookImagesUpdateWithWhereUniqueWithoutBookInput
      | BookImagesUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | BookImagesUpdateManyWithWhereWithoutBookInput
      | BookImagesUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: BookImagesScalarWhereInput | BookImagesScalarWhereInput[];
  };

  export type InventoriesUpdateOneWithoutBookNestedInput = {
    create?: XOR<
      InventoriesCreateWithoutBookInput,
      InventoriesUncheckedCreateWithoutBookInput
    >;
    connectOrCreate?: InventoriesCreateOrConnectWithoutBookInput;
    upsert?: InventoriesUpsertWithoutBookInput;
    disconnect?: InventoriesWhereInput | boolean;
    delete?: InventoriesWhereInput | boolean;
    connect?: InventoriesWhereUniqueInput;
    update?: XOR<
      XOR<
        InventoriesUpdateToOneWithWhereWithoutBookInput,
        InventoriesUpdateWithoutBookInput
      >,
      InventoriesUncheckedUpdateWithoutBookInput
    >;
  };

  export type ReviewsUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          ReviewsCreateWithoutBookInput,
          ReviewsUncheckedCreateWithoutBookInput
        >
      | ReviewsCreateWithoutBookInput[]
      | ReviewsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | ReviewsCreateOrConnectWithoutBookInput
      | ReviewsCreateOrConnectWithoutBookInput[];
    upsert?:
      | ReviewsUpsertWithWhereUniqueWithoutBookInput
      | ReviewsUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: ReviewsCreateManyBookInputEnvelope;
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    update?:
      | ReviewsUpdateWithWhereUniqueWithoutBookInput
      | ReviewsUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | ReviewsUpdateManyWithWhereWithoutBookInput
      | ReviewsUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[];
  };

  export type CartItemsUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          CartItemsCreateWithoutBookInput,
          CartItemsUncheckedCreateWithoutBookInput
        >
      | CartItemsCreateWithoutBookInput[]
      | CartItemsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | CartItemsCreateOrConnectWithoutBookInput
      | CartItemsCreateOrConnectWithoutBookInput[];
    upsert?:
      | CartItemsUpsertWithWhereUniqueWithoutBookInput
      | CartItemsUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: CartItemsCreateManyBookInputEnvelope;
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    update?:
      | CartItemsUpdateWithWhereUniqueWithoutBookInput
      | CartItemsUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | CartItemsUpdateManyWithWhereWithoutBookInput
      | CartItemsUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[];
  };

  export type OrderItemsUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          OrderItemsCreateWithoutBookInput,
          OrderItemsUncheckedCreateWithoutBookInput
        >
      | OrderItemsCreateWithoutBookInput[]
      | OrderItemsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | OrderItemsCreateOrConnectWithoutBookInput
      | OrderItemsCreateOrConnectWithoutBookInput[];
    upsert?:
      | OrderItemsUpsertWithWhereUniqueWithoutBookInput
      | OrderItemsUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: OrderItemsCreateManyBookInputEnvelope;
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    update?:
      | OrderItemsUpdateWithWhereUniqueWithoutBookInput
      | OrderItemsUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | OrderItemsUpdateManyWithWhereWithoutBookInput
      | OrderItemsUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[];
  };

  export type BookCategoriesUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          BookCategoriesCreateWithoutBookInput,
          BookCategoriesUncheckedCreateWithoutBookInput
        >
      | BookCategoriesCreateWithoutBookInput[]
      | BookCategoriesUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookCategoriesCreateOrConnectWithoutBookInput
      | BookCategoriesCreateOrConnectWithoutBookInput[];
    upsert?:
      | BookCategoriesUpsertWithWhereUniqueWithoutBookInput
      | BookCategoriesUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: BookCategoriesCreateManyBookInputEnvelope;
    set?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    disconnect?:
      | BookCategoriesWhereUniqueInput
      | BookCategoriesWhereUniqueInput[];
    delete?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    connect?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    update?:
      | BookCategoriesUpdateWithWhereUniqueWithoutBookInput
      | BookCategoriesUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | BookCategoriesUpdateManyWithWhereWithoutBookInput
      | BookCategoriesUpdateManyWithWhereWithoutBookInput[];
    deleteMany?:
      | BookCategoriesScalarWhereInput
      | BookCategoriesScalarWhereInput[];
  };

  export type BookImagesUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          BookImagesCreateWithoutBookInput,
          BookImagesUncheckedCreateWithoutBookInput
        >
      | BookImagesCreateWithoutBookInput[]
      | BookImagesUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookImagesCreateOrConnectWithoutBookInput
      | BookImagesCreateOrConnectWithoutBookInput[];
    upsert?:
      | BookImagesUpsertWithWhereUniqueWithoutBookInput
      | BookImagesUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: BookImagesCreateManyBookInputEnvelope;
    set?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
    disconnect?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
    delete?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
    connect?: BookImagesWhereUniqueInput | BookImagesWhereUniqueInput[];
    update?:
      | BookImagesUpdateWithWhereUniqueWithoutBookInput
      | BookImagesUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | BookImagesUpdateManyWithWhereWithoutBookInput
      | BookImagesUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: BookImagesScalarWhereInput | BookImagesScalarWhereInput[];
  };

  export type InventoriesUncheckedUpdateOneWithoutBookNestedInput = {
    create?: XOR<
      InventoriesCreateWithoutBookInput,
      InventoriesUncheckedCreateWithoutBookInput
    >;
    connectOrCreate?: InventoriesCreateOrConnectWithoutBookInput;
    upsert?: InventoriesUpsertWithoutBookInput;
    disconnect?: InventoriesWhereInput | boolean;
    delete?: InventoriesWhereInput | boolean;
    connect?: InventoriesWhereUniqueInput;
    update?: XOR<
      XOR<
        InventoriesUpdateToOneWithWhereWithoutBookInput,
        InventoriesUpdateWithoutBookInput
      >,
      InventoriesUncheckedUpdateWithoutBookInput
    >;
  };

  export type ReviewsUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          ReviewsCreateWithoutBookInput,
          ReviewsUncheckedCreateWithoutBookInput
        >
      | ReviewsCreateWithoutBookInput[]
      | ReviewsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | ReviewsCreateOrConnectWithoutBookInput
      | ReviewsCreateOrConnectWithoutBookInput[];
    upsert?:
      | ReviewsUpsertWithWhereUniqueWithoutBookInput
      | ReviewsUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: ReviewsCreateManyBookInputEnvelope;
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[];
    update?:
      | ReviewsUpdateWithWhereUniqueWithoutBookInput
      | ReviewsUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | ReviewsUpdateManyWithWhereWithoutBookInput
      | ReviewsUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[];
  };

  export type CartItemsUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          CartItemsCreateWithoutBookInput,
          CartItemsUncheckedCreateWithoutBookInput
        >
      | CartItemsCreateWithoutBookInput[]
      | CartItemsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | CartItemsCreateOrConnectWithoutBookInput
      | CartItemsCreateOrConnectWithoutBookInput[];
    upsert?:
      | CartItemsUpsertWithWhereUniqueWithoutBookInput
      | CartItemsUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: CartItemsCreateManyBookInputEnvelope;
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    update?:
      | CartItemsUpdateWithWhereUniqueWithoutBookInput
      | CartItemsUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | CartItemsUpdateManyWithWhereWithoutBookInput
      | CartItemsUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[];
  };

  export type OrderItemsUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          OrderItemsCreateWithoutBookInput,
          OrderItemsUncheckedCreateWithoutBookInput
        >
      | OrderItemsCreateWithoutBookInput[]
      | OrderItemsUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | OrderItemsCreateOrConnectWithoutBookInput
      | OrderItemsCreateOrConnectWithoutBookInput[];
    upsert?:
      | OrderItemsUpsertWithWhereUniqueWithoutBookInput
      | OrderItemsUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: OrderItemsCreateManyBookInputEnvelope;
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    update?:
      | OrderItemsUpdateWithWhereUniqueWithoutBookInput
      | OrderItemsUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | OrderItemsUpdateManyWithWhereWithoutBookInput
      | OrderItemsUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[];
  };

  export type BooksCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          BooksCreateWithoutAuthorInput,
          BooksUncheckedCreateWithoutAuthorInput
        >
      | BooksCreateWithoutAuthorInput[]
      | BooksUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | BooksCreateOrConnectWithoutAuthorInput
      | BooksCreateOrConnectWithoutAuthorInput[];
    createMany?: BooksCreateManyAuthorInputEnvelope;
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
  };

  export type BooksUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          BooksCreateWithoutAuthorInput,
          BooksUncheckedCreateWithoutAuthorInput
        >
      | BooksCreateWithoutAuthorInput[]
      | BooksUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | BooksCreateOrConnectWithoutAuthorInput
      | BooksCreateOrConnectWithoutAuthorInput[];
    createMany?: BooksCreateManyAuthorInputEnvelope;
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
  };

  export type BooksUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          BooksCreateWithoutAuthorInput,
          BooksUncheckedCreateWithoutAuthorInput
        >
      | BooksCreateWithoutAuthorInput[]
      | BooksUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | BooksCreateOrConnectWithoutAuthorInput
      | BooksCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | BooksUpsertWithWhereUniqueWithoutAuthorInput
      | BooksUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: BooksCreateManyAuthorInputEnvelope;
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
    update?:
      | BooksUpdateWithWhereUniqueWithoutAuthorInput
      | BooksUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | BooksUpdateManyWithWhereWithoutAuthorInput
      | BooksUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[];
  };

  export type BooksUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          BooksCreateWithoutAuthorInput,
          BooksUncheckedCreateWithoutAuthorInput
        >
      | BooksCreateWithoutAuthorInput[]
      | BooksUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | BooksCreateOrConnectWithoutAuthorInput
      | BooksCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | BooksUpsertWithWhereUniqueWithoutAuthorInput
      | BooksUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: BooksCreateManyAuthorInputEnvelope;
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[];
    update?:
      | BooksUpdateWithWhereUniqueWithoutAuthorInput
      | BooksUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | BooksUpdateManyWithWhereWithoutAuthorInput
      | BooksUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[];
  };

  export type CategoriesCreateNestedOneWithoutChildrenInput = {
    create?: XOR<
      CategoriesCreateWithoutChildrenInput,
      CategoriesUncheckedCreateWithoutChildrenInput
    >;
    connectOrCreate?: CategoriesCreateOrConnectWithoutChildrenInput;
    connect?: CategoriesWhereUniqueInput;
  };

  export type CategoriesCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          CategoriesCreateWithoutParentInput,
          CategoriesUncheckedCreateWithoutParentInput
        >
      | CategoriesCreateWithoutParentInput[]
      | CategoriesUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CategoriesCreateOrConnectWithoutParentInput
      | CategoriesCreateOrConnectWithoutParentInput[];
    createMany?: CategoriesCreateManyParentInputEnvelope;
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
  };

  export type BookCategoriesCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          BookCategoriesCreateWithoutCategoryInput,
          BookCategoriesUncheckedCreateWithoutCategoryInput
        >
      | BookCategoriesCreateWithoutCategoryInput[]
      | BookCategoriesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | BookCategoriesCreateOrConnectWithoutCategoryInput
      | BookCategoriesCreateOrConnectWithoutCategoryInput[];
    createMany?: BookCategoriesCreateManyCategoryInputEnvelope;
    connect?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
  };

  export type CategoriesUncheckedCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          CategoriesCreateWithoutParentInput,
          CategoriesUncheckedCreateWithoutParentInput
        >
      | CategoriesCreateWithoutParentInput[]
      | CategoriesUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CategoriesCreateOrConnectWithoutParentInput
      | CategoriesCreateOrConnectWithoutParentInput[];
    createMany?: CategoriesCreateManyParentInputEnvelope;
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
  };

  export type BookCategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          BookCategoriesCreateWithoutCategoryInput,
          BookCategoriesUncheckedCreateWithoutCategoryInput
        >
      | BookCategoriesCreateWithoutCategoryInput[]
      | BookCategoriesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | BookCategoriesCreateOrConnectWithoutCategoryInput
      | BookCategoriesCreateOrConnectWithoutCategoryInput[];
    createMany?: BookCategoriesCreateManyCategoryInputEnvelope;
    connect?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
  };

  export type CategoriesUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<
      CategoriesCreateWithoutChildrenInput,
      CategoriesUncheckedCreateWithoutChildrenInput
    >;
    connectOrCreate?: CategoriesCreateOrConnectWithoutChildrenInput;
    upsert?: CategoriesUpsertWithoutChildrenInput;
    disconnect?: CategoriesWhereInput | boolean;
    delete?: CategoriesWhereInput | boolean;
    connect?: CategoriesWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoriesUpdateToOneWithWhereWithoutChildrenInput,
        CategoriesUpdateWithoutChildrenInput
      >,
      CategoriesUncheckedUpdateWithoutChildrenInput
    >;
  };

  export type CategoriesUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          CategoriesCreateWithoutParentInput,
          CategoriesUncheckedCreateWithoutParentInput
        >
      | CategoriesCreateWithoutParentInput[]
      | CategoriesUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CategoriesCreateOrConnectWithoutParentInput
      | CategoriesCreateOrConnectWithoutParentInput[];
    upsert?:
      | CategoriesUpsertWithWhereUniqueWithoutParentInput
      | CategoriesUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: CategoriesCreateManyParentInputEnvelope;
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
    update?:
      | CategoriesUpdateWithWhereUniqueWithoutParentInput
      | CategoriesUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | CategoriesUpdateManyWithWhereWithoutParentInput
      | CategoriesUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[];
  };

  export type BookCategoriesUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          BookCategoriesCreateWithoutCategoryInput,
          BookCategoriesUncheckedCreateWithoutCategoryInput
        >
      | BookCategoriesCreateWithoutCategoryInput[]
      | BookCategoriesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | BookCategoriesCreateOrConnectWithoutCategoryInput
      | BookCategoriesCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | BookCategoriesUpsertWithWhereUniqueWithoutCategoryInput
      | BookCategoriesUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: BookCategoriesCreateManyCategoryInputEnvelope;
    set?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    disconnect?:
      | BookCategoriesWhereUniqueInput
      | BookCategoriesWhereUniqueInput[];
    delete?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    connect?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    update?:
      | BookCategoriesUpdateWithWhereUniqueWithoutCategoryInput
      | BookCategoriesUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | BookCategoriesUpdateManyWithWhereWithoutCategoryInput
      | BookCategoriesUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?:
      | BookCategoriesScalarWhereInput
      | BookCategoriesScalarWhereInput[];
  };

  export type CategoriesUncheckedUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          CategoriesCreateWithoutParentInput,
          CategoriesUncheckedCreateWithoutParentInput
        >
      | CategoriesCreateWithoutParentInput[]
      | CategoriesUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CategoriesCreateOrConnectWithoutParentInput
      | CategoriesCreateOrConnectWithoutParentInput[];
    upsert?:
      | CategoriesUpsertWithWhereUniqueWithoutParentInput
      | CategoriesUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: CategoriesCreateManyParentInputEnvelope;
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[];
    update?:
      | CategoriesUpdateWithWhereUniqueWithoutParentInput
      | CategoriesUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | CategoriesUpdateManyWithWhereWithoutParentInput
      | CategoriesUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[];
  };

  export type BookCategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          BookCategoriesCreateWithoutCategoryInput,
          BookCategoriesUncheckedCreateWithoutCategoryInput
        >
      | BookCategoriesCreateWithoutCategoryInput[]
      | BookCategoriesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | BookCategoriesCreateOrConnectWithoutCategoryInput
      | BookCategoriesCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | BookCategoriesUpsertWithWhereUniqueWithoutCategoryInput
      | BookCategoriesUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: BookCategoriesCreateManyCategoryInputEnvelope;
    set?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    disconnect?:
      | BookCategoriesWhereUniqueInput
      | BookCategoriesWhereUniqueInput[];
    delete?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    connect?: BookCategoriesWhereUniqueInput | BookCategoriesWhereUniqueInput[];
    update?:
      | BookCategoriesUpdateWithWhereUniqueWithoutCategoryInput
      | BookCategoriesUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | BookCategoriesUpdateManyWithWhereWithoutCategoryInput
      | BookCategoriesUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?:
      | BookCategoriesScalarWhereInput
      | BookCategoriesScalarWhereInput[];
  };

  export type BooksCreateNestedOneWithoutBook_categoriesInput = {
    create?: XOR<
      BooksCreateWithoutBook_categoriesInput,
      BooksUncheckedCreateWithoutBook_categoriesInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutBook_categoriesInput;
    connect?: BooksWhereUniqueInput;
  };

  export type CategoriesCreateNestedOneWithoutBook_categoriesInput = {
    create?: XOR<
      CategoriesCreateWithoutBook_categoriesInput,
      CategoriesUncheckedCreateWithoutBook_categoriesInput
    >;
    connectOrCreate?: CategoriesCreateOrConnectWithoutBook_categoriesInput;
    connect?: CategoriesWhereUniqueInput;
  };

  export type BooksUpdateOneRequiredWithoutBook_categoriesNestedInput = {
    create?: XOR<
      BooksCreateWithoutBook_categoriesInput,
      BooksUncheckedCreateWithoutBook_categoriesInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutBook_categoriesInput;
    upsert?: BooksUpsertWithoutBook_categoriesInput;
    connect?: BooksWhereUniqueInput;
    update?: XOR<
      XOR<
        BooksUpdateToOneWithWhereWithoutBook_categoriesInput,
        BooksUpdateWithoutBook_categoriesInput
      >,
      BooksUncheckedUpdateWithoutBook_categoriesInput
    >;
  };

  export type CategoriesUpdateOneRequiredWithoutBook_categoriesNestedInput = {
    create?: XOR<
      CategoriesCreateWithoutBook_categoriesInput,
      CategoriesUncheckedCreateWithoutBook_categoriesInput
    >;
    connectOrCreate?: CategoriesCreateOrConnectWithoutBook_categoriesInput;
    upsert?: CategoriesUpsertWithoutBook_categoriesInput;
    connect?: CategoriesWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoriesUpdateToOneWithWhereWithoutBook_categoriesInput,
        CategoriesUpdateWithoutBook_categoriesInput
      >,
      CategoriesUncheckedUpdateWithoutBook_categoriesInput
    >;
  };

  export type BooksCreateNestedOneWithoutBook_imagesInput = {
    create?: XOR<
      BooksCreateWithoutBook_imagesInput,
      BooksUncheckedCreateWithoutBook_imagesInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutBook_imagesInput;
    connect?: BooksWhereUniqueInput;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type BooksUpdateOneRequiredWithoutBook_imagesNestedInput = {
    create?: XOR<
      BooksCreateWithoutBook_imagesInput,
      BooksUncheckedCreateWithoutBook_imagesInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutBook_imagesInput;
    upsert?: BooksUpsertWithoutBook_imagesInput;
    connect?: BooksWhereUniqueInput;
    update?: XOR<
      XOR<
        BooksUpdateToOneWithWhereWithoutBook_imagesInput,
        BooksUpdateWithoutBook_imagesInput
      >,
      BooksUncheckedUpdateWithoutBook_imagesInput
    >;
  };

  export type BooksCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<
      BooksCreateWithoutInventoriesInput,
      BooksUncheckedCreateWithoutInventoriesInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutInventoriesInput;
    connect?: BooksWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BooksUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<
      BooksCreateWithoutInventoriesInput,
      BooksUncheckedCreateWithoutInventoriesInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutInventoriesInput;
    upsert?: BooksUpsertWithoutInventoriesInput;
    connect?: BooksWhereUniqueInput;
    update?: XOR<
      XOR<
        BooksUpdateToOneWithWhereWithoutInventoriesInput,
        BooksUpdateWithoutInventoriesInput
      >,
      BooksUncheckedUpdateWithoutInventoriesInput
    >;
  };

  export type UsersCreateNestedOneWithoutCartsInput = {
    create?: XOR<
      UsersCreateWithoutCartsInput,
      UsersUncheckedCreateWithoutCartsInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutCartsInput;
    connect?: UsersWhereUniqueInput;
  };

  export type CartItemsCreateNestedManyWithoutCartInput = {
    create?:
      | XOR<
          CartItemsCreateWithoutCartInput,
          CartItemsUncheckedCreateWithoutCartInput
        >
      | CartItemsCreateWithoutCartInput[]
      | CartItemsUncheckedCreateWithoutCartInput[];
    connectOrCreate?:
      | CartItemsCreateOrConnectWithoutCartInput
      | CartItemsCreateOrConnectWithoutCartInput[];
    createMany?: CartItemsCreateManyCartInputEnvelope;
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
  };

  export type CartItemsUncheckedCreateNestedManyWithoutCartInput = {
    create?:
      | XOR<
          CartItemsCreateWithoutCartInput,
          CartItemsUncheckedCreateWithoutCartInput
        >
      | CartItemsCreateWithoutCartInput[]
      | CartItemsUncheckedCreateWithoutCartInput[];
    connectOrCreate?:
      | CartItemsCreateOrConnectWithoutCartInput
      | CartItemsCreateOrConnectWithoutCartInput[];
    createMany?: CartItemsCreateManyCartInputEnvelope;
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
  };

  export type UsersUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<
      UsersCreateWithoutCartsInput,
      UsersUncheckedCreateWithoutCartsInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutCartsInput;
    upsert?: UsersUpsertWithoutCartsInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutCartsInput,
        UsersUpdateWithoutCartsInput
      >,
      UsersUncheckedUpdateWithoutCartsInput
    >;
  };

  export type CartItemsUpdateManyWithoutCartNestedInput = {
    create?:
      | XOR<
          CartItemsCreateWithoutCartInput,
          CartItemsUncheckedCreateWithoutCartInput
        >
      | CartItemsCreateWithoutCartInput[]
      | CartItemsUncheckedCreateWithoutCartInput[];
    connectOrCreate?:
      | CartItemsCreateOrConnectWithoutCartInput
      | CartItemsCreateOrConnectWithoutCartInput[];
    upsert?:
      | CartItemsUpsertWithWhereUniqueWithoutCartInput
      | CartItemsUpsertWithWhereUniqueWithoutCartInput[];
    createMany?: CartItemsCreateManyCartInputEnvelope;
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    update?:
      | CartItemsUpdateWithWhereUniqueWithoutCartInput
      | CartItemsUpdateWithWhereUniqueWithoutCartInput[];
    updateMany?:
      | CartItemsUpdateManyWithWhereWithoutCartInput
      | CartItemsUpdateManyWithWhereWithoutCartInput[];
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[];
  };

  export type CartItemsUncheckedUpdateManyWithoutCartNestedInput = {
    create?:
      | XOR<
          CartItemsCreateWithoutCartInput,
          CartItemsUncheckedCreateWithoutCartInput
        >
      | CartItemsCreateWithoutCartInput[]
      | CartItemsUncheckedCreateWithoutCartInput[];
    connectOrCreate?:
      | CartItemsCreateOrConnectWithoutCartInput
      | CartItemsCreateOrConnectWithoutCartInput[];
    upsert?:
      | CartItemsUpsertWithWhereUniqueWithoutCartInput
      | CartItemsUpsertWithWhereUniqueWithoutCartInput[];
    createMany?: CartItemsCreateManyCartInputEnvelope;
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[];
    update?:
      | CartItemsUpdateWithWhereUniqueWithoutCartInput
      | CartItemsUpdateWithWhereUniqueWithoutCartInput[];
    updateMany?:
      | CartItemsUpdateManyWithWhereWithoutCartInput
      | CartItemsUpdateManyWithWhereWithoutCartInput[];
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[];
  };

  export type CartsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<
      CartsCreateWithoutCart_itemsInput,
      CartsUncheckedCreateWithoutCart_itemsInput
    >;
    connectOrCreate?: CartsCreateOrConnectWithoutCart_itemsInput;
    connect?: CartsWhereUniqueInput;
  };

  export type BooksCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<
      BooksCreateWithoutCart_itemsInput,
      BooksUncheckedCreateWithoutCart_itemsInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutCart_itemsInput;
    connect?: BooksWhereUniqueInput;
  };

  export type CartsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<
      CartsCreateWithoutCart_itemsInput,
      CartsUncheckedCreateWithoutCart_itemsInput
    >;
    connectOrCreate?: CartsCreateOrConnectWithoutCart_itemsInput;
    upsert?: CartsUpsertWithoutCart_itemsInput;
    connect?: CartsWhereUniqueInput;
    update?: XOR<
      XOR<
        CartsUpdateToOneWithWhereWithoutCart_itemsInput,
        CartsUpdateWithoutCart_itemsInput
      >,
      CartsUncheckedUpdateWithoutCart_itemsInput
    >;
  };

  export type BooksUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<
      BooksCreateWithoutCart_itemsInput,
      BooksUncheckedCreateWithoutCart_itemsInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutCart_itemsInput;
    upsert?: BooksUpsertWithoutCart_itemsInput;
    connect?: BooksWhereUniqueInput;
    update?: XOR<
      XOR<
        BooksUpdateToOneWithWhereWithoutCart_itemsInput,
        BooksUpdateWithoutCart_itemsInput
      >,
      BooksUncheckedUpdateWithoutCart_itemsInput
    >;
  };

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<
      UsersCreateWithoutReviewsInput,
      UsersUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput;
    connect?: UsersWhereUniqueInput;
  };

  export type BooksCreateNestedOneWithoutReviewsInput = {
    create?: XOR<
      BooksCreateWithoutReviewsInput,
      BooksUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutReviewsInput;
    connect?: BooksWhereUniqueInput;
  };

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<
      UsersCreateWithoutReviewsInput,
      UsersUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput;
    upsert?: UsersUpsertWithoutReviewsInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutReviewsInput,
        UsersUpdateWithoutReviewsInput
      >,
      UsersUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type BooksUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<
      BooksCreateWithoutReviewsInput,
      BooksUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutReviewsInput;
    upsert?: BooksUpsertWithoutReviewsInput;
    connect?: BooksWhereUniqueInput;
    update?: XOR<
      XOR<
        BooksUpdateToOneWithWhereWithoutReviewsInput,
        BooksUpdateWithoutReviewsInput
      >,
      BooksUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<
      UsersCreateWithoutOrdersInput,
      UsersUncheckedCreateWithoutOrdersInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput;
    connect?: UsersWhereUniqueInput;
  };

  export type OrderItemsCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<
          OrderItemsCreateWithoutOrderInput,
          OrderItemsUncheckedCreateWithoutOrderInput
        >
      | OrderItemsCreateWithoutOrderInput[]
      | OrderItemsUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderItemsCreateOrConnectWithoutOrderInput
      | OrderItemsCreateOrConnectWithoutOrderInput[];
    createMany?: OrderItemsCreateManyOrderInputEnvelope;
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
  };

  export type OrderItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<
          OrderItemsCreateWithoutOrderInput,
          OrderItemsUncheckedCreateWithoutOrderInput
        >
      | OrderItemsCreateWithoutOrderInput[]
      | OrderItemsUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderItemsCreateOrConnectWithoutOrderInput
      | OrderItemsCreateOrConnectWithoutOrderInput[];
    createMany?: OrderItemsCreateManyOrderInputEnvelope;
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
  };

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
  };

  export type UsersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<
      UsersCreateWithoutOrdersInput,
      UsersUncheckedCreateWithoutOrdersInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput;
    upsert?: UsersUpsertWithoutOrdersInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutOrdersInput,
        UsersUpdateWithoutOrdersInput
      >,
      UsersUncheckedUpdateWithoutOrdersInput
    >;
  };

  export type OrderItemsUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<
          OrderItemsCreateWithoutOrderInput,
          OrderItemsUncheckedCreateWithoutOrderInput
        >
      | OrderItemsCreateWithoutOrderInput[]
      | OrderItemsUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderItemsCreateOrConnectWithoutOrderInput
      | OrderItemsCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderItemsUpsertWithWhereUniqueWithoutOrderInput
      | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderItemsCreateManyOrderInputEnvelope;
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    update?:
      | OrderItemsUpdateWithWhereUniqueWithoutOrderInput
      | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderItemsUpdateManyWithWhereWithoutOrderInput
      | OrderItemsUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[];
  };

  export type OrderItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<
          OrderItemsCreateWithoutOrderInput,
          OrderItemsUncheckedCreateWithoutOrderInput
        >
      | OrderItemsCreateWithoutOrderInput[]
      | OrderItemsUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderItemsCreateOrConnectWithoutOrderInput
      | OrderItemsCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderItemsUpsertWithWhereUniqueWithoutOrderInput
      | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderItemsCreateManyOrderInputEnvelope;
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[];
    update?:
      | OrderItemsUpdateWithWhereUniqueWithoutOrderInput
      | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderItemsUpdateManyWithWhereWithoutOrderInput
      | OrderItemsUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[];
  };

  export type OrdersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<
      OrdersCreateWithoutOrder_itemsInput,
      OrdersUncheckedCreateWithoutOrder_itemsInput
    >;
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput;
    connect?: OrdersWhereUniqueInput;
  };

  export type BooksCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<
      BooksCreateWithoutOrder_itemsInput,
      BooksUncheckedCreateWithoutOrder_itemsInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutOrder_itemsInput;
    connect?: BooksWhereUniqueInput;
  };

  export type OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<
      OrdersCreateWithoutOrder_itemsInput,
      OrdersUncheckedCreateWithoutOrder_itemsInput
    >;
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput;
    upsert?: OrdersUpsertWithoutOrder_itemsInput;
    connect?: OrdersWhereUniqueInput;
    update?: XOR<
      XOR<
        OrdersUpdateToOneWithWhereWithoutOrder_itemsInput,
        OrdersUpdateWithoutOrder_itemsInput
      >,
      OrdersUncheckedUpdateWithoutOrder_itemsInput
    >;
  };

  export type BooksUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<
      BooksCreateWithoutOrder_itemsInput,
      BooksUncheckedCreateWithoutOrder_itemsInput
    >;
    connectOrCreate?: BooksCreateOrConnectWithoutOrder_itemsInput;
    upsert?: BooksUpsertWithoutOrder_itemsInput;
    connect?: BooksWhereUniqueInput;
    update?: XOR<
      XOR<
        BooksUpdateToOneWithWhereWithoutOrder_itemsInput,
        BooksUpdateWithoutOrder_itemsInput
      >,
      BooksUncheckedUpdateWithoutOrder_itemsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrderStatus[]
      | ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
  };

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.OrderStatus[]
        | ListEnumOrderStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.OrderStatus[]
        | ListEnumOrderStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.OrderStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumOrderStatusFilter<$PrismaModel>;
      _max?: NestedEnumOrderStatusFilter<$PrismaModel>;
    };

  export type CartsCreateWithoutUserInput = {
    id?: string;
    date?: Date | string;
    cart_items?: CartItemsCreateNestedManyWithoutCartInput;
  };

  export type CartsUncheckedCreateWithoutUserInput = {
    id?: string;
    date?: Date | string;
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutCartInput;
  };

  export type CartsCreateOrConnectWithoutUserInput = {
    where: CartsWhereUniqueInput;
    create: XOR<
      CartsCreateWithoutUserInput,
      CartsUncheckedCreateWithoutUserInput
    >;
  };

  export type CartsCreateManyUserInputEnvelope = {
    data: CartsCreateManyUserInput | CartsCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ReviewsCreateWithoutUserInput = {
    id?: string;
    text: string;
    rating: number;
    date?: Date | string;
    book: BooksCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: string;
    book_id: string;
    text: string;
    rating: number;
    date?: Date | string;
  };

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput;
    create: XOR<
      ReviewsCreateWithoutUserInput,
      ReviewsUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type OrdersCreateWithoutUserInput = {
    id?: string;
    total_price: number;
    shipping_address: string;
    payment_method: string;
    date?: Date | string;
    status?: $Enums.OrderStatus;
    order_items?: OrderItemsCreateNestedManyWithoutOrderInput;
  };

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: string;
    total_price: number;
    shipping_address: string;
    payment_method: string;
    date?: Date | string;
    status?: $Enums.OrderStatus;
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput;
    create: XOR<
      OrdersCreateWithoutUserInput,
      OrdersUncheckedCreateWithoutUserInput
    >;
  };

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CartsUpsertWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput;
    update: XOR<
      CartsUpdateWithoutUserInput,
      CartsUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CartsCreateWithoutUserInput,
      CartsUncheckedCreateWithoutUserInput
    >;
  };

  export type CartsUpdateWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput;
    data: XOR<
      CartsUpdateWithoutUserInput,
      CartsUncheckedUpdateWithoutUserInput
    >;
  };

  export type CartsUpdateManyWithWhereWithoutUserInput = {
    where: CartsScalarWhereInput;
    data: XOR<
      CartsUpdateManyMutationInput,
      CartsUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CartsScalarWhereInput = {
    AND?: CartsScalarWhereInput | CartsScalarWhereInput[];
    OR?: CartsScalarWhereInput[];
    NOT?: CartsScalarWhereInput | CartsScalarWhereInput[];
    id?: StringFilter<'Carts'> | string;
    user_id?: StringFilter<'Carts'> | string;
    date?: DateTimeFilter<'Carts'> | Date | string;
  };

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput;
    update: XOR<
      ReviewsUpdateWithoutUserInput,
      ReviewsUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ReviewsCreateWithoutUserInput,
      ReviewsUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput;
    data: XOR<
      ReviewsUpdateWithoutUserInput,
      ReviewsUncheckedUpdateWithoutUserInput
    >;
  };

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput;
    data: XOR<
      ReviewsUpdateManyMutationInput,
      ReviewsUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[];
    OR?: ReviewsScalarWhereInput[];
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[];
    id?: StringFilter<'Reviews'> | string;
    user_id?: StringFilter<'Reviews'> | string;
    book_id?: StringFilter<'Reviews'> | string;
    text?: StringFilter<'Reviews'> | string;
    rating?: IntFilter<'Reviews'> | number;
    date?: DateTimeFilter<'Reviews'> | Date | string;
  };

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput;
    update: XOR<
      OrdersUpdateWithoutUserInput,
      OrdersUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      OrdersCreateWithoutUserInput,
      OrdersUncheckedCreateWithoutUserInput
    >;
  };

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput;
    data: XOR<
      OrdersUpdateWithoutUserInput,
      OrdersUncheckedUpdateWithoutUserInput
    >;
  };

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput;
    data: XOR<
      OrdersUpdateManyMutationInput,
      OrdersUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[];
    OR?: OrdersScalarWhereInput[];
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[];
    id?: StringFilter<'Orders'> | string;
    user_id?: StringFilter<'Orders'> | string;
    total_price?: FloatFilter<'Orders'> | number;
    shipping_address?: StringFilter<'Orders'> | string;
    payment_method?: StringFilter<'Orders'> | string;
    date?: DateTimeFilter<'Orders'> | Date | string;
    status?: EnumOrderStatusFilter<'Orders'> | $Enums.OrderStatus;
  };

  export type AuthorsCreateWithoutBooksInput = {
    id?: string;
    name: string;
    description?: string | null;
  };

  export type AuthorsUncheckedCreateWithoutBooksInput = {
    id?: string;
    name: string;
    description?: string | null;
  };

  export type AuthorsCreateOrConnectWithoutBooksInput = {
    where: AuthorsWhereUniqueInput;
    create: XOR<
      AuthorsCreateWithoutBooksInput,
      AuthorsUncheckedCreateWithoutBooksInput
    >;
  };

  export type BookCategoriesCreateWithoutBookInput = {
    category: CategoriesCreateNestedOneWithoutBook_categoriesInput;
  };

  export type BookCategoriesUncheckedCreateWithoutBookInput = {
    category_id: string;
  };

  export type BookCategoriesCreateOrConnectWithoutBookInput = {
    where: BookCategoriesWhereUniqueInput;
    create: XOR<
      BookCategoriesCreateWithoutBookInput,
      BookCategoriesUncheckedCreateWithoutBookInput
    >;
  };

  export type BookCategoriesCreateManyBookInputEnvelope = {
    data:
      | BookCategoriesCreateManyBookInput
      | BookCategoriesCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type BookImagesCreateWithoutBookInput = {
    id?: string;
    image_url: string;
    is_primary?: boolean;
  };

  export type BookImagesUncheckedCreateWithoutBookInput = {
    id?: string;
    image_url: string;
    is_primary?: boolean;
  };

  export type BookImagesCreateOrConnectWithoutBookInput = {
    where: BookImagesWhereUniqueInput;
    create: XOR<
      BookImagesCreateWithoutBookInput,
      BookImagesUncheckedCreateWithoutBookInput
    >;
  };

  export type BookImagesCreateManyBookInputEnvelope = {
    data: BookImagesCreateManyBookInput | BookImagesCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type InventoriesCreateWithoutBookInput = {
    id?: string;
    quantity: number;
  };

  export type InventoriesUncheckedCreateWithoutBookInput = {
    id?: string;
    quantity: number;
  };

  export type InventoriesCreateOrConnectWithoutBookInput = {
    where: InventoriesWhereUniqueInput;
    create: XOR<
      InventoriesCreateWithoutBookInput,
      InventoriesUncheckedCreateWithoutBookInput
    >;
  };

  export type ReviewsCreateWithoutBookInput = {
    id?: string;
    text: string;
    rating: number;
    date?: Date | string;
    user: UsersCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewsUncheckedCreateWithoutBookInput = {
    id?: string;
    user_id: string;
    text: string;
    rating: number;
    date?: Date | string;
  };

  export type ReviewsCreateOrConnectWithoutBookInput = {
    where: ReviewsWhereUniqueInput;
    create: XOR<
      ReviewsCreateWithoutBookInput,
      ReviewsUncheckedCreateWithoutBookInput
    >;
  };

  export type ReviewsCreateManyBookInputEnvelope = {
    data: ReviewsCreateManyBookInput | ReviewsCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type CartItemsCreateWithoutBookInput = {
    id?: string;
    quantity: number;
    cart: CartsCreateNestedOneWithoutCart_itemsInput;
  };

  export type CartItemsUncheckedCreateWithoutBookInput = {
    id?: string;
    cart_id: string;
    quantity: number;
  };

  export type CartItemsCreateOrConnectWithoutBookInput = {
    where: CartItemsWhereUniqueInput;
    create: XOR<
      CartItemsCreateWithoutBookInput,
      CartItemsUncheckedCreateWithoutBookInput
    >;
  };

  export type CartItemsCreateManyBookInputEnvelope = {
    data: CartItemsCreateManyBookInput | CartItemsCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type OrderItemsCreateWithoutBookInput = {
    id?: string;
    quantity: number;
    order: OrdersCreateNestedOneWithoutOrder_itemsInput;
  };

  export type OrderItemsUncheckedCreateWithoutBookInput = {
    id?: string;
    order_id: string;
    quantity: number;
  };

  export type OrderItemsCreateOrConnectWithoutBookInput = {
    where: OrderItemsWhereUniqueInput;
    create: XOR<
      OrderItemsCreateWithoutBookInput,
      OrderItemsUncheckedCreateWithoutBookInput
    >;
  };

  export type OrderItemsCreateManyBookInputEnvelope = {
    data: OrderItemsCreateManyBookInput | OrderItemsCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type AuthorsUpsertWithoutBooksInput = {
    update: XOR<
      AuthorsUpdateWithoutBooksInput,
      AuthorsUncheckedUpdateWithoutBooksInput
    >;
    create: XOR<
      AuthorsCreateWithoutBooksInput,
      AuthorsUncheckedCreateWithoutBooksInput
    >;
    where?: AuthorsWhereInput;
  };

  export type AuthorsUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorsWhereInput;
    data: XOR<
      AuthorsUpdateWithoutBooksInput,
      AuthorsUncheckedUpdateWithoutBooksInput
    >;
  };

  export type AuthorsUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthorsUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type BookCategoriesUpsertWithWhereUniqueWithoutBookInput = {
    where: BookCategoriesWhereUniqueInput;
    update: XOR<
      BookCategoriesUpdateWithoutBookInput,
      BookCategoriesUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      BookCategoriesCreateWithoutBookInput,
      BookCategoriesUncheckedCreateWithoutBookInput
    >;
  };

  export type BookCategoriesUpdateWithWhereUniqueWithoutBookInput = {
    where: BookCategoriesWhereUniqueInput;
    data: XOR<
      BookCategoriesUpdateWithoutBookInput,
      BookCategoriesUncheckedUpdateWithoutBookInput
    >;
  };

  export type BookCategoriesUpdateManyWithWhereWithoutBookInput = {
    where: BookCategoriesScalarWhereInput;
    data: XOR<
      BookCategoriesUpdateManyMutationInput,
      BookCategoriesUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type BookCategoriesScalarWhereInput = {
    AND?: BookCategoriesScalarWhereInput | BookCategoriesScalarWhereInput[];
    OR?: BookCategoriesScalarWhereInput[];
    NOT?: BookCategoriesScalarWhereInput | BookCategoriesScalarWhereInput[];
    book_id?: StringFilter<'BookCategories'> | string;
    category_id?: StringFilter<'BookCategories'> | string;
  };

  export type BookImagesUpsertWithWhereUniqueWithoutBookInput = {
    where: BookImagesWhereUniqueInput;
    update: XOR<
      BookImagesUpdateWithoutBookInput,
      BookImagesUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      BookImagesCreateWithoutBookInput,
      BookImagesUncheckedCreateWithoutBookInput
    >;
  };

  export type BookImagesUpdateWithWhereUniqueWithoutBookInput = {
    where: BookImagesWhereUniqueInput;
    data: XOR<
      BookImagesUpdateWithoutBookInput,
      BookImagesUncheckedUpdateWithoutBookInput
    >;
  };

  export type BookImagesUpdateManyWithWhereWithoutBookInput = {
    where: BookImagesScalarWhereInput;
    data: XOR<
      BookImagesUpdateManyMutationInput,
      BookImagesUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type BookImagesScalarWhereInput = {
    AND?: BookImagesScalarWhereInput | BookImagesScalarWhereInput[];
    OR?: BookImagesScalarWhereInput[];
    NOT?: BookImagesScalarWhereInput | BookImagesScalarWhereInput[];
    id?: StringFilter<'BookImages'> | string;
    book_id?: StringFilter<'BookImages'> | string;
    image_url?: StringFilter<'BookImages'> | string;
    is_primary?: BoolFilter<'BookImages'> | boolean;
  };

  export type InventoriesUpsertWithoutBookInput = {
    update: XOR<
      InventoriesUpdateWithoutBookInput,
      InventoriesUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      InventoriesCreateWithoutBookInput,
      InventoriesUncheckedCreateWithoutBookInput
    >;
    where?: InventoriesWhereInput;
  };

  export type InventoriesUpdateToOneWithWhereWithoutBookInput = {
    where?: InventoriesWhereInput;
    data: XOR<
      InventoriesUpdateWithoutBookInput,
      InventoriesUncheckedUpdateWithoutBookInput
    >;
  };

  export type InventoriesUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type InventoriesUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type ReviewsUpsertWithWhereUniqueWithoutBookInput = {
    where: ReviewsWhereUniqueInput;
    update: XOR<
      ReviewsUpdateWithoutBookInput,
      ReviewsUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      ReviewsCreateWithoutBookInput,
      ReviewsUncheckedCreateWithoutBookInput
    >;
  };

  export type ReviewsUpdateWithWhereUniqueWithoutBookInput = {
    where: ReviewsWhereUniqueInput;
    data: XOR<
      ReviewsUpdateWithoutBookInput,
      ReviewsUncheckedUpdateWithoutBookInput
    >;
  };

  export type ReviewsUpdateManyWithWhereWithoutBookInput = {
    where: ReviewsScalarWhereInput;
    data: XOR<
      ReviewsUpdateManyMutationInput,
      ReviewsUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type CartItemsUpsertWithWhereUniqueWithoutBookInput = {
    where: CartItemsWhereUniqueInput;
    update: XOR<
      CartItemsUpdateWithoutBookInput,
      CartItemsUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      CartItemsCreateWithoutBookInput,
      CartItemsUncheckedCreateWithoutBookInput
    >;
  };

  export type CartItemsUpdateWithWhereUniqueWithoutBookInput = {
    where: CartItemsWhereUniqueInput;
    data: XOR<
      CartItemsUpdateWithoutBookInput,
      CartItemsUncheckedUpdateWithoutBookInput
    >;
  };

  export type CartItemsUpdateManyWithWhereWithoutBookInput = {
    where: CartItemsScalarWhereInput;
    data: XOR<
      CartItemsUpdateManyMutationInput,
      CartItemsUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type CartItemsScalarWhereInput = {
    AND?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[];
    OR?: CartItemsScalarWhereInput[];
    NOT?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[];
    id?: StringFilter<'CartItems'> | string;
    cart_id?: StringFilter<'CartItems'> | string;
    book_id?: StringFilter<'CartItems'> | string;
    quantity?: IntFilter<'CartItems'> | number;
  };

  export type OrderItemsUpsertWithWhereUniqueWithoutBookInput = {
    where: OrderItemsWhereUniqueInput;
    update: XOR<
      OrderItemsUpdateWithoutBookInput,
      OrderItemsUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      OrderItemsCreateWithoutBookInput,
      OrderItemsUncheckedCreateWithoutBookInput
    >;
  };

  export type OrderItemsUpdateWithWhereUniqueWithoutBookInput = {
    where: OrderItemsWhereUniqueInput;
    data: XOR<
      OrderItemsUpdateWithoutBookInput,
      OrderItemsUncheckedUpdateWithoutBookInput
    >;
  };

  export type OrderItemsUpdateManyWithWhereWithoutBookInput = {
    where: OrderItemsScalarWhereInput;
    data: XOR<
      OrderItemsUpdateManyMutationInput,
      OrderItemsUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type OrderItemsScalarWhereInput = {
    AND?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[];
    OR?: OrderItemsScalarWhereInput[];
    NOT?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[];
    id?: StringFilter<'OrderItems'> | string;
    order_id?: StringFilter<'OrderItems'> | string;
    book_id?: StringFilter<'OrderItems'> | string;
    quantity?: IntFilter<'OrderItems'> | number;
  };

  export type BooksCreateWithoutAuthorInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    book_categories?: BookCategoriesCreateNestedManyWithoutBookInput;
    book_images?: BookImagesCreateNestedManyWithoutBookInput;
    inventories?: InventoriesCreateNestedOneWithoutBookInput;
    reviews?: ReviewsCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsCreateNestedManyWithoutBookInput;
  };

  export type BooksUncheckedCreateWithoutAuthorInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutBookInput;
    book_images?: BookImagesUncheckedCreateNestedManyWithoutBookInput;
    inventories?: InventoriesUncheckedCreateNestedOneWithoutBookInput;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BooksCreateOrConnectWithoutAuthorInput = {
    where: BooksWhereUniqueInput;
    create: XOR<
      BooksCreateWithoutAuthorInput,
      BooksUncheckedCreateWithoutAuthorInput
    >;
  };

  export type BooksCreateManyAuthorInputEnvelope = {
    data: BooksCreateManyAuthorInput | BooksCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type BooksUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BooksWhereUniqueInput;
    update: XOR<
      BooksUpdateWithoutAuthorInput,
      BooksUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      BooksCreateWithoutAuthorInput,
      BooksUncheckedCreateWithoutAuthorInput
    >;
  };

  export type BooksUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BooksWhereUniqueInput;
    data: XOR<
      BooksUpdateWithoutAuthorInput,
      BooksUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type BooksUpdateManyWithWhereWithoutAuthorInput = {
    where: BooksScalarWhereInput;
    data: XOR<
      BooksUpdateManyMutationInput,
      BooksUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type BooksScalarWhereInput = {
    AND?: BooksScalarWhereInput | BooksScalarWhereInput[];
    OR?: BooksScalarWhereInput[];
    NOT?: BooksScalarWhereInput | BooksScalarWhereInput[];
    id?: StringFilter<'Books'> | string;
    name?: StringFilter<'Books'> | string;
    author_id?: StringFilter<'Books'> | string;
    price?: FloatFilter<'Books'> | number;
    description?: StringNullableFilter<'Books'> | string | null;
    publisher?: StringNullableFilter<'Books'> | string | null;
    publication_year?: IntNullableFilter<'Books'> | number | null;
  };

  export type CategoriesCreateWithoutChildrenInput = {
    id?: string;
    name: string;
    description?: string | null;
    parent?: CategoriesCreateNestedOneWithoutChildrenInput;
    book_categories?: BookCategoriesCreateNestedManyWithoutCategoryInput;
  };

  export type CategoriesUncheckedCreateWithoutChildrenInput = {
    id?: string;
    name: string;
    parent_id?: string | null;
    description?: string | null;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoriesCreateOrConnectWithoutChildrenInput = {
    where: CategoriesWhereUniqueInput;
    create: XOR<
      CategoriesCreateWithoutChildrenInput,
      CategoriesUncheckedCreateWithoutChildrenInput
    >;
  };

  export type CategoriesCreateWithoutParentInput = {
    id?: string;
    name: string;
    description?: string | null;
    children?: CategoriesCreateNestedManyWithoutParentInput;
    book_categories?: BookCategoriesCreateNestedManyWithoutCategoryInput;
  };

  export type CategoriesUncheckedCreateWithoutParentInput = {
    id?: string;
    name: string;
    description?: string | null;
    children?: CategoriesUncheckedCreateNestedManyWithoutParentInput;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoriesCreateOrConnectWithoutParentInput = {
    where: CategoriesWhereUniqueInput;
    create: XOR<
      CategoriesCreateWithoutParentInput,
      CategoriesUncheckedCreateWithoutParentInput
    >;
  };

  export type CategoriesCreateManyParentInputEnvelope = {
    data: CategoriesCreateManyParentInput | CategoriesCreateManyParentInput[];
    skipDuplicates?: boolean;
  };

  export type BookCategoriesCreateWithoutCategoryInput = {
    book: BooksCreateNestedOneWithoutBook_categoriesInput;
  };

  export type BookCategoriesUncheckedCreateWithoutCategoryInput = {
    book_id: string;
  };

  export type BookCategoriesCreateOrConnectWithoutCategoryInput = {
    where: BookCategoriesWhereUniqueInput;
    create: XOR<
      BookCategoriesCreateWithoutCategoryInput,
      BookCategoriesUncheckedCreateWithoutCategoryInput
    >;
  };

  export type BookCategoriesCreateManyCategoryInputEnvelope = {
    data:
      | BookCategoriesCreateManyCategoryInput
      | BookCategoriesCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type CategoriesUpsertWithoutChildrenInput = {
    update: XOR<
      CategoriesUpdateWithoutChildrenInput,
      CategoriesUncheckedUpdateWithoutChildrenInput
    >;
    create: XOR<
      CategoriesCreateWithoutChildrenInput,
      CategoriesUncheckedCreateWithoutChildrenInput
    >;
    where?: CategoriesWhereInput;
  };

  export type CategoriesUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoriesWhereInput;
    data: XOR<
      CategoriesUpdateWithoutChildrenInput,
      CategoriesUncheckedUpdateWithoutChildrenInput
    >;
  };

  export type CategoriesUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    parent?: CategoriesUpdateOneWithoutChildrenNestedInput;
    book_categories?: BookCategoriesUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoriesUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoriesUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoriesWhereUniqueInput;
    update: XOR<
      CategoriesUpdateWithoutParentInput,
      CategoriesUncheckedUpdateWithoutParentInput
    >;
    create: XOR<
      CategoriesCreateWithoutParentInput,
      CategoriesUncheckedCreateWithoutParentInput
    >;
  };

  export type CategoriesUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoriesWhereUniqueInput;
    data: XOR<
      CategoriesUpdateWithoutParentInput,
      CategoriesUncheckedUpdateWithoutParentInput
    >;
  };

  export type CategoriesUpdateManyWithWhereWithoutParentInput = {
    where: CategoriesScalarWhereInput;
    data: XOR<
      CategoriesUpdateManyMutationInput,
      CategoriesUncheckedUpdateManyWithoutParentInput
    >;
  };

  export type CategoriesScalarWhereInput = {
    AND?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[];
    OR?: CategoriesScalarWhereInput[];
    NOT?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[];
    id?: StringFilter<'Categories'> | string;
    name?: StringFilter<'Categories'> | string;
    parent_id?: StringNullableFilter<'Categories'> | string | null;
    description?: StringNullableFilter<'Categories'> | string | null;
  };

  export type BookCategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BookCategoriesWhereUniqueInput;
    update: XOR<
      BookCategoriesUpdateWithoutCategoryInput,
      BookCategoriesUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      BookCategoriesCreateWithoutCategoryInput,
      BookCategoriesUncheckedCreateWithoutCategoryInput
    >;
  };

  export type BookCategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BookCategoriesWhereUniqueInput;
    data: XOR<
      BookCategoriesUpdateWithoutCategoryInput,
      BookCategoriesUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type BookCategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: BookCategoriesScalarWhereInput;
    data: XOR<
      BookCategoriesUpdateManyMutationInput,
      BookCategoriesUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type BooksCreateWithoutBook_categoriesInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    author: AuthorsCreateNestedOneWithoutBooksInput;
    book_images?: BookImagesCreateNestedManyWithoutBookInput;
    inventories?: InventoriesCreateNestedOneWithoutBookInput;
    reviews?: ReviewsCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsCreateNestedManyWithoutBookInput;
  };

  export type BooksUncheckedCreateWithoutBook_categoriesInput = {
    id?: string;
    name: string;
    author_id: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    book_images?: BookImagesUncheckedCreateNestedManyWithoutBookInput;
    inventories?: InventoriesUncheckedCreateNestedOneWithoutBookInput;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BooksCreateOrConnectWithoutBook_categoriesInput = {
    where: BooksWhereUniqueInput;
    create: XOR<
      BooksCreateWithoutBook_categoriesInput,
      BooksUncheckedCreateWithoutBook_categoriesInput
    >;
  };

  export type CategoriesCreateWithoutBook_categoriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    parent?: CategoriesCreateNestedOneWithoutChildrenInput;
    children?: CategoriesCreateNestedManyWithoutParentInput;
  };

  export type CategoriesUncheckedCreateWithoutBook_categoriesInput = {
    id?: string;
    name: string;
    parent_id?: string | null;
    description?: string | null;
    children?: CategoriesUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CategoriesCreateOrConnectWithoutBook_categoriesInput = {
    where: CategoriesWhereUniqueInput;
    create: XOR<
      CategoriesCreateWithoutBook_categoriesInput,
      CategoriesUncheckedCreateWithoutBook_categoriesInput
    >;
  };

  export type BooksUpsertWithoutBook_categoriesInput = {
    update: XOR<
      BooksUpdateWithoutBook_categoriesInput,
      BooksUncheckedUpdateWithoutBook_categoriesInput
    >;
    create: XOR<
      BooksCreateWithoutBook_categoriesInput,
      BooksUncheckedCreateWithoutBook_categoriesInput
    >;
    where?: BooksWhereInput;
  };

  export type BooksUpdateToOneWithWhereWithoutBook_categoriesInput = {
    where?: BooksWhereInput;
    data: XOR<
      BooksUpdateWithoutBook_categoriesInput,
      BooksUncheckedUpdateWithoutBook_categoriesInput
    >;
  };

  export type BooksUpdateWithoutBook_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    author?: AuthorsUpdateOneRequiredWithoutBooksNestedInput;
    book_images?: BookImagesUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUpdateManyWithoutBookNestedInput;
  };

  export type BooksUncheckedUpdateWithoutBook_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    book_images?: BookImagesUncheckedUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUncheckedUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUncheckedUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUncheckedUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type CategoriesUpsertWithoutBook_categoriesInput = {
    update: XOR<
      CategoriesUpdateWithoutBook_categoriesInput,
      CategoriesUncheckedUpdateWithoutBook_categoriesInput
    >;
    create: XOR<
      CategoriesCreateWithoutBook_categoriesInput,
      CategoriesUncheckedCreateWithoutBook_categoriesInput
    >;
    where?: CategoriesWhereInput;
  };

  export type CategoriesUpdateToOneWithWhereWithoutBook_categoriesInput = {
    where?: CategoriesWhereInput;
    data: XOR<
      CategoriesUpdateWithoutBook_categoriesInput,
      CategoriesUncheckedUpdateWithoutBook_categoriesInput
    >;
  };

  export type CategoriesUpdateWithoutBook_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    parent?: CategoriesUpdateOneWithoutChildrenNestedInput;
    children?: CategoriesUpdateManyWithoutParentNestedInput;
  };

  export type CategoriesUncheckedUpdateWithoutBook_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    children?: CategoriesUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type BooksCreateWithoutBook_imagesInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    author: AuthorsCreateNestedOneWithoutBooksInput;
    book_categories?: BookCategoriesCreateNestedManyWithoutBookInput;
    inventories?: InventoriesCreateNestedOneWithoutBookInput;
    reviews?: ReviewsCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsCreateNestedManyWithoutBookInput;
  };

  export type BooksUncheckedCreateWithoutBook_imagesInput = {
    id?: string;
    name: string;
    author_id: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutBookInput;
    inventories?: InventoriesUncheckedCreateNestedOneWithoutBookInput;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BooksCreateOrConnectWithoutBook_imagesInput = {
    where: BooksWhereUniqueInput;
    create: XOR<
      BooksCreateWithoutBook_imagesInput,
      BooksUncheckedCreateWithoutBook_imagesInput
    >;
  };

  export type BooksUpsertWithoutBook_imagesInput = {
    update: XOR<
      BooksUpdateWithoutBook_imagesInput,
      BooksUncheckedUpdateWithoutBook_imagesInput
    >;
    create: XOR<
      BooksCreateWithoutBook_imagesInput,
      BooksUncheckedCreateWithoutBook_imagesInput
    >;
    where?: BooksWhereInput;
  };

  export type BooksUpdateToOneWithWhereWithoutBook_imagesInput = {
    where?: BooksWhereInput;
    data: XOR<
      BooksUpdateWithoutBook_imagesInput,
      BooksUncheckedUpdateWithoutBook_imagesInput
    >;
  };

  export type BooksUpdateWithoutBook_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    author?: AuthorsUpdateOneRequiredWithoutBooksNestedInput;
    book_categories?: BookCategoriesUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUpdateManyWithoutBookNestedInput;
  };

  export type BooksUncheckedUpdateWithoutBook_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUncheckedUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUncheckedUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUncheckedUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type BooksCreateWithoutInventoriesInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    author: AuthorsCreateNestedOneWithoutBooksInput;
    book_categories?: BookCategoriesCreateNestedManyWithoutBookInput;
    book_images?: BookImagesCreateNestedManyWithoutBookInput;
    reviews?: ReviewsCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsCreateNestedManyWithoutBookInput;
  };

  export type BooksUncheckedCreateWithoutInventoriesInput = {
    id?: string;
    name: string;
    author_id: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutBookInput;
    book_images?: BookImagesUncheckedCreateNestedManyWithoutBookInput;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BooksCreateOrConnectWithoutInventoriesInput = {
    where: BooksWhereUniqueInput;
    create: XOR<
      BooksCreateWithoutInventoriesInput,
      BooksUncheckedCreateWithoutInventoriesInput
    >;
  };

  export type BooksUpsertWithoutInventoriesInput = {
    update: XOR<
      BooksUpdateWithoutInventoriesInput,
      BooksUncheckedUpdateWithoutInventoriesInput
    >;
    create: XOR<
      BooksCreateWithoutInventoriesInput,
      BooksUncheckedCreateWithoutInventoriesInput
    >;
    where?: BooksWhereInput;
  };

  export type BooksUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: BooksWhereInput;
    data: XOR<
      BooksUpdateWithoutInventoriesInput,
      BooksUncheckedUpdateWithoutInventoriesInput
    >;
  };

  export type BooksUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    author?: AuthorsUpdateOneRequiredWithoutBooksNestedInput;
    book_categories?: BookCategoriesUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUpdateManyWithoutBookNestedInput;
    reviews?: ReviewsUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUpdateManyWithoutBookNestedInput;
  };

  export type BooksUncheckedUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUncheckedUpdateManyWithoutBookNestedInput;
    reviews?: ReviewsUncheckedUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUncheckedUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type UsersCreateWithoutCartsInput = {
    id?: string;
    email: string;
    name: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    reviews?: ReviewsCreateNestedManyWithoutUserInput;
    orders?: OrdersCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutCartsInput = {
    id?: string;
    email: string;
    name: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput;
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutCartsInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutCartsInput,
      UsersUncheckedCreateWithoutCartsInput
    >;
  };

  export type CartItemsCreateWithoutCartInput = {
    id?: string;
    quantity: number;
    book: BooksCreateNestedOneWithoutCart_itemsInput;
  };

  export type CartItemsUncheckedCreateWithoutCartInput = {
    id?: string;
    book_id: string;
    quantity: number;
  };

  export type CartItemsCreateOrConnectWithoutCartInput = {
    where: CartItemsWhereUniqueInput;
    create: XOR<
      CartItemsCreateWithoutCartInput,
      CartItemsUncheckedCreateWithoutCartInput
    >;
  };

  export type CartItemsCreateManyCartInputEnvelope = {
    data: CartItemsCreateManyCartInput | CartItemsCreateManyCartInput[];
    skipDuplicates?: boolean;
  };

  export type UsersUpsertWithoutCartsInput = {
    update: XOR<
      UsersUpdateWithoutCartsInput,
      UsersUncheckedUpdateWithoutCartsInput
    >;
    create: XOR<
      UsersCreateWithoutCartsInput,
      UsersUncheckedCreateWithoutCartsInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutCartsInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutCartsInput,
      UsersUncheckedUpdateWithoutCartsInput
    >;
  };

  export type UsersUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewsUpdateManyWithoutUserNestedInput;
    orders?: OrdersUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput;
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type CartItemsUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemsWhereUniqueInput;
    update: XOR<
      CartItemsUpdateWithoutCartInput,
      CartItemsUncheckedUpdateWithoutCartInput
    >;
    create: XOR<
      CartItemsCreateWithoutCartInput,
      CartItemsUncheckedCreateWithoutCartInput
    >;
  };

  export type CartItemsUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemsWhereUniqueInput;
    data: XOR<
      CartItemsUpdateWithoutCartInput,
      CartItemsUncheckedUpdateWithoutCartInput
    >;
  };

  export type CartItemsUpdateManyWithWhereWithoutCartInput = {
    where: CartItemsScalarWhereInput;
    data: XOR<
      CartItemsUpdateManyMutationInput,
      CartItemsUncheckedUpdateManyWithoutCartInput
    >;
  };

  export type CartsCreateWithoutCart_itemsInput = {
    id?: string;
    date?: Date | string;
    user: UsersCreateNestedOneWithoutCartsInput;
  };

  export type CartsUncheckedCreateWithoutCart_itemsInput = {
    id?: string;
    user_id: string;
    date?: Date | string;
  };

  export type CartsCreateOrConnectWithoutCart_itemsInput = {
    where: CartsWhereUniqueInput;
    create: XOR<
      CartsCreateWithoutCart_itemsInput,
      CartsUncheckedCreateWithoutCart_itemsInput
    >;
  };

  export type BooksCreateWithoutCart_itemsInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    author: AuthorsCreateNestedOneWithoutBooksInput;
    book_categories?: BookCategoriesCreateNestedManyWithoutBookInput;
    book_images?: BookImagesCreateNestedManyWithoutBookInput;
    inventories?: InventoriesCreateNestedOneWithoutBookInput;
    reviews?: ReviewsCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsCreateNestedManyWithoutBookInput;
  };

  export type BooksUncheckedCreateWithoutCart_itemsInput = {
    id?: string;
    name: string;
    author_id: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutBookInput;
    book_images?: BookImagesUncheckedCreateNestedManyWithoutBookInput;
    inventories?: InventoriesUncheckedCreateNestedOneWithoutBookInput;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BooksCreateOrConnectWithoutCart_itemsInput = {
    where: BooksWhereUniqueInput;
    create: XOR<
      BooksCreateWithoutCart_itemsInput,
      BooksUncheckedCreateWithoutCart_itemsInput
    >;
  };

  export type CartsUpsertWithoutCart_itemsInput = {
    update: XOR<
      CartsUpdateWithoutCart_itemsInput,
      CartsUncheckedUpdateWithoutCart_itemsInput
    >;
    create: XOR<
      CartsCreateWithoutCart_itemsInput,
      CartsUncheckedCreateWithoutCart_itemsInput
    >;
    where?: CartsWhereInput;
  };

  export type CartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: CartsWhereInput;
    data: XOR<
      CartsUpdateWithoutCart_itemsInput,
      CartsUncheckedUpdateWithoutCart_itemsInput
    >;
  };

  export type CartsUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutCartsNestedInput;
  };

  export type CartsUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BooksUpsertWithoutCart_itemsInput = {
    update: XOR<
      BooksUpdateWithoutCart_itemsInput,
      BooksUncheckedUpdateWithoutCart_itemsInput
    >;
    create: XOR<
      BooksCreateWithoutCart_itemsInput,
      BooksUncheckedCreateWithoutCart_itemsInput
    >;
    where?: BooksWhereInput;
  };

  export type BooksUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: BooksWhereInput;
    data: XOR<
      BooksUpdateWithoutCart_itemsInput,
      BooksUncheckedUpdateWithoutCart_itemsInput
    >;
  };

  export type BooksUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    author?: AuthorsUpdateOneRequiredWithoutBooksNestedInput;
    book_categories?: BookCategoriesUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUpdateManyWithoutBookNestedInput;
  };

  export type BooksUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUncheckedUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUncheckedUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUncheckedUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type UsersCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    name: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    carts?: CartsCreateNestedManyWithoutUserInput;
    orders?: OrdersCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    name: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    carts?: CartsUncheckedCreateNestedManyWithoutUserInput;
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutReviewsInput,
      UsersUncheckedCreateWithoutReviewsInput
    >;
  };

  export type BooksCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    author: AuthorsCreateNestedOneWithoutBooksInput;
    book_categories?: BookCategoriesCreateNestedManyWithoutBookInput;
    book_images?: BookImagesCreateNestedManyWithoutBookInput;
    inventories?: InventoriesCreateNestedOneWithoutBookInput;
    cart_items?: CartItemsCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsCreateNestedManyWithoutBookInput;
  };

  export type BooksUncheckedCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    author_id: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutBookInput;
    book_images?: BookImagesUncheckedCreateNestedManyWithoutBookInput;
    inventories?: InventoriesUncheckedCreateNestedOneWithoutBookInput;
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutBookInput;
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BooksCreateOrConnectWithoutReviewsInput = {
    where: BooksWhereUniqueInput;
    create: XOR<
      BooksCreateWithoutReviewsInput,
      BooksUncheckedCreateWithoutReviewsInput
    >;
  };

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<
      UsersUpdateWithoutReviewsInput,
      UsersUncheckedUpdateWithoutReviewsInput
    >;
    create: XOR<
      UsersCreateWithoutReviewsInput,
      UsersUncheckedCreateWithoutReviewsInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutReviewsInput,
      UsersUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type UsersUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    carts?: CartsUpdateManyWithoutUserNestedInput;
    orders?: OrdersUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    carts?: CartsUncheckedUpdateManyWithoutUserNestedInput;
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type BooksUpsertWithoutReviewsInput = {
    update: XOR<
      BooksUpdateWithoutReviewsInput,
      BooksUncheckedUpdateWithoutReviewsInput
    >;
    create: XOR<
      BooksCreateWithoutReviewsInput,
      BooksUncheckedCreateWithoutReviewsInput
    >;
    where?: BooksWhereInput;
  };

  export type BooksUpdateToOneWithWhereWithoutReviewsInput = {
    where?: BooksWhereInput;
    data: XOR<
      BooksUpdateWithoutReviewsInput,
      BooksUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type BooksUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    author?: AuthorsUpdateOneRequiredWithoutBooksNestedInput;
    book_categories?: BookCategoriesUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUpdateOneWithoutBookNestedInput;
    cart_items?: CartItemsUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUpdateManyWithoutBookNestedInput;
  };

  export type BooksUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUncheckedUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUncheckedUpdateOneWithoutBookNestedInput;
    cart_items?: CartItemsUncheckedUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type UsersCreateWithoutOrdersInput = {
    id?: string;
    email: string;
    name: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    carts?: CartsCreateNestedManyWithoutUserInput;
    reviews?: ReviewsCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: string;
    email: string;
    name: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    carts?: CartsUncheckedCreateNestedManyWithoutUserInput;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutOrdersInput,
      UsersUncheckedCreateWithoutOrdersInput
    >;
  };

  export type OrderItemsCreateWithoutOrderInput = {
    id?: string;
    quantity: number;
    book: BooksCreateNestedOneWithoutOrder_itemsInput;
  };

  export type OrderItemsUncheckedCreateWithoutOrderInput = {
    id?: string;
    book_id: string;
    quantity: number;
  };

  export type OrderItemsCreateOrConnectWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput;
    create: XOR<
      OrderItemsCreateWithoutOrderInput,
      OrderItemsUncheckedCreateWithoutOrderInput
    >;
  };

  export type OrderItemsCreateManyOrderInputEnvelope = {
    data: OrderItemsCreateManyOrderInput | OrderItemsCreateManyOrderInput[];
    skipDuplicates?: boolean;
  };

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<
      UsersUpdateWithoutOrdersInput,
      UsersUncheckedUpdateWithoutOrdersInput
    >;
    create: XOR<
      UsersCreateWithoutOrdersInput,
      UsersUncheckedCreateWithoutOrdersInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutOrdersInput,
      UsersUncheckedUpdateWithoutOrdersInput
    >;
  };

  export type UsersUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    carts?: CartsUpdateManyWithoutUserNestedInput;
    reviews?: ReviewsUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    carts?: CartsUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrderItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput;
    update: XOR<
      OrderItemsUpdateWithoutOrderInput,
      OrderItemsUncheckedUpdateWithoutOrderInput
    >;
    create: XOR<
      OrderItemsCreateWithoutOrderInput,
      OrderItemsUncheckedCreateWithoutOrderInput
    >;
  };

  export type OrderItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput;
    data: XOR<
      OrderItemsUpdateWithoutOrderInput,
      OrderItemsUncheckedUpdateWithoutOrderInput
    >;
  };

  export type OrderItemsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemsScalarWhereInput;
    data: XOR<
      OrderItemsUpdateManyMutationInput,
      OrderItemsUncheckedUpdateManyWithoutOrderInput
    >;
  };

  export type OrdersCreateWithoutOrder_itemsInput = {
    id?: string;
    total_price: number;
    shipping_address: string;
    payment_method: string;
    date?: Date | string;
    status?: $Enums.OrderStatus;
    user: UsersCreateNestedOneWithoutOrdersInput;
  };

  export type OrdersUncheckedCreateWithoutOrder_itemsInput = {
    id?: string;
    user_id: string;
    total_price: number;
    shipping_address: string;
    payment_method: string;
    date?: Date | string;
    status?: $Enums.OrderStatus;
  };

  export type OrdersCreateOrConnectWithoutOrder_itemsInput = {
    where: OrdersWhereUniqueInput;
    create: XOR<
      OrdersCreateWithoutOrder_itemsInput,
      OrdersUncheckedCreateWithoutOrder_itemsInput
    >;
  };

  export type BooksCreateWithoutOrder_itemsInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    author: AuthorsCreateNestedOneWithoutBooksInput;
    book_categories?: BookCategoriesCreateNestedManyWithoutBookInput;
    book_images?: BookImagesCreateNestedManyWithoutBookInput;
    inventories?: InventoriesCreateNestedOneWithoutBookInput;
    reviews?: ReviewsCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsCreateNestedManyWithoutBookInput;
  };

  export type BooksUncheckedCreateWithoutOrder_itemsInput = {
    id?: string;
    name: string;
    author_id: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
    book_categories?: BookCategoriesUncheckedCreateNestedManyWithoutBookInput;
    book_images?: BookImagesUncheckedCreateNestedManyWithoutBookInput;
    inventories?: InventoriesUncheckedCreateNestedOneWithoutBookInput;
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBookInput;
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BooksCreateOrConnectWithoutOrder_itemsInput = {
    where: BooksWhereUniqueInput;
    create: XOR<
      BooksCreateWithoutOrder_itemsInput,
      BooksUncheckedCreateWithoutOrder_itemsInput
    >;
  };

  export type OrdersUpsertWithoutOrder_itemsInput = {
    update: XOR<
      OrdersUpdateWithoutOrder_itemsInput,
      OrdersUncheckedUpdateWithoutOrder_itemsInput
    >;
    create: XOR<
      OrdersCreateWithoutOrder_itemsInput,
      OrdersUncheckedCreateWithoutOrder_itemsInput
    >;
    where?: OrdersWhereInput;
  };

  export type OrdersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: OrdersWhereInput;
    data: XOR<
      OrdersUpdateWithoutOrder_itemsInput,
      OrdersUncheckedUpdateWithoutOrder_itemsInput
    >;
  };

  export type OrdersUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_price?: FloatFieldUpdateOperationsInput | number;
    shipping_address?: StringFieldUpdateOperationsInput | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput;
  };

  export type OrdersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_price?: FloatFieldUpdateOperationsInput | number;
    shipping_address?: StringFieldUpdateOperationsInput | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
  };

  export type BooksUpsertWithoutOrder_itemsInput = {
    update: XOR<
      BooksUpdateWithoutOrder_itemsInput,
      BooksUncheckedUpdateWithoutOrder_itemsInput
    >;
    create: XOR<
      BooksCreateWithoutOrder_itemsInput,
      BooksUncheckedCreateWithoutOrder_itemsInput
    >;
    where?: BooksWhereInput;
  };

  export type BooksUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: BooksWhereInput;
    data: XOR<
      BooksUpdateWithoutOrder_itemsInput,
      BooksUncheckedUpdateWithoutOrder_itemsInput
    >;
  };

  export type BooksUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    author?: AuthorsUpdateOneRequiredWithoutBooksNestedInput;
    book_categories?: BookCategoriesUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUpdateManyWithoutBookNestedInput;
  };

  export type BooksUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    author_id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUncheckedUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUncheckedUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUncheckedUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type CartsCreateManyUserInput = {
    id?: string;
    date?: Date | string;
  };

  export type ReviewsCreateManyUserInput = {
    id?: string;
    book_id: string;
    text: string;
    rating: number;
    date?: Date | string;
  };

  export type OrdersCreateManyUserInput = {
    id?: string;
    total_price: number;
    shipping_address: string;
    payment_method: string;
    date?: Date | string;
    status?: $Enums.OrderStatus;
  };

  export type CartsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: CartItemsUpdateManyWithoutCartNestedInput;
  };

  export type CartsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: CartItemsUncheckedUpdateManyWithoutCartNestedInput;
  };

  export type CartsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    book?: BooksUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrdersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_price?: FloatFieldUpdateOperationsInput | number;
    shipping_address?: StringFieldUpdateOperationsInput | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    order_items?: OrderItemsUpdateManyWithoutOrderNestedInput;
  };

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_price?: FloatFieldUpdateOperationsInput | number;
    shipping_address?: StringFieldUpdateOperationsInput | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_price?: FloatFieldUpdateOperationsInput | number;
    shipping_address?: StringFieldUpdateOperationsInput | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
  };

  export type BookCategoriesCreateManyBookInput = {
    category_id: string;
  };

  export type BookImagesCreateManyBookInput = {
    id?: string;
    image_url: string;
    is_primary?: boolean;
  };

  export type ReviewsCreateManyBookInput = {
    id?: string;
    user_id: string;
    text: string;
    rating: number;
    date?: Date | string;
  };

  export type CartItemsCreateManyBookInput = {
    id?: string;
    cart_id: string;
    quantity: number;
  };

  export type OrderItemsCreateManyBookInput = {
    id?: string;
    order_id: string;
    quantity: number;
  };

  export type BookCategoriesUpdateWithoutBookInput = {
    category?: CategoriesUpdateOneRequiredWithoutBook_categoriesNestedInput;
  };

  export type BookCategoriesUncheckedUpdateWithoutBookInput = {
    category_id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookCategoriesUncheckedUpdateManyWithoutBookInput = {
    category_id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookImagesUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image_url?: StringFieldUpdateOperationsInput | string;
    is_primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type BookImagesUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image_url?: StringFieldUpdateOperationsInput | string;
    is_primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type BookImagesUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image_url?: StringFieldUpdateOperationsInput | string;
    is_primary?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type ReviewsUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewsUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewsUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartItemsUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    cart?: CartsUpdateOneRequiredWithoutCart_itemsNestedInput;
  };

  export type CartItemsUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cart_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type CartItemsUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cart_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type OrderItemsUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    order?: OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput;
  };

  export type OrderItemsUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type OrderItemsUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type BooksCreateManyAuthorInput = {
    id?: string;
    name: string;
    price: number;
    description?: string | null;
    publisher?: string | null;
    publication_year?: number | null;
  };

  export type BooksUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    book_categories?: BookCategoriesUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUpdateManyWithoutBookNestedInput;
  };

  export type BooksUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutBookNestedInput;
    book_images?: BookImagesUncheckedUpdateManyWithoutBookNestedInput;
    inventories?: InventoriesUncheckedUpdateOneWithoutBookNestedInput;
    reviews?: ReviewsUncheckedUpdateManyWithoutBookNestedInput;
    cart_items?: CartItemsUncheckedUpdateManyWithoutBookNestedInput;
    order_items?: OrderItemsUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type BooksUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    publication_year?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type CategoriesCreateManyParentInput = {
    id?: string;
    name: string;
    description?: string | null;
  };

  export type BookCategoriesCreateManyCategoryInput = {
    book_id: string;
  };

  export type CategoriesUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    children?: CategoriesUpdateManyWithoutParentNestedInput;
    book_categories?: BookCategoriesUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoriesUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    children?: CategoriesUncheckedUpdateManyWithoutParentNestedInput;
    book_categories?: BookCategoriesUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoriesUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type BookCategoriesUpdateWithoutCategoryInput = {
    book?: BooksUpdateOneRequiredWithoutBook_categoriesNestedInput;
  };

  export type BookCategoriesUncheckedUpdateWithoutCategoryInput = {
    book_id?: StringFieldUpdateOperationsInput | string;
  };

  export type BookCategoriesUncheckedUpdateManyWithoutCategoryInput = {
    book_id?: StringFieldUpdateOperationsInput | string;
  };

  export type CartItemsCreateManyCartInput = {
    id?: string;
    book_id: string;
    quantity: number;
  };

  export type CartItemsUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    book?: BooksUpdateOneRequiredWithoutCart_itemsNestedInput;
  };

  export type CartItemsUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type CartItemsUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type OrderItemsCreateManyOrderInput = {
    id?: string;
    book_id: string;
    quantity: number;
  };

  export type OrderItemsUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    book?: BooksUpdateOneRequiredWithoutOrder_itemsNestedInput;
  };

  export type OrderItemsUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  export type OrderItemsUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
