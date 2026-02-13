
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TestCategory
 * 
 */
export type TestCategory = $Result.DefaultSelection<Prisma.$TestCategoryPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuizTranslation
 * 
 */
export type QuizTranslation = $Result.DefaultSelection<Prisma.$QuizTranslationPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model QuestionTranslation
 * 
 */
export type QuestionTranslation = $Result.DefaultSelection<Prisma.$QuestionTranslationPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  user: 'user',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Language: {
  en: 'en',
  fr: 'fr',
  es: 'es',
  de: 'de',
  ar: 'ar'
};

export type Language = (typeof Language)[keyof typeof Language]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Language = $Enums.Language

export const Language: typeof $Enums.Language

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCategory`: Exposes CRUD operations for the **TestCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCategories
    * const testCategories = await prisma.testCategory.findMany()
    * ```
    */
  get testCategory(): Prisma.TestCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizTranslation`: Exposes CRUD operations for the **QuizTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizTranslations
    * const quizTranslations = await prisma.quizTranslation.findMany()
    * ```
    */
  get quizTranslation(): Prisma.QuizTranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionTranslation`: Exposes CRUD operations for the **QuestionTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionTranslations
    * const questionTranslations = await prisma.questionTranslation.findMany()
    * ```
    */
  get questionTranslation(): Prisma.QuestionTranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TestCategory: 'TestCategory',
    Quiz: 'Quiz',
    QuizTranslation: 'QuizTranslation',
    Question: 'Question',
    QuestionTranslation: 'QuestionTranslation',
    Course: 'Course',
    Certificate: 'Certificate',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "testCategory" | "quiz" | "quizTranslation" | "question" | "questionTranslation" | "course" | "certificate" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TestCategory: {
        payload: Prisma.$TestCategoryPayload<ExtArgs>
        fields: Prisma.TestCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCategoryPayload>
          }
          findFirst: {
            args: Prisma.TestCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCategoryPayload>
          }
          findMany: {
            args: Prisma.TestCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCategoryPayload>[]
          }
          create: {
            args: Prisma.TestCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCategoryPayload>
          }
          createMany: {
            args: Prisma.TestCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCategoryPayload>
          }
          update: {
            args: Prisma.TestCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TestCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCategoryPayload>
          }
          aggregate: {
            args: Prisma.TestCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCategory>
          }
          groupBy: {
            args: Prisma.TestCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TestCategoryCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuizTranslation: {
        payload: Prisma.$QuizTranslationPayload<ExtArgs>
        fields: Prisma.QuizTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTranslationPayload>
          }
          findFirst: {
            args: Prisma.QuizTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTranslationPayload>
          }
          findMany: {
            args: Prisma.QuizTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTranslationPayload>[]
          }
          create: {
            args: Prisma.QuizTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTranslationPayload>
          }
          createMany: {
            args: Prisma.QuizTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTranslationPayload>
          }
          update: {
            args: Prisma.QuizTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTranslationPayload>
          }
          deleteMany: {
            args: Prisma.QuizTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizTranslationPayload>
          }
          aggregate: {
            args: Prisma.QuizTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizTranslation>
          }
          groupBy: {
            args: Prisma.QuizTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<QuizTranslationCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      QuestionTranslation: {
        payload: Prisma.$QuestionTranslationPayload<ExtArgs>
        fields: Prisma.QuestionTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          findFirst: {
            args: Prisma.QuestionTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          findMany: {
            args: Prisma.QuestionTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>[]
          }
          create: {
            args: Prisma.QuestionTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          createMany: {
            args: Prisma.QuestionTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          update: {
            args: Prisma.QuestionTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          deleteMany: {
            args: Prisma.QuestionTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          aggregate: {
            args: Prisma.QuestionTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionTranslation>
          }
          groupBy: {
            args: Prisma.QuestionTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionTranslationCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    testCategory?: TestCategoryOmit
    quiz?: QuizOmit
    quizTranslation?: QuizTranslationOmit
    question?: QuestionOmit
    questionTranslation?: QuestionTranslationOmit
    course?: CourseOmit
    certificate?: CertificateOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdQuizzes: number
    certificates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdQuizzes?: boolean | UserCountOutputTypeCountCreatedQuizzesArgs
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type TestCategoryCountOutputType
   */

  export type TestCategoryCountOutputType = {
    quizzes: number
    certificates: number
  }

  export type TestCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | TestCategoryCountOutputTypeCountQuizzesArgs
    certificates?: boolean | TestCategoryCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * TestCategoryCountOutputType without action
   */
  export type TestCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategoryCountOutputType
     */
    select?: TestCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCategoryCountOutputType without action
   */
  export type TestCategoryCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * TestCategoryCountOutputType without action
   */
  export type TestCategoryCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
    translations: number
    certificates: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
    translations?: boolean | QuizCountOutputTypeCountTranslationsArgs
    certificates?: boolean | QuizCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizTranslationWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    translations: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | QuestionCountOutputTypeCountTranslationsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTranslationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    paymentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    paymentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    role: number
    paymentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    phone: string | null
    role: $Enums.Role
    paymentId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdQuizzes?: boolean | User$createdQuizzesArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "role" | "paymentId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdQuizzes?: boolean | User$createdQuizzesArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdQuizzes: Prisma.$QuizPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phone: string | null
      role: $Enums.Role
      paymentId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdQuizzes<T extends User$createdQuizzesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdQuizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends User$paymentArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly paymentId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdQuizzes
   */
  export type User$createdQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User.payment
   */
  export type User$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TestCategory
   */

  export type AggregateTestCategory = {
    _count: TestCategoryCountAggregateOutputType | null
    _avg: TestCategoryAvgAggregateOutputType | null
    _sum: TestCategorySumAggregateOutputType | null
    _min: TestCategoryMinAggregateOutputType | null
    _max: TestCategoryMaxAggregateOutputType | null
  }

  export type TestCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type TestCategorySumAggregateOutputType = {
    id: number | null
  }

  export type TestCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestCategoryAvgAggregateInputType = {
    id?: true
  }

  export type TestCategorySumAggregateInputType = {
    id?: true
  }

  export type TestCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCategory to aggregate.
     */
    where?: TestCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCategories to fetch.
     */
    orderBy?: TestCategoryOrderByWithRelationInput | TestCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCategories
    **/
    _count?: true | TestCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCategoryMaxAggregateInputType
  }

  export type GetTestCategoryAggregateType<T extends TestCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCategory[P]>
      : GetScalarType<T[P], AggregateTestCategory[P]>
  }




  export type TestCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCategoryWhereInput
    orderBy?: TestCategoryOrderByWithAggregationInput | TestCategoryOrderByWithAggregationInput[]
    by: TestCategoryScalarFieldEnum[] | TestCategoryScalarFieldEnum
    having?: TestCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCategoryCountAggregateInputType | true
    _avg?: TestCategoryAvgAggregateInputType
    _sum?: TestCategorySumAggregateInputType
    _min?: TestCategoryMinAggregateInputType
    _max?: TestCategoryMaxAggregateInputType
  }

  export type TestCategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TestCategoryCountAggregateOutputType | null
    _avg: TestCategoryAvgAggregateOutputType | null
    _sum: TestCategorySumAggregateOutputType | null
    _min: TestCategoryMinAggregateOutputType | null
    _max: TestCategoryMaxAggregateOutputType | null
  }

  type GetTestCategoryGroupByPayload<T extends TestCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TestCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TestCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizzes?: boolean | TestCategory$quizzesArgs<ExtArgs>
    certificates?: boolean | TestCategory$certificatesArgs<ExtArgs>
    _count?: boolean | TestCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCategory"]>



  export type TestCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["testCategory"]>
  export type TestCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | TestCategory$quizzesArgs<ExtArgs>
    certificates?: boolean | TestCategory$certificatesArgs<ExtArgs>
    _count?: boolean | TestCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TestCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCategory"
    objects: {
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testCategory"]>
    composites: {}
  }

  type TestCategoryGetPayload<S extends boolean | null | undefined | TestCategoryDefaultArgs> = $Result.GetResult<Prisma.$TestCategoryPayload, S>

  type TestCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCategoryCountAggregateInputType | true
    }

  export interface TestCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCategory'], meta: { name: 'TestCategory' } }
    /**
     * Find zero or one TestCategory that matches the filter.
     * @param {TestCategoryFindUniqueArgs} args - Arguments to find a TestCategory
     * @example
     * // Get one TestCategory
     * const testCategory = await prisma.testCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCategoryFindUniqueArgs>(args: SelectSubset<T, TestCategoryFindUniqueArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCategoryFindUniqueOrThrowArgs} args - Arguments to find a TestCategory
     * @example
     * // Get one TestCategory
     * const testCategory = await prisma.testCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCategoryFindFirstArgs} args - Arguments to find a TestCategory
     * @example
     * // Get one TestCategory
     * const testCategory = await prisma.testCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCategoryFindFirstArgs>(args?: SelectSubset<T, TestCategoryFindFirstArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCategoryFindFirstOrThrowArgs} args - Arguments to find a TestCategory
     * @example
     * // Get one TestCategory
     * const testCategory = await prisma.testCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCategories
     * const testCategories = await prisma.testCategory.findMany()
     * 
     * // Get first 10 TestCategories
     * const testCategories = await prisma.testCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCategoryWithIdOnly = await prisma.testCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCategoryFindManyArgs>(args?: SelectSubset<T, TestCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestCategory.
     * @param {TestCategoryCreateArgs} args - Arguments to create a TestCategory.
     * @example
     * // Create one TestCategory
     * const TestCategory = await prisma.testCategory.create({
     *   data: {
     *     // ... data to create a TestCategory
     *   }
     * })
     * 
     */
    create<T extends TestCategoryCreateArgs>(args: SelectSubset<T, TestCategoryCreateArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestCategories.
     * @param {TestCategoryCreateManyArgs} args - Arguments to create many TestCategories.
     * @example
     * // Create many TestCategories
     * const testCategory = await prisma.testCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCategoryCreateManyArgs>(args?: SelectSubset<T, TestCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestCategory.
     * @param {TestCategoryDeleteArgs} args - Arguments to delete one TestCategory.
     * @example
     * // Delete one TestCategory
     * const TestCategory = await prisma.testCategory.delete({
     *   where: {
     *     // ... filter to delete one TestCategory
     *   }
     * })
     * 
     */
    delete<T extends TestCategoryDeleteArgs>(args: SelectSubset<T, TestCategoryDeleteArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestCategory.
     * @param {TestCategoryUpdateArgs} args - Arguments to update one TestCategory.
     * @example
     * // Update one TestCategory
     * const testCategory = await prisma.testCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCategoryUpdateArgs>(args: SelectSubset<T, TestCategoryUpdateArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestCategories.
     * @param {TestCategoryDeleteManyArgs} args - Arguments to filter TestCategories to delete.
     * @example
     * // Delete a few TestCategories
     * const { count } = await prisma.testCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCategoryDeleteManyArgs>(args?: SelectSubset<T, TestCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCategories
     * const testCategory = await prisma.testCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCategoryUpdateManyArgs>(args: SelectSubset<T, TestCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestCategory.
     * @param {TestCategoryUpsertArgs} args - Arguments to update or create a TestCategory.
     * @example
     * // Update or create a TestCategory
     * const testCategory = await prisma.testCategory.upsert({
     *   create: {
     *     // ... data to create a TestCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCategory we want to update
     *   }
     * })
     */
    upsert<T extends TestCategoryUpsertArgs>(args: SelectSubset<T, TestCategoryUpsertArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCategoryCountArgs} args - Arguments to filter TestCategories to count.
     * @example
     * // Count the number of TestCategories
     * const count = await prisma.testCategory.count({
     *   where: {
     *     // ... the filter for the TestCategories we want to count
     *   }
     * })
    **/
    count<T extends TestCategoryCountArgs>(
      args?: Subset<T, TestCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestCategoryAggregateArgs>(args: Subset<T, TestCategoryAggregateArgs>): Prisma.PrismaPromise<GetTestCategoryAggregateType<T>>

    /**
     * Group by TestCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCategoryGroupByArgs} args - Group by arguments.
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
      T extends TestCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TestCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCategory model
   */
  readonly fields: TestCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizzes<T extends TestCategory$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, TestCategory$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends TestCategory$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, TestCategory$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestCategory model
   */
  interface TestCategoryFieldRefs {
    readonly id: FieldRef<"TestCategory", 'Int'>
    readonly name: FieldRef<"TestCategory", 'String'>
    readonly description: FieldRef<"TestCategory", 'String'>
    readonly createdAt: FieldRef<"TestCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"TestCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestCategory findUnique
   */
  export type TestCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TestCategory to fetch.
     */
    where: TestCategoryWhereUniqueInput
  }

  /**
   * TestCategory findUniqueOrThrow
   */
  export type TestCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TestCategory to fetch.
     */
    where: TestCategoryWhereUniqueInput
  }

  /**
   * TestCategory findFirst
   */
  export type TestCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TestCategory to fetch.
     */
    where?: TestCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCategories to fetch.
     */
    orderBy?: TestCategoryOrderByWithRelationInput | TestCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCategories.
     */
    cursor?: TestCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCategories.
     */
    distinct?: TestCategoryScalarFieldEnum | TestCategoryScalarFieldEnum[]
  }

  /**
   * TestCategory findFirstOrThrow
   */
  export type TestCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TestCategory to fetch.
     */
    where?: TestCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCategories to fetch.
     */
    orderBy?: TestCategoryOrderByWithRelationInput | TestCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCategories.
     */
    cursor?: TestCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCategories.
     */
    distinct?: TestCategoryScalarFieldEnum | TestCategoryScalarFieldEnum[]
  }

  /**
   * TestCategory findMany
   */
  export type TestCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TestCategories to fetch.
     */
    where?: TestCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCategories to fetch.
     */
    orderBy?: TestCategoryOrderByWithRelationInput | TestCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCategories.
     */
    cursor?: TestCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCategories.
     */
    skip?: number
    distinct?: TestCategoryScalarFieldEnum | TestCategoryScalarFieldEnum[]
  }

  /**
   * TestCategory create
   */
  export type TestCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCategory.
     */
    data: XOR<TestCategoryCreateInput, TestCategoryUncheckedCreateInput>
  }

  /**
   * TestCategory createMany
   */
  export type TestCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCategories.
     */
    data: TestCategoryCreateManyInput | TestCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestCategory update
   */
  export type TestCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCategory.
     */
    data: XOR<TestCategoryUpdateInput, TestCategoryUncheckedUpdateInput>
    /**
     * Choose, which TestCategory to update.
     */
    where: TestCategoryWhereUniqueInput
  }

  /**
   * TestCategory updateMany
   */
  export type TestCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCategories.
     */
    data: XOR<TestCategoryUpdateManyMutationInput, TestCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TestCategories to update
     */
    where?: TestCategoryWhereInput
    /**
     * Limit how many TestCategories to update.
     */
    limit?: number
  }

  /**
   * TestCategory upsert
   */
  export type TestCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCategory to update in case it exists.
     */
    where: TestCategoryWhereUniqueInput
    /**
     * In case the TestCategory found by the `where` argument doesn't exist, create a new TestCategory with this data.
     */
    create: XOR<TestCategoryCreateInput, TestCategoryUncheckedCreateInput>
    /**
     * In case the TestCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCategoryUpdateInput, TestCategoryUncheckedUpdateInput>
  }

  /**
   * TestCategory delete
   */
  export type TestCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
    /**
     * Filter which TestCategory to delete.
     */
    where: TestCategoryWhereUniqueInput
  }

  /**
   * TestCategory deleteMany
   */
  export type TestCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCategories to delete
     */
    where?: TestCategoryWhereInput
    /**
     * Limit how many TestCategories to delete.
     */
    limit?: number
  }

  /**
   * TestCategory.quizzes
   */
  export type TestCategory$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * TestCategory.certificates
   */
  export type TestCategory$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * TestCategory without action
   */
  export type TestCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCategory
     */
    select?: TestCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCategory
     */
    omit?: TestCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
    passingScore: number | null
    totalPoints: number | null
    timeLimit: number | null
    categoryId: number | null
    creatorId: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: number | null
    passingScore: number | null
    totalPoints: number | null
    timeLimit: number | null
    categoryId: number | null
    creatorId: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: number | null
    passingScore: number | null
    totalPoints: number | null
    timeLimit: number | null
    categoryId: number | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: number | null
    passingScore: number | null
    totalPoints: number | null
    timeLimit: number | null
    categoryId: number | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    passingScore: number
    totalPoints: number
    timeLimit: number
    categoryId: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    passingScore?: true
    totalPoints?: true
    timeLimit?: true
    categoryId?: true
    creatorId?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    passingScore?: true
    totalPoints?: true
    timeLimit?: true
    categoryId?: true
    creatorId?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    passingScore?: true
    totalPoints?: true
    timeLimit?: true
    categoryId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    passingScore?: true
    totalPoints?: true
    timeLimit?: true
    categoryId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    passingScore?: true
    totalPoints?: true
    timeLimit?: true
    categoryId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: number
    passingScore: number
    totalPoints: number
    timeLimit: number | null
    categoryId: number
    creatorId: number | null
    createdAt: Date
    updatedAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passingScore?: boolean
    totalPoints?: boolean
    timeLimit?: boolean
    categoryId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | TestCategoryDefaultArgs<ExtArgs>
    creator?: boolean | Quiz$creatorArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    translations?: boolean | Quiz$translationsArgs<ExtArgs>
    certificates?: boolean | Quiz$certificatesArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>



  export type QuizSelectScalar = {
    id?: boolean
    passingScore?: boolean
    totalPoints?: boolean
    timeLimit?: boolean
    categoryId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passingScore" | "totalPoints" | "timeLimit" | "categoryId" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | TestCategoryDefaultArgs<ExtArgs>
    creator?: boolean | Quiz$creatorArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    translations?: boolean | Quiz$translationsArgs<ExtArgs>
    certificates?: boolean | Quiz$certificatesArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      category: Prisma.$TestCategoryPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs> | null
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      translations: Prisma.$QuizTranslationPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      passingScore: number
      totalPoints: number
      timeLimit: number | null
      categoryId: number
      creatorId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends TestCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestCategoryDefaultArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends Quiz$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    translations<T extends Quiz$translationsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends Quiz$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'Int'>
    readonly passingScore: FieldRef<"Quiz", 'Int'>
    readonly totalPoints: FieldRef<"Quiz", 'Int'>
    readonly timeLimit: FieldRef<"Quiz", 'Int'>
    readonly categoryId: FieldRef<"Quiz", 'Int'>
    readonly creatorId: FieldRef<"Quiz", 'Int'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly updatedAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.creator
   */
  export type Quiz$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz.translations
   */
  export type Quiz$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    where?: QuizTranslationWhereInput
    orderBy?: QuizTranslationOrderByWithRelationInput | QuizTranslationOrderByWithRelationInput[]
    cursor?: QuizTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizTranslationScalarFieldEnum | QuizTranslationScalarFieldEnum[]
  }

  /**
   * Quiz.certificates
   */
  export type Quiz$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model QuizTranslation
   */

  export type AggregateQuizTranslation = {
    _count: QuizTranslationCountAggregateOutputType | null
    _avg: QuizTranslationAvgAggregateOutputType | null
    _sum: QuizTranslationSumAggregateOutputType | null
    _min: QuizTranslationMinAggregateOutputType | null
    _max: QuizTranslationMaxAggregateOutputType | null
  }

  export type QuizTranslationAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type QuizTranslationSumAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type QuizTranslationMinAggregateOutputType = {
    id: number | null
    quizId: number | null
    language: $Enums.Language | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizTranslationMaxAggregateOutputType = {
    id: number | null
    quizId: number | null
    language: $Enums.Language | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizTranslationCountAggregateOutputType = {
    id: number
    quizId: number
    language: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizTranslationAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type QuizTranslationSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type QuizTranslationMinAggregateInputType = {
    id?: true
    quizId?: true
    language?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizTranslationMaxAggregateInputType = {
    id?: true
    quizId?: true
    language?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizTranslationCountAggregateInputType = {
    id?: true
    quizId?: true
    language?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizTranslation to aggregate.
     */
    where?: QuizTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizTranslations to fetch.
     */
    orderBy?: QuizTranslationOrderByWithRelationInput | QuizTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizTranslations
    **/
    _count?: true | QuizTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizTranslationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizTranslationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizTranslationMaxAggregateInputType
  }

  export type GetQuizTranslationAggregateType<T extends QuizTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizTranslation[P]>
      : GetScalarType<T[P], AggregateQuizTranslation[P]>
  }




  export type QuizTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizTranslationWhereInput
    orderBy?: QuizTranslationOrderByWithAggregationInput | QuizTranslationOrderByWithAggregationInput[]
    by: QuizTranslationScalarFieldEnum[] | QuizTranslationScalarFieldEnum
    having?: QuizTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizTranslationCountAggregateInputType | true
    _avg?: QuizTranslationAvgAggregateInputType
    _sum?: QuizTranslationSumAggregateInputType
    _min?: QuizTranslationMinAggregateInputType
    _max?: QuizTranslationMaxAggregateInputType
  }

  export type QuizTranslationGroupByOutputType = {
    id: number
    quizId: number
    language: $Enums.Language
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuizTranslationCountAggregateOutputType | null
    _avg: QuizTranslationAvgAggregateOutputType | null
    _sum: QuizTranslationSumAggregateOutputType | null
    _min: QuizTranslationMinAggregateOutputType | null
    _max: QuizTranslationMaxAggregateOutputType | null
  }

  type GetQuizTranslationGroupByPayload<T extends QuizTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], QuizTranslationGroupByOutputType[P]>
        }
      >
    >


  export type QuizTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    language?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizTranslation"]>



  export type QuizTranslationSelectScalar = {
    id?: boolean
    quizId?: boolean
    language?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizTranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "language" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["quizTranslation"]>
  export type QuizTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizTranslation"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quizId: number
      language: $Enums.Language
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizTranslation"]>
    composites: {}
  }

  type QuizTranslationGetPayload<S extends boolean | null | undefined | QuizTranslationDefaultArgs> = $Result.GetResult<Prisma.$QuizTranslationPayload, S>

  type QuizTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizTranslationCountAggregateInputType | true
    }

  export interface QuizTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizTranslation'], meta: { name: 'QuizTranslation' } }
    /**
     * Find zero or one QuizTranslation that matches the filter.
     * @param {QuizTranslationFindUniqueArgs} args - Arguments to find a QuizTranslation
     * @example
     * // Get one QuizTranslation
     * const quizTranslation = await prisma.quizTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizTranslationFindUniqueArgs>(args: SelectSubset<T, QuizTranslationFindUniqueArgs<ExtArgs>>): Prisma__QuizTranslationClient<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizTranslationFindUniqueOrThrowArgs} args - Arguments to find a QuizTranslation
     * @example
     * // Get one QuizTranslation
     * const quizTranslation = await prisma.quizTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizTranslationClient<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTranslationFindFirstArgs} args - Arguments to find a QuizTranslation
     * @example
     * // Get one QuizTranslation
     * const quizTranslation = await prisma.quizTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizTranslationFindFirstArgs>(args?: SelectSubset<T, QuizTranslationFindFirstArgs<ExtArgs>>): Prisma__QuizTranslationClient<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTranslationFindFirstOrThrowArgs} args - Arguments to find a QuizTranslation
     * @example
     * // Get one QuizTranslation
     * const quizTranslation = await prisma.quizTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizTranslationClient<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizTranslations
     * const quizTranslations = await prisma.quizTranslation.findMany()
     * 
     * // Get first 10 QuizTranslations
     * const quizTranslations = await prisma.quizTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizTranslationWithIdOnly = await prisma.quizTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizTranslationFindManyArgs>(args?: SelectSubset<T, QuizTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizTranslation.
     * @param {QuizTranslationCreateArgs} args - Arguments to create a QuizTranslation.
     * @example
     * // Create one QuizTranslation
     * const QuizTranslation = await prisma.quizTranslation.create({
     *   data: {
     *     // ... data to create a QuizTranslation
     *   }
     * })
     * 
     */
    create<T extends QuizTranslationCreateArgs>(args: SelectSubset<T, QuizTranslationCreateArgs<ExtArgs>>): Prisma__QuizTranslationClient<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizTranslations.
     * @param {QuizTranslationCreateManyArgs} args - Arguments to create many QuizTranslations.
     * @example
     * // Create many QuizTranslations
     * const quizTranslation = await prisma.quizTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizTranslationCreateManyArgs>(args?: SelectSubset<T, QuizTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuizTranslation.
     * @param {QuizTranslationDeleteArgs} args - Arguments to delete one QuizTranslation.
     * @example
     * // Delete one QuizTranslation
     * const QuizTranslation = await prisma.quizTranslation.delete({
     *   where: {
     *     // ... filter to delete one QuizTranslation
     *   }
     * })
     * 
     */
    delete<T extends QuizTranslationDeleteArgs>(args: SelectSubset<T, QuizTranslationDeleteArgs<ExtArgs>>): Prisma__QuizTranslationClient<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizTranslation.
     * @param {QuizTranslationUpdateArgs} args - Arguments to update one QuizTranslation.
     * @example
     * // Update one QuizTranslation
     * const quizTranslation = await prisma.quizTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizTranslationUpdateArgs>(args: SelectSubset<T, QuizTranslationUpdateArgs<ExtArgs>>): Prisma__QuizTranslationClient<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizTranslations.
     * @param {QuizTranslationDeleteManyArgs} args - Arguments to filter QuizTranslations to delete.
     * @example
     * // Delete a few QuizTranslations
     * const { count } = await prisma.quizTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizTranslationDeleteManyArgs>(args?: SelectSubset<T, QuizTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizTranslations
     * const quizTranslation = await prisma.quizTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizTranslationUpdateManyArgs>(args: SelectSubset<T, QuizTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuizTranslation.
     * @param {QuizTranslationUpsertArgs} args - Arguments to update or create a QuizTranslation.
     * @example
     * // Update or create a QuizTranslation
     * const quizTranslation = await prisma.quizTranslation.upsert({
     *   create: {
     *     // ... data to create a QuizTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizTranslation we want to update
     *   }
     * })
     */
    upsert<T extends QuizTranslationUpsertArgs>(args: SelectSubset<T, QuizTranslationUpsertArgs<ExtArgs>>): Prisma__QuizTranslationClient<$Result.GetResult<Prisma.$QuizTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTranslationCountArgs} args - Arguments to filter QuizTranslations to count.
     * @example
     * // Count the number of QuizTranslations
     * const count = await prisma.quizTranslation.count({
     *   where: {
     *     // ... the filter for the QuizTranslations we want to count
     *   }
     * })
    **/
    count<T extends QuizTranslationCountArgs>(
      args?: Subset<T, QuizTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizTranslationAggregateArgs>(args: Subset<T, QuizTranslationAggregateArgs>): Prisma.PrismaPromise<GetQuizTranslationAggregateType<T>>

    /**
     * Group by QuizTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizTranslationGroupByArgs} args - Group by arguments.
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
      T extends QuizTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizTranslationGroupByArgs['orderBy'] }
        : { orderBy?: QuizTranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizTranslation model
   */
  readonly fields: QuizTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizTranslation model
   */
  interface QuizTranslationFieldRefs {
    readonly id: FieldRef<"QuizTranslation", 'Int'>
    readonly quizId: FieldRef<"QuizTranslation", 'Int'>
    readonly language: FieldRef<"QuizTranslation", 'Language'>
    readonly title: FieldRef<"QuizTranslation", 'String'>
    readonly description: FieldRef<"QuizTranslation", 'String'>
    readonly createdAt: FieldRef<"QuizTranslation", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizTranslation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizTranslation findUnique
   */
  export type QuizTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuizTranslation to fetch.
     */
    where: QuizTranslationWhereUniqueInput
  }

  /**
   * QuizTranslation findUniqueOrThrow
   */
  export type QuizTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuizTranslation to fetch.
     */
    where: QuizTranslationWhereUniqueInput
  }

  /**
   * QuizTranslation findFirst
   */
  export type QuizTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuizTranslation to fetch.
     */
    where?: QuizTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizTranslations to fetch.
     */
    orderBy?: QuizTranslationOrderByWithRelationInput | QuizTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizTranslations.
     */
    cursor?: QuizTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizTranslations.
     */
    distinct?: QuizTranslationScalarFieldEnum | QuizTranslationScalarFieldEnum[]
  }

  /**
   * QuizTranslation findFirstOrThrow
   */
  export type QuizTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuizTranslation to fetch.
     */
    where?: QuizTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizTranslations to fetch.
     */
    orderBy?: QuizTranslationOrderByWithRelationInput | QuizTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizTranslations.
     */
    cursor?: QuizTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizTranslations.
     */
    distinct?: QuizTranslationScalarFieldEnum | QuizTranslationScalarFieldEnum[]
  }

  /**
   * QuizTranslation findMany
   */
  export type QuizTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuizTranslations to fetch.
     */
    where?: QuizTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizTranslations to fetch.
     */
    orderBy?: QuizTranslationOrderByWithRelationInput | QuizTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizTranslations.
     */
    cursor?: QuizTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizTranslations.
     */
    skip?: number
    distinct?: QuizTranslationScalarFieldEnum | QuizTranslationScalarFieldEnum[]
  }

  /**
   * QuizTranslation create
   */
  export type QuizTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizTranslation.
     */
    data: XOR<QuizTranslationCreateInput, QuizTranslationUncheckedCreateInput>
  }

  /**
   * QuizTranslation createMany
   */
  export type QuizTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizTranslations.
     */
    data: QuizTranslationCreateManyInput | QuizTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizTranslation update
   */
  export type QuizTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizTranslation.
     */
    data: XOR<QuizTranslationUpdateInput, QuizTranslationUncheckedUpdateInput>
    /**
     * Choose, which QuizTranslation to update.
     */
    where: QuizTranslationWhereUniqueInput
  }

  /**
   * QuizTranslation updateMany
   */
  export type QuizTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizTranslations.
     */
    data: XOR<QuizTranslationUpdateManyMutationInput, QuizTranslationUncheckedUpdateManyInput>
    /**
     * Filter which QuizTranslations to update
     */
    where?: QuizTranslationWhereInput
    /**
     * Limit how many QuizTranslations to update.
     */
    limit?: number
  }

  /**
   * QuizTranslation upsert
   */
  export type QuizTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizTranslation to update in case it exists.
     */
    where: QuizTranslationWhereUniqueInput
    /**
     * In case the QuizTranslation found by the `where` argument doesn't exist, create a new QuizTranslation with this data.
     */
    create: XOR<QuizTranslationCreateInput, QuizTranslationUncheckedCreateInput>
    /**
     * In case the QuizTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizTranslationUpdateInput, QuizTranslationUncheckedUpdateInput>
  }

  /**
   * QuizTranslation delete
   */
  export type QuizTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
    /**
     * Filter which QuizTranslation to delete.
     */
    where: QuizTranslationWhereUniqueInput
  }

  /**
   * QuizTranslation deleteMany
   */
  export type QuizTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizTranslations to delete
     */
    where?: QuizTranslationWhereInput
    /**
     * Limit how many QuizTranslations to delete.
     */
    limit?: number
  }

  /**
   * QuizTranslation without action
   */
  export type QuizTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizTranslation
     */
    select?: QuizTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizTranslation
     */
    omit?: QuizTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizTranslationInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
    correctAnswerIndex: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    quizId: number | null
    correctAnswerIndex: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    quizId: number | null
    correctAnswerIndex: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    quizId: number | null
    correctAnswerIndex: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    quizId: number
    correctAnswerIndex: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    quizId?: true
    correctAnswerIndex?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    quizId?: true
    correctAnswerIndex?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    quizId?: true
    correctAnswerIndex?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    quizId?: true
    correctAnswerIndex?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    quizId?: true
    correctAnswerIndex?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    quizId: number
    correctAnswerIndex: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    correctAnswerIndex?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    translations?: boolean | Question$translationsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    quizId?: boolean
    correctAnswerIndex?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "correctAnswerIndex", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    translations?: boolean | Question$translationsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      translations: Prisma.$QuestionTranslationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quizId: number
      correctAnswerIndex: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    translations<T extends Question$translationsArgs<ExtArgs> = {}>(args?: Subset<T, Question$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly quizId: FieldRef<"Question", 'Int'>
    readonly correctAnswerIndex: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.translations
   */
  export type Question$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    where?: QuestionTranslationWhereInput
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    cursor?: QuestionTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionTranslationScalarFieldEnum | QuestionTranslationScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionTranslation
   */

  export type AggregateQuestionTranslation = {
    _count: QuestionTranslationCountAggregateOutputType | null
    _avg: QuestionTranslationAvgAggregateOutputType | null
    _sum: QuestionTranslationSumAggregateOutputType | null
    _min: QuestionTranslationMinAggregateOutputType | null
    _max: QuestionTranslationMaxAggregateOutputType | null
  }

  export type QuestionTranslationAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type QuestionTranslationSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type QuestionTranslationMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    language: $Enums.Language | null
    questionText: string | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionTranslationMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    language: $Enums.Language | null
    questionText: string | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionTranslationCountAggregateOutputType = {
    id: number
    questionId: number
    language: number
    questionText: number
    options: number
    explanation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionTranslationAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type QuestionTranslationSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type QuestionTranslationMinAggregateInputType = {
    id?: true
    questionId?: true
    language?: true
    questionText?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionTranslationMaxAggregateInputType = {
    id?: true
    questionId?: true
    language?: true
    questionText?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionTranslationCountAggregateInputType = {
    id?: true
    questionId?: true
    language?: true
    questionText?: true
    options?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTranslation to aggregate.
     */
    where?: QuestionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTranslations to fetch.
     */
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionTranslations
    **/
    _count?: true | QuestionTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionTranslationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionTranslationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionTranslationMaxAggregateInputType
  }

  export type GetQuestionTranslationAggregateType<T extends QuestionTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionTranslation[P]>
      : GetScalarType<T[P], AggregateQuestionTranslation[P]>
  }




  export type QuestionTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTranslationWhereInput
    orderBy?: QuestionTranslationOrderByWithAggregationInput | QuestionTranslationOrderByWithAggregationInput[]
    by: QuestionTranslationScalarFieldEnum[] | QuestionTranslationScalarFieldEnum
    having?: QuestionTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionTranslationCountAggregateInputType | true
    _avg?: QuestionTranslationAvgAggregateInputType
    _sum?: QuestionTranslationSumAggregateInputType
    _min?: QuestionTranslationMinAggregateInputType
    _max?: QuestionTranslationMaxAggregateInputType
  }

  export type QuestionTranslationGroupByOutputType = {
    id: number
    questionId: number
    language: $Enums.Language
    questionText: string
    options: JsonValue
    explanation: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionTranslationCountAggregateOutputType | null
    _avg: QuestionTranslationAvgAggregateOutputType | null
    _sum: QuestionTranslationSumAggregateOutputType | null
    _min: QuestionTranslationMinAggregateOutputType | null
    _max: QuestionTranslationMaxAggregateOutputType | null
  }

  type GetQuestionTranslationGroupByPayload<T extends QuestionTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionTranslationGroupByOutputType[P]>
        }
      >
    >


  export type QuestionTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    language?: boolean
    questionText?: boolean
    options?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTranslation"]>



  export type QuestionTranslationSelectScalar = {
    id?: boolean
    questionId?: boolean
    language?: boolean
    questionText?: boolean
    options?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionTranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "language" | "questionText" | "options" | "explanation" | "createdAt" | "updatedAt", ExtArgs["result"]["questionTranslation"]>
  export type QuestionTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $QuestionTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionTranslation"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      questionId: number
      language: $Enums.Language
      questionText: string
      options: Prisma.JsonValue
      explanation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questionTranslation"]>
    composites: {}
  }

  type QuestionTranslationGetPayload<S extends boolean | null | undefined | QuestionTranslationDefaultArgs> = $Result.GetResult<Prisma.$QuestionTranslationPayload, S>

  type QuestionTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionTranslationCountAggregateInputType | true
    }

  export interface QuestionTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionTranslation'], meta: { name: 'QuestionTranslation' } }
    /**
     * Find zero or one QuestionTranslation that matches the filter.
     * @param {QuestionTranslationFindUniqueArgs} args - Arguments to find a QuestionTranslation
     * @example
     * // Get one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionTranslationFindUniqueArgs>(args: SelectSubset<T, QuestionTranslationFindUniqueArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionTranslationFindUniqueOrThrowArgs} args - Arguments to find a QuestionTranslation
     * @example
     * // Get one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationFindFirstArgs} args - Arguments to find a QuestionTranslation
     * @example
     * // Get one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionTranslationFindFirstArgs>(args?: SelectSubset<T, QuestionTranslationFindFirstArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationFindFirstOrThrowArgs} args - Arguments to find a QuestionTranslation
     * @example
     * // Get one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionTranslations
     * const questionTranslations = await prisma.questionTranslation.findMany()
     * 
     * // Get first 10 QuestionTranslations
     * const questionTranslations = await prisma.questionTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionTranslationWithIdOnly = await prisma.questionTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionTranslationFindManyArgs>(args?: SelectSubset<T, QuestionTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionTranslation.
     * @param {QuestionTranslationCreateArgs} args - Arguments to create a QuestionTranslation.
     * @example
     * // Create one QuestionTranslation
     * const QuestionTranslation = await prisma.questionTranslation.create({
     *   data: {
     *     // ... data to create a QuestionTranslation
     *   }
     * })
     * 
     */
    create<T extends QuestionTranslationCreateArgs>(args: SelectSubset<T, QuestionTranslationCreateArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionTranslations.
     * @param {QuestionTranslationCreateManyArgs} args - Arguments to create many QuestionTranslations.
     * @example
     * // Create many QuestionTranslations
     * const questionTranslation = await prisma.questionTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionTranslationCreateManyArgs>(args?: SelectSubset<T, QuestionTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuestionTranslation.
     * @param {QuestionTranslationDeleteArgs} args - Arguments to delete one QuestionTranslation.
     * @example
     * // Delete one QuestionTranslation
     * const QuestionTranslation = await prisma.questionTranslation.delete({
     *   where: {
     *     // ... filter to delete one QuestionTranslation
     *   }
     * })
     * 
     */
    delete<T extends QuestionTranslationDeleteArgs>(args: SelectSubset<T, QuestionTranslationDeleteArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionTranslation.
     * @param {QuestionTranslationUpdateArgs} args - Arguments to update one QuestionTranslation.
     * @example
     * // Update one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionTranslationUpdateArgs>(args: SelectSubset<T, QuestionTranslationUpdateArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionTranslations.
     * @param {QuestionTranslationDeleteManyArgs} args - Arguments to filter QuestionTranslations to delete.
     * @example
     * // Delete a few QuestionTranslations
     * const { count } = await prisma.questionTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionTranslationDeleteManyArgs>(args?: SelectSubset<T, QuestionTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionTranslations
     * const questionTranslation = await prisma.questionTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionTranslationUpdateManyArgs>(args: SelectSubset<T, QuestionTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionTranslation.
     * @param {QuestionTranslationUpsertArgs} args - Arguments to update or create a QuestionTranslation.
     * @example
     * // Update or create a QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.upsert({
     *   create: {
     *     // ... data to create a QuestionTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionTranslation we want to update
     *   }
     * })
     */
    upsert<T extends QuestionTranslationUpsertArgs>(args: SelectSubset<T, QuestionTranslationUpsertArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationCountArgs} args - Arguments to filter QuestionTranslations to count.
     * @example
     * // Count the number of QuestionTranslations
     * const count = await prisma.questionTranslation.count({
     *   where: {
     *     // ... the filter for the QuestionTranslations we want to count
     *   }
     * })
    **/
    count<T extends QuestionTranslationCountArgs>(
      args?: Subset<T, QuestionTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionTranslationAggregateArgs>(args: Subset<T, QuestionTranslationAggregateArgs>): Prisma.PrismaPromise<GetQuestionTranslationAggregateType<T>>

    /**
     * Group by QuestionTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationGroupByArgs} args - Group by arguments.
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
      T extends QuestionTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionTranslationGroupByArgs['orderBy'] }
        : { orderBy?: QuestionTranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionTranslation model
   */
  readonly fields: QuestionTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionTranslation model
   */
  interface QuestionTranslationFieldRefs {
    readonly id: FieldRef<"QuestionTranslation", 'Int'>
    readonly questionId: FieldRef<"QuestionTranslation", 'Int'>
    readonly language: FieldRef<"QuestionTranslation", 'Language'>
    readonly questionText: FieldRef<"QuestionTranslation", 'String'>
    readonly options: FieldRef<"QuestionTranslation", 'Json'>
    readonly explanation: FieldRef<"QuestionTranslation", 'String'>
    readonly createdAt: FieldRef<"QuestionTranslation", 'DateTime'>
    readonly updatedAt: FieldRef<"QuestionTranslation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionTranslation findUnique
   */
  export type QuestionTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslation to fetch.
     */
    where: QuestionTranslationWhereUniqueInput
  }

  /**
   * QuestionTranslation findUniqueOrThrow
   */
  export type QuestionTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslation to fetch.
     */
    where: QuestionTranslationWhereUniqueInput
  }

  /**
   * QuestionTranslation findFirst
   */
  export type QuestionTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslation to fetch.
     */
    where?: QuestionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTranslations to fetch.
     */
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTranslations.
     */
    cursor?: QuestionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTranslations.
     */
    distinct?: QuestionTranslationScalarFieldEnum | QuestionTranslationScalarFieldEnum[]
  }

  /**
   * QuestionTranslation findFirstOrThrow
   */
  export type QuestionTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslation to fetch.
     */
    where?: QuestionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTranslations to fetch.
     */
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTranslations.
     */
    cursor?: QuestionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTranslations.
     */
    distinct?: QuestionTranslationScalarFieldEnum | QuestionTranslationScalarFieldEnum[]
  }

  /**
   * QuestionTranslation findMany
   */
  export type QuestionTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslations to fetch.
     */
    where?: QuestionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTranslations to fetch.
     */
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionTranslations.
     */
    cursor?: QuestionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTranslations.
     */
    skip?: number
    distinct?: QuestionTranslationScalarFieldEnum | QuestionTranslationScalarFieldEnum[]
  }

  /**
   * QuestionTranslation create
   */
  export type QuestionTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionTranslation.
     */
    data: XOR<QuestionTranslationCreateInput, QuestionTranslationUncheckedCreateInput>
  }

  /**
   * QuestionTranslation createMany
   */
  export type QuestionTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionTranslations.
     */
    data: QuestionTranslationCreateManyInput | QuestionTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionTranslation update
   */
  export type QuestionTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionTranslation.
     */
    data: XOR<QuestionTranslationUpdateInput, QuestionTranslationUncheckedUpdateInput>
    /**
     * Choose, which QuestionTranslation to update.
     */
    where: QuestionTranslationWhereUniqueInput
  }

  /**
   * QuestionTranslation updateMany
   */
  export type QuestionTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionTranslations.
     */
    data: XOR<QuestionTranslationUpdateManyMutationInput, QuestionTranslationUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTranslations to update
     */
    where?: QuestionTranslationWhereInput
    /**
     * Limit how many QuestionTranslations to update.
     */
    limit?: number
  }

  /**
   * QuestionTranslation upsert
   */
  export type QuestionTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionTranslation to update in case it exists.
     */
    where: QuestionTranslationWhereUniqueInput
    /**
     * In case the QuestionTranslation found by the `where` argument doesn't exist, create a new QuestionTranslation with this data.
     */
    create: XOR<QuestionTranslationCreateInput, QuestionTranslationUncheckedCreateInput>
    /**
     * In case the QuestionTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionTranslationUpdateInput, QuestionTranslationUncheckedUpdateInput>
  }

  /**
   * QuestionTranslation delete
   */
  export type QuestionTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter which QuestionTranslation to delete.
     */
    where: QuestionTranslationWhereUniqueInput
  }

  /**
   * QuestionTranslation deleteMany
   */
  export type QuestionTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTranslations to delete
     */
    where?: QuestionTranslationWhereInput
    /**
     * Limit how many QuestionTranslations to delete.
     */
    limit?: number
  }

  /**
   * QuestionTranslation without action
   */
  export type QuestionTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTranslation
     */
    omit?: QuestionTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    contentUrl: string | null
    thumbnail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    contentUrl: string | null
    thumbnail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    contentUrl: number
    thumbnail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contentUrl?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contentUrl?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contentUrl?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    title: string
    description: string | null
    contentUrl: string | null
    thumbnail: string | null
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contentUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>



  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    contentUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "contentUrl" | "thumbnail" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      contentUrl: string | null
      thumbnail: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly contentUrl: FieldRef<"Course", 'String'>
    readonly thumbnail: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    quizId: number | null
    score: number | null
  }

  export type CertificateSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    quizId: number | null
    score: number | null
  }

  export type CertificateMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    quizId: number | null
    score: number | null
    issueDate: Date | null
    certificateID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    quizId: number | null
    score: number | null
    issueDate: Date | null
    certificateID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    quizId: number
    score: number
    issueDate: number
    certificateID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CertificateAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    quizId?: true
    score?: true
  }

  export type CertificateSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    quizId?: true
    score?: true
  }

  export type CertificateMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    quizId?: true
    score?: true
    issueDate?: true
    certificateID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    quizId?: true
    score?: true
    issueDate?: true
    certificateID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    quizId?: true
    score?: true
    issueDate?: true
    certificateID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _avg?: CertificateAvgAggregateInputType
    _sum?: CertificateSumAggregateInputType
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: number
    userId: number
    categoryId: number
    quizId: number
    score: number
    issueDate: Date
    certificateID: string
    createdAt: Date
    updatedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    quizId?: boolean
    score?: boolean
    issueDate?: boolean
    certificateID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | TestCategoryDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>



  export type CertificateSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    quizId?: boolean
    score?: boolean
    issueDate?: boolean
    certificateID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "quizId" | "score" | "issueDate" | "certificateID" | "createdAt" | "updatedAt", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | TestCategoryDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$TestCategoryPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      categoryId: number
      quizId: number
      score: number
      issueDate: Date
      certificateID: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
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
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends TestCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestCategoryDefaultArgs<ExtArgs>>): Prisma__TestCategoryClient<$Result.GetResult<Prisma.$TestCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'Int'>
    readonly userId: FieldRef<"Certificate", 'Int'>
    readonly categoryId: FieldRef<"Certificate", 'Int'>
    readonly quizId: FieldRef<"Certificate", 'Int'>
    readonly score: FieldRef<"Certificate", 'Float'>
    readonly issueDate: FieldRef<"Certificate", 'DateTime'>
    readonly certificateID: FieldRef<"Certificate", 'String'>
    readonly createdAt: FieldRef<"Certificate", 'DateTime'>
    readonly updatedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    stripePaymentId: string | null
    stripeCustomerId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    paymentMethod: string | null
    receiptUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    stripePaymentId: string | null
    stripeCustomerId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    paymentMethod: string | null
    receiptUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    stripePaymentId: number
    stripeCustomerId: number
    amount: number
    currency: number
    status: number
    paymentMethod: number
    receiptUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    stripePaymentId?: true
    stripeCustomerId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    receiptUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    stripePaymentId?: true
    stripeCustomerId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    receiptUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    stripePaymentId?: true
    stripeCustomerId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    receiptUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    userId: number
    stripePaymentId: string
    stripeCustomerId: string
    amount: number
    currency: string
    status: string
    paymentMethod: string | null
    receiptUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripePaymentId?: boolean
    stripeCustomerId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Payment$userArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    stripePaymentId?: boolean
    stripeCustomerId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripePaymentId" | "stripeCustomerId" | "amount" | "currency" | "status" | "paymentMethod" | "receiptUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Payment$userArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      stripePaymentId: string
      stripeCustomerId: string
      amount: number
      currency: string
      status: string
      paymentMethod: string | null
      receiptUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Payment$userArgs<ExtArgs> = {}>(args?: Subset<T, Payment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly userId: FieldRef<"Payment", 'Int'>
    readonly stripePaymentId: FieldRef<"Payment", 'String'>
    readonly stripeCustomerId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly receiptUrl: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.user
   */
  export type Payment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    paymentId: 'paymentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TestCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestCategoryScalarFieldEnum = (typeof TestCategoryScalarFieldEnum)[keyof typeof TestCategoryScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    passingScore: 'passingScore',
    totalPoints: 'totalPoints',
    timeLimit: 'timeLimit',
    categoryId: 'categoryId',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuizTranslationScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    language: 'language',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizTranslationScalarFieldEnum = (typeof QuizTranslationScalarFieldEnum)[keyof typeof QuizTranslationScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    correctAnswerIndex: 'correctAnswerIndex'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuestionTranslationScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    language: 'language',
    questionText: 'questionText',
    options: 'options',
    explanation: 'explanation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionTranslationScalarFieldEnum = (typeof QuestionTranslationScalarFieldEnum)[keyof typeof QuestionTranslationScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    contentUrl: 'contentUrl',
    thumbnail: 'thumbnail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    quizId: 'quizId',
    score: 'score',
    issueDate: 'issueDate',
    certificateID: 'certificateID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripePaymentId: 'stripePaymentId',
    stripeCustomerId: 'stripeCustomerId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    paymentMethod: 'paymentMethod',
    receiptUrl: 'receiptUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TestCategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type TestCategoryOrderByRelevanceFieldEnum = (typeof TestCategoryOrderByRelevanceFieldEnum)[keyof typeof TestCategoryOrderByRelevanceFieldEnum]


  export const QuizTranslationOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type QuizTranslationOrderByRelevanceFieldEnum = (typeof QuizTranslationOrderByRelevanceFieldEnum)[keyof typeof QuizTranslationOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const QuestionTranslationOrderByRelevanceFieldEnum: {
    questionText: 'questionText',
    explanation: 'explanation'
  };

  export type QuestionTranslationOrderByRelevanceFieldEnum = (typeof QuestionTranslationOrderByRelevanceFieldEnum)[keyof typeof QuestionTranslationOrderByRelevanceFieldEnum]


  export const CourseOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    contentUrl: 'contentUrl',
    thumbnail: 'thumbnail'
  };

  export type CourseOrderByRelevanceFieldEnum = (typeof CourseOrderByRelevanceFieldEnum)[keyof typeof CourseOrderByRelevanceFieldEnum]


  export const CertificateOrderByRelevanceFieldEnum: {
    certificateID: 'certificateID'
  };

  export type CertificateOrderByRelevanceFieldEnum = (typeof CertificateOrderByRelevanceFieldEnum)[keyof typeof CertificateOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    stripePaymentId: 'stripePaymentId',
    stripeCustomerId: 'stripeCustomerId',
    currency: 'currency',
    status: 'status',
    paymentMethod: 'paymentMethod',
    receiptUrl: 'receiptUrl'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Language'
   */
  export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    paymentId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdQuizzes?: QuizListRelationFilter
    certificates?: CertificateListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdQuizzes?: QuizOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
    payment?: PaymentOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    paymentId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdQuizzes?: QuizListRelationFilter
    certificates?: CertificateListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "email" | "paymentId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    paymentId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TestCategoryWhereInput = {
    AND?: TestCategoryWhereInput | TestCategoryWhereInput[]
    OR?: TestCategoryWhereInput[]
    NOT?: TestCategoryWhereInput | TestCategoryWhereInput[]
    id?: IntFilter<"TestCategory"> | number
    name?: StringFilter<"TestCategory"> | string
    description?: StringNullableFilter<"TestCategory"> | string | null
    createdAt?: DateTimeFilter<"TestCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TestCategory"> | Date | string
    quizzes?: QuizListRelationFilter
    certificates?: CertificateListRelationFilter
  }

  export type TestCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizzes?: QuizOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
    _relevance?: TestCategoryOrderByRelevanceInput
  }

  export type TestCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TestCategoryWhereInput | TestCategoryWhereInput[]
    OR?: TestCategoryWhereInput[]
    NOT?: TestCategoryWhereInput | TestCategoryWhereInput[]
    description?: StringNullableFilter<"TestCategory"> | string | null
    createdAt?: DateTimeFilter<"TestCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TestCategory"> | Date | string
    quizzes?: QuizListRelationFilter
    certificates?: CertificateListRelationFilter
  }, "id" | "name">

  export type TestCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCategoryCountOrderByAggregateInput
    _avg?: TestCategoryAvgOrderByAggregateInput
    _max?: TestCategoryMaxOrderByAggregateInput
    _min?: TestCategoryMinOrderByAggregateInput
    _sum?: TestCategorySumOrderByAggregateInput
  }

  export type TestCategoryScalarWhereWithAggregatesInput = {
    AND?: TestCategoryScalarWhereWithAggregatesInput | TestCategoryScalarWhereWithAggregatesInput[]
    OR?: TestCategoryScalarWhereWithAggregatesInput[]
    NOT?: TestCategoryScalarWhereWithAggregatesInput | TestCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestCategory"> | number
    name?: StringWithAggregatesFilter<"TestCategory"> | string
    description?: StringNullableWithAggregatesFilter<"TestCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestCategory"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: IntFilter<"Quiz"> | number
    passingScore?: IntFilter<"Quiz"> | number
    totalPoints?: IntFilter<"Quiz"> | number
    timeLimit?: IntNullableFilter<"Quiz"> | number | null
    categoryId?: IntFilter<"Quiz"> | number
    creatorId?: IntNullableFilter<"Quiz"> | number | null
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    category?: XOR<TestCategoryScalarRelationFilter, TestCategoryWhereInput>
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    questions?: QuestionListRelationFilter
    translations?: QuizTranslationListRelationFilter
    certificates?: CertificateListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    passingScore?: SortOrder
    totalPoints?: SortOrder
    timeLimit?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    creatorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: TestCategoryOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    translations?: QuizTranslationOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    passingScore?: IntFilter<"Quiz"> | number
    totalPoints?: IntFilter<"Quiz"> | number
    timeLimit?: IntNullableFilter<"Quiz"> | number | null
    categoryId?: IntFilter<"Quiz"> | number
    creatorId?: IntNullableFilter<"Quiz"> | number | null
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    category?: XOR<TestCategoryScalarRelationFilter, TestCategoryWhereInput>
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    questions?: QuestionListRelationFilter
    translations?: QuizTranslationListRelationFilter
    certificates?: CertificateListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    passingScore?: SortOrder
    totalPoints?: SortOrder
    timeLimit?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    creatorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quiz"> | number
    passingScore?: IntWithAggregatesFilter<"Quiz"> | number
    totalPoints?: IntWithAggregatesFilter<"Quiz"> | number
    timeLimit?: IntNullableWithAggregatesFilter<"Quiz"> | number | null
    categoryId?: IntWithAggregatesFilter<"Quiz"> | number
    creatorId?: IntNullableWithAggregatesFilter<"Quiz"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type QuizTranslationWhereInput = {
    AND?: QuizTranslationWhereInput | QuizTranslationWhereInput[]
    OR?: QuizTranslationWhereInput[]
    NOT?: QuizTranslationWhereInput | QuizTranslationWhereInput[]
    id?: IntFilter<"QuizTranslation"> | number
    quizId?: IntFilter<"QuizTranslation"> | number
    language?: EnumLanguageFilter<"QuizTranslation"> | $Enums.Language
    title?: StringFilter<"QuizTranslation"> | string
    description?: StringNullableFilter<"QuizTranslation"> | string | null
    createdAt?: DateTimeFilter<"QuizTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"QuizTranslation"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QuizTranslationOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    language?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    _relevance?: QuizTranslationOrderByRelevanceInput
  }

  export type QuizTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    quizId_language?: QuizTranslationQuizIdLanguageCompoundUniqueInput
    AND?: QuizTranslationWhereInput | QuizTranslationWhereInput[]
    OR?: QuizTranslationWhereInput[]
    NOT?: QuizTranslationWhereInput | QuizTranslationWhereInput[]
    quizId?: IntFilter<"QuizTranslation"> | number
    language?: EnumLanguageFilter<"QuizTranslation"> | $Enums.Language
    title?: StringFilter<"QuizTranslation"> | string
    description?: StringNullableFilter<"QuizTranslation"> | string | null
    createdAt?: DateTimeFilter<"QuizTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"QuizTranslation"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id" | "quizId_language">

  export type QuizTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    language?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizTranslationCountOrderByAggregateInput
    _avg?: QuizTranslationAvgOrderByAggregateInput
    _max?: QuizTranslationMaxOrderByAggregateInput
    _min?: QuizTranslationMinOrderByAggregateInput
    _sum?: QuizTranslationSumOrderByAggregateInput
  }

  export type QuizTranslationScalarWhereWithAggregatesInput = {
    AND?: QuizTranslationScalarWhereWithAggregatesInput | QuizTranslationScalarWhereWithAggregatesInput[]
    OR?: QuizTranslationScalarWhereWithAggregatesInput[]
    NOT?: QuizTranslationScalarWhereWithAggregatesInput | QuizTranslationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizTranslation"> | number
    quizId?: IntWithAggregatesFilter<"QuizTranslation"> | number
    language?: EnumLanguageWithAggregatesFilter<"QuizTranslation"> | $Enums.Language
    title?: StringWithAggregatesFilter<"QuizTranslation"> | string
    description?: StringNullableWithAggregatesFilter<"QuizTranslation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuizTranslation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizTranslation"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    quizId?: IntFilter<"Question"> | number
    correctAnswerIndex?: IntFilter<"Question"> | number
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    translations?: QuestionTranslationListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    correctAnswerIndex?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    translations?: QuestionTranslationOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    quizId?: IntFilter<"Question"> | number
    correctAnswerIndex?: IntFilter<"Question"> | number
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    translations?: QuestionTranslationListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    correctAnswerIndex?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    quizId?: IntWithAggregatesFilter<"Question"> | number
    correctAnswerIndex?: IntWithAggregatesFilter<"Question"> | number
  }

  export type QuestionTranslationWhereInput = {
    AND?: QuestionTranslationWhereInput | QuestionTranslationWhereInput[]
    OR?: QuestionTranslationWhereInput[]
    NOT?: QuestionTranslationWhereInput | QuestionTranslationWhereInput[]
    id?: IntFilter<"QuestionTranslation"> | number
    questionId?: IntFilter<"QuestionTranslation"> | number
    language?: EnumLanguageFilter<"QuestionTranslation"> | $Enums.Language
    questionText?: StringFilter<"QuestionTranslation"> | string
    options?: JsonFilter<"QuestionTranslation">
    explanation?: StringNullableFilter<"QuestionTranslation"> | string | null
    createdAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type QuestionTranslationOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    questionText?: SortOrder
    options?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
    _relevance?: QuestionTranslationOrderByRelevanceInput
  }

  export type QuestionTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questionId_language?: QuestionTranslationQuestionIdLanguageCompoundUniqueInput
    AND?: QuestionTranslationWhereInput | QuestionTranslationWhereInput[]
    OR?: QuestionTranslationWhereInput[]
    NOT?: QuestionTranslationWhereInput | QuestionTranslationWhereInput[]
    questionId?: IntFilter<"QuestionTranslation"> | number
    language?: EnumLanguageFilter<"QuestionTranslation"> | $Enums.Language
    questionText?: StringFilter<"QuestionTranslation"> | string
    options?: JsonFilter<"QuestionTranslation">
    explanation?: StringNullableFilter<"QuestionTranslation"> | string | null
    createdAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "questionId_language">

  export type QuestionTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    questionText?: SortOrder
    options?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionTranslationCountOrderByAggregateInput
    _avg?: QuestionTranslationAvgOrderByAggregateInput
    _max?: QuestionTranslationMaxOrderByAggregateInput
    _min?: QuestionTranslationMinOrderByAggregateInput
    _sum?: QuestionTranslationSumOrderByAggregateInput
  }

  export type QuestionTranslationScalarWhereWithAggregatesInput = {
    AND?: QuestionTranslationScalarWhereWithAggregatesInput | QuestionTranslationScalarWhereWithAggregatesInput[]
    OR?: QuestionTranslationScalarWhereWithAggregatesInput[]
    NOT?: QuestionTranslationScalarWhereWithAggregatesInput | QuestionTranslationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuestionTranslation"> | number
    questionId?: IntWithAggregatesFilter<"QuestionTranslation"> | number
    language?: EnumLanguageWithAggregatesFilter<"QuestionTranslation"> | $Enums.Language
    questionText?: StringWithAggregatesFilter<"QuestionTranslation"> | string
    options?: JsonWithAggregatesFilter<"QuestionTranslation">
    explanation?: StringNullableWithAggregatesFilter<"QuestionTranslation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuestionTranslation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuestionTranslation"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    contentUrl?: StringNullableFilter<"Course"> | string | null
    thumbnail?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    contentUrl?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CourseOrderByRelevanceInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    contentUrl?: StringNullableFilter<"Course"> | string | null
    thumbnail?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    contentUrl?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    contentUrl?: StringNullableWithAggregatesFilter<"Course"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Course"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: IntFilter<"Certificate"> | number
    userId?: IntFilter<"Certificate"> | number
    categoryId?: IntFilter<"Certificate"> | number
    quizId?: IntFilter<"Certificate"> | number
    score?: FloatFilter<"Certificate"> | number
    issueDate?: DateTimeFilter<"Certificate"> | Date | string
    certificateID?: StringFilter<"Certificate"> | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<TestCategoryScalarRelationFilter, TestCategoryWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    issueDate?: SortOrder
    certificateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: TestCategoryOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    _relevance?: CertificateOrderByRelevanceInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    certificateID?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    userId?: IntFilter<"Certificate"> | number
    categoryId?: IntFilter<"Certificate"> | number
    quizId?: IntFilter<"Certificate"> | number
    score?: FloatFilter<"Certificate"> | number
    issueDate?: DateTimeFilter<"Certificate"> | Date | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<TestCategoryScalarRelationFilter, TestCategoryWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id" | "certificateID">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    issueDate?: SortOrder
    certificateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _avg?: CertificateAvgOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
    _sum?: CertificateSumOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Certificate"> | number
    userId?: IntWithAggregatesFilter<"Certificate"> | number
    categoryId?: IntWithAggregatesFilter<"Certificate"> | number
    quizId?: IntWithAggregatesFilter<"Certificate"> | number
    score?: FloatWithAggregatesFilter<"Certificate"> | number
    issueDate?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    certificateID?: StringWithAggregatesFilter<"Certificate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    userId?: IntFilter<"Payment"> | number
    stripePaymentId?: StringFilter<"Payment"> | string
    stripeCustomerId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    receiptUrl?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentId?: SortOrder
    stripeCustomerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    stripePaymentId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    stripeCustomerId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    receiptUrl?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId" | "stripePaymentId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentId?: SortOrder
    stripeCustomerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    userId?: IntWithAggregatesFilter<"Payment"> | number
    stripePaymentId?: StringWithAggregatesFilter<"Payment"> | string
    stripeCustomerId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    receiptUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizCreateNestedManyWithoutCreatorInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    payment?: PaymentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    paymentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizUncheckedCreateNestedManyWithoutCreatorInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUpdateManyWithoutCreatorNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    payment?: PaymentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUncheckedUpdateManyWithoutCreatorNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    paymentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCategoryCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
    certificates?: CertificateCreateNestedManyWithoutCategoryInput
  }

  export type TestCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TestCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
    certificates?: CertificateUpdateManyWithoutCategoryNestedInput
  }

  export type TestCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TestCategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: TestCategoryCreateNestedOneWithoutQuizzesInput
    creator?: UserCreateNestedOneWithoutCreatedQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    translations?: QuizTranslationCreateNestedManyWithoutQuizInput
    certificates?: CertificateCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: number
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    categoryId: number
    creatorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    translations?: QuizTranslationUncheckedCreateNestedManyWithoutQuizInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TestCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    creator?: UserUpdateOneWithoutCreatedQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    translations?: QuizTranslationUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: IntFieldUpdateOperationsInput | number
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    translations?: QuizTranslationUncheckedUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: number
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    categoryId: number
    creatorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: IntFieldUpdateOperationsInput | number
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizTranslationCreateInput = {
    language: $Enums.Language
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutTranslationsInput
  }

  export type QuizTranslationUncheckedCreateInput = {
    id?: number
    quizId: number
    language: $Enums.Language
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizTranslationUpdateInput = {
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type QuizTranslationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizTranslationCreateManyInput = {
    id?: number
    quizId: number
    language: $Enums.Language
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizTranslationUpdateManyMutationInput = {
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizTranslationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    correctAnswerIndex: number
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    translations?: QuestionTranslationCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    quizId: number
    correctAnswerIndex: number
    translations?: QuestionTranslationUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    translations?: QuestionTranslationUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    translations?: QuestionTranslationUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    quizId: number
    correctAnswerIndex: number
  }

  export type QuestionUpdateManyMutationInput = {
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionTranslationCreateInput = {
    language: $Enums.Language
    questionText: string
    options: JsonNullValueInput | InputJsonValue
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutTranslationsInput
  }

  export type QuestionTranslationUncheckedCreateInput = {
    id?: number
    questionId: number
    language: $Enums.Language
    questionText: string
    options: JsonNullValueInput | InputJsonValue
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationUpdateInput = {
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    questionText?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type QuestionTranslationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    questionText?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationCreateManyInput = {
    id?: number
    questionId: number
    language: $Enums.Language
    questionText: string
    options: JsonNullValueInput | InputJsonValue
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationUpdateManyMutationInput = {
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    questionText?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    questionText?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    title: string
    description?: string | null
    contentUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    contentUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    contentUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
    category: TestCategoryCreateNestedOneWithoutCertificatesInput
    quiz: QuizCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: number
    userId: number
    categoryId: number
    quizId: number
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateInput = {
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
    category?: TestCategoryUpdateOneRequiredWithoutCertificatesNestedInput
    quiz?: QuizUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: number
    userId: number
    categoryId: number
    quizId: number
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    userId: number
    stripePaymentId: string
    stripeCustomerId: string
    amount: number
    currency: string
    status: string
    paymentMethod?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    userId: number
    stripePaymentId: string
    stripeCustomerId: string
    amount: number
    currency: string
    status: string
    paymentMethod?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    stripePaymentId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    stripePaymentId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: number
    userId: number
    stripePaymentId: string
    stripeCustomerId: string
    amount: number
    currency: string
    status: string
    paymentMethod?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    stripePaymentId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    stripePaymentId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TestCategoryOrderByRelevanceInput = {
    fields: TestCategoryOrderByRelevanceFieldEnum | TestCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TestCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestCategoryScalarRelationFilter = {
    is?: TestCategoryWhereInput
    isNot?: TestCategoryWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuizTranslationListRelationFilter = {
    every?: QuizTranslationWhereInput
    some?: QuizTranslationWhereInput
    none?: QuizTranslationWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    passingScore?: SortOrder
    totalPoints?: SortOrder
    timeLimit?: SortOrder
    categoryId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    passingScore?: SortOrder
    totalPoints?: SortOrder
    timeLimit?: SortOrder
    categoryId?: SortOrder
    creatorId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    passingScore?: SortOrder
    totalPoints?: SortOrder
    timeLimit?: SortOrder
    categoryId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    passingScore?: SortOrder
    totalPoints?: SortOrder
    timeLimit?: SortOrder
    categoryId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    passingScore?: SortOrder
    totalPoints?: SortOrder
    timeLimit?: SortOrder
    categoryId?: SortOrder
    creatorId?: SortOrder
  }

  export type EnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[]
    notIn?: $Enums.Language[]
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QuizTranslationOrderByRelevanceInput = {
    fields: QuizTranslationOrderByRelevanceFieldEnum | QuizTranslationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuizTranslationQuizIdLanguageCompoundUniqueInput = {
    quizId: number
    language: $Enums.Language
  }

  export type QuizTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    language?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizTranslationAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type QuizTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    language?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    language?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizTranslationSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type EnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[]
    notIn?: $Enums.Language[]
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type QuestionTranslationListRelationFilter = {
    every?: QuestionTranslationWhereInput
    some?: QuestionTranslationWhereInput
    none?: QuestionTranslationWhereInput
  }

  export type QuestionTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    correctAnswerIndex?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type QuestionTranslationOrderByRelevanceInput = {
    fields: QuestionTranslationOrderByRelevanceFieldEnum | QuestionTranslationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionTranslationQuestionIdLanguageCompoundUniqueInput = {
    questionId: number
    language: $Enums.Language
  }

  export type QuestionTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    questionText?: SortOrder
    options?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionTranslationAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type QuestionTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    questionText?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    questionText?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionTranslationSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CourseOrderByRelevanceInput = {
    fields: CourseOrderByRelevanceFieldEnum | CourseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentUrl?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentUrl?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentUrl?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CertificateOrderByRelevanceInput = {
    fields: CertificateOrderByRelevanceFieldEnum | CertificateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    issueDate?: SortOrder
    certificateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    issueDate?: SortOrder
    certificateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    issueDate?: SortOrder
    certificateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentId?: SortOrder
    stripeCustomerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentId?: SortOrder
    stripeCustomerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripePaymentId?: SortOrder
    stripeCustomerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type QuizCreateNestedManyWithoutCreatorInput = {
    create?: XOR<QuizCreateWithoutCreatorInput, QuizUncheckedCreateWithoutCreatorInput> | QuizCreateWithoutCreatorInput[] | QuizUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatorInput | QuizCreateOrConnectWithoutCreatorInput[]
    createMany?: QuizCreateManyCreatorInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput
    connect?: PaymentWhereUniqueInput
  }

  export type QuizUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<QuizCreateWithoutCreatorInput, QuizUncheckedCreateWithoutCreatorInput> | QuizCreateWithoutCreatorInput[] | QuizUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatorInput | QuizCreateOrConnectWithoutCreatorInput[]
    createMany?: QuizCreateManyCreatorInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuizUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<QuizCreateWithoutCreatorInput, QuizUncheckedCreateWithoutCreatorInput> | QuizCreateWithoutCreatorInput[] | QuizUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatorInput | QuizCreateOrConnectWithoutCreatorInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCreatorInput | QuizUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: QuizCreateManyCreatorInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCreatorInput | QuizUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCreatorInput | QuizUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type PaymentUpdateOneWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput
    upsert?: PaymentUpsertWithoutUserInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutUserInput, PaymentUpdateWithoutUserInput>, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuizUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<QuizCreateWithoutCreatorInput, QuizUncheckedCreateWithoutCreatorInput> | QuizCreateWithoutCreatorInput[] | QuizUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatorInput | QuizCreateOrConnectWithoutCreatorInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCreatorInput | QuizUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: QuizCreateManyCreatorInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCreatorInput | QuizUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCreatorInput | QuizUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type QuizCreateNestedManyWithoutCategoryInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CertificateCreateWithoutCategoryInput, CertificateUncheckedCreateWithoutCategoryInput> | CertificateCreateWithoutCategoryInput[] | CertificateUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCategoryInput | CertificateCreateOrConnectWithoutCategoryInput[]
    createMany?: CertificateCreateManyCategoryInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CertificateCreateWithoutCategoryInput, CertificateUncheckedCreateWithoutCategoryInput> | CertificateCreateWithoutCategoryInput[] | CertificateUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCategoryInput | CertificateCreateOrConnectWithoutCategoryInput[]
    createMany?: CertificateCreateManyCategoryInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type QuizUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCategoryInput | QuizUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCategoryInput | QuizUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCategoryInput | QuizUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CertificateCreateWithoutCategoryInput, CertificateUncheckedCreateWithoutCategoryInput> | CertificateCreateWithoutCategoryInput[] | CertificateUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCategoryInput | CertificateCreateOrConnectWithoutCategoryInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutCategoryInput | CertificateUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CertificateCreateManyCategoryInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutCategoryInput | CertificateUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutCategoryInput | CertificateUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCategoryInput | QuizUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCategoryInput | QuizUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCategoryInput | QuizUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CertificateCreateWithoutCategoryInput, CertificateUncheckedCreateWithoutCategoryInput> | CertificateCreateWithoutCategoryInput[] | CertificateUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCategoryInput | CertificateCreateOrConnectWithoutCategoryInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutCategoryInput | CertificateUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CertificateCreateManyCategoryInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutCategoryInput | CertificateUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutCategoryInput | CertificateUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type TestCategoryCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<TestCategoryCreateWithoutQuizzesInput, TestCategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: TestCategoryCreateOrConnectWithoutQuizzesInput
    connect?: TestCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedQuizzesInput = {
    create?: XOR<UserCreateWithoutCreatedQuizzesInput, UserUncheckedCreateWithoutCreatedQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedQuizzesInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizTranslationCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizTranslationCreateWithoutQuizInput, QuizTranslationUncheckedCreateWithoutQuizInput> | QuizTranslationCreateWithoutQuizInput[] | QuizTranslationUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizTranslationCreateOrConnectWithoutQuizInput | QuizTranslationCreateOrConnectWithoutQuizInput[]
    createMany?: QuizTranslationCreateManyQuizInputEnvelope
    connect?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutQuizInput = {
    create?: XOR<CertificateCreateWithoutQuizInput, CertificateUncheckedCreateWithoutQuizInput> | CertificateCreateWithoutQuizInput[] | CertificateUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutQuizInput | CertificateCreateOrConnectWithoutQuizInput[]
    createMany?: CertificateCreateManyQuizInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizTranslationUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizTranslationCreateWithoutQuizInput, QuizTranslationUncheckedCreateWithoutQuizInput> | QuizTranslationCreateWithoutQuizInput[] | QuizTranslationUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizTranslationCreateOrConnectWithoutQuizInput | QuizTranslationCreateOrConnectWithoutQuizInput[]
    createMany?: QuizTranslationCreateManyQuizInputEnvelope
    connect?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<CertificateCreateWithoutQuizInput, CertificateUncheckedCreateWithoutQuizInput> | CertificateCreateWithoutQuizInput[] | CertificateUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutQuizInput | CertificateCreateOrConnectWithoutQuizInput[]
    createMany?: CertificateCreateManyQuizInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type TestCategoryUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<TestCategoryCreateWithoutQuizzesInput, TestCategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: TestCategoryCreateOrConnectWithoutQuizzesInput
    upsert?: TestCategoryUpsertWithoutQuizzesInput
    connect?: TestCategoryWhereUniqueInput
    update?: XOR<XOR<TestCategoryUpdateToOneWithWhereWithoutQuizzesInput, TestCategoryUpdateWithoutQuizzesInput>, TestCategoryUncheckedUpdateWithoutQuizzesInput>
  }

  export type UserUpdateOneWithoutCreatedQuizzesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedQuizzesInput, UserUncheckedCreateWithoutCreatedQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedQuizzesInput
    upsert?: UserUpsertWithoutCreatedQuizzesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedQuizzesInput, UserUpdateWithoutCreatedQuizzesInput>, UserUncheckedUpdateWithoutCreatedQuizzesInput>
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizTranslationUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizTranslationCreateWithoutQuizInput, QuizTranslationUncheckedCreateWithoutQuizInput> | QuizTranslationCreateWithoutQuizInput[] | QuizTranslationUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizTranslationCreateOrConnectWithoutQuizInput | QuizTranslationCreateOrConnectWithoutQuizInput[]
    upsert?: QuizTranslationUpsertWithWhereUniqueWithoutQuizInput | QuizTranslationUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizTranslationCreateManyQuizInputEnvelope
    set?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
    disconnect?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
    delete?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
    connect?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
    update?: QuizTranslationUpdateWithWhereUniqueWithoutQuizInput | QuizTranslationUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizTranslationUpdateManyWithWhereWithoutQuizInput | QuizTranslationUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizTranslationScalarWhereInput | QuizTranslationScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutQuizNestedInput = {
    create?: XOR<CertificateCreateWithoutQuizInput, CertificateUncheckedCreateWithoutQuizInput> | CertificateCreateWithoutQuizInput[] | CertificateUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutQuizInput | CertificateCreateOrConnectWithoutQuizInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutQuizInput | CertificateUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: CertificateCreateManyQuizInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutQuizInput | CertificateUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutQuizInput | CertificateUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizTranslationUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizTranslationCreateWithoutQuizInput, QuizTranslationUncheckedCreateWithoutQuizInput> | QuizTranslationCreateWithoutQuizInput[] | QuizTranslationUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizTranslationCreateOrConnectWithoutQuizInput | QuizTranslationCreateOrConnectWithoutQuizInput[]
    upsert?: QuizTranslationUpsertWithWhereUniqueWithoutQuizInput | QuizTranslationUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizTranslationCreateManyQuizInputEnvelope
    set?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
    disconnect?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
    delete?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
    connect?: QuizTranslationWhereUniqueInput | QuizTranslationWhereUniqueInput[]
    update?: QuizTranslationUpdateWithWhereUniqueWithoutQuizInput | QuizTranslationUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizTranslationUpdateManyWithWhereWithoutQuizInput | QuizTranslationUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizTranslationScalarWhereInput | QuizTranslationScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<CertificateCreateWithoutQuizInput, CertificateUncheckedCreateWithoutQuizInput> | CertificateCreateWithoutQuizInput[] | CertificateUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutQuizInput | CertificateCreateOrConnectWithoutQuizInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutQuizInput | CertificateUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: CertificateCreateManyQuizInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutQuizInput | CertificateUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutQuizInput | CertificateUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<QuizCreateWithoutTranslationsInput, QuizUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutTranslationsInput
    connect?: QuizWhereUniqueInput
  }

  export type EnumLanguageFieldUpdateOperationsInput = {
    set?: $Enums.Language
  }

  export type QuizUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<QuizCreateWithoutTranslationsInput, QuizUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutTranslationsInput
    upsert?: QuizUpsertWithoutTranslationsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutTranslationsInput, QuizUpdateWithoutTranslationsInput>, QuizUncheckedUpdateWithoutTranslationsInput>
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type QuestionTranslationCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput> | QuestionTranslationCreateWithoutQuestionInput[] | QuestionTranslationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTranslationCreateOrConnectWithoutQuestionInput | QuestionTranslationCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionTranslationCreateManyQuestionInputEnvelope
    connect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
  }

  export type QuestionTranslationUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput> | QuestionTranslationCreateWithoutQuestionInput[] | QuestionTranslationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTranslationCreateOrConnectWithoutQuestionInput | QuestionTranslationCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionTranslationCreateManyQuestionInputEnvelope
    connect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
  }

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionTranslationUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput> | QuestionTranslationCreateWithoutQuestionInput[] | QuestionTranslationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTranslationCreateOrConnectWithoutQuestionInput | QuestionTranslationCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput | QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionTranslationCreateManyQuestionInputEnvelope
    set?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    disconnect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    delete?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    connect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    update?: QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput | QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionTranslationUpdateManyWithWhereWithoutQuestionInput | QuestionTranslationUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionTranslationScalarWhereInput | QuestionTranslationScalarWhereInput[]
  }

  export type QuestionTranslationUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput> | QuestionTranslationCreateWithoutQuestionInput[] | QuestionTranslationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTranslationCreateOrConnectWithoutQuestionInput | QuestionTranslationCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput | QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionTranslationCreateManyQuestionInputEnvelope
    set?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    disconnect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    delete?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    connect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    update?: QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput | QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionTranslationUpdateManyWithWhereWithoutQuestionInput | QuestionTranslationUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionTranslationScalarWhereInput | QuestionTranslationScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<QuestionCreateWithoutTranslationsInput, QuestionUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTranslationsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<QuestionCreateWithoutTranslationsInput, QuestionUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTranslationsInput
    upsert?: QuestionUpsertWithoutTranslationsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutTranslationsInput, QuestionUpdateWithoutTranslationsInput>, QuestionUncheckedUpdateWithoutTranslationsInput>
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type TestCategoryCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<TestCategoryCreateWithoutCertificatesInput, TestCategoryUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: TestCategoryCreateOrConnectWithoutCertificatesInput
    connect?: TestCategoryWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<QuizCreateWithoutCertificatesInput, QuizUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutCertificatesInput
    connect?: QuizWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type TestCategoryUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<TestCategoryCreateWithoutCertificatesInput, TestCategoryUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: TestCategoryCreateOrConnectWithoutCertificatesInput
    upsert?: TestCategoryUpsertWithoutCertificatesInput
    connect?: TestCategoryWhereUniqueInput
    update?: XOR<XOR<TestCategoryUpdateToOneWithWhereWithoutCertificatesInput, TestCategoryUpdateWithoutCertificatesInput>, TestCategoryUncheckedUpdateWithoutCertificatesInput>
  }

  export type QuizUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<QuizCreateWithoutCertificatesInput, QuizUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutCertificatesInput
    upsert?: QuizUpsertWithoutCertificatesInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutCertificatesInput, QuizUpdateWithoutCertificatesInput>, QuizUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[]
    notIn?: $Enums.Language[]
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type NestedEnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[]
    notIn?: $Enums.Language[]
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type QuizCreateWithoutCreatorInput = {
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: TestCategoryCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    translations?: QuizTranslationCreateNestedManyWithoutQuizInput
    certificates?: CertificateCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCreatorInput = {
    id?: number
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    translations?: QuizTranslationUncheckedCreateNestedManyWithoutQuizInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCreatorInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCreatorInput, QuizUncheckedCreateWithoutCreatorInput>
  }

  export type QuizCreateManyCreatorInputEnvelope = {
    data: QuizCreateManyCreatorInput | QuizCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutUserInput = {
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: TestCategoryCreateNestedOneWithoutCertificatesInput
    quiz: QuizCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId: number
    quizId: number
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutUserInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateCreateManyUserInputEnvelope = {
    data: CertificateCreateManyUserInput | CertificateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    userId: number
    stripePaymentId: string
    stripeCustomerId: string
    amount: number
    currency: string
    status: string
    paymentMethod?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number
    userId: number
    stripePaymentId: string
    stripeCustomerId: string
    amount: number
    currency: string
    status: string
    paymentMethod?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type QuizUpsertWithWhereUniqueWithoutCreatorInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCreatorInput, QuizUncheckedUpdateWithoutCreatorInput>
    create: XOR<QuizCreateWithoutCreatorInput, QuizUncheckedCreateWithoutCreatorInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCreatorInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCreatorInput, QuizUncheckedUpdateWithoutCreatorInput>
  }

  export type QuizUpdateManyWithWhereWithoutCreatorInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCreatorInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: IntFilter<"Quiz"> | number
    passingScore?: IntFilter<"Quiz"> | number
    totalPoints?: IntFilter<"Quiz"> | number
    timeLimit?: IntNullableFilter<"Quiz"> | number | null
    categoryId?: IntFilter<"Quiz"> | number
    creatorId?: IntNullableFilter<"Quiz"> | number | null
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
  }

  export type CertificateUpdateManyWithWhereWithoutUserInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: IntFilter<"Certificate"> | number
    userId?: IntFilter<"Certificate"> | number
    categoryId?: IntFilter<"Certificate"> | number
    quizId?: IntFilter<"Certificate"> | number
    score?: FloatFilter<"Certificate"> | number
    issueDate?: DateTimeFilter<"Certificate"> | Date | string
    certificateID?: StringFilter<"Certificate"> | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type PaymentUpsertWithoutUserInput = {
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutUserInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateWithoutUserInput = {
    userId?: IntFieldUpdateOperationsInput | number
    stripePaymentId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    stripePaymentId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateWithoutCategoryInput = {
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator?: UserCreateNestedOneWithoutCreatedQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    translations?: QuizTranslationCreateNestedManyWithoutQuizInput
    certificates?: CertificateCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCategoryInput = {
    id?: number
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    creatorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    translations?: QuizTranslationUncheckedCreateNestedManyWithoutQuizInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizCreateManyCategoryInputEnvelope = {
    data: QuizCreateManyCategoryInput | QuizCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutCategoryInput = {
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
    quiz: QuizCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: number
    quizId: number
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutCategoryInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutCategoryInput, CertificateUncheckedCreateWithoutCategoryInput>
  }

  export type CertificateCreateManyCategoryInputEnvelope = {
    data: CertificateCreateManyCategoryInput | CertificateCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
  }

  export type QuizUpdateManyWithWhereWithoutCategoryInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CertificateUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutCategoryInput, CertificateUncheckedUpdateWithoutCategoryInput>
    create: XOR<CertificateCreateWithoutCategoryInput, CertificateUncheckedCreateWithoutCategoryInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutCategoryInput, CertificateUncheckedUpdateWithoutCategoryInput>
  }

  export type CertificateUpdateManyWithWhereWithoutCategoryInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TestCategoryCreateWithoutQuizzesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateCreateNestedManyWithoutCategoryInput
  }

  export type TestCategoryUncheckedCreateWithoutQuizzesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TestCategoryCreateOrConnectWithoutQuizzesInput = {
    where: TestCategoryWhereUniqueInput
    create: XOR<TestCategoryCreateWithoutQuizzesInput, TestCategoryUncheckedCreateWithoutQuizzesInput>
  }

  export type UserCreateWithoutCreatedQuizzesInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateCreateNestedManyWithoutUserInput
    payment?: PaymentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedQuizzesInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    paymentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedQuizzesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedQuizzesInput, UserUncheckedCreateWithoutCreatedQuizzesInput>
  }

  export type QuestionCreateWithoutQuizInput = {
    correctAnswerIndex: number
    translations?: QuestionTranslationCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: number
    correctAnswerIndex: number
    translations?: QuestionTranslationUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuizTranslationCreateWithoutQuizInput = {
    language: $Enums.Language
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizTranslationUncheckedCreateWithoutQuizInput = {
    id?: number
    language: $Enums.Language
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizTranslationCreateOrConnectWithoutQuizInput = {
    where: QuizTranslationWhereUniqueInput
    create: XOR<QuizTranslationCreateWithoutQuizInput, QuizTranslationUncheckedCreateWithoutQuizInput>
  }

  export type QuizTranslationCreateManyQuizInputEnvelope = {
    data: QuizTranslationCreateManyQuizInput | QuizTranslationCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutQuizInput = {
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
    category: TestCategoryCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutQuizInput = {
    id?: number
    userId: number
    categoryId: number
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutQuizInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutQuizInput, CertificateUncheckedCreateWithoutQuizInput>
  }

  export type CertificateCreateManyQuizInputEnvelope = {
    data: CertificateCreateManyQuizInput | CertificateCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type TestCategoryUpsertWithoutQuizzesInput = {
    update: XOR<TestCategoryUpdateWithoutQuizzesInput, TestCategoryUncheckedUpdateWithoutQuizzesInput>
    create: XOR<TestCategoryCreateWithoutQuizzesInput, TestCategoryUncheckedCreateWithoutQuizzesInput>
    where?: TestCategoryWhereInput
  }

  export type TestCategoryUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: TestCategoryWhereInput
    data: XOR<TestCategoryUpdateWithoutQuizzesInput, TestCategoryUncheckedUpdateWithoutQuizzesInput>
  }

  export type TestCategoryUpdateWithoutQuizzesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUpdateManyWithoutCategoryNestedInput
  }

  export type TestCategoryUncheckedUpdateWithoutQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserUpsertWithoutCreatedQuizzesInput = {
    update: XOR<UserUpdateWithoutCreatedQuizzesInput, UserUncheckedUpdateWithoutCreatedQuizzesInput>
    create: XOR<UserCreateWithoutCreatedQuizzesInput, UserUncheckedCreateWithoutCreatedQuizzesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedQuizzesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedQuizzesInput, UserUncheckedUpdateWithoutCreatedQuizzesInput>
  }

  export type UserUpdateWithoutCreatedQuizzesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    payment?: PaymentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    quizId?: IntFilter<"Question"> | number
    correctAnswerIndex?: IntFilter<"Question"> | number
  }

  export type QuizTranslationUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizTranslationWhereUniqueInput
    update: XOR<QuizTranslationUpdateWithoutQuizInput, QuizTranslationUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizTranslationCreateWithoutQuizInput, QuizTranslationUncheckedCreateWithoutQuizInput>
  }

  export type QuizTranslationUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizTranslationWhereUniqueInput
    data: XOR<QuizTranslationUpdateWithoutQuizInput, QuizTranslationUncheckedUpdateWithoutQuizInput>
  }

  export type QuizTranslationUpdateManyWithWhereWithoutQuizInput = {
    where: QuizTranslationScalarWhereInput
    data: XOR<QuizTranslationUpdateManyMutationInput, QuizTranslationUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizTranslationScalarWhereInput = {
    AND?: QuizTranslationScalarWhereInput | QuizTranslationScalarWhereInput[]
    OR?: QuizTranslationScalarWhereInput[]
    NOT?: QuizTranslationScalarWhereInput | QuizTranslationScalarWhereInput[]
    id?: IntFilter<"QuizTranslation"> | number
    quizId?: IntFilter<"QuizTranslation"> | number
    language?: EnumLanguageFilter<"QuizTranslation"> | $Enums.Language
    title?: StringFilter<"QuizTranslation"> | string
    description?: StringNullableFilter<"QuizTranslation"> | string | null
    createdAt?: DateTimeFilter<"QuizTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"QuizTranslation"> | Date | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutQuizInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutQuizInput, CertificateUncheckedUpdateWithoutQuizInput>
    create: XOR<CertificateCreateWithoutQuizInput, CertificateUncheckedCreateWithoutQuizInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutQuizInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutQuizInput, CertificateUncheckedUpdateWithoutQuizInput>
  }

  export type CertificateUpdateManyWithWhereWithoutQuizInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutTranslationsInput = {
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: TestCategoryCreateNestedOneWithoutQuizzesInput
    creator?: UserCreateNestedOneWithoutCreatedQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    certificates?: CertificateCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutTranslationsInput = {
    id?: number
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    categoryId: number
    creatorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutTranslationsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutTranslationsInput, QuizUncheckedCreateWithoutTranslationsInput>
  }

  export type QuizUpsertWithoutTranslationsInput = {
    update: XOR<QuizUpdateWithoutTranslationsInput, QuizUncheckedUpdateWithoutTranslationsInput>
    create: XOR<QuizCreateWithoutTranslationsInput, QuizUncheckedCreateWithoutTranslationsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutTranslationsInput, QuizUncheckedUpdateWithoutTranslationsInput>
  }

  export type QuizUpdateWithoutTranslationsInput = {
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TestCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    creator?: UserUpdateOneWithoutCreatedQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutTranslationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: IntFieldUpdateOperationsInput | number
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateWithoutQuestionsInput = {
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: TestCategoryCreateNestedOneWithoutQuizzesInput
    creator?: UserCreateNestedOneWithoutCreatedQuizzesInput
    translations?: QuizTranslationCreateNestedManyWithoutQuizInput
    certificates?: CertificateCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: number
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    categoryId: number
    creatorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: QuizTranslationUncheckedCreateNestedManyWithoutQuizInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionTranslationCreateWithoutQuestionInput = {
    language: $Enums.Language
    questionText: string
    options: JsonNullValueInput | InputJsonValue
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationUncheckedCreateWithoutQuestionInput = {
    id?: number
    language: $Enums.Language
    questionText: string
    options: JsonNullValueInput | InputJsonValue
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationCreateOrConnectWithoutQuestionInput = {
    where: QuestionTranslationWhereUniqueInput
    create: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionTranslationCreateManyQuestionInputEnvelope = {
    data: QuestionTranslationCreateManyQuestionInput | QuestionTranslationCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TestCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    creator?: UserUpdateOneWithoutCreatedQuizzesNestedInput
    translations?: QuizTranslationUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: IntFieldUpdateOperationsInput | number
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: QuizTranslationUncheckedUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTranslationWhereUniqueInput
    update: XOR<QuestionTranslationUpdateWithoutQuestionInput, QuestionTranslationUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTranslationWhereUniqueInput
    data: XOR<QuestionTranslationUpdateWithoutQuestionInput, QuestionTranslationUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionTranslationUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionTranslationScalarWhereInput
    data: XOR<QuestionTranslationUpdateManyMutationInput, QuestionTranslationUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionTranslationScalarWhereInput = {
    AND?: QuestionTranslationScalarWhereInput | QuestionTranslationScalarWhereInput[]
    OR?: QuestionTranslationScalarWhereInput[]
    NOT?: QuestionTranslationScalarWhereInput | QuestionTranslationScalarWhereInput[]
    id?: IntFilter<"QuestionTranslation"> | number
    questionId?: IntFilter<"QuestionTranslation"> | number
    language?: EnumLanguageFilter<"QuestionTranslation"> | $Enums.Language
    questionText?: StringFilter<"QuestionTranslation"> | string
    options?: JsonFilter<"QuestionTranslation">
    explanation?: StringNullableFilter<"QuestionTranslation"> | string | null
    createdAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
  }

  export type QuestionCreateWithoutTranslationsInput = {
    correctAnswerIndex: number
    quiz: QuizCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutTranslationsInput = {
    id?: number
    quizId: number
    correctAnswerIndex: number
  }

  export type QuestionCreateOrConnectWithoutTranslationsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTranslationsInput, QuestionUncheckedCreateWithoutTranslationsInput>
  }

  export type QuestionUpsertWithoutTranslationsInput = {
    update: XOR<QuestionUpdateWithoutTranslationsInput, QuestionUncheckedUpdateWithoutTranslationsInput>
    create: XOR<QuestionCreateWithoutTranslationsInput, QuestionUncheckedCreateWithoutTranslationsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutTranslationsInput, QuestionUncheckedUpdateWithoutTranslationsInput>
  }

  export type QuestionUpdateWithoutTranslationsInput = {
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTranslationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutCertificatesInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizCreateNestedManyWithoutCreatorInput
    payment?: PaymentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    paymentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type TestCategoryCreateWithoutCertificatesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
  }

  export type TestCategoryUncheckedCreateWithoutCertificatesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TestCategoryCreateOrConnectWithoutCertificatesInput = {
    where: TestCategoryWhereUniqueInput
    create: XOR<TestCategoryCreateWithoutCertificatesInput, TestCategoryUncheckedCreateWithoutCertificatesInput>
  }

  export type QuizCreateWithoutCertificatesInput = {
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: TestCategoryCreateNestedOneWithoutQuizzesInput
    creator?: UserCreateNestedOneWithoutCreatedQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    translations?: QuizTranslationCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCertificatesInput = {
    id?: number
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    categoryId: number
    creatorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    translations?: QuizTranslationUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCertificatesInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCertificatesInput, QuizUncheckedCreateWithoutCertificatesInput>
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUpdateManyWithoutCreatorNestedInput
    payment?: PaymentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TestCategoryUpsertWithoutCertificatesInput = {
    update: XOR<TestCategoryUpdateWithoutCertificatesInput, TestCategoryUncheckedUpdateWithoutCertificatesInput>
    create: XOR<TestCategoryCreateWithoutCertificatesInput, TestCategoryUncheckedCreateWithoutCertificatesInput>
    where?: TestCategoryWhereInput
  }

  export type TestCategoryUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: TestCategoryWhereInput
    data: XOR<TestCategoryUpdateWithoutCertificatesInput, TestCategoryUncheckedUpdateWithoutCertificatesInput>
  }

  export type TestCategoryUpdateWithoutCertificatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
  }

  export type TestCategoryUncheckedUpdateWithoutCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type QuizUpsertWithoutCertificatesInput = {
    update: XOR<QuizUpdateWithoutCertificatesInput, QuizUncheckedUpdateWithoutCertificatesInput>
    create: XOR<QuizCreateWithoutCertificatesInput, QuizUncheckedCreateWithoutCertificatesInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutCertificatesInput, QuizUncheckedUpdateWithoutCertificatesInput>
  }

  export type QuizUpdateWithoutCertificatesInput = {
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TestCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    creator?: UserUpdateOneWithoutCreatedQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    translations?: QuizTranslationUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: IntFieldUpdateOperationsInput | number
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    translations?: QuizTranslationUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserCreateWithoutPaymentInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizCreateNestedManyWithoutCreatorInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizUncheckedCreateNestedManyWithoutCreatorInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUpdateManyWithoutCreatorNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUncheckedUpdateManyWithoutCreatorNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizCreateManyCreatorInput = {
    id?: number
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateManyUserInput = {
    id?: number
    categoryId: number
    quizId: number
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateWithoutCreatorInput = {
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TestCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    translations?: QuizTranslationUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    translations?: QuizTranslationUncheckedUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutUserInput = {
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: TestCategoryUpdateOneRequiredWithoutCertificatesNestedInput
    quiz?: QuizUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateManyCategoryInput = {
    id?: number
    passingScore?: number
    totalPoints: number
    timeLimit?: number | null
    creatorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateManyCategoryInput = {
    id?: number
    userId: number
    quizId: number
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateWithoutCategoryInput = {
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneWithoutCreatedQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    translations?: QuizTranslationUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    translations?: QuizTranslationUncheckedUpdateManyWithoutQuizNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutCategoryInput = {
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
    quiz?: QuizUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyQuizInput = {
    id?: number
    correctAnswerIndex: number
  }

  export type QuizTranslationCreateManyQuizInput = {
    id?: number
    language: $Enums.Language
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateManyQuizInput = {
    id?: number
    userId: number
    categoryId: number
    score: number
    issueDate?: Date | string
    certificateID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutQuizInput = {
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    translations?: QuestionTranslationUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    translations?: QuestionTranslationUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuizTranslationUpdateWithoutQuizInput = {
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizTranslationUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizTranslationUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutQuizInput = {
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
    category?: TestCategoryUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    certificateID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationCreateManyQuestionInput = {
    id?: number
    language: $Enums.Language
    questionText: string
    options: JsonNullValueInput | InputJsonValue
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationUpdateWithoutQuestionInput = {
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    questionText?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    questionText?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    questionText?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}