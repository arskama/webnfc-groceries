import{a as A,b as h,M as O,_ as s}from"../common/foundation-0785b26f.js";import{d as I,h as S}from"../common/lit-html-e7095b40.js";import{c as v}from"../common/lit-element-f25bd23a.js";import{query as g,property as l,customElement as N}from"../lit-element/lib/decorators.js";import{B as C,a as M}from"../common/base-element-2ff54d43.js";import{classMap as D}from"../lit-html/directives/class-map.js";import{o as b}from"../common/observer-306f3f70.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var r={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},u={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},o={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var k=r.OPENING,E=r.OPEN,y=r.CLOSING,w=u.REASON_ACTION,f=u.REASON_DISMISS,p=function(e){A(i,e);function i(t){var a=e.call(this,h(h({},i.defaultAdapter),t))||this;return a.isOpen_=!1,a.animationFrame_=0,a.animationTimer_=0,a.autoDismissTimer_=0,a.autoDismissTimeoutMs_=o.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,a.closeOnEscape_=!0,a}return Object.defineProperty(i,"cssClasses",{get:function(){return r},enumerable:!0,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){return},announce:function(){return},notifyClosed:function(){return},notifyClosing:function(){return},notifyOpened:function(){return},notifyOpening:function(){return},removeClass:function(){return}}},enumerable:!0,configurable:!0}),i.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter.removeClass(k),this.adapter.removeClass(E),this.adapter.removeClass(y)},i.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.removeClass(y),this.adapter.addClass(k),this.adapter.announce(),this.runNextAnimationFrame_(function(){t.adapter.addClass(E),t.animationTimer_=setTimeout(function(){var a=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter.notifyOpened(),a!==o.INDETERMINATE&&(t.autoDismissTimer_=setTimeout(function(){t.close(f)},a))},o.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},i.prototype.close=function(t){var a=this;if(t===void 0&&(t=""),!this.isOpen_)return;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter.notifyClosing(t),this.adapter.addClass(r.CLOSING),this.adapter.removeClass(r.OPEN),this.adapter.removeClass(r.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){a.handleAnimationTimerEnd_(),a.adapter.notifyClosed(t)},o.SNACKBAR_ANIMATION_CLOSE_TIME_MS)},i.prototype.isOpen=function(){return this.isOpen_},i.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},i.prototype.setTimeoutMs=function(t){var a=o.MIN_AUTO_DISMISS_TIMEOUT_MS,d=o.MAX_AUTO_DISMISS_TIMEOUT_MS,n=o.INDETERMINATE;if(t===o.INDETERMINATE||t<=d&&t>=a)this.autoDismissTimeoutMs_=t;else throw new Error(`
        timeoutMs must be an integer in the range `+a+"\u2013"+d+`
        (or `+n+" to disable), but got '"+t+"'")},i.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},i.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},i.prototype.handleKeyDown=function(t){var a=t.key==="Escape"||t.keyCode===27;a&&this.getCloseOnEscape()&&this.close(f)},i.prototype.handleActionButtonClick=function(t){this.close(w)},i.prototype.handleActionIconClick=function(t){this.close(f)},i.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},i.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(r.OPENING),this.adapter.removeClass(r.CLOSING)},i.prototype.runNextAnimationFrame_=function(t){var a=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){a.animationFrame_=0,clearTimeout(a.animationTimer_),a.animationTimer_=setTimeout(t,0)})},i}(O);/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const{ARIA_LIVE_LABEL_TEXT_ATTR:T}=p.strings,{ARIA_LIVE_DELAY_MS:L}=p.numbers,x=new WeakMap,F=I((e,i)=>t=>{if(!i)return;let a=x.get(t);if(a===void 0){const m=document.createElement("div");m.setAttribute("class","mdc-snackbar__label"),m.setAttribute("role","status"),m.setAttribute("aria-live","polite"),m.textContent=e,t.endNode.parentNode.insertBefore(m,t.endNode),a={labelEl:m,timerId:null},x.set(t,a);return}const d=a,n=d.labelEl;n.setAttribute("aria-live","off"),n.textContent="",n.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',n.setAttribute(T,e),d.timerId!==null&&clearTimeout(d.timerId),d.timerId=window.setTimeout(()=>{d.timerId=null,n.setAttribute("aria-live","polite"),n.removeAttribute(T),n.textContent=e},L)}),{OPENING_EVENT:R,OPENED_EVENT:P,CLOSING_EVENT:B,CLOSED_EVENT:U}=p.strings;class c extends C{constructor(){super(...arguments);this.mdcFoundationClass=p,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){const e={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return S`
      <div class="mdc-snackbar ${D(e)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${F(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},M(this.mdcRoot)),{announce:()=>{},notifyClosed:e=>{this.dispatchEvent(new CustomEvent(U,{bubbles:!0,cancelable:!0,detail:{reason:e}}))},notifyClosing:e=>{this.open=!1,this.dispatchEvent(new CustomEvent(B,{bubbles:!0,cancelable:!0,detail:{reason:e}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(P,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(R,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(e=""){this.reason=e,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(e){this.mdcFoundation.handleKeyDown(e)}_handleActionClick(e){this.mdcFoundation.handleActionButtonClick(e)}_handleDismissClick(e){this.mdcFoundation.handleActionIconClick(e)}}s([g(".mdc-snackbar")],c.prototype,"mdcRoot",void 0),s([g(".mdc-snackbar__label")],c.prototype,"labelElement",void 0),s([l({type:Boolean,reflect:!0}),b(function(e){this.mdcFoundation&&(e?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))})],c.prototype,"open",void 0),s([b(function(e){this.mdcFoundation.setTimeoutMs(e)}),l({type:Number})],c.prototype,"timeoutMs",void 0),s([b(function(e){this.mdcFoundation.setCloseOnEscape(e)}),l({type:Boolean})],c.prototype,"closeOnEscape",void 0),s([l({type:String})],c.prototype,"labelText",void 0),s([l({type:Boolean})],c.prototype,"stacked",void 0),s([l({type:Boolean})],c.prototype,"leading",void 0);/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const j=v`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss:hover::before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var(--mdc-snackbar-action-color, #bb86fc)}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),slot[name=dismiss]::slotted(mwc-icon-button)[dir=rtl]{margin-left:0;margin-right:8px}`;let _=class extends c{};_.styles=j,_=s([N("mwc-snackbar")],_);export{_ as Snackbar};
