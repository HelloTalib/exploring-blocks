import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import { useSelect } from "@wordpress/data";
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// colors
import colors from '../colors-palette';

export default function Edit({ attributes, setAttributes }) {
	const { numberOfPosts, color } = attributes;
	const posts = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'post', {
			per_page: numberOfPosts,
			_embed:true,
		});
	});
	return (
		<div {...useBlockProps}>
			{posts && posts.map((post) => {
			console.log(post.link);
				return (
					<h1><a href={post.link}>{post.title.rendered}</a></h1>
				)
			})}
		</div>
	);
}
