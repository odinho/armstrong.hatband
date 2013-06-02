﻿CKEDITOR.editorConfig = function( config )
{
	config.extraPlugins = 'autogrow,imagebrowser';
	match = /.*\/(\w+)\/(\d+)\/$/.exec(location.pathname)
	config.imageBrowser_listUrl = '/content_replacer/images/' + match[1] + '/' + match[2] + '/'
	config.toolbar = 'FullToolbar';

	config.toolbar_ShortToolbar =
	[
		{ name: 'clipboard', items : [ 'PasteFromWord' ] },
		{ name: 'styles', items : [ 'Format' ] },
		{ name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
		{ name: 'links', items : [ 'Link','Unlink'] },
	];

    config.toolbar_FullToolbar = [
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Scayt' ] },
        { name: 'links', items: [ 'Link', 'Unlink' ] },
        { name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
        { name: 'tools' },
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'CreateDiv', 'ShowBlocks', 'Source' ] },
        { name: 'others', items: [ '-' ] },
        '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Strike', '-', 'RemoveFormat' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
        { name: 'styles', items: [ 'Styles', 'Format' ] },
    ];
};
