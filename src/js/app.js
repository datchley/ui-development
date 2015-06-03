import $ from 'jquery';
import _ from 'underscore';
import MarkDownDisplay from './markdown-display';
import MarkDownMenu from './markdown-menu';
// import templates from '../templates/templates';
import memberlist from '../templates/member-list.hbs';

$(document).ready(function() {
    if ($('main[role="page"]').length) {
        MarkDownMenu('.guide-nav').init();
        MarkDownDisplay('.guide-display').init();
        /*
        var $md_output = $('.guide-content');
        $('.guide-nav a').on('click', function(ev) {
            var source = $(this).data('md-source');
            $(this).parent().find('a').removeClass('active');
            $(this).addClass('active');
            $md_output.empty();
            $('.loading').removeClass('hidden');
            showMarkdown($md_output, source);
            ev.preventDefault();
        });
        */
    }

    if ($('main[role="main"]').length) {
        // Build Members List
        console.log("memberlist template: ", memberlist);
        $.getJSON('/data/members.json').then(function(json) {
            var grouped = _.chain(json)
                        .groupBy(function(m){ return m.location; })
                        .value();
            
            $('.member-list-stlouis').html(memberlist({ members: grouped['St. Louis'], count: grouped['St. Louis'].length }));
            $('.member-list-boston').html(memberlist({ members: grouped['Boston'], count: grouped['Boston'].length }));
        });
    }    
});

