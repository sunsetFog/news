<script>
  export default {
    name: 'TableEditFormatter',
    functional: true,
    props: {
      row: {
        type: Object,
        default: null
      },
      column: {
        type: Object,
        default: null
      },
      index: {
        type: Number,
        default: null
      }
    },
    render: (createElement, ctx) => {
      return ctx.props.column.formatter(createElement, ctx.props.row, ctx.props.column, ctx.props.index)
    }
  }
</script>