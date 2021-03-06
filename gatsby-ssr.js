/* eslint-disable */
const React = require('react');
require('dotenv').config();

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
	return setPostBodyComponents([
		<div key="portal" id="portal" />,
		<script src="/__/firebase/7.17.1/firebase-app.js" />,
		<script src="/__/firebase/7.17.1/firebase-analytics.js" />,
		<script src="/__/firebase/init.js" />,
		<script
			async
			dangerouslySetInnerHTML={{
				__html: `
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '3123904567620069');
  fbq('track', 'PageView');
      `
			}}
		/>
	]);
};
