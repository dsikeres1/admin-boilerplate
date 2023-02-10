import { useEffect, useState } from "react";
import { createPusher, Parsed, parseQuery, QueryDefinition, QueryValues } from "./query";
import { useRouter } from "next/router";

export function useModel<T>(ModelClass: new () => T): T {
  return useState(() => new ModelClass())[0];
}

export type InitModel = {
  init: () => void;
};

export function useInitModel<T extends InitModel>(ModelClass: new () => T): T {
  const model = useModel(ModelClass);
  useEffect(() => {
    model.init();
  }, [model]);
  return model;
}

export type QueryInitModel<T extends QueryDefinition<{}>> = {
  init: (parsed: Parsed<T>) => void;
};

export function useQueryInitModel<T extends QueryInitModel<U>, U extends QueryDefinition<{}>>(
  ModelClass: new () => T,
  queryDefinition: U,
): T {
  const model = useModel(ModelClass);
  const router = useRouter();

  useEffect(() => {
    const parsed = parseQuery(queryDefinition, router);
    model.init(parsed);
  }, [queryDefinition, model, router]);

  return model;
}

export function usePusher<T extends {}>(
  query: QueryDefinition<T>,
): (values: Partial<QueryValues<T>>) => void {
  const router = useRouter();
  return createPusher(router, query);
}
