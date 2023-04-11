import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CategoryAdd = {
  name: Scalars['String'];
};

export type CategoryUpdate = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  categoryAdd: MutationResponse;
  categoryDelete: MutationResponse;
  categoryUpdate: MutationResponse;
  productAdd: MutationResponse;
  productDelete: MutationResponse;
  productUpdate: MutationResponse;
};


export type MutationCategoryAddArgs = {
  input: CategoryAdd;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCategoryUpdateArgs = {
  input: CategoryUpdate;
};


export type MutationProductAddArgs = {
  input: ProductAdd;
};


export type MutationProductDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductUpdateArgs = {
  input: ProductUpdate;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  errors: Array<Scalars['String']>;
  id: Scalars['ID'];
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  categoryId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
};


export type ProductPriceArgs = {
  currency?: Scalars['String'];
};

export type ProductAdd = {
  categoryId: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
};

export type ProductUpdate = {
  categoryId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  products: Array<Product>;
};


export type QueryProductsArgs = {
  category?: InputMaybe<Scalars['String']>;
  onlyAvailable?: InputMaybe<Scalars['Boolean']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryAdd: CategoryAdd;
  CategoryUpdate: CategoryUpdate;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<MutationResponse>;
  Product: ResolverTypeWrapper<Product>;
  ProductAdd: ProductAdd;
  ProductUpdate: ProductUpdate;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Category: Category;
  CategoryAdd: CategoryAdd;
  CategoryUpdate: CategoryUpdate;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  MutationResponse: MutationResponse;
  Product: Product;
  ProductAdd: ProductAdd;
  ProductUpdate: ProductUpdate;
  Query: {};
  String: Scalars['String'];
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  categoryAdd?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationCategoryAddArgs, 'input'>>;
  categoryDelete?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationCategoryDeleteArgs, 'id'>>;
  categoryUpdate?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationCategoryUpdateArgs, 'input'>>;
  productAdd?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationProductAddArgs, 'input'>>;
  productDelete?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationProductDeleteArgs, 'id'>>;
  productUpdate?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationProductUpdateArgs, 'input'>>;
};

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  errors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<ProductPriceArgs, 'currency'>>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, Partial<QueryProductsArgs>>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

