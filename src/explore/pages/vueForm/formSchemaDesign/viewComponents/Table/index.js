/**
 * Created by Liu.Jun on 2020/10/30 16:25.
 */

import genSchema from '../genSchema.js';

const viewSchema = {
    title: '表格（table）',
    type: 'table',
    'ui:widget': 'TableWidget'
};

export default {
    viewSchema,
    propsSchema: genSchema({}, 'table')
};
