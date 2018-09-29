(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{372:function(n,e,t){"use strict";t.r(e);var o=t(4),a=t.n(o),l=t(5),i=t.n(l),r=t(2),s=t.n(r),d=t(6),c=t.n(d),u=function(n){function e(){var n,o,l,r;i()(this,e);for(var d=arguments.length,c=Array(d),u=0;u<d;u++)c[u]=arguments[u];return o=l=s()(this,(n=e.__proto__||a()(e)).call.apply(n,[this].concat(c))),l.document=function(){return{document:t(428),className:"modal-page"}},r=o,s()(l,r)}return c()(e,n),e}(t(397).a);e.default=u},397:function(n,e,t){"use strict";var o=t(391),a=t.n(o),l=t(392),i=t.n(l),r=t(393),s=t.n(r),d=t(4),c=t.n(d),u=t(5),m=t.n(u),p=t(7),h=t.n(p),v=t(2),f=t.n(v),y=t(6),C=t.n(y),g=t(0),M=t.n(g),k=t(55),b=t.n(k),B=t(394),D=t.n(B),w=t(395),_=t(1),S=t.n(_),z=t(399),E=t.n(z),x=(t(404),t(405),t(406),t(407),function(n){function e(){return m()(this,e),f()(this,(e.__proto__||c()(e)).apply(this,arguments))}return C()(e,n),h()(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.onChange,o=e.value;this.cm=E()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(o),this.cm.on("changes",function(e){t&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){t(e.getValue())},300))})}},{key:"render",value:function(){var n=this;return M.a.createElement("div",{className:"editor",ref:function(e){n.editor=e}})}}]),e}(g.Component)),N=x;x.propTypes={onChange:S.a.func,value:S.a.string},x.defaultProps={onChange:function(){},value:""};t(396);var T=function(n){function e(n){m()(this,e);var t=f()(this,(e.__proto__||c()(e)).call(this,n));return t.toggleShowCode=function(){t.setState({isOpen:!t.state.isOpen})},t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={isOpen:!1},t}return C()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&b.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(6),t.e(7),t.e(72)]).then(t.bind(null,544)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,M.a,b.a,n]}}).then(function(t){var o=t.args;t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var a=Object(w.transform)(n,{presets:["es2015","react"]}).code;o.push(a),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return M.a.createElement("div",null,M.a.createElement("h3",null,this.title),M.a.createElement("div",{className:"demo"},M.a.createElement("div",{className:"demo-code"},M.a.createElement("div",{className:"demo-code-editor",ref:function(e){n.code=e},dangerouslySetInnerHTML:{__html:this.description}}),M.a.createElement(N,{value:this.source[2],onChange:function(e){return n.renderSource(e)}}))))}}]),e}(g.Component),L=function(n){function e(n){m()(this,e);var t=f()(this,(e.__proto__||c()(e)).call(this,n));return t.nodeList=[],t.components=new s.a,t.renderer=new D.a.Renderer,t}return C()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){b.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,l=a()(this.components);!(n=(o=l.next()).done);n=!0){var r=o.value,s=i()(r,2),d=s[0],c=s[1],u=document.getElementById(d);this.nodeList.push(u),u instanceof HTMLElement&&b.a.render(c,u)}}catch(n){e=!0,t=n}finally{try{!n&&l.return&&l.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,o=e.className;if("string"==typeof t){this.components.clear();var a=D()(t.replace(/:::\s?api\s?([^]+?):::/g,function(n,e){return e}).replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var a=o.toString(36);return n.components.set(a,M.a.createElement(T,n.props,t)),"<div id="+a+"></div>"}),{renderer:this.renderer});return M.a.createElement("div",{className:o,dangerouslySetInnerHTML:{__html:a}})}return M.a.createElement("span",null)}}]),e}(M.a.Component);e.a=L},428:function(n,e){n.exports="## 模态框 Modal\n\n:::demo 基本用法\n```jsx\nimport { Modal, Cell, Button, Select } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      modal1: false,\n      modal2: false,\n      modal3: false,\n      modal4: false,\n      modal5: false,\n      animationType: 'fade',\n    };\n  }\n\n  open(key) {\n    this.setState({\n      [`${key}`]: true,\n    });\n  }\n\n  close(key) {\n    this.setState({\n      [`${key}`]: false,\n    });\n  }\n\n  render() {\n    const { modal1, modal2, modal3, modal4, modal5, animationType } = this.state;\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal1')}>开启</Button>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal3')}>开启</Button>\n          }\n        >\n          圆角\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal2')}>开启</Button>\n          }\n        >\n          遮罩层可关闭\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal4')}>开启</Button>\n          }\n        >\n          无头部\n        </Cell>\n\n        <Cell\n          title=\"动画效果\"\n          description={\n            <div>\n              <Button size=\"xs\" onClick={() => this.open('modal5')}>开启</Button>\n            </div>\n          }\n        >\n          <Select\n            value={animationType}\n            dataSource={[\n              { value: 'fade', label: '淡出淡入效果(fade)' },\n              { value: 'zoom', label: '缩放效果(zoom)' },\n              { value: 'rotate', label: '旋转效果(rotate)' },\n              { value: 'door', label: '开关门效果(door)' },\n              { value: 'flip', label: '翻转效果(flip)' },\n              { value: 'moveUp', label: '移出移入效果(moveUp)' },\n              { value: 'moveDown', label: '移出移入效果(moveDown)' },\n              { value: 'moveLeft', label: '移出移入效果(moveLeft)' },\n              { value: 'moveRight', label: '移出移入效果(moveRight)' },\n              { value: 'slideUp', label: '滑出滑入效果(slideUp)' },\n              { value: 'slideDown', label: '滑出滑入效果(slideDown)' },\n              { value: 'slideLeft', label: '滑出滑入效果(slideLeft)' },\n              { value: 'slideRight', label: '滑出滑入效果(slideRight)' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                animationType: selected.map(item => item.value),\n              });\n            }}\n          />\n        </Cell>\n\n        <Modal visible={modal1}>\n          <Modal.Header title=\"标题\" onClose={() => this.close('modal1')} />\n          <Modal.Body>模态框内容</Modal.Body>\n        </Modal>\n\n        <Modal visible={modal2} onMaskClick={() => this.close('modal2')}>\n          <Modal.Header title=\"标题\" />\n          <Modal.Body>点击遮罩层关闭</Modal.Body>\n        </Modal>\n\n        <Modal shape=\"radius\" visible={modal3}>\n          <Modal.Header title=\"标题\" onClose={() => this.close('modal3')} />\n          <Modal.Body>模态框内容</Modal.Body>\n        </Modal>\n\n        <Modal visible={modal4} onMaskClick={() => this.close('modal4')}>\n          <Modal.Body>无头部</Modal.Body>\n        </Modal>\n\n        <Modal visible={modal5} animationType={animationType} onMaskClick={() => this.close('modal5')}>\n          <Modal.Body>\n            <div style={{ height: 100 }}>当前使用的动画类型animationType：'{animationType}'</div>\n          </Modal.Body>\n        </Modal>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 特定场景\n```jsx\nimport { Cell, Button, Alert, Confirm  } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      alert: false,\n      confirm: false,\n    };\n  }\n\n  open(key) {\n    this.setState({\n      [`${key}`]: true,\n    });\n  }\n\n  close(key) {\n    this.setState({\n      [`${key}`]: false,\n    });\n  }\n\n  render() {\n    const { alert, confirm } = this.state;\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" theme=\"warning\" onClick={() => this.open('alert')}>开启</Button>\n          }\n        >\n          警告框 Alert\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" theme=\"warning\" onClick={() => this.open('confirm')}>开启</Button>\n          }\n        >\n          确认框 Confirm\n        </Cell>\n\n        <Alert\n          shape=\"radius\"\n          visible={alert}\n          title=\"警告\"\n          message=\"这里是警告信息\"\n          onCancel={() => this.close('alert')}\n        />\n\n        <Confirm\n          shape=\"radius\"\n          visible={confirm}\n          title=\"确认信息\"\n          message=\"你确定要这样做吗？\"\n          onOk={() => alert('click ok')}\n          onCancel={() => this.close('confirm')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-modal | | 类名前缀 |\n| className | string | 无 | | 追加类名 |\n| shape | string | 无 | `radius` | 形状 |\n| visible | boolean | false | | 是否显示 |\n| animationType | string | `fade` | `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight` | 动画效果 |\n| animationDuration | number | 200 | | 动画执行时间 |\n| width | string &#124; number | `70%` | | 宽度 |\n| onMaskClick | <code>() => void</code> | noop | | 点击遮罩层时触发的回调函数 |\n\n:::"}}]);