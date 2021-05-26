import {
  Attribute,
  AutoGenerateAttribute,
  AUTO_GENERATE_ATTRIBUTE_STRATEGY,
  Entity,
  INDEX_TYPE,
} from '@typedorm/common';

@Entity({
  name: 'employee',
  primaryKey: {
    partitionKey: 'EMPLOYEE#{{id}}',
    sortKey: 'REPORTS_TO#{{reportsTo}}',
  },
  indexes: {
    GSI1: {
      type: INDEX_TYPE.GSI,
      partitionKey: 'REPORTS_TO#{{reportsTo}}',
      sortKey: 'HIRE_DATE#{{hireDate}}',
    },
  },
})
export class Employee {
  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4,
  })
  id: string;

  @Attribute()
  reportsTo: string;

  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.EPOCH_DATE,
    autoUpdate: true,
  })
  updatedAt: Date;
}
