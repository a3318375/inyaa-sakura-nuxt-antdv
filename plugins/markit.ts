import {defineNuxtPlugin} from '#app';

import mdit from 'markdown-it';
import manchor from 'markdown-it-anchor';
import toc from 'markdown-it-toc-done-right';
import highlightLines from 'markdown-it-highlight-lines';
import hljs from 'highlight.js';

const markdownit = new mdit({
    html: true,
    xhtmlOut: true,
    breaks: false,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="highlight-wrap"><code class="hjs">' +
                    hljs.highlight(str, {language: lang, ignoreIllegals: true}).value +
                    '</code>' +
                    '<button type="button" class="copy-code hidden sm:flex sm:items-center sm:justify-center relative w-9 h-9 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-gray-400 hover:text-gray-600 group ml-2.5" :style="color:#06B6D4" onclick="toCopy(this)" style="">' +
                    '<div class="hidden">' + str + '</div>' +
                    '       <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" class="stroke-current transform group-hover:rotate-[-4deg] transition" :style="copied ? \'--tw-rotate:-8deg;\' : \'\'" style="">\n' +
                    '          <path d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
                    '          <path d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
                    '          <path d="M13.7475 16.2499L18.2475 16.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
                    '          <path d="M13.7475 19.2499L18.2475 19.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
                    '          <g :class="[copied ? \'\' : \'opacity-0\', initialized ? \'transition-opacity\' : \'\']" class="opacity-0 transition-opacity">' +
                    '            <path d="M15.9975 5.99988L15.9975 3.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
                    '            <path d="M19.9975 5.99988L20.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
                    '            <path d="M11.9975 5.99988L10.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
                    '          </g>' +
                    '        </svg></button></pre>';
            } catch (error) {
                console.log(error)
            }
        }
        return '<pre class="highlight-wrap"><code class="hjs">' + markdownit.utils.escapeHtml(str) + '</code>' +
            '<button type="button" class="copy-code hidden sm:flex sm:items-center sm:justify-center relative w-9 h-9 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-gray-400 hover:text-gray-600 group ml-2.5" :style="color:#06B6D4" onclick="toCopy(this)" style="">' +
            '<div class="hidden">' + str + '</div>' +
            '       <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" class="stroke-current transform group-hover:rotate-[-4deg] transition" :style="copied ? \'--tw-rotate:-8deg;\' : \'\'" style="">' +
            '          <path d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '          <path d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '          <path d="M13.7475 16.2499L18.2475 16.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '          <path d="M13.7475 19.2499L18.2475 19.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '          <g :class="[copied ? \'\' : \'opacity-0\', initialized ? \'transition-opacity\' : \'\']" class="opacity-0 transition-opacity">' +
            '            <path d="M15.9975 5.99988L15.9975 3.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '            <path d="M19.9975 5.99988L20.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '            <path d="M11.9975 5.99988L10.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '          </g>' +
            '        </svg></button>' +
            '</pre>';
    }
});
markdownit.use(manchor);
markdownit.use(highlightLines);
markdownit.use(toc, {
    containerId: 'TOC-text',
    containerClass: 'TOC-text',
    listClass: 'toc-list',
    itemClass: 'toc-list-item',
    callback: function (html, ast) {
        markdownit.topHtml = html
    }
});
markdownit.disable([ 'link']);

markdownit.linkify.set({fuzzyEmail: false});


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('markit', markdownit);
});
