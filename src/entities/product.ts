import {
  Attribute,
  AutoGenerateAttribute,
  AUTO_GENERATE_ATTRIBUTE_STRATEGY,
  Entity,
  INDEX_TYPE,
} from '@typedorm/common';

export enum PRODUCT_STATUS {
  ACTIVE = 'ACTIVE',
  DISCONTINUED = 'DISCONTINUED',
}

@Entity({
  name: 'product',
  primaryKey: {
    partitionKey: 'PRODUCT#{{id}}',
    sortKey: 'PRODUCT',
  },
  indexes: {
    GSI1: {
      type: INDEX_TYPE.GSI,
      partitionKey: 'PRODUCT',
      sortKey: 'STATUS#{{status}}',
    },
  },
})
export class Product {
  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4,
  })
  id: string;

  @Attribute({
    isEnum: true, // ATM, when using enum as type, this needs to be defined explicitly
  })
  status: PRODUCT_STATUS;
}
