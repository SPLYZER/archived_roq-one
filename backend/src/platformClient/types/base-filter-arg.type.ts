export type IdFilterArgType = {
  equalTo?: string | null;
  notEqualTo?: string | null;
  valueIn?: string[] | null;
  valueNotIn?: string[] | null;
};

export type StringFilterArgType = {
  equalTo?: string | null;
  notEqualTo?: string | null;
  valueIn?: string[] | null;
  valueNotIn?: string[] | null;
};

export type DateFilterArgType = {
  equalTo?: Date | null;
  lessThan?: Date | null;
  lessThanEqual?: Date | null;
  moreThan?: Date | null;
  moreThanEqual?: Date | null;
  notEqualTo?: Date | null;
};

export type BooleanFilterArgType = {
  equalTo?: boolean | null;
  notEqualTo?: boolean | null;
};
