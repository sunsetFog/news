/**
 * Created by Liu.Jun on 2020/4/23 10:50.
 */

import { getWidgetConfig } from '@goodgeek/vjsf-utils/formUtils';

import Widget from '../../components/Widget';
import vueProps from '../props';

export default {
    name: 'TableField',
    props: vueProps,
    functional: true,
    render(h, context) {
        const {
            schema, uiSchema, curNodePath, rootFormData, globalOptions
        } = context.props;

        const widgetConfig = getWidgetConfig({
            schema,
            uiSchema,
            curNodePath,
            rootFormData
        }, () => ({
            widget: globalOptions.WIDGET_MAP.types.table
        }));

        return h(
            Widget,
            {
                ...context.data,
                props: {
                    ...context.props,
                    ...widgetConfig
                }
            }
        );
    }
};
