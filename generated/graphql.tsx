import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Query = {
  __typename?: 'Query';
  artifact?: Maybe<Artifact>;
  artifacts?: Maybe<Array<Maybe<Artifact>>>;
  filterArtifacts?: Maybe<Array<Maybe<Artifact>>>;
  artifactSet?: Maybe<ArtifactSet>;
  ArtifactSets?: Maybe<Array<Maybe<ArtifactSet>>>;
  filterArtifactSets?: Maybe<Array<Maybe<ArtifactSet>>>;
  character?: Maybe<Character>;
  characters?: Maybe<Array<Maybe<Character>>>;
  filterCharacters?: Maybe<Array<Maybe<Character>>>;
  characterAscension?: Maybe<CharacterAscension>;
  characterAscensions?: Maybe<Array<Maybe<CharacterAscension>>>;
  filterCharacterAscensions?: Maybe<Array<Maybe<CharacterAscension>>>;
  characterAscensionMaterial?: Maybe<CharacterAscensionMaterial>;
  characterAscensionMaterials?: Maybe<Array<Maybe<CharacterAscensionMaterial>>>;
  filterCharacterAscensionMaterials?: Maybe<
    Array<Maybe<CharacterAscensionMaterial>>
  >;
  characterProfile?: Maybe<CharacterProfile>;
  characterProfiles?: Maybe<Array<Maybe<CharacterProfile>>>;
  filterCharacterProfiles?: Maybe<Array<Maybe<CharacterProfile>>>;
  commonAscensionMaterial?: Maybe<CommonAscensionMaterial>;
  commonAscensionMaterials?: Maybe<Array<Maybe<CommonAscensionMaterial>>>;
  filterCommonAscensionMaterials?: Maybe<Array<Maybe<CommonAscensionMaterial>>>;
  commonMaterial?: Maybe<CommonMaterial>;
  commonMaterials?: Maybe<Array<Maybe<CommonMaterial>>>;
  filterCommonMaterials?: Maybe<Array<Maybe<CommonMaterial>>>;
  consumeable?: Maybe<Consumeable>;
  consumeables?: Maybe<Array<Maybe<Consumeable>>>;
  filterConsumeables?: Maybe<Array<Maybe<Consumeable>>>;
  consumeableRecipe?: Maybe<ConsumeableRecipe>;
  consumeableRecipes?: Maybe<Array<Maybe<ConsumeableRecipe>>>;
  filterConsumeableRecipes?: Maybe<Array<Maybe<ConsumeableRecipe>>>;
  cookingMaterial?: Maybe<CookingMaterial>;
  cookingMaterials?: Maybe<Array<Maybe<CookingMaterial>>>;
  filterCookingMaterials?: Maybe<Array<Maybe<CookingMaterial>>>;
  craftingMaterial?: Maybe<CraftingMaterial>;
  craftingMaterials?: Maybe<Array<Maybe<CraftingMaterial>>>;
  filterCraftingMaterials?: Maybe<Array<Maybe<CraftingMaterial>>>;
  domain?: Maybe<Domain>;
  domains?: Maybe<Array<Maybe<Domain>>>;
  filterDomains?: Maybe<Array<Maybe<Domain>>>;
  element?: Maybe<Element>;
  elements?: Maybe<Array<Maybe<Element>>>;
  filterElements?: Maybe<Array<Maybe<Element>>>;
  forgeRecipe?: Maybe<ForgeRecipe>;
  forgeRecipes?: Maybe<Array<Maybe<ForgeRecipe>>>;
  filterForgeRecipes?: Maybe<Array<Maybe<ForgeRecipe>>>;
  gadget?: Maybe<Gadget>;
  gadgets?: Maybe<Array<Maybe<Gadget>>>;
  filterGadgets?: Maybe<Array<Maybe<Gadget>>>;
  region?: Maybe<Region>;
  regions?: Maybe<Array<Maybe<Region>>>;
  filterRegions?: Maybe<Array<Maybe<Region>>>;
  talent?: Maybe<Talent>;
  talents?: Maybe<Array<Maybe<Talent>>>;
  filterTalents?: Maybe<Array<Maybe<Talent>>>;
  talentLevelUpMaterial?: Maybe<TalentLevelUpMaterial>;
  talentLevelUpMaterials?: Maybe<Array<Maybe<TalentLevelUpMaterial>>>;
  filterTalentLevelUpMaterials?: Maybe<Array<Maybe<TalentLevelUpMaterial>>>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  filterUsers?: Maybe<Array<Maybe<User>>>;
  weapon?: Maybe<Weapon>;
  weapons?: Maybe<Array<Maybe<Weapon>>>;
  filterWeapons?: Maybe<Array<Maybe<Weapon>>>;
  weaponAscension?: Maybe<WeaponAscension>;
  weaponAscensions?: Maybe<Array<Maybe<WeaponAscension>>>;
  filterWeaponAscensions?: Maybe<Array<Maybe<WeaponAscension>>>;
  weaponAscensionMaterial?: Maybe<WeaponAscensionMaterial>;
  weaponAscensionMaterials?: Maybe<Array<Maybe<WeaponAscensionMaterial>>>;
  filterWeaponAscensionMaterials?: Maybe<Array<Maybe<WeaponAscensionMaterial>>>;
  weaponEnhancementMaterial?: Maybe<WeaponEnhancementMaterial>;
  weaponEnhancementMaterials?: Maybe<Array<Maybe<WeaponEnhancementMaterial>>>;
  filterWeaponEnhancementMaterials?: Maybe<
    Array<Maybe<WeaponEnhancementMaterial>>
  >;
};

export type QueryArtifactArgs = {
  where: ArtifactWhereUniqueInput;
};

export type QueryArtifactsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterArtifactsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryArtifactSetArgs = {
  where: ArtifactSetWhereUniqueInput;
};

export type QueryArtifactSetsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterArtifactSetsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  include?: Maybe<Scalars['String']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryCharacterArgs = {
  where: CharacterWhereUniqueInput;
};

export type QueryCharactersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterCharactersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryCharacterAscensionArgs = {
  where: CharacterAscensionWhereUniqueInput;
};

export type QueryCharacterAscensionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterCharacterAscensionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryCharacterAscensionMaterialArgs = {
  where: CharacterAscensionMaterialWhereUniqueInput;
};

export type QueryCharacterAscensionMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterCharacterAscensionMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryCharacterProfileArgs = {
  where: CharacterProfileWhereUniqueInput;
};

export type QueryCharacterProfilesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterCharacterProfilesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryCommonAscensionMaterialArgs = {
  where: CommonAscensionMaterialWhereUniqueInput;
};

export type QueryCommonAscensionMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterCommonAscensionMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryCommonMaterialArgs = {
  where: CommonMaterialWhereUniqueInput;
};

export type QueryCommonMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterCommonMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryConsumeableArgs = {
  where: ConsumeableWhereUniqueInput;
};

export type QueryConsumeablesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterConsumeablesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryConsumeableRecipeArgs = {
  where: ConsumeableRecipeWhereUniqueInput;
};

export type QueryConsumeableRecipesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterConsumeableRecipesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryCookingMaterialArgs = {
  where: CookingMaterialWhereUniqueInput;
};

export type QueryCookingMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterCookingMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryCraftingMaterialArgs = {
  where: CraftingMaterialWhereUniqueInput;
};

export type QueryCraftingMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterCraftingMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryDomainArgs = {
  where: DomainWhereUniqueInput;
};

export type QueryDomainsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterDomainsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryElementArgs = {
  where: ElementWhereUniqueInput;
};

export type QueryElementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterElementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryForgeRecipeArgs = {
  where: ForgeRecipeWhereUniqueInput;
};

export type QueryForgeRecipesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterForgeRecipesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryGadgetArgs = {
  where: GadgetWhereUniqueInput;
};

export type QueryGadgetsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterGadgetsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryRegionArgs = {
  where: RegionWhereUniqueInput;
};

export type QueryRegionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterRegionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryTalentArgs = {
  where: TalentWhereUniqueInput;
};

export type QueryTalentsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterTalentsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryTalentLevelUpMaterialArgs = {
  where: TalentLevelUpMaterialWhereUniqueInput;
};

export type QueryTalentLevelUpMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterTalentLevelUpMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUsersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterUsersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryWeaponArgs = {
  where: WeaponWhereUniqueInput;
};

export type QueryWeaponsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterWeaponsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryWeaponAscensionArgs = {
  where: WeaponAscensionWhereUniqueInput;
};

export type QueryWeaponAscensionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterWeaponAscensionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryWeaponAscensionMaterialArgs = {
  where: WeaponAscensionMaterialWhereUniqueInput;
};

export type QueryWeaponAscensionMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterWeaponAscensionMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type QueryWeaponEnhancementMaterialArgs = {
  where: WeaponEnhancementMaterialWhereUniqueInput;
};

export type QueryWeaponEnhancementMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFilterWeaponEnhancementMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  searchString?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneArtifact: Artifact;
  deleteOneArtifact?: Maybe<Artifact>;
  createOneArtifactSet: ArtifactSet;
  deleteOneArtifactSet?: Maybe<ArtifactSet>;
  deleteOneCharacter?: Maybe<Character>;
  createOneCharacter: Character;
  deleteOneCharacterAscension?: Maybe<CharacterAscension>;
  createOneCharacterAscension: CharacterAscension;
  deleteOneCharacterAscensionMaterial?: Maybe<CharacterAscensionMaterial>;
  createOneCharacterAscensionMaterial: CharacterAscensionMaterial;
  createOneCharacterProfile: CharacterProfile;
  deleteOneCharacterProfile?: Maybe<CharacterProfile>;
  deleteOneCommonAscensionMaterial?: Maybe<CommonAscensionMaterial>;
  createOneCommonAscensionMaterial: CommonAscensionMaterial;
  deleteOneCommonMaterial?: Maybe<CommonMaterial>;
  createOneCommonMaterial: CommonMaterial;
  deleteOneConsumeable?: Maybe<Consumeable>;
  createOneConsumeable: Consumeable;
  deleteOneConsumeableRecipe?: Maybe<ConsumeableRecipe>;
  createOneConsumeableRecipe: ConsumeableRecipe;
  deleteOneCookingMaterial?: Maybe<CookingMaterial>;
  createOneCookingMaterial: CookingMaterial;
  deleteOneCraftingMaterial?: Maybe<CraftingMaterial>;
  createOneCraftingMaterial: CraftingMaterial;
  createOneDomain: Domain;
  deleteOneDomain?: Maybe<Domain>;
  createOneElement: Element;
  deleteOneElement?: Maybe<Element>;
  deleteOneForgeRecipe?: Maybe<ForgeRecipe>;
  createOneForgeRecipe: ForgeRecipe;
  createOneGadget: Gadget;
  deleteOneGadget?: Maybe<Gadget>;
  createOneRegion: Region;
  deleteOneRegion?: Maybe<Region>;
  createOneTalent: Talent;
  deleteOneTalent?: Maybe<Talent>;
  createOneTalentLevelUpMaterial: TalentLevelUpMaterial;
  deleteOneTalentLevelUpMaterial?: Maybe<TalentLevelUpMaterial>;
  updateSlimeColor?: Maybe<InfoPayload>;
  updateSelfUser?: Maybe<User>;
  signup?: Maybe<InfoPayload>;
  login?: Maybe<AuthPayload>;
  updateSelfUserSecret?: Maybe<UserSecret>;
  updateToken?: Maybe<InfoPayload>;
  resetPassword?: Maybe<InfoPayload>;
  generateResetToken?: Maybe<InfoPayload>;
  activateAccount?: Maybe<InfoPayload>;
  createOneWeapon: Weapon;
  deleteOneWeapon?: Maybe<Weapon>;
  createOneWeaponAscension: WeaponAscension;
  deleteOneWeaponAscension?: Maybe<WeaponAscension>;
  createOneWeaponAscensionMaterial: WeaponAscensionMaterial;
  deleteOneWeaponAscensionMaterial?: Maybe<WeaponAscensionMaterial>;
  createOneWeaponEnhancementMaterial: WeaponEnhancementMaterial;
  deleteOneWeaponEnhancementMaterial?: Maybe<WeaponEnhancementMaterial>;
};

export type MutationCreateOneArtifactArgs = {
  data: ArtifactCreateInput;
};

export type MutationDeleteOneArtifactArgs = {
  where: ArtifactWhereUniqueInput;
};

export type MutationCreateOneArtifactSetArgs = {
  data: ArtifactSetCreateInput;
};

export type MutationDeleteOneArtifactSetArgs = {
  where: ArtifactSetWhereUniqueInput;
};

export type MutationDeleteOneCharacterArgs = {
  where: CharacterWhereUniqueInput;
};

export type MutationCreateOneCharacterArgs = {
  data: CharacterCreateInput;
};

export type MutationDeleteOneCharacterAscensionArgs = {
  where: CharacterAscensionWhereUniqueInput;
};

export type MutationCreateOneCharacterAscensionArgs = {
  data: CharacterAscensionCreateInput;
};

export type MutationDeleteOneCharacterAscensionMaterialArgs = {
  where: CharacterAscensionMaterialWhereUniqueInput;
};

export type MutationCreateOneCharacterAscensionMaterialArgs = {
  data: CharacterAscensionMaterialCreateInput;
};

export type MutationCreateOneCharacterProfileArgs = {
  data: CharacterProfileCreateInput;
};

export type MutationDeleteOneCharacterProfileArgs = {
  where: CharacterProfileWhereUniqueInput;
};

export type MutationDeleteOneCommonAscensionMaterialArgs = {
  where: CommonAscensionMaterialWhereUniqueInput;
};

export type MutationCreateOneCommonAscensionMaterialArgs = {
  data: CommonAscensionMaterialCreateInput;
};

export type MutationDeleteOneCommonMaterialArgs = {
  where: CommonMaterialWhereUniqueInput;
};

export type MutationCreateOneCommonMaterialArgs = {
  data: CommonMaterialCreateInput;
};

export type MutationDeleteOneConsumeableArgs = {
  where: ConsumeableWhereUniqueInput;
};

export type MutationCreateOneConsumeableArgs = {
  data: ConsumeableCreateInput;
};

export type MutationDeleteOneConsumeableRecipeArgs = {
  where: ConsumeableRecipeWhereUniqueInput;
};

export type MutationCreateOneConsumeableRecipeArgs = {
  data: ConsumeableRecipeCreateInput;
};

export type MutationDeleteOneCookingMaterialArgs = {
  where: CookingMaterialWhereUniqueInput;
};

export type MutationCreateOneCookingMaterialArgs = {
  data: CookingMaterialCreateInput;
};

export type MutationDeleteOneCraftingMaterialArgs = {
  where: CraftingMaterialWhereUniqueInput;
};

export type MutationCreateOneCraftingMaterialArgs = {
  data: CraftingMaterialCreateInput;
};

export type MutationCreateOneDomainArgs = {
  data: DomainCreateInput;
};

export type MutationDeleteOneDomainArgs = {
  where: DomainWhereUniqueInput;
};

export type MutationCreateOneElementArgs = {
  data: ElementCreateInput;
};

export type MutationDeleteOneElementArgs = {
  where: ElementWhereUniqueInput;
};

export type MutationDeleteOneForgeRecipeArgs = {
  where: ForgeRecipeWhereUniqueInput;
};

export type MutationCreateOneForgeRecipeArgs = {
  data: ForgeRecipeCreateInput;
};

export type MutationCreateOneGadgetArgs = {
  data: GadgetCreateInput;
};

export type MutationDeleteOneGadgetArgs = {
  where: GadgetWhereUniqueInput;
};

export type MutationCreateOneRegionArgs = {
  data: RegionCreateInput;
};

export type MutationDeleteOneRegionArgs = {
  where: RegionWhereUniqueInput;
};

export type MutationCreateOneTalentArgs = {
  data: TalentCreateInput;
};

export type MutationDeleteOneTalentArgs = {
  where: TalentWhereUniqueInput;
};

export type MutationCreateOneTalentLevelUpMaterialArgs = {
  data: TalentLevelUpMaterialCreateInput;
};

export type MutationDeleteOneTalentLevelUpMaterialArgs = {
  where: TalentLevelUpMaterialWhereUniqueInput;
};

export type MutationUpdateSlimeColorArgs = {
  color: Scalars['String'];
};

export type MutationUpdateSelfUserArgs = {
  username?: Maybe<Scalars['String']>;
  slimeColor?: Maybe<Scalars['String']>;
};

export type MutationSignupArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationUpdateSelfUserSecretArgs = {
  token?: Maybe<Scalars['String']>;
};

export type MutationUpdateTokenArgs = {
  token: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};

export type MutationGenerateResetTokenArgs = {
  email: Scalars['String'];
};

export type MutationActivateAccountArgs = {
  userId: Scalars['String'];
  activationToken: Scalars['String'];
};

export type MutationCreateOneWeaponArgs = {
  data: WeaponCreateInput;
};

export type MutationDeleteOneWeaponArgs = {
  where: WeaponWhereUniqueInput;
};

export type MutationCreateOneWeaponAscensionArgs = {
  data: WeaponAscensionCreateInput;
};

export type MutationDeleteOneWeaponAscensionArgs = {
  where: WeaponAscensionWhereUniqueInput;
};

export type MutationCreateOneWeaponAscensionMaterialArgs = {
  data: WeaponAscensionMaterialCreateInput;
};

export type MutationDeleteOneWeaponAscensionMaterialArgs = {
  where: WeaponAscensionMaterialWhereUniqueInput;
};

export type MutationCreateOneWeaponEnhancementMaterialArgs = {
  data: WeaponEnhancementMaterialCreateInput;
};

export type MutationDeleteOneWeaponEnhancementMaterialArgs = {
  where: WeaponEnhancementMaterialWhereUniqueInput;
};

export type Artifact = {
  __typename?: 'Artifact';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  lore?: Maybe<Scalars['String']>;
  minRarity: Scalars['Int'];
  possibleMainStats?: Maybe<Scalars['Json']>;
  possibleSubStats?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['Json']>;
  type: ArtifactType;
  set?: Maybe<ArtifactSet>;
  domain?: Maybe<Domain>;
};

export type ArtifactSet = {
  __typename?: 'ArtifactSet';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  maxRarity?: Maybe<Scalars['Int']>;
  pieceBonusOne?: Maybe<Scalars['String']>;
  pieceBonusTwo?: Maybe<Scalars['String']>;
  pieceBonusFour?: Maybe<Scalars['String']>;
  artifacts: Array<Artifact>;
};

export type ArtifactSetArtifactsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ArtifactWhereUniqueInput>;
  after?: Maybe<ArtifactWhereUniqueInput>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Character = {
  __typename?: 'Character';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  constellations?: Maybe<Scalars['Json']>;
  icon?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  stats?: Maybe<Scalars['Json']>;
  ascensions: Array<CharacterAscension>;
  elements: Array<Element>;
  characterProfile?: Maybe<CharacterProfile>;
  characterProfileId?: Maybe<Scalars['String']>;
  talents: Array<Talent>;
  weapon?: Maybe<WeaponType>;
};

export type CharacterAscensionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterAscensionWhereUniqueInput>;
  after?: Maybe<CharacterAscensionWhereUniqueInput>;
};

export type CharacterElementsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ElementWhereUniqueInput>;
  after?: Maybe<ElementWhereUniqueInput>;
};

export type CharacterTalentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TalentWhereUniqueInput>;
  after?: Maybe<TalentWhereUniqueInput>;
};

export type CharacterAscension = {
  __typename?: 'CharacterAscension';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  character?: Maybe<Character>;
  characterAscensionMaterial?: Maybe<CharacterAscensionMaterial>;
  commonAscensionMaterials: Array<CommonAscensionMaterial>;
};

export type CharacterAscensionCommonAscensionMaterialsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CommonAscensionMaterialWhereUniqueInput>;
  after?: Maybe<CommonAscensionMaterialWhereUniqueInput>;
};

export type CharacterAscensionMaterial = {
  __typename?: 'CharacterAscensionMaterial';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  group: WeaponAscensionMaterialGroup;
  characterAscensions: Array<CharacterAscension>;
};

export type CharacterAscensionMaterialCharacterAscensionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterAscensionWhereUniqueInput>;
  after?: Maybe<CharacterAscensionWhereUniqueInput>;
};

export type CharacterProfile = {
  __typename?: 'CharacterProfile';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  affiliation?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  constellation?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['Json']>;
  overview?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['Json']>;
  voiceActor?: Maybe<Scalars['Json']>;
  voiceLines?: Maybe<Scalars['Json']>;
  character?: Maybe<Character>;
  region?: Maybe<Region>;
  specialtyDish?: Maybe<Consumeable>;
  vision?: Maybe<Element>;
};

export type CommonAscensionMaterial = {
  __typename?: 'CommonAscensionMaterial';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: CommonAscensionMaterialGroup;
  characterAscensions: Array<CharacterAscension>;
  weaponAscensions: Array<WeaponAscension>;
};

export type CommonAscensionMaterialCharacterAscensionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterAscensionWhereUniqueInput>;
  after?: Maybe<CharacterAscensionWhereUniqueInput>;
};

export type CommonAscensionMaterialWeaponAscensionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<WeaponAscensionWhereUniqueInput>;
  after?: Maybe<WeaponAscensionWhereUniqueInput>;
};

export type CommonMaterial = {
  __typename?: 'CommonMaterial';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
};

export type Consumeable = {
  __typename?: 'Consumeable';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  consumeableType: ConsumableType;
  foodType: FoodType;
  characterSpecialty?: Maybe<CharacterProfile>;
  recipe?: Maybe<ConsumeableRecipe>;
};

export type ConsumeableRecipe = {
  __typename?: 'ConsumeableRecipe';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  recipe?: Maybe<Scalars['Json']>;
  consumeable?: Maybe<Consumeable>;
  craftingMaterials: Array<CraftingMaterial>;
  cookingMaterials: Array<CookingMaterial>;
};

export type ConsumeableRecipeCraftingMaterialsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CraftingMaterialWhereUniqueInput>;
  after?: Maybe<CraftingMaterialWhereUniqueInput>;
};

export type ConsumeableRecipeCookingMaterialsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CookingMaterialWhereUniqueInput>;
  after?: Maybe<CookingMaterialWhereUniqueInput>;
};

export type CookingMaterial = {
  __typename?: 'CookingMaterial';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  processingRecipe?: Maybe<ProcessRecipe>;
  recipes: Array<ConsumeableRecipe>;
};

export type CookingMaterialRecipesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ConsumeableRecipeWhereUniqueInput>;
  after?: Maybe<ConsumeableRecipeWhereUniqueInput>;
};

export type CraftingMaterial = {
  __typename?: 'CraftingMaterial';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  recipes: Array<ConsumeableRecipe>;
};

export type CraftingMaterialRecipesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ConsumeableRecipeWhereUniqueInput>;
  after?: Maybe<ConsumeableRecipeWhereUniqueInput>;
};

export type Domain = {
  __typename?: 'Domain';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  levels?: Maybe<Scalars['Json']>;
  type?: Maybe<Scalars['String']>;
  artifacts: Array<Artifact>;
  region?: Maybe<Region>;
  talentLevelUpMaterials: Array<TalentLevelUpMaterial>;
  weaponAscensionMaterials: Array<WeaponAscensionMaterial>;
};

export type DomainArtifactsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ArtifactWhereUniqueInput>;
  after?: Maybe<ArtifactWhereUniqueInput>;
};

export type DomainTalentLevelUpMaterialsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TalentLevelUpMaterialWhereUniqueInput>;
  after?: Maybe<TalentLevelUpMaterialWhereUniqueInput>;
};

export type DomainWeaponAscensionMaterialsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<WeaponAscensionMaterialWhereUniqueInput>;
  after?: Maybe<WeaponAscensionMaterialWhereUniqueInput>;
};

export type Element = {
  __typename?: 'Element';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  archon?: Maybe<Scalars['String']>;
  statusEffect?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  characters: Array<Character>;
  region?: Maybe<Region>;
};

export type ElementCharactersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterWhereUniqueInput>;
  after?: Maybe<CharacterWhereUniqueInput>;
};

export type ForgeRecipe = {
  __typename?: 'ForgeRecipe';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  craftingTime?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['Json']>;
  weaponEnhancementMaterials: Array<WeaponEnhancementMaterial>;
  weaponEnhancementMaterial?: Maybe<WeaponEnhancementMaterial>;
  weapon?: Maybe<Weapon>;
};

export type ForgeRecipeWeaponEnhancementMaterialsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<WeaponEnhancementMaterialWhereUniqueInput>;
  after?: Maybe<WeaponEnhancementMaterialWhereUniqueInput>;
};

export type Gadget = {
  __typename?: 'Gadget';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  craftingType?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  recipe?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['String']>;
  reuseable?: Maybe<Scalars['String']>;
};

export type InfoPayload = {
  __typename?: 'InfoPayload';
  message?: Maybe<Scalars['String']>;
};

export type ProcessRecipe = {
  __typename?: 'ProcessRecipe';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  processingTime?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['Json']>;
  material?: Maybe<CookingMaterial>;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  characterProfiles: Array<CharacterProfile>;
  domains: Array<Domain>;
  element?: Maybe<Element>;
};

export type RegionCharacterProfilesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CharacterProfileWhereUniqueInput>;
  after?: Maybe<CharacterProfileWhereUniqueInput>;
};

export type RegionDomainsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<DomainWhereUniqueInput>;
  after?: Maybe<DomainWhereUniqueInput>;
};

export type Talent = {
  __typename?: 'Talent';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['Json']>;
  character: Character;
};

export type TalentLevelUpMaterial = {
  __typename?: 'TalentLevelUpMaterial';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  availability?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: TalentLevelUpMaterialGroup;
  domain?: Maybe<Domain>;
  talents: Array<Talent>;
};

export type TalentLevelUpMaterialTalentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TalentWhereUniqueInput>;
  after?: Maybe<TalentWhereUniqueInput>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  role: Role;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
  slimeColor?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  userSecret?: Maybe<UserSecret>;
};

export type UserSecret = {
  __typename?: 'UserSecret';
  id: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  activated: Scalars['Boolean'];
  activationToken?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  passwordAttempts: Scalars['Int'];
  firstFailedPasswordAttempt?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  resetPasswordTokenGenerated?: Maybe<Scalars['DateTime']>;
  resetPasswordAttempts: Scalars['Int'];
  firstFailedResetPasswordAttempt?: Maybe<Scalars['DateTime']>;
};

export type Weapon = {
  __typename?: 'Weapon';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  baseStats?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lore?: Maybe<Scalars['String']>;
  passive?: Maybe<Scalars['Json']>;
  rarity?: Maybe<Scalars['Int']>;
  stats?: Maybe<Scalars['Json']>;
  secondaryStatType?: Maybe<WeaponSecondaryStatType>;
  type: WeaponType;
  ascensions: Array<WeaponAscension>;
  forgeRecipe?: Maybe<ForgeRecipe>;
};

export type WeaponAscensionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<WeaponAscensionWhereUniqueInput>;
  after?: Maybe<WeaponAscensionWhereUniqueInput>;
};

export type WeaponAscension = {
  __typename?: 'WeaponAscension';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  commonAscensionMaterials: Array<CommonAscensionMaterial>;
  weaponAscensionMaterial?: Maybe<WeaponAscensionMaterial>;
  weapon?: Maybe<Weapon>;
};

export type WeaponAscensionCommonAscensionMaterialsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CommonAscensionMaterialWhereUniqueInput>;
  after?: Maybe<CommonAscensionMaterialWhereUniqueInput>;
};

export type WeaponAscensionMaterial = {
  __typename?: 'WeaponAscensionMaterial';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  availability?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: WeaponAscensionMaterialGroup;
  domain?: Maybe<Domain>;
  weaponAscensions: Array<WeaponAscension>;
};

export type WeaponAscensionMaterialWeaponAscensionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<WeaponAscensionWhereUniqueInput>;
  after?: Maybe<WeaponAscensionWhereUniqueInput>;
};

export type WeaponEnhancementMaterial = {
  __typename?: 'WeaponEnhancementMaterial';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  recipeCreate?: Maybe<ForgeRecipe>;
  recipeUse?: Maybe<ForgeRecipe>;
};

export type ArtifactWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ArtifactSetWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CharacterWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CharacterAscensionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CharacterAscensionMaterialWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CharacterProfileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CommonAscensionMaterialWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonMaterialWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ConsumeableWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ConsumeableRecipeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CookingMaterialWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CraftingMaterialWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DomainWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ElementWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ForgeRecipeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type GadgetWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type RegionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TalentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TalentLevelUpMaterialWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type WeaponWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type WeaponAscensionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type WeaponAscensionMaterialWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type WeaponEnhancementMaterialWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ArtifactCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  lore?: Maybe<Scalars['String']>;
  minRarity: Scalars['Int'];
  possibleMainStats?: Maybe<Scalars['Json']>;
  possibleSubStats?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['Json']>;
  type: ArtifactType;
  set?: Maybe<ArtifactSetCreateOneWithoutArtifactsInput>;
  domain?: Maybe<DomainCreateOneWithoutArtifactsInput>;
};

export type ArtifactSetCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  maxRarity?: Maybe<Scalars['Int']>;
  pieceBonusFour?: Maybe<Scalars['String']>;
  pieceBonusOne?: Maybe<Scalars['String']>;
  pieceBonusTwo?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateManyWithoutSetInput>;
};

export type CharacterCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  constellations?: Maybe<Scalars['Json']>;
  icon?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  stats?: Maybe<Scalars['Json']>;
  weapon?: Maybe<WeaponType>;
  ascensions?: Maybe<CharacterAscensionCreateManyWithoutCharacterInput>;
  characterProfile?: Maybe<CharacterProfileCreateOneWithoutCharacterInput>;
  elements?: Maybe<ElementCreateManyWithoutCharactersInput>;
  talents?: Maybe<TalentCreateManyWithoutCharacterInput>;
};

export type CharacterAscensionCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  character?: Maybe<CharacterCreateOneWithoutAscensionsInput>;
  characterAscensionMaterial?: Maybe<CharacterAscensionMaterialCreateOneWithoutCharacterAscensionsInput>;
  commonAscensionMaterials?: Maybe<CommonAscensionMaterialCreateManyWithoutCharacterAscensionsInput>;
};

export type CharacterAscensionMaterialCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  group: WeaponAscensionMaterialGroup;
  characterAscensions?: Maybe<CharacterAscensionCreateManyWithoutCharacterAscensionMaterialInput>;
};

export type CharacterProfileCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  affiliation?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  constellation?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['Json']>;
  overview?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['Json']>;
  voiceActor?: Maybe<Scalars['Json']>;
  voiceLines?: Maybe<Scalars['Json']>;
  region?: Maybe<RegionCreateOneWithoutCharacterProfilesInput>;
  specialtyDish?: Maybe<ConsumeableCreateOneWithoutCharacterSpecialtyInput>;
  vision?: Maybe<ElementCreateOneWithoutCharacterProfilesInput>;
  character?: Maybe<CharacterCreateOneWithoutCharacterProfileInput>;
};

export type CommonAscensionMaterialCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: CommonAscensionMaterialGroup;
  characterAscensions?: Maybe<CharacterAscensionCreateManyWithoutCommonAscensionMaterialsInput>;
  weaponAscensions?: Maybe<WeaponAscensionCreateManyWithoutCommonAscensionMaterialsInput>;
};

export type CommonMaterialCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
};

export type ConsumeableCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  consumeableType: ConsumableType;
  foodType: FoodType;
  characterSpecialty?: Maybe<CharacterProfileCreateOneWithoutSpecialtyDishInput>;
  recipe?: Maybe<ConsumeableRecipeCreateOneWithoutConsumeableInput>;
};

export type ConsumeableRecipeCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  recipe?: Maybe<Scalars['Json']>;
  consumeable?: Maybe<ConsumeableCreateOneWithoutRecipeInput>;
  craftingMaterials?: Maybe<CraftingMaterialCreateManyWithoutRecipesInput>;
  cookingMaterials?: Maybe<CookingMaterialCreateManyWithoutRecipesInput>;
};

export type CookingMaterialCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  processingRecipe?: Maybe<ProcessRecipeCreateOneWithoutMaterialInput>;
  recipes?: Maybe<ConsumeableRecipeCreateManyWithoutCookingMaterialsInput>;
};

export type CraftingMaterialCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  recipes?: Maybe<ConsumeableRecipeCreateManyWithoutCraftingMaterialsInput>;
};

export type DomainCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  levels?: Maybe<Scalars['Json']>;
  type?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateManyWithoutDomainInput>;
  region?: Maybe<RegionCreateOneWithoutDomainsInput>;
  talentLevelUpMaterials?: Maybe<TalentLevelUpMaterialCreateManyWithoutDomainInput>;
  weaponAscensionMaterials?: Maybe<WeaponAscensionMaterialCreateManyWithoutDomainInput>;
};

export type ElementCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  archon?: Maybe<Scalars['String']>;
  statusEffect?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  characters?: Maybe<CharacterCreateManyWithoutElementsInput>;
  characterProfiles?: Maybe<CharacterProfileCreateManyWithoutVisionInput>;
  region?: Maybe<RegionCreateOneWithoutElementInput>;
};

export type ForgeRecipeCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  craftingTime?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['Json']>;
  weaponEnhancementMaterials?: Maybe<WeaponEnhancementMaterialCreateManyWithoutRecipeUseInput>;
  weaponEnhancementMaterial?: Maybe<WeaponEnhancementMaterialCreateOneWithoutRecipeCreateInput>;
  weapon?: Maybe<WeaponCreateOneWithoutForgeRecipeInput>;
};

export type GadgetCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  craftingType?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  reuseable?: Maybe<Scalars['String']>;
  recipe?: Maybe<Scalars['Json']>;
};

export type RegionCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  characterProfiles?: Maybe<CharacterProfileCreateManyWithoutRegionInput>;
  domains?: Maybe<DomainCreateManyWithoutRegionInput>;
  element?: Maybe<ElementCreateOneWithoutRegionInput>;
};

export type TalentCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['Json']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  character: CharacterCreateOneWithoutTalentsInput;
  talentLevelUpMaterial?: Maybe<TalentLevelUpMaterialCreateOneWithoutTalentsInput>;
};

export type TalentLevelUpMaterialCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  availability?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: TalentLevelUpMaterialGroup;
  domain?: Maybe<DomainCreateOneWithoutTalentLevelUpMaterialsInput>;
  talents?: Maybe<TalentCreateManyWithoutTalentLevelUpMaterialInput>;
};

export type WeaponCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  baseStats?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lore?: Maybe<Scalars['String']>;
  passive?: Maybe<Scalars['Json']>;
  rarity?: Maybe<Scalars['Int']>;
  refinements?: Maybe<Scalars['Json']>;
  stats?: Maybe<Scalars['Json']>;
  secondaryStatType?: Maybe<WeaponSecondaryStatType>;
  type: WeaponType;
  ascensions?: Maybe<WeaponAscensionCreateManyWithoutWeaponInput>;
  forgeRecipe?: Maybe<ForgeRecipeCreateOneWithoutWeaponInput>;
};

export type WeaponAscensionCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  commonAscensionMaterials?: Maybe<CommonAscensionMaterialCreateManyWithoutWeaponAscensionsInput>;
  weaponAscensionMaterial?: Maybe<WeaponAscensionMaterialCreateOneWithoutWeaponAscensionsInput>;
  weapon?: Maybe<WeaponCreateOneWithoutAscensionsInput>;
};

export type WeaponAscensionMaterialCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  availability?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: WeaponAscensionMaterialGroup;
  domain?: Maybe<DomainCreateOneWithoutWeaponAscensionMaterialsInput>;
  weaponAscensions?: Maybe<WeaponAscensionCreateManyWithoutWeaponAscensionMaterialInput>;
};

export type WeaponEnhancementMaterialCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  recipeCreate?: Maybe<ForgeRecipeCreateOneWithoutWeaponEnhancementMaterialInput>;
  recipeUse?: Maybe<ForgeRecipeCreateOneWithoutWeaponEnhancementMaterialsInput>;
};

export enum ArtifactType {
  CircletOfLogos = 'CircletOfLogos',
  FlowerOfLife = 'FlowerOfLife',
  GobletOfEonothem = 'GobletOfEonothem',
  PlumeOfDeath = 'PlumeOfDeath',
  SandsOfEon = 'SandsOfEon',
}

export enum WeaponType {
  Bow = 'Bow',
  Catalyst = 'Catalyst',
  Claymore = 'Claymore',
  Polearm = 'Polearm',
  Sword = 'Sword',
}

export enum WeaponAscensionMaterialGroup {
  Aerosiderite = 'Aerosiderite',
  BorealWolf = 'BorealWolf',
  DandelionGladiator = 'DandelionGladiator',
  Decarabian = 'Decarabian',
  Guyun = 'Guyun',
  MistVeiled = 'MistVeiled',
}

export enum CommonAscensionMaterialGroup {
  BoneShards = 'BoneShards',
  ChaosParts = 'ChaosParts',
  FatuiInsignias = 'FatuiInsignias',
  FatuiKnives = 'FatuiKnives',
  HilichurlArrowhead = 'HilichurlArrowhead',
  HilichurlHorns = 'HilichurlHorns',
  HilichurlMask = 'HilichurlMask',
  LeyLine = 'LeyLine',
  MistGrass = 'MistGrass',
  SamachurlScrolls = 'SamachurlScrolls',
  Slime = 'Slime',
  TreasureHoarderInsignia = 'TreasureHoarderInsignia',
  WhopperflowerNectar = 'WhopperflowerNectar',
}

export enum ConsumableType {
  Food = 'Food',
  Potion = 'Potion',
}

export enum FoodType {
  Adventurer = 'Adventurer',
  Guardian = 'Guardian',
  Sage = 'Sage',
  Warrior = 'Warrior',
}

export enum TalentLevelUpMaterialGroup {
  Ballad = 'Ballad',
  Boreas = 'Boreas',
  Diligence = 'Diligence',
  Dvalin = 'Dvalin',
  Freedom = 'Freedom',
  Gold = 'Gold',
  Prosperity = 'Prosperity',
  Resistance = 'Resistance',
}

export enum Role {
  Member = 'MEMBER',
  Alphamember = 'ALPHAMEMBER',
  Betamember = 'BETAMEMBER',
  Admin = 'ADMIN',
}

export enum WeaponSecondaryStatType {
  DefPercent = 'DEFPercent',
  HpPercent = 'HPPercent',
  AtkPercent = 'ATKPercent',
  CritDmgPercent = 'CritDMGPercent',
  CritRatePercent = 'CritRatePercent',
  ElementalMastery = 'ElementalMastery',
  EnergyRechargePercent = 'EnergyRechargePercent',
  PhysicalDmgPercent = 'PhysicalDMGPercent',
}

export type ArtifactSetCreateOneWithoutArtifactsInput = {
  create?: Maybe<ArtifactSetCreateWithoutArtifactsInput>;
  connect?: Maybe<ArtifactSetWhereUniqueInput>;
  connectOrCreate?: Maybe<ArtifactSetCreateOrConnectWithoutartifactsInput>;
};

export type DomainCreateOneWithoutArtifactsInput = {
  create?: Maybe<DomainCreateWithoutArtifactsInput>;
  connect?: Maybe<DomainWhereUniqueInput>;
  connectOrCreate?: Maybe<DomainCreateOrConnectWithoutartifactsInput>;
};

export type ArtifactCreateManyWithoutSetInput = {
  create?: Maybe<Array<ArtifactCreateWithoutSetInput>>;
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutsetInput>>;
};

export type CharacterAscensionCreateManyWithoutCharacterInput = {
  create?: Maybe<Array<CharacterAscensionCreateWithoutCharacterInput>>;
  connect?: Maybe<Array<CharacterAscensionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CharacterAscensionCreateOrConnectWithoutcharacterInput>
  >;
};

export type CharacterProfileCreateOneWithoutCharacterInput = {
  create?: Maybe<CharacterProfileCreateWithoutCharacterInput>;
  connect?: Maybe<CharacterProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<CharacterProfileCreateOrConnectWithoutcharacterInput>;
};

export type ElementCreateManyWithoutCharactersInput = {
  create?: Maybe<Array<ElementCreateWithoutCharactersInput>>;
  connect?: Maybe<Array<ElementWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ElementCreateOrConnectWithoutcharactersInput>>;
};

export type TalentCreateManyWithoutCharacterInput = {
  create?: Maybe<Array<TalentCreateWithoutCharacterInput>>;
  connect?: Maybe<Array<TalentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TalentCreateOrConnectWithoutcharacterInput>>;
};

export type CharacterCreateOneWithoutAscensionsInput = {
  create?: Maybe<CharacterCreateWithoutAscensionsInput>;
  connect?: Maybe<CharacterWhereUniqueInput>;
  connectOrCreate?: Maybe<CharacterCreateOrConnectWithoutascensionsInput>;
};

export type CharacterAscensionMaterialCreateOneWithoutCharacterAscensionsInput = {
  create?: Maybe<CharacterAscensionMaterialCreateWithoutCharacterAscensionsInput>;
  connect?: Maybe<CharacterAscensionMaterialWhereUniqueInput>;
  connectOrCreate?: Maybe<CharacterAscensionMaterialCreateOrConnectWithoutcharacterAscensionsInput>;
};

export type CommonAscensionMaterialCreateManyWithoutCharacterAscensionsInput = {
  create?: Maybe<
    Array<CommonAscensionMaterialCreateWithoutCharacterAscensionsInput>
  >;
  connect?: Maybe<Array<CommonAscensionMaterialWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CommonAscensionMaterialCreateOrConnectWithoutcharacterAscensionsInput>
  >;
};

export type CharacterAscensionCreateManyWithoutCharacterAscensionMaterialInput = {
  create?: Maybe<
    Array<CharacterAscensionCreateWithoutCharacterAscensionMaterialInput>
  >;
  connect?: Maybe<Array<CharacterAscensionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CharacterAscensionCreateOrConnectWithoutcharacterAscensionMaterialInput>
  >;
};

export type RegionCreateOneWithoutCharacterProfilesInput = {
  create?: Maybe<RegionCreateWithoutCharacterProfilesInput>;
  connect?: Maybe<RegionWhereUniqueInput>;
  connectOrCreate?: Maybe<RegionCreateOrConnectWithoutcharacterProfilesInput>;
};

export type ConsumeableCreateOneWithoutCharacterSpecialtyInput = {
  create?: Maybe<ConsumeableCreateWithoutCharacterSpecialtyInput>;
  connect?: Maybe<ConsumeableWhereUniqueInput>;
  connectOrCreate?: Maybe<ConsumeableCreateOrConnectWithoutcharacterSpecialtyInput>;
};

export type ElementCreateOneWithoutCharacterProfilesInput = {
  create?: Maybe<ElementCreateWithoutCharacterProfilesInput>;
  connect?: Maybe<ElementWhereUniqueInput>;
  connectOrCreate?: Maybe<ElementCreateOrConnectWithoutcharacterProfilesInput>;
};

export type CharacterCreateOneWithoutCharacterProfileInput = {
  create?: Maybe<CharacterCreateWithoutCharacterProfileInput>;
  connect?: Maybe<CharacterWhereUniqueInput>;
  connectOrCreate?: Maybe<CharacterCreateOrConnectWithoutcharacterProfileInput>;
};

export type CharacterAscensionCreateManyWithoutCommonAscensionMaterialsInput = {
  create?: Maybe<
    Array<CharacterAscensionCreateWithoutCommonAscensionMaterialsInput>
  >;
  connect?: Maybe<Array<CharacterAscensionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CharacterAscensionCreateOrConnectWithoutcommonAscensionMaterialsInput>
  >;
};

export type WeaponAscensionCreateManyWithoutCommonAscensionMaterialsInput = {
  create?: Maybe<
    Array<WeaponAscensionCreateWithoutCommonAscensionMaterialsInput>
  >;
  connect?: Maybe<Array<WeaponAscensionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<WeaponAscensionCreateOrConnectWithoutcommonAscensionMaterialsInput>
  >;
};

export type CharacterProfileCreateOneWithoutSpecialtyDishInput = {
  create?: Maybe<CharacterProfileCreateWithoutSpecialtyDishInput>;
  connect?: Maybe<CharacterProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<CharacterProfileCreateOrConnectWithoutspecialtyDishInput>;
};

export type ConsumeableRecipeCreateOneWithoutConsumeableInput = {
  create?: Maybe<ConsumeableRecipeCreateWithoutConsumeableInput>;
  connect?: Maybe<ConsumeableRecipeWhereUniqueInput>;
  connectOrCreate?: Maybe<ConsumeableRecipeCreateOrConnectWithoutconsumeableInput>;
};

export type ConsumeableCreateOneWithoutRecipeInput = {
  create?: Maybe<ConsumeableCreateWithoutRecipeInput>;
  connect?: Maybe<ConsumeableWhereUniqueInput>;
  connectOrCreate?: Maybe<ConsumeableCreateOrConnectWithoutrecipeInput>;
};

export type CraftingMaterialCreateManyWithoutRecipesInput = {
  create?: Maybe<Array<CraftingMaterialCreateWithoutRecipesInput>>;
  connect?: Maybe<Array<CraftingMaterialWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CraftingMaterialCreateOrConnectWithoutrecipesInput>
  >;
};

export type CookingMaterialCreateManyWithoutRecipesInput = {
  create?: Maybe<Array<CookingMaterialCreateWithoutRecipesInput>>;
  connect?: Maybe<Array<CookingMaterialWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CookingMaterialCreateOrConnectWithoutrecipesInput>
  >;
};

export type ProcessRecipeCreateOneWithoutMaterialInput = {
  create?: Maybe<ProcessRecipeCreateWithoutMaterialInput>;
  connect?: Maybe<ProcessRecipeWhereUniqueInput>;
  connectOrCreate?: Maybe<ProcessRecipeCreateOrConnectWithoutmaterialInput>;
};

export type ConsumeableRecipeCreateManyWithoutCookingMaterialsInput = {
  create?: Maybe<Array<ConsumeableRecipeCreateWithoutCookingMaterialsInput>>;
  connect?: Maybe<Array<ConsumeableRecipeWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ConsumeableRecipeCreateOrConnectWithoutcookingMaterialsInput>
  >;
};

export type ConsumeableRecipeCreateManyWithoutCraftingMaterialsInput = {
  create?: Maybe<Array<ConsumeableRecipeCreateWithoutCraftingMaterialsInput>>;
  connect?: Maybe<Array<ConsumeableRecipeWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ConsumeableRecipeCreateOrConnectWithoutcraftingMaterialsInput>
  >;
};

export type ArtifactCreateManyWithoutDomainInput = {
  create?: Maybe<Array<ArtifactCreateWithoutDomainInput>>;
  connect?: Maybe<Array<ArtifactWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ArtifactCreateOrConnectWithoutdomainInput>>;
};

export type RegionCreateOneWithoutDomainsInput = {
  create?: Maybe<RegionCreateWithoutDomainsInput>;
  connect?: Maybe<RegionWhereUniqueInput>;
  connectOrCreate?: Maybe<RegionCreateOrConnectWithoutdomainsInput>;
};

export type TalentLevelUpMaterialCreateManyWithoutDomainInput = {
  create?: Maybe<Array<TalentLevelUpMaterialCreateWithoutDomainInput>>;
  connect?: Maybe<Array<TalentLevelUpMaterialWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<TalentLevelUpMaterialCreateOrConnectWithoutdomainInput>
  >;
};

export type WeaponAscensionMaterialCreateManyWithoutDomainInput = {
  create?: Maybe<Array<WeaponAscensionMaterialCreateWithoutDomainInput>>;
  connect?: Maybe<Array<WeaponAscensionMaterialWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<WeaponAscensionMaterialCreateOrConnectWithoutdomainInput>
  >;
};

export type CharacterCreateManyWithoutElementsInput = {
  create?: Maybe<Array<CharacterCreateWithoutElementsInput>>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutelementsInput>>;
};

export type CharacterProfileCreateManyWithoutVisionInput = {
  create?: Maybe<Array<CharacterProfileCreateWithoutVisionInput>>;
  connect?: Maybe<Array<CharacterProfileWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CharacterProfileCreateOrConnectWithoutvisionInput>
  >;
};

export type RegionCreateOneWithoutElementInput = {
  create?: Maybe<RegionCreateWithoutElementInput>;
  connect?: Maybe<RegionWhereUniqueInput>;
  connectOrCreate?: Maybe<RegionCreateOrConnectWithoutelementInput>;
};

export type WeaponEnhancementMaterialCreateManyWithoutRecipeUseInput = {
  create?: Maybe<Array<WeaponEnhancementMaterialCreateWithoutRecipeUseInput>>;
  connect?: Maybe<Array<WeaponEnhancementMaterialWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<WeaponEnhancementMaterialCreateOrConnectWithoutrecipeUseInput>
  >;
};

export type WeaponEnhancementMaterialCreateOneWithoutRecipeCreateInput = {
  create?: Maybe<WeaponEnhancementMaterialCreateWithoutRecipeCreateInput>;
  connect?: Maybe<WeaponEnhancementMaterialWhereUniqueInput>;
  connectOrCreate?: Maybe<WeaponEnhancementMaterialCreateOrConnectWithoutrecipeCreateInput>;
};

export type WeaponCreateOneWithoutForgeRecipeInput = {
  create?: Maybe<WeaponCreateWithoutForgeRecipeInput>;
  connect?: Maybe<WeaponWhereUniqueInput>;
  connectOrCreate?: Maybe<WeaponCreateOrConnectWithoutforgeRecipeInput>;
};

export type CharacterProfileCreateManyWithoutRegionInput = {
  create?: Maybe<Array<CharacterProfileCreateWithoutRegionInput>>;
  connect?: Maybe<Array<CharacterProfileWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CharacterProfileCreateOrConnectWithoutregionInput>
  >;
};

export type DomainCreateManyWithoutRegionInput = {
  create?: Maybe<Array<DomainCreateWithoutRegionInput>>;
  connect?: Maybe<Array<DomainWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DomainCreateOrConnectWithoutregionInput>>;
};

export type ElementCreateOneWithoutRegionInput = {
  create?: Maybe<ElementCreateWithoutRegionInput>;
  connect?: Maybe<ElementWhereUniqueInput>;
  connectOrCreate?: Maybe<ElementCreateOrConnectWithoutregionInput>;
};

export type CharacterCreateOneWithoutTalentsInput = {
  create?: Maybe<CharacterCreateWithoutTalentsInput>;
  connect?: Maybe<CharacterWhereUniqueInput>;
  connectOrCreate?: Maybe<CharacterCreateOrConnectWithouttalentsInput>;
};

export type TalentLevelUpMaterialCreateOneWithoutTalentsInput = {
  create?: Maybe<TalentLevelUpMaterialCreateWithoutTalentsInput>;
  connect?: Maybe<TalentLevelUpMaterialWhereUniqueInput>;
  connectOrCreate?: Maybe<TalentLevelUpMaterialCreateOrConnectWithouttalentsInput>;
};

export type DomainCreateOneWithoutTalentLevelUpMaterialsInput = {
  create?: Maybe<DomainCreateWithoutTalentLevelUpMaterialsInput>;
  connect?: Maybe<DomainWhereUniqueInput>;
  connectOrCreate?: Maybe<DomainCreateOrConnectWithouttalentLevelUpMaterialsInput>;
};

export type TalentCreateManyWithoutTalentLevelUpMaterialInput = {
  create?: Maybe<Array<TalentCreateWithoutTalentLevelUpMaterialInput>>;
  connect?: Maybe<Array<TalentWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<TalentCreateOrConnectWithouttalentLevelUpMaterialInput>
  >;
};

export type WeaponAscensionCreateManyWithoutWeaponInput = {
  create?: Maybe<Array<WeaponAscensionCreateWithoutWeaponInput>>;
  connect?: Maybe<Array<WeaponAscensionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<WeaponAscensionCreateOrConnectWithoutweaponInput>
  >;
};

export type ForgeRecipeCreateOneWithoutWeaponInput = {
  create?: Maybe<ForgeRecipeCreateWithoutWeaponInput>;
  connect?: Maybe<ForgeRecipeWhereUniqueInput>;
  connectOrCreate?: Maybe<ForgeRecipeCreateOrConnectWithoutweaponInput>;
};

export type CommonAscensionMaterialCreateManyWithoutWeaponAscensionsInput = {
  create?: Maybe<
    Array<CommonAscensionMaterialCreateWithoutWeaponAscensionsInput>
  >;
  connect?: Maybe<Array<CommonAscensionMaterialWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CommonAscensionMaterialCreateOrConnectWithoutweaponAscensionsInput>
  >;
};

export type WeaponAscensionMaterialCreateOneWithoutWeaponAscensionsInput = {
  create?: Maybe<WeaponAscensionMaterialCreateWithoutWeaponAscensionsInput>;
  connect?: Maybe<WeaponAscensionMaterialWhereUniqueInput>;
  connectOrCreate?: Maybe<WeaponAscensionMaterialCreateOrConnectWithoutweaponAscensionsInput>;
};

export type WeaponCreateOneWithoutAscensionsInput = {
  create?: Maybe<WeaponCreateWithoutAscensionsInput>;
  connect?: Maybe<WeaponWhereUniqueInput>;
  connectOrCreate?: Maybe<WeaponCreateOrConnectWithoutascensionsInput>;
};

export type DomainCreateOneWithoutWeaponAscensionMaterialsInput = {
  create?: Maybe<DomainCreateWithoutWeaponAscensionMaterialsInput>;
  connect?: Maybe<DomainWhereUniqueInput>;
  connectOrCreate?: Maybe<DomainCreateOrConnectWithoutweaponAscensionMaterialsInput>;
};

export type WeaponAscensionCreateManyWithoutWeaponAscensionMaterialInput = {
  create?: Maybe<
    Array<WeaponAscensionCreateWithoutWeaponAscensionMaterialInput>
  >;
  connect?: Maybe<Array<WeaponAscensionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<WeaponAscensionCreateOrConnectWithoutweaponAscensionMaterialInput>
  >;
};

export type ForgeRecipeCreateOneWithoutWeaponEnhancementMaterialInput = {
  create?: Maybe<ForgeRecipeCreateWithoutWeaponEnhancementMaterialInput>;
  connect?: Maybe<ForgeRecipeWhereUniqueInput>;
  connectOrCreate?: Maybe<ForgeRecipeCreateOrConnectWithoutweaponEnhancementMaterialInput>;
};

export type ForgeRecipeCreateOneWithoutWeaponEnhancementMaterialsInput = {
  create?: Maybe<ForgeRecipeCreateWithoutWeaponEnhancementMaterialsInput>;
  connect?: Maybe<ForgeRecipeWhereUniqueInput>;
  connectOrCreate?: Maybe<ForgeRecipeCreateOrConnectWithoutweaponEnhancementMaterialsInput>;
};

export type ArtifactSetCreateWithoutArtifactsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  maxRarity?: Maybe<Scalars['Int']>;
  pieceBonusFour?: Maybe<Scalars['String']>;
  pieceBonusOne?: Maybe<Scalars['String']>;
  pieceBonusTwo?: Maybe<Scalars['String']>;
};

export type ArtifactSetCreateOrConnectWithoutartifactsInput = {
  where: ArtifactSetWhereUniqueInput;
  create: ArtifactSetCreateWithoutArtifactsInput;
};

export type DomainCreateWithoutArtifactsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  levels?: Maybe<Scalars['Json']>;
  type?: Maybe<Scalars['String']>;
  region?: Maybe<RegionCreateOneWithoutDomainsInput>;
  talentLevelUpMaterials?: Maybe<TalentLevelUpMaterialCreateManyWithoutDomainInput>;
  weaponAscensionMaterials?: Maybe<WeaponAscensionMaterialCreateManyWithoutDomainInput>;
};

export type DomainCreateOrConnectWithoutartifactsInput = {
  where: DomainWhereUniqueInput;
  create: DomainCreateWithoutArtifactsInput;
};

export type ArtifactCreateWithoutSetInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  lore?: Maybe<Scalars['String']>;
  minRarity: Scalars['Int'];
  possibleMainStats?: Maybe<Scalars['Json']>;
  possibleSubStats?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['Json']>;
  type: ArtifactType;
  domain?: Maybe<DomainCreateOneWithoutArtifactsInput>;
};

export type ArtifactCreateOrConnectWithoutsetInput = {
  where: ArtifactWhereUniqueInput;
  create: ArtifactCreateWithoutSetInput;
};

export type CharacterAscensionCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  characterAscensionMaterial?: Maybe<CharacterAscensionMaterialCreateOneWithoutCharacterAscensionsInput>;
  commonAscensionMaterials?: Maybe<CommonAscensionMaterialCreateManyWithoutCharacterAscensionsInput>;
};

export type CharacterAscensionCreateOrConnectWithoutcharacterInput = {
  where: CharacterAscensionWhereUniqueInput;
  create: CharacterAscensionCreateWithoutCharacterInput;
};

export type CharacterProfileCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  affiliation?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  constellation?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['Json']>;
  overview?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['Json']>;
  voiceActor?: Maybe<Scalars['Json']>;
  voiceLines?: Maybe<Scalars['Json']>;
  region?: Maybe<RegionCreateOneWithoutCharacterProfilesInput>;
  specialtyDish?: Maybe<ConsumeableCreateOneWithoutCharacterSpecialtyInput>;
  vision?: Maybe<ElementCreateOneWithoutCharacterProfilesInput>;
};

export type CharacterProfileCreateOrConnectWithoutcharacterInput = {
  where: CharacterProfileWhereUniqueInput;
  create: CharacterProfileCreateWithoutCharacterInput;
};

export type ElementCreateWithoutCharactersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  archon?: Maybe<Scalars['String']>;
  statusEffect?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  characterProfiles?: Maybe<CharacterProfileCreateManyWithoutVisionInput>;
  region?: Maybe<RegionCreateOneWithoutElementInput>;
};

export type ElementCreateOrConnectWithoutcharactersInput = {
  where: ElementWhereUniqueInput;
  create: ElementCreateWithoutCharactersInput;
};

export type TalentCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['Json']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  talentLevelUpMaterial?: Maybe<TalentLevelUpMaterialCreateOneWithoutTalentsInput>;
};

export type TalentCreateOrConnectWithoutcharacterInput = {
  where: TalentWhereUniqueInput;
  create: TalentCreateWithoutCharacterInput;
};

export type CharacterCreateWithoutAscensionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  constellations?: Maybe<Scalars['Json']>;
  icon?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  stats?: Maybe<Scalars['Json']>;
  weapon?: Maybe<WeaponType>;
  characterProfile?: Maybe<CharacterProfileCreateOneWithoutCharacterInput>;
  elements?: Maybe<ElementCreateManyWithoutCharactersInput>;
  talents?: Maybe<TalentCreateManyWithoutCharacterInput>;
};

export type CharacterCreateOrConnectWithoutascensionsInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutAscensionsInput;
};

export type CharacterAscensionMaterialCreateWithoutCharacterAscensionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  group: WeaponAscensionMaterialGroup;
};

export type CharacterAscensionMaterialCreateOrConnectWithoutcharacterAscensionsInput = {
  where: CharacterAscensionMaterialWhereUniqueInput;
  create: CharacterAscensionMaterialCreateWithoutCharacterAscensionsInput;
};

export type CommonAscensionMaterialCreateWithoutCharacterAscensionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: CommonAscensionMaterialGroup;
  weaponAscensions?: Maybe<WeaponAscensionCreateManyWithoutCommonAscensionMaterialsInput>;
};

export type CommonAscensionMaterialCreateOrConnectWithoutcharacterAscensionsInput = {
  where: CommonAscensionMaterialWhereUniqueInput;
  create: CommonAscensionMaterialCreateWithoutCharacterAscensionsInput;
};

export type CharacterAscensionCreateWithoutCharacterAscensionMaterialInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  character?: Maybe<CharacterCreateOneWithoutAscensionsInput>;
  commonAscensionMaterials?: Maybe<CommonAscensionMaterialCreateManyWithoutCharacterAscensionsInput>;
};

export type CharacterAscensionCreateOrConnectWithoutcharacterAscensionMaterialInput = {
  where: CharacterAscensionWhereUniqueInput;
  create: CharacterAscensionCreateWithoutCharacterAscensionMaterialInput;
};

export type RegionCreateWithoutCharacterProfilesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  domains?: Maybe<DomainCreateManyWithoutRegionInput>;
  element?: Maybe<ElementCreateOneWithoutRegionInput>;
};

export type RegionCreateOrConnectWithoutcharacterProfilesInput = {
  where: RegionWhereUniqueInput;
  create: RegionCreateWithoutCharacterProfilesInput;
};

export type ConsumeableCreateWithoutCharacterSpecialtyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  consumeableType: ConsumableType;
  foodType: FoodType;
  recipe?: Maybe<ConsumeableRecipeCreateOneWithoutConsumeableInput>;
};

export type ConsumeableCreateOrConnectWithoutcharacterSpecialtyInput = {
  where: ConsumeableWhereUniqueInput;
  create: ConsumeableCreateWithoutCharacterSpecialtyInput;
};

export type ElementCreateWithoutCharacterProfilesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  archon?: Maybe<Scalars['String']>;
  statusEffect?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  characters?: Maybe<CharacterCreateManyWithoutElementsInput>;
  region?: Maybe<RegionCreateOneWithoutElementInput>;
};

export type ElementCreateOrConnectWithoutcharacterProfilesInput = {
  where: ElementWhereUniqueInput;
  create: ElementCreateWithoutCharacterProfilesInput;
};

export type CharacterCreateWithoutCharacterProfileInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  constellations?: Maybe<Scalars['Json']>;
  icon?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  stats?: Maybe<Scalars['Json']>;
  weapon?: Maybe<WeaponType>;
  ascensions?: Maybe<CharacterAscensionCreateManyWithoutCharacterInput>;
  elements?: Maybe<ElementCreateManyWithoutCharactersInput>;
  talents?: Maybe<TalentCreateManyWithoutCharacterInput>;
};

export type CharacterCreateOrConnectWithoutcharacterProfileInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutCharacterProfileInput;
};

export type CharacterAscensionCreateWithoutCommonAscensionMaterialsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  character?: Maybe<CharacterCreateOneWithoutAscensionsInput>;
  characterAscensionMaterial?: Maybe<CharacterAscensionMaterialCreateOneWithoutCharacterAscensionsInput>;
};

export type CharacterAscensionCreateOrConnectWithoutcommonAscensionMaterialsInput = {
  where: CharacterAscensionWhereUniqueInput;
  create: CharacterAscensionCreateWithoutCommonAscensionMaterialsInput;
};

export type WeaponAscensionCreateWithoutCommonAscensionMaterialsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  weaponAscensionMaterial?: Maybe<WeaponAscensionMaterialCreateOneWithoutWeaponAscensionsInput>;
  weapon?: Maybe<WeaponCreateOneWithoutAscensionsInput>;
};

export type WeaponAscensionCreateOrConnectWithoutcommonAscensionMaterialsInput = {
  where: WeaponAscensionWhereUniqueInput;
  create: WeaponAscensionCreateWithoutCommonAscensionMaterialsInput;
};

export type CharacterProfileCreateWithoutSpecialtyDishInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  affiliation?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  constellation?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['Json']>;
  overview?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['Json']>;
  voiceActor?: Maybe<Scalars['Json']>;
  voiceLines?: Maybe<Scalars['Json']>;
  region?: Maybe<RegionCreateOneWithoutCharacterProfilesInput>;
  vision?: Maybe<ElementCreateOneWithoutCharacterProfilesInput>;
  character?: Maybe<CharacterCreateOneWithoutCharacterProfileInput>;
};

export type CharacterProfileCreateOrConnectWithoutspecialtyDishInput = {
  where: CharacterProfileWhereUniqueInput;
  create: CharacterProfileCreateWithoutSpecialtyDishInput;
};

export type ConsumeableRecipeCreateWithoutConsumeableInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  recipe?: Maybe<Scalars['Json']>;
  craftingMaterials?: Maybe<CraftingMaterialCreateManyWithoutRecipesInput>;
  cookingMaterials?: Maybe<CookingMaterialCreateManyWithoutRecipesInput>;
};

export type ConsumeableRecipeCreateOrConnectWithoutconsumeableInput = {
  where: ConsumeableRecipeWhereUniqueInput;
  create: ConsumeableRecipeCreateWithoutConsumeableInput;
};

export type ConsumeableCreateWithoutRecipeInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  consumeableType: ConsumableType;
  foodType: FoodType;
  characterSpecialty?: Maybe<CharacterProfileCreateOneWithoutSpecialtyDishInput>;
};

export type ConsumeableCreateOrConnectWithoutrecipeInput = {
  where: ConsumeableWhereUniqueInput;
  create: ConsumeableCreateWithoutRecipeInput;
};

export type CraftingMaterialCreateWithoutRecipesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
};

export type CraftingMaterialCreateOrConnectWithoutrecipesInput = {
  where: CraftingMaterialWhereUniqueInput;
  create: CraftingMaterialCreateWithoutRecipesInput;
};

export type CookingMaterialCreateWithoutRecipesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  processingRecipe?: Maybe<ProcessRecipeCreateOneWithoutMaterialInput>;
};

export type CookingMaterialCreateOrConnectWithoutrecipesInput = {
  where: CookingMaterialWhereUniqueInput;
  create: CookingMaterialCreateWithoutRecipesInput;
};

export type ProcessRecipeCreateWithoutMaterialInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  processingTime?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['Json']>;
};

export type ProcessRecipeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProcessRecipeCreateOrConnectWithoutmaterialInput = {
  where: ProcessRecipeWhereUniqueInput;
  create: ProcessRecipeCreateWithoutMaterialInput;
};

export type ConsumeableRecipeCreateWithoutCookingMaterialsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  recipe?: Maybe<Scalars['Json']>;
  consumeable?: Maybe<ConsumeableCreateOneWithoutRecipeInput>;
  craftingMaterials?: Maybe<CraftingMaterialCreateManyWithoutRecipesInput>;
};

export type ConsumeableRecipeCreateOrConnectWithoutcookingMaterialsInput = {
  where: ConsumeableRecipeWhereUniqueInput;
  create: ConsumeableRecipeCreateWithoutCookingMaterialsInput;
};

export type ConsumeableRecipeCreateWithoutCraftingMaterialsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  recipe?: Maybe<Scalars['Json']>;
  consumeable?: Maybe<ConsumeableCreateOneWithoutRecipeInput>;
  cookingMaterials?: Maybe<CookingMaterialCreateManyWithoutRecipesInput>;
};

export type ConsumeableRecipeCreateOrConnectWithoutcraftingMaterialsInput = {
  where: ConsumeableRecipeWhereUniqueInput;
  create: ConsumeableRecipeCreateWithoutCraftingMaterialsInput;
};

export type ArtifactCreateWithoutDomainInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  lore?: Maybe<Scalars['String']>;
  minRarity: Scalars['Int'];
  possibleMainStats?: Maybe<Scalars['Json']>;
  possibleSubStats?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['Json']>;
  type: ArtifactType;
  set?: Maybe<ArtifactSetCreateOneWithoutArtifactsInput>;
};

export type ArtifactCreateOrConnectWithoutdomainInput = {
  where: ArtifactWhereUniqueInput;
  create: ArtifactCreateWithoutDomainInput;
};

export type RegionCreateWithoutDomainsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  characterProfiles?: Maybe<CharacterProfileCreateManyWithoutRegionInput>;
  element?: Maybe<ElementCreateOneWithoutRegionInput>;
};

export type RegionCreateOrConnectWithoutdomainsInput = {
  where: RegionWhereUniqueInput;
  create: RegionCreateWithoutDomainsInput;
};

export type TalentLevelUpMaterialCreateWithoutDomainInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  availability?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: TalentLevelUpMaterialGroup;
  talents?: Maybe<TalentCreateManyWithoutTalentLevelUpMaterialInput>;
};

export type TalentLevelUpMaterialCreateOrConnectWithoutdomainInput = {
  where: TalentLevelUpMaterialWhereUniqueInput;
  create: TalentLevelUpMaterialCreateWithoutDomainInput;
};

export type WeaponAscensionMaterialCreateWithoutDomainInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  availability?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: WeaponAscensionMaterialGroup;
  weaponAscensions?: Maybe<WeaponAscensionCreateManyWithoutWeaponAscensionMaterialInput>;
};

export type WeaponAscensionMaterialCreateOrConnectWithoutdomainInput = {
  where: WeaponAscensionMaterialWhereUniqueInput;
  create: WeaponAscensionMaterialCreateWithoutDomainInput;
};

export type CharacterCreateWithoutElementsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  constellations?: Maybe<Scalars['Json']>;
  icon?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  stats?: Maybe<Scalars['Json']>;
  weapon?: Maybe<WeaponType>;
  ascensions?: Maybe<CharacterAscensionCreateManyWithoutCharacterInput>;
  characterProfile?: Maybe<CharacterProfileCreateOneWithoutCharacterInput>;
  talents?: Maybe<TalentCreateManyWithoutCharacterInput>;
};

export type CharacterCreateOrConnectWithoutelementsInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutElementsInput;
};

export type CharacterProfileCreateWithoutVisionInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  affiliation?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  constellation?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['Json']>;
  overview?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['Json']>;
  voiceActor?: Maybe<Scalars['Json']>;
  voiceLines?: Maybe<Scalars['Json']>;
  region?: Maybe<RegionCreateOneWithoutCharacterProfilesInput>;
  specialtyDish?: Maybe<ConsumeableCreateOneWithoutCharacterSpecialtyInput>;
  character?: Maybe<CharacterCreateOneWithoutCharacterProfileInput>;
};

export type CharacterProfileCreateOrConnectWithoutvisionInput = {
  where: CharacterProfileWhereUniqueInput;
  create: CharacterProfileCreateWithoutVisionInput;
};

export type RegionCreateWithoutElementInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  characterProfiles?: Maybe<CharacterProfileCreateManyWithoutRegionInput>;
  domains?: Maybe<DomainCreateManyWithoutRegionInput>;
};

export type RegionCreateOrConnectWithoutelementInput = {
  where: RegionWhereUniqueInput;
  create: RegionCreateWithoutElementInput;
};

export type WeaponEnhancementMaterialCreateWithoutRecipeUseInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  recipeCreate?: Maybe<ForgeRecipeCreateOneWithoutWeaponEnhancementMaterialInput>;
};

export type WeaponEnhancementMaterialCreateOrConnectWithoutrecipeUseInput = {
  where: WeaponEnhancementMaterialWhereUniqueInput;
  create: WeaponEnhancementMaterialCreateWithoutRecipeUseInput;
};

export type WeaponEnhancementMaterialCreateWithoutRecipeCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  source?: Maybe<Scalars['Json']>;
  recipeUse?: Maybe<ForgeRecipeCreateOneWithoutWeaponEnhancementMaterialsInput>;
};

export type WeaponEnhancementMaterialCreateOrConnectWithoutrecipeCreateInput = {
  where: WeaponEnhancementMaterialWhereUniqueInput;
  create: WeaponEnhancementMaterialCreateWithoutRecipeCreateInput;
};

export type WeaponCreateWithoutForgeRecipeInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  baseStats?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lore?: Maybe<Scalars['String']>;
  passive?: Maybe<Scalars['Json']>;
  rarity?: Maybe<Scalars['Int']>;
  refinements?: Maybe<Scalars['Json']>;
  stats?: Maybe<Scalars['Json']>;
  secondaryStatType?: Maybe<WeaponSecondaryStatType>;
  type: WeaponType;
  ascensions?: Maybe<WeaponAscensionCreateManyWithoutWeaponInput>;
};

export type WeaponCreateOrConnectWithoutforgeRecipeInput = {
  where: WeaponWhereUniqueInput;
  create: WeaponCreateWithoutForgeRecipeInput;
};

export type CharacterProfileCreateWithoutRegionInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  affiliation?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  constellation?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['Json']>;
  overview?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['Json']>;
  voiceActor?: Maybe<Scalars['Json']>;
  voiceLines?: Maybe<Scalars['Json']>;
  specialtyDish?: Maybe<ConsumeableCreateOneWithoutCharacterSpecialtyInput>;
  vision?: Maybe<ElementCreateOneWithoutCharacterProfilesInput>;
  character?: Maybe<CharacterCreateOneWithoutCharacterProfileInput>;
};

export type CharacterProfileCreateOrConnectWithoutregionInput = {
  where: CharacterProfileWhereUniqueInput;
  create: CharacterProfileCreateWithoutRegionInput;
};

export type DomainCreateWithoutRegionInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  levels?: Maybe<Scalars['Json']>;
  type?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateManyWithoutDomainInput>;
  talentLevelUpMaterials?: Maybe<TalentLevelUpMaterialCreateManyWithoutDomainInput>;
  weaponAscensionMaterials?: Maybe<WeaponAscensionMaterialCreateManyWithoutDomainInput>;
};

export type DomainCreateOrConnectWithoutregionInput = {
  where: DomainWhereUniqueInput;
  create: DomainCreateWithoutRegionInput;
};

export type ElementCreateWithoutRegionInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  archon?: Maybe<Scalars['String']>;
  statusEffect?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  characters?: Maybe<CharacterCreateManyWithoutElementsInput>;
  characterProfiles?: Maybe<CharacterProfileCreateManyWithoutVisionInput>;
};

export type ElementCreateOrConnectWithoutregionInput = {
  where: ElementWhereUniqueInput;
  create: ElementCreateWithoutRegionInput;
};

export type CharacterCreateWithoutTalentsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  constellations?: Maybe<Scalars['Json']>;
  icon?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  stats?: Maybe<Scalars['Json']>;
  weapon?: Maybe<WeaponType>;
  ascensions?: Maybe<CharacterAscensionCreateManyWithoutCharacterInput>;
  characterProfile?: Maybe<CharacterProfileCreateOneWithoutCharacterInput>;
  elements?: Maybe<ElementCreateManyWithoutCharactersInput>;
};

export type CharacterCreateOrConnectWithouttalentsInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutTalentsInput;
};

export type TalentLevelUpMaterialCreateWithoutTalentsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  availability?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: TalentLevelUpMaterialGroup;
  domain?: Maybe<DomainCreateOneWithoutTalentLevelUpMaterialsInput>;
};

export type TalentLevelUpMaterialCreateOrConnectWithouttalentsInput = {
  where: TalentLevelUpMaterialWhereUniqueInput;
  create: TalentLevelUpMaterialCreateWithoutTalentsInput;
};

export type DomainCreateWithoutTalentLevelUpMaterialsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  levels?: Maybe<Scalars['Json']>;
  type?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateManyWithoutDomainInput>;
  region?: Maybe<RegionCreateOneWithoutDomainsInput>;
  weaponAscensionMaterials?: Maybe<WeaponAscensionMaterialCreateManyWithoutDomainInput>;
};

export type DomainCreateOrConnectWithouttalentLevelUpMaterialsInput = {
  where: DomainWhereUniqueInput;
  create: DomainCreateWithoutTalentLevelUpMaterialsInput;
};

export type TalentCreateWithoutTalentLevelUpMaterialInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['Json']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  character: CharacterCreateOneWithoutTalentsInput;
};

export type TalentCreateOrConnectWithouttalentLevelUpMaterialInput = {
  where: TalentWhereUniqueInput;
  create: TalentCreateWithoutTalentLevelUpMaterialInput;
};

export type WeaponAscensionCreateWithoutWeaponInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  commonAscensionMaterials?: Maybe<CommonAscensionMaterialCreateManyWithoutWeaponAscensionsInput>;
  weaponAscensionMaterial?: Maybe<WeaponAscensionMaterialCreateOneWithoutWeaponAscensionsInput>;
};

export type WeaponAscensionCreateOrConnectWithoutweaponInput = {
  where: WeaponAscensionWhereUniqueInput;
  create: WeaponAscensionCreateWithoutWeaponInput;
};

export type ForgeRecipeCreateWithoutWeaponInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  craftingTime?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['Json']>;
  weaponEnhancementMaterials?: Maybe<WeaponEnhancementMaterialCreateManyWithoutRecipeUseInput>;
  weaponEnhancementMaterial?: Maybe<WeaponEnhancementMaterialCreateOneWithoutRecipeCreateInput>;
};

export type ForgeRecipeCreateOrConnectWithoutweaponInput = {
  where: ForgeRecipeWhereUniqueInput;
  create: ForgeRecipeCreateWithoutWeaponInput;
};

export type CommonAscensionMaterialCreateWithoutWeaponAscensionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: CommonAscensionMaterialGroup;
  characterAscensions?: Maybe<CharacterAscensionCreateManyWithoutCommonAscensionMaterialsInput>;
};

export type CommonAscensionMaterialCreateOrConnectWithoutweaponAscensionsInput = {
  where: CommonAscensionMaterialWhereUniqueInput;
  create: CommonAscensionMaterialCreateWithoutWeaponAscensionsInput;
};

export type WeaponAscensionMaterialCreateWithoutWeaponAscensionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  availability?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  rarity: Scalars['Int'];
  group: WeaponAscensionMaterialGroup;
  domain?: Maybe<DomainCreateOneWithoutWeaponAscensionMaterialsInput>;
};

export type WeaponAscensionMaterialCreateOrConnectWithoutweaponAscensionsInput = {
  where: WeaponAscensionMaterialWhereUniqueInput;
  create: WeaponAscensionMaterialCreateWithoutWeaponAscensionsInput;
};

export type WeaponCreateWithoutAscensionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  baseStats?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lore?: Maybe<Scalars['String']>;
  passive?: Maybe<Scalars['Json']>;
  rarity?: Maybe<Scalars['Int']>;
  refinements?: Maybe<Scalars['Json']>;
  stats?: Maybe<Scalars['Json']>;
  secondaryStatType?: Maybe<WeaponSecondaryStatType>;
  type: WeaponType;
  forgeRecipe?: Maybe<ForgeRecipeCreateOneWithoutWeaponInput>;
};

export type WeaponCreateOrConnectWithoutascensionsInput = {
  where: WeaponWhereUniqueInput;
  create: WeaponCreateWithoutAscensionsInput;
};

export type DomainCreateWithoutWeaponAscensionMaterialsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  levels?: Maybe<Scalars['Json']>;
  type?: Maybe<Scalars['String']>;
  artifacts?: Maybe<ArtifactCreateManyWithoutDomainInput>;
  region?: Maybe<RegionCreateOneWithoutDomainsInput>;
  talentLevelUpMaterials?: Maybe<TalentLevelUpMaterialCreateManyWithoutDomainInput>;
};

export type DomainCreateOrConnectWithoutweaponAscensionMaterialsInput = {
  where: DomainWhereUniqueInput;
  create: DomainCreateWithoutWeaponAscensionMaterialsInput;
};

export type WeaponAscensionCreateWithoutWeaponAscensionMaterialInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  recipe?: Maybe<Scalars['Json']>;
  commonAscensionMaterials?: Maybe<CommonAscensionMaterialCreateManyWithoutWeaponAscensionsInput>;
  weapon?: Maybe<WeaponCreateOneWithoutAscensionsInput>;
};

export type WeaponAscensionCreateOrConnectWithoutweaponAscensionMaterialInput = {
  where: WeaponAscensionWhereUniqueInput;
  create: WeaponAscensionCreateWithoutWeaponAscensionMaterialInput;
};

export type ForgeRecipeCreateWithoutWeaponEnhancementMaterialInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  craftingTime?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['Json']>;
  weaponEnhancementMaterials?: Maybe<WeaponEnhancementMaterialCreateManyWithoutRecipeUseInput>;
  weapon?: Maybe<WeaponCreateOneWithoutForgeRecipeInput>;
};

export type ForgeRecipeCreateOrConnectWithoutweaponEnhancementMaterialInput = {
  where: ForgeRecipeWhereUniqueInput;
  create: ForgeRecipeCreateWithoutWeaponEnhancementMaterialInput;
};

export type ForgeRecipeCreateWithoutWeaponEnhancementMaterialsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  craftingTime?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['Json']>;
  weaponEnhancementMaterial?: Maybe<WeaponEnhancementMaterialCreateOneWithoutRecipeCreateInput>;
  weapon?: Maybe<WeaponCreateOneWithoutForgeRecipeInput>;
};

export type ForgeRecipeCreateOrConnectWithoutweaponEnhancementMaterialsInput = {
  where: ForgeRecipeWhereUniqueInput;
  create: ForgeRecipeCreateWithoutWeaponEnhancementMaterialsInput;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'>>;
};

export type SignupMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignupMutation = { __typename?: 'Mutation' } & {
  signup?: Maybe<{ __typename?: 'InfoPayload' } & Pick<InfoPayload, 'message'>>;
};

export type UpdateSlimeColorMutationVariables = Exact<{
  color: Scalars['String'];
}>;

export type UpdateSlimeColorMutation = { __typename?: 'Mutation' } & {
  updateSlimeColor?: Maybe<
    { __typename?: 'InfoPayload' } & Pick<InfoPayload, 'message'>
  >;
};

export type UpdateTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type UpdateTokenMutation = { __typename?: 'Mutation' } & {
  updateToken?: Maybe<
    { __typename?: 'InfoPayload' } & Pick<InfoPayload, 'message'>
  >;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<User, 'id' | 'username' | 'slimeColor'> & {
        userSecret?: Maybe<
          { __typename?: 'UserSecret' } & Pick<
            UserSecret,
            'token' | 'activated'
          >
        >;
      }
  >;
};

export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const SignupDocument = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      message
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >,
) {
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    baseOptions,
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const UpdateSlimeColorDocument = gql`
  mutation updateSlimeColor($color: String!) {
    updateSlimeColor(color: $color) {
      message
    }
  }
`;
export type UpdateSlimeColorMutationFn = Apollo.MutationFunction<
  UpdateSlimeColorMutation,
  UpdateSlimeColorMutationVariables
>;

/**
 * __useUpdateSlimeColorMutation__
 *
 * To run a mutation, you first call `useUpdateSlimeColorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSlimeColorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSlimeColorMutation, { data, loading, error }] = useUpdateSlimeColorMutation({
 *   variables: {
 *      color: // value for 'color'
 *   },
 * });
 */
export function useUpdateSlimeColorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSlimeColorMutation,
    UpdateSlimeColorMutationVariables
  >,
) {
  return Apollo.useMutation<
    UpdateSlimeColorMutation,
    UpdateSlimeColorMutationVariables
  >(UpdateSlimeColorDocument, baseOptions);
}
export type UpdateSlimeColorMutationHookResult = ReturnType<
  typeof useUpdateSlimeColorMutation
>;
export type UpdateSlimeColorMutationResult = Apollo.MutationResult<UpdateSlimeColorMutation>;
export type UpdateSlimeColorMutationOptions = Apollo.BaseMutationOptions<
  UpdateSlimeColorMutation,
  UpdateSlimeColorMutationVariables
>;
export const UpdateTokenDocument = gql`
  mutation updateToken($token: String!) {
    updateToken(token: $token) {
      message
    }
  }
`;
export type UpdateTokenMutationFn = Apollo.MutationFunction<
  UpdateTokenMutation,
  UpdateTokenMutationVariables
>;

/**
 * __useUpdateTokenMutation__
 *
 * To run a mutation, you first call `useUpdateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTokenMutation, { data, loading, error }] = useUpdateTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUpdateTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTokenMutation,
    UpdateTokenMutationVariables
  >,
) {
  return Apollo.useMutation<UpdateTokenMutation, UpdateTokenMutationVariables>(
    UpdateTokenDocument,
    baseOptions,
  );
}
export type UpdateTokenMutationHookResult = ReturnType<
  typeof useUpdateTokenMutation
>;
export type UpdateTokenMutationResult = Apollo.MutationResult<UpdateTokenMutation>;
export type UpdateTokenMutationOptions = Apollo.BaseMutationOptions<
  UpdateTokenMutation,
  UpdateTokenMutationVariables
>;
export const GetMeDocument = gql`
  query getMe {
    me {
      id
      username
      slimeColor
      userSecret {
        token
        activated
      }
    }
  }
`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    baseOptions,
  );
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    baseOptions,
  );
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>;
