import $ from 'jquery';

function MarkdownDisplay(el) {
    var $node = el.jquery ? el : $(el);

    return {
        node: $node,
        path: "",
        markdown: "",
        html: "",
        spinner: '.loading',
        output: '.guide-content',
        
        getMarkdownHTML() {
            let self = this;

            return $.ajax({
                url: 'https://api.github.com/markdown',
                method: 'POST',
                data: JSON.stringify({ 
                    text: this.markdown,
                    mode: 'gfm'    
                }),
                dataType: 'text',
                contentType: 'application/json'
            })
            .then(function(result) {
                // ensure headers have proper id='' links, as service is broken
                self.html =  result.replace(/<h([1-5])\>([^<]+)<\/h[1-5]>/g, function(m, p1, p2) {
                    return "<h" + p1 + " id='" + p2.toLowerCase().replace(/\s+/g,'-') + "'>" + p2 + "</h" + p1 + ">"; 
                });
                return self.html;

            }, function(xhr, status, err) {
                console.log(err); 
                throw err;
            });
        
        },

        showMarkDown(ev, payload) {
            let self = this,
                spinner = this.node.find(this.spinner),
                output = this.node.find(this.output);

            this.path = payload.path;
            spinner.removeClass('hidden');

            $.ajax({
                url: this.path,
                dataType: 'text'
            }).then(function(result) {
                self.markdown = result;
                self.getMarkdownHTML().then(function() { 
                    spinner.addClass('hidden');
                    output.html(self.html);
                    self.node.trigger('ui-action-markdown-shown', { file: self.path, size: self.markdown.length });
                });
            });
        },

        init() {
            console.log("MarkdownDisplay.init(): node=", this.node);
            // listen for requests to display a markdown file
            $(document).on('ui-request-markdown', this.showMarkDown.bind(this));
        }
    };
}

export default MarkdownDisplay;
