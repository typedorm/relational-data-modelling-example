import { INDEX_TYPE, Table } from '@typedorm/common';

export const dynamoDBSampleAppTable = new Table({
  name: 'dynamodb-sample-table',
  partitionKey: 'PK',
  sortKey: 'SK',
  indexes: {
    GSI1: {
      partitionKey: 'GSI1PK',
      sortKey: 'GSI1SK',
      type: INDEX_TYPE.GSI,
    },
  },
});
