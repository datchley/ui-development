import $ from 'jquery';

function MarkdownMenu(el) {
    var $node = el.jquery ? el : $(el);

    return {
        node: $node,
        item: 'a.list-group-item',

        requestGuide(ev) {
            let $target = $(ev.target),
                path = $target.data('md-path');

            // highlight the clicked guide nav link
            $target.parent().find('a.list-group-item').removeClass('active');
            $target.addClass('active');

            $(document).trigger('ui-request-markdown', { path: path });
        },

        init() {
            console.log("MarkdownMenu.init(): node=", this.node);
            this.node.on('click', this.item, this.requestGuide.bind(this)); 
        }
    };
}

export default MarkdownMenu;
