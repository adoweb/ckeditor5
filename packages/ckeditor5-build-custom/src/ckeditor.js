/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

/**
 * Core features
 */
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

/**
 * Enables support for text alignment. 
 * You can use it to align your content to left, right and center or to justify it.
 */
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

/**
 * Enables a set of predefined autoformatting actions. 
 * It allows for formatting text by typing sequences like **bold this**.
 */
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';

/**
 * Allows for inserting images simply by pasting a URL of the image into the content. 
 * It turns the pasted URL into an image on the go.
 * @requires Plugins: Block image or Inline image
 */
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';

/**
 * Automatically turns plain text links in the document into active URLs as you write. 
 * Works for emails, too.
 * @requires Plugins: Link
 */
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';

/**
 * An image upload tool. 
 * It converts images inserted into the rich-text editor into Base64-encoded strings in the editor output.
 */
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

/**
 * Implements the block quote support to easily include quotations and passages in the rich-text content.
 */
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';

/**
 * Implements bold formatting support. 
 * It is a part of the basic text styles package.
 */
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';

/**
 * Implements inline code formatting support. 
 * It is a part of the basic text styles package.
 */
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';

/**
 * Allows for inserting and editing of blocks of pre–formatted code with the programming language assigned.
 */
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

/**
 * Implements the find and replace function in CKEditor 5.
 */
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';

/**
 * Introduces font color support with a configurable color palette panel.
 */
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';

/**
 * Introduces font family support.
 */
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';

/**
 * Introduces font size support.
 */
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';

/**
 * Enables support for creating headings in your content. 
 * The heading levels available are configurable.
 */
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

/**
 * Offers the text marking tools (pens and markers) 
 * useful when reviewing content or highlighting it for future reference.
 */
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

/**
 * Allows for inserting horizontal lines into your content. 
 * These help the authors separate and group document sections.
 */
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

/**
 * Enables support for image handling. 
 * Note: The image feature is introduced in a granular form, 
 * implemented by separate plugins responsible for such aspects 
 * as image caption, toolbar, resize, upload or styles.
 * Consists of plugins: Block imageInline image
 */
import Image from '@ckeditor/ckeditor5-image/src/image';

/**
 * Allows for adding captions to block images to give additional context.
 */
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';

/**
 * Allows for resizing images using handles.
 * @requires Plugins: Block image or Inline image
 */
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';

/**
 * Allows for using predefined, configurable styles to display the images, 
 * for example, as a full width image or side image.
 * @requires Plugins: Block image or Inline image
 */
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';

/**
 * Introduces a contextual toolbar for images. 
 * It appears when an image is selected and can be configured to contain buttons 
 * for features such as the text alternative or image styles.
 * @requires Plugins: Block image or Inline image
 */
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';

/**
 * Allows for pasting images from the clipboard, 
 * dragging and dropping of images, 
 * selecting them through a file system dialog or from a media management tool. 
 * You need to set this plugin up with an official or a custom upload adapter.
 * @requires Plugins: Block image or Inline image
 */
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';

/**
 * Implements the core of the indent feature. 
 * It requires compatible plugins, such as indent block or list, to work.
 */
import Indent from '@ckeditor/ckeditor5-indent/src/indent';

/**
 * The indent block feature, together with the indent feature, 
 * controls the indentation of elements such as paragraphs and headings.
 * @requires Plugins: Indent
 */
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';

/**
 * Implements italic formatting support. 
 * It is a part of the basic text styles package.
 */
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

/**
 * Brings support for inserting hyperlinks into the content and offers the UI to create and edit them.
 */
import Link from '@ckeditor/ckeditor5-link/src/link';

/**
 * Allows adding clickable links to images for creating banners or referrers.
 * @requires Plugins: Link, Image
 */
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';

/**
 * Implements bulleted and numbered list features. 
 * Add the to-do list plugin to bring support for inserting interactive checkboxes.
 */
import List from '@ckeditor/ckeditor5-list/src/list';

/**
 * Enables styling the list item markers for both ordered and unordered lists. 
 * You can choose various types of numerals and letters or visual markers to use with these lists.
 * @requires Plugins: List
 */
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';

/**
 * Allows for inserting embeddable media such as YouTube or Vimeo videos, 
 * Instagram posts and tweets or Google Maps into your rich-text content.
 */
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';

/**
 * Implements an optional toolbar for media embed that shows when the media element is selected.
 * @requires Plugins: Media embed
 */
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar';

/**
 * Implements paragraph formatting support. 
 * It is a part of the basic text styles package.
 */
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

/**
 * Handles the content pasted from Microsoft Office or Google Docs 
 * and transforms it (if necessary) to a valid structure which can then be understood by the editor features.
 */
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

/**
 * Allows you to quickly remove any text formatting applied using inline HTML elements 
 * and CSS styles like basic text styles (bold, italic, etc.), font family, size, and color and similar.
 */
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

/**
 * Allows for viewing and editing the source of the document.
 */
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';

/**
 * Implements strikethrough formatting support. 
 * It is a part of the basic text styles package.
 */
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';

/**
 * Implements subscript formatting support. 
 * It is a part of the basic text styles package.
 */
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';

/**
 * Implements superscript formatting support. 
 * It is a part of the basic text styles package.
 */
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';

/**
 * Adds table creation and editing tools that help content authors bring tabular data into their documents.
 */
import Table from '@ckeditor/ckeditor5-table/src/table';

/**
 * Adds support for table captions, which inform the reader about the content of the table. 
 * Using captions is also beneficial from the accessibility point of view.
 * @requires Plugins: Table
 */
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';

/**
 * Adds the ability to style individual table cells.
 * @requires Plugins: Table, Table Toolbar
 */
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

/**
 * Adds the ability to style entire tables.
 * @requires Plugins: Table, Table Toolbar
 */
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';

/**
 * Creates configurable toolbars for both the table feature and table content. 
 * They show up when the table widget or the content inside a table cell are selected.
 * @requires Plugins: Table
 */
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

/**
 * Enables support for the autocorrection. 
 * It automatically turns predefined snippets into their typographically improved forms. 
 * For example, (tm) becomes ™ and 1/2 becomes ½.
 */
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

/**
 * Enables support for adding the title field to your document. 
 * It helps ensure that there will always be a single title field at the beginning of the document.
 */
import Title from '@ckeditor/ckeditor5-heading/src/title';

/**
 * Implements underline formatting support. 
 * It is a part of the basic text styles package
 */
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

/**
 * Provides the possibility to track the number of words 
 * and characters written in the rich-text editor.
 */
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';


/**
 * Extends base editor class
 */
export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Base64UploadAdapter,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	FindAndReplace,
	FontColor,
	// FontFamily,
	FontSize,
	Heading,
	Highlight,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	// MediaEmbed,
	// MediaEmbedToolbar,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SourceEditing,
	// Strikethrough,
	// Subscript,
	// Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	WordCount
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'alignment',
			'|',
			'removeFormat',
			'bold',
			'italic',
			'underline',
			// 'strikethrough',
			'blockQuote',
			// 'subscript',
			// 'superscript',
			'|',
			'fontColor',
			'fontSize',
			'highlight',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent',
			'|',
			'link',
			'uploadImage',
			// 'mediaEmbed',
			'insertTable',
			'horizontalLine',
			'|',
			// 'code',
			'codeBlock',
			'sourceEditing',
			'|',
			'findAndReplace',
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
		]
	},
	// ui: {
    //     viewportOffset: { top: 320, right: 0, bottom: 0, left: 0 }
    // },
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
            'linkImage'
		]
	},
	link: {
		decorators: {
			detectDownloadable: {
				mode: 'automatic',
				callback: url => url.endsWith( '.pdf' ),
				attributes: {
					download: 'file.pdf'
				}
			}
		}
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// mediaEmbed: {
	// 	removeProviders: [ 'youtube', 'vimeo' ]
	// },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
