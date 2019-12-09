'use strict';
function w3c$app$run(app, root, document) {
   let state = new Wy.Ref(app);
   let init = state.$ref.view(state.$ref.model);
   let r = w3c$app$construct$Q4html4NodeqQ3AppQ3dom7ElementQ3dom8Document(Wy.copy(init), state, root, document);
   root.appendChild(r);
}
function w3c$app$refresh$qQ3AppQ3dom7ElementQ3dom8Document(state, root, document) {
   let init = state.$ref.view(state.$ref.model);
   let r = w3c$app$construct$Q4html4NodeqQ3AppQ3dom7ElementQ3dom8Document(Wy.copy(init), state, root, document);
   root.replaceChild(r, root.firstChild);
}
function w3c$app$construct$Q4html4NodeqQ3AppQ3dom7ElementQ3dom8Document(node, state, root, document) {
   if(is$Q4html4NodeaQ4char(node))  {
      return document.createTextNode(js$util$from_string(Wy.copy(node)));
   } else  {
      let r = document.createElement(js$util$from_string(Wy.copy(node.name)));
      let i = 0;
      while(i < node.attributes.length)  {
         let attr = Wy.copy(node.attributes[i]);
         if(is$Q4html9Attributer2Q7tagName3keyQ5ascii6string5value(attr))  {
            r.setAttribute(js$util$from_string(Wy.copy(attr.key)), js$util$from_string(Wy.copy(attr.value)));
         } else  {
            if(is$u3r2Q7tagName5eventQ9iohandler7handlerr2Q7tagName10mouseEventQ9iohandler7handlerr2Q7tagName8keyEventQ9iohandler7handlerr2Q7tagName10mouseEventQ9iohandler7handler(attr))  {
               let key = js$util$from_string(Wy.copy(attr.mouseEvent));
               r.addEventListener(key, function(attr, state, root, document) {
                  return function(e) {
                     return w3c$app$mouseEvent$Q3dom10MouseEventf2Q4html10MouseEventv1T2v1TaQ4html2IOqQ3AppQ3dom7ElementQ3dom8Document(e, attr.handler, state, root, document);
                  };
               }(attr, state, root, document));
            } else  {
               if(is$u2r2Q7tagName5eventQ9iohandler7handlerr2Q7tagName8keyEventQ9iohandler7handlerr2Q7tagName8keyEventQ9iohandler7handler(attr))  {
                  let key = js$util$from_string(Wy.copy(attr.keyEvent));
                  r.addEventListener(key, function(attr, state, root, document) {
                     return function(e) {
                        return w3c$app$keyEvent$Q3dom13KeyboardEventQ4html9iohandlerqQ3AppQ3dom7ElementQ3dom8Document(e, attr.handler, state, root, document);
                     };
                  }(attr, state, root, document));
               } else  {
                  r.addEventListener(js$util$from_string(Wy.copy(attr.event)), function(attr, state, root, document) {
                     return function(e) {
                        return w3c$app$event$Q3dom5Eventf2Q4html5Eventv1T2v1TaQ4html2IOqQ3AppQ3dom7ElementQ3dom8Document(e, attr.handler, state, root, document);
                     };
                  }(attr, state, root, document));
               }
            }
         }
          {
            const $0 = i + 1;
            i = $0;
         }
      }
      i = 0;
      while(i < node.children.length)  {
         r.appendChild(w3c$app$construct$Q4html4NodeqQ3AppQ3dom7ElementQ3dom8Document(Wy.copy(node.children[i]), state, root, document));
          {
            const $1 = i + 1;
            i = $1;
         }
      }
      return r;
   }
}
function w3c$app$event$Q3dom5Eventf2Q4html5Eventv1T2v1TaQ4html2IOqQ3AppQ3dom7ElementQ3dom8Document(event, handler, state, root, document) {
   let io;
   let e = w3c$app$to_event$Q3dom5Event(event);
    {
      const $2 = handler(Wy.copy(e), state.$ref.model);
      state.$ref.model = $2[0];
      io = $2[1];
   }
   w3c$app$refresh$qQ3AppQ3dom7ElementQ3dom8Document(state, root, document);
   w3c$app$process$aQ4html2IOqQ3AppQ3dom7ElementQ3dom8Document(Wy.copy(io), state, root, document);
}
function w3c$app$mouseEvent$Q3dom10MouseEventf2Q4html10MouseEventv1T2v1TaQ4html2IOqQ3AppQ3dom7ElementQ3dom8Document(event, handler, state, root, document) {
   let io;
   let e = w3c$app$to_mouse_event$Q3dom10MouseEvent(event);
    {
      const $3 = handler(Wy.copy(e), state.$ref.model);
      state.$ref.model = $3[0];
      io = $3[1];
   }
   w3c$app$refresh$qQ3AppQ3dom7ElementQ3dom8Document(state, root, document);
   w3c$app$process$aQ4html2IOqQ3AppQ3dom7ElementQ3dom8Document(Wy.copy(io), state, root, document);
}
function w3c$app$keyEvent$Q3dom13KeyboardEventQ4html9iohandlerqQ3AppQ3dom7ElementQ3dom8Document(event, handler, state, root, document) {
   let io;
   let e = w3c$app$to_key_event$Q3dom13KeyboardEvent(event);
    {
      const $4 = handler(Wy.copy(e), state.$ref.model);
      state.$ref.model = $4[0];
      io = $4[1];
   }
   w3c$app$refresh$qQ3AppQ3dom7ElementQ3dom8Document(state, root, document);
   w3c$app$process$aQ4html2IOqQ3AppQ3dom7ElementQ3dom8Document(Wy.copy(io), state, root, document);
}
function w3c$app$to_event$Q3dom5Event(event) {
   return new Wy.Record({timeStamp: event.timeStamp});
}
function w3c$app$to_mouse_event$Q3dom10MouseEvent(event) {
   return new Wy.Record({altKey: event.altKey, button: event.button, buttons: event.buttons, clientX: event.clientX, clientY: event.clientY, ctrlKey: event.ctrlKey, metaKey: event.metaKey, movementX: event.movementX, movementY: event.movementY, offsetX: event.offsetX, offsetY: event.offsetY, pageX: event.pageX, pageY: event.pageY, region: event.region, screenX: event.screenX, screenY: event.screenY, shiftKey: event.shiftKey});
}
function w3c$app$to_key_event$Q3dom13KeyboardEvent(event) {
   return new Wy.Record({altKey: event.altKey, code: js$util$to_string(event.code), ctrlKey: event.ctrlKey, isComposing: event.isComposing, key: js$util$to_string(event.key), keyCode: event.keyCode, location: event.location, metaKey: event.metaKey, repeat: event.repeat, shiftKey: event.shiftKey});
}
function w3c$app$process$aQ4html2IOqQ3AppQ3dom7ElementQ3dom8Document(requests, state, root, document) {
   let i = 0;
   while(i < requests.length)  {
      w3c$app$process$Q4html2IOqQ3AppQ3dom7ElementQ3dom8Document(Wy.copy(requests[i]), state, root, document);
       {
         const $5 = i + 1;
         i = $5;
      }
   }
}
function w3c$app$process$Q4html2IOqQ3AppQ3dom7ElementQ3dom8Document(request, state, root, document) {
   if(is$Q4html2IOr3Q5ascii6string3urlf2v1Tu2NQ5ascii6string2v1TaQ2IO9okHandlerfv1T2v1TaQ2IO10errHandler(request))  {
      let url = js$util$from_string(Wy.copy(request.url));
      let mthd = js$util$from_string(Wy.toString("GET"));
      let h = function(request, state, root, document) {
         return function(s, r) {
            return w3c$app$get_handler$Iu2NQ9js_stringQ4html3GETqQ3AppQ3dom7ElementQ3dom8Document(s, r, Wy.copy(request), state, root, document);
         };
      }(request, state, root, document);
      w3c$ajax$makeHttpRequest(mthd, url, h);
   }
}
function w3c$app$get_handler$Iu2NQ9js_stringQ4html3GETqQ3AppQ3dom7ElementQ3dom8Document(status, body, request, state, root, document) {
   let io;
   if(status === 200)  {
       {
         const $6 = request.okHandler(state.$ref.model, w3c$app$str$u2NQ9js_string(body));
         state.$ref.model = $6[0];
         io = $6[1];
      }
   } else  {
       {
         const $7 = request.errHandler(state.$ref.model);
         state.$ref.model = $7[0];
         io = $7[1];
      }
   }
   w3c$app$refresh$qQ3AppQ3dom7ElementQ3dom8Document(state, root, document);
   w3c$app$process$aQ4html2IOqQ3AppQ3dom7ElementQ3dom8Document(Wy.copy(io), state, root, document);
}
function w3c$app$str$u2NQ9js_string(s) {
   if(s === null)  {
      return s;
   } else  {
      return js$util$to_string(s);
   }
}
const w3c$dom$ELEMENT_NODE$static = 1;
const w3c$dom$TEXT_NODE$static = 3;
const w3c$dom$CDATA_SECTION_NODE$static = 4;
const w3c$dom$PROCESSING_INSTRUCTION_NODE$static = 7;
const w3c$dom$COMMENT_NODE$static = 8;
const w3c$dom$DOCUMENT_NODE$static = 9;
const w3c$dom$DOCUMENT_TYPE_NODE$static = 10;
const w3c$dom$DOCUMENT_FRAGMENT_NODE$static = 11;
function w3c$dom$Document$type(n) {
   return n.nodeType === w3c$dom$DOCUMENT_NODE$static;
}
function w3c$dom$Text$type(n) {
   return n.nodeType === w3c$dom$TEXT_NODE$static;
}
function w3c$html$is_letter$Q5ascii4char(c) {
   return ((97 <= c) && (c <= 122)) || ((65 <= c) && (c <= 90));
}
function w3c$html$is_digit$Q5ascii4char(c) {
   return (48 <= c) && (c <= 57);
}
function w3c$html$tagChar$type(x) {
   return w3c$html$is_letter$Q5ascii4char(x) || w3c$html$is_digit$Q5ascii4char(x);
}
function w3c$html$class$Q5ascii6string(text) {
   return new Wy.Record({key: Wy.toString("class"), value: Wy.copy(text)});
}
function w3c$html$disabled() {
   return new Wy.Record({key: Wy.toString("disabled"), value: Wy.toString("")});
}
function w3c$html$id$Q5ascii6string(text) {
   return new Wy.Record({key: Wy.toString("id"), value: Wy.copy(text)});
}
function w3c$html$name$Q5ascii6string(text) {
   return new Wy.Record({key: Wy.toString("name"), value: Wy.copy(text)});
}
function w3c$html$style$Q5ascii6string(text) {
   return new Wy.Record({key: Wy.toString("style"), value: Wy.copy(text)});
}
function w3c$html$tabindex$I(index) {
   return new Wy.Record({key: Wy.toString("tabindex"), value: std$ascii$to_string$I(index)});
}
function w3c$html$io_adaptor$v1T(t) {
   let io;
   let to;
   return [Wy.copy(t), [null]];
}
function w3c$html$change$Q9iohandler(handler) {
   return new Wy.Record({mouseEvent: Wy.toString("change"), handler: handler});
}
function w3c$html$click$Q7handler(handler) {
   let ioh = function(handler) {
      return function(e, s) {
         return w3c$html$io_adaptor$v1T(handler(Wy.copy(e), Wy.copy(s)));
      };
   }(handler);
   return new Wy.Record({mouseEvent: Wy.toString("click"), handler: ioh});
}
function w3c$html$click$Q9iohandler(handler) {
   return new Wy.Record({mouseEvent: Wy.toString("click"), handler: handler});
}
function w3c$html$dblclick$Q7handler(handler) {
   let ioh = function(handler) {
      return function(e, s) {
         return w3c$html$io_adaptor$v1T(handler(Wy.copy(e), Wy.copy(s)));
      };
   }(handler);
   return new Wy.Record({mouseEvent: Wy.toString("dblclick"), handler: ioh});
}
function w3c$html$dblclick$Q9iohandler(handler) {
   return new Wy.Record({mouseEvent: Wy.toString("dblclick"), handler: handler});
}
function w3c$html$focus$Q9iohandler(handler) {
   return new Wy.Record({event: Wy.toString("focus"), handler: handler});
}
function w3c$html$keydown$Q9iohandler(handler) {
   return new Wy.Record({keyEvent: Wy.toString("keydown"), handler: handler});
}
function w3c$html$keypress$Q9iohandler(handler) {
   return new Wy.Record({keyEvent: Wy.toString("keypress"), handler: handler});
}
function w3c$html$keyup$Q9iohandler(handler) {
   return new Wy.Record({keyEvent: Wy.toString("keyup"), handler: handler});
}
function w3c$html$mousedown$Q9iohandler(handler) {
   return new Wy.Record({mouseEvent: Wy.toString("mousedown"), handler: handler});
}
function w3c$html$mousemove$Q9iohandler(handler) {
   return new Wy.Record({mouseEvent: Wy.toString("mousemove"), handler: handler});
}
function w3c$html$mouseover$Q9iohandler(handler) {
   return new Wy.Record({mouseEvent: Wy.toString("mouseover"), handler: handler});
}
function w3c$html$element$Q5ascii6stringQ4Node(tag, child) {
   return w3c$html$element$Q5ascii6stringaQ9AttributeaQ4Node(Wy.copy(tag), Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$element$Q5ascii6stringaQ4Node(tag, children) {
   return w3c$html$element$Q5ascii6stringaQ9AttributeaQ4Node(Wy.copy(tag), Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$element$Q5ascii6stringaQ9AttributeQ4Node(tag, attributes, child) {
   return w3c$html$element$Q5ascii6stringaQ9AttributeaQ4Node(Wy.copy(tag), Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$element$Q5ascii6stringaQ9AttributeaQ4Node(tag, attributes, children) {
   return new Wy.Record({name: Wy.copy(tag), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$h1$Q4Node(child) {
   return w3c$html$h1$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$h1$aQ4Node(children) {
   return w3c$html$h1$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$h1$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$h1$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$h1$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("h1"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$h2$Q4Node(child) {
   return w3c$html$h2$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$h2$aQ4Node(children) {
   return w3c$html$h2$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$h2$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$h2$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$h2$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("h2"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$h3$Q4Node(child) {
   return w3c$html$h3$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$h3$aQ4Node(children) {
   return w3c$html$h3$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$h3$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$h3$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$h3$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("h3"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$h4$Q4Node(child) {
   return w3c$html$h4$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$h4$aQ4Node(children) {
   return w3c$html$h4$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$h4$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$h4$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$h4$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("h4"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$h5$Q4Node(child) {
   return w3c$html$h5$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$h5$aQ4Node(children) {
   return w3c$html$h5$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$h5$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$h5$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$h5$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("h5"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$h6$Q4Node(child) {
   return w3c$html$h6$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$h6$aQ4Node(children) {
   return w3c$html$h6$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$h6$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$h6$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$h6$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("h6"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$p$Q4Node(child) {
   return w3c$html$p$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$p$aQ4Node(children) {
   return w3c$html$p$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$p$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$p$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$p$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("p"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$br() {
   return w3c$html$br$aQ9Attribute(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0));
}
function w3c$html$br$aQ9Attribute(attributes) {
   return new Wy.Record({name: Wy.toString("br"), attributes: Wy.copy(attributes), children: Wy.array(Wy.toString(""), 0)});
}
function w3c$html$hr() {
   return w3c$html$hr$aQ9Attribute(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0));
}
function w3c$html$hr$aQ9Attribute(attributes) {
   return new Wy.Record({name: Wy.toString("hr"), attributes: Wy.copy(attributes), children: Wy.array(Wy.toString(""), 0)});
}
function w3c$html$abbr$Q4Node(child) {
   return w3c$html$abbr$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$abbr$aQ4Node(children) {
   return w3c$html$abbr$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$abbr$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$abbr$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$abbr$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("abbr"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$address$Q4Node(child) {
   return w3c$html$address$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$address$aQ4Node(children) {
   return w3c$html$address$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$address$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$address$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$address$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("address"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$b$Q4Node(child) {
   return w3c$html$b$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$b$aQ4Node(children) {
   return w3c$html$b$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$b$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$b$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$b$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("b"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$blockquote$Q4Node(child) {
   return w3c$html$blockquote$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$blockquote$aQ4Node(children) {
   return w3c$html$blockquote$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$blockquote$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$blockquote$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$blockquote$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("blockquote"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$center$Q4Node(child) {
   return w3c$html$center$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$center$aQ4Node(children) {
   return w3c$html$center$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$center$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$center$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$center$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("center"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$cite$Q4Node(child) {
   return w3c$html$cite$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$cite$aQ4Node(children) {
   return w3c$html$cite$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$cite$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$cite$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$cite$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("cite"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$code$Q4Node(child) {
   return w3c$html$code$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$code$aQ4Node(children) {
   return w3c$html$code$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$code$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$code$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$code$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("code"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$em$Q4Node(child) {
   return w3c$html$em$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$em$aQ4Node(children) {
   return w3c$html$em$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$em$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$em$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$em$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("em"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$font$Q4Node(child) {
   return w3c$html$font$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$font$aQ4Node(children) {
   return w3c$html$font$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$font$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$font$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$font$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("font"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$i$Q4Node(child) {
   return w3c$html$i$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$i$aQ4Node(children) {
   return w3c$html$i$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$i$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$i$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$i$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("i"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$pre$Q4Node(child) {
   return w3c$html$pre$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$pre$aQ4Node(children) {
   return w3c$html$pre$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$pre$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$pre$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$pre$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("pre"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$q$Q4Node(child) {
   return w3c$html$q$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$q$aQ4Node(children) {
   return w3c$html$q$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$q$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$q$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$q$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("q"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$s$Q4Node(child) {
   return w3c$html$s$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$s$aQ4Node(children) {
   return w3c$html$s$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$s$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$s$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$s$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("s"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$small$Q4Node(child) {
   return w3c$html$small$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$small$aQ4Node(children) {
   return w3c$html$small$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$small$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$small$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$small$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("small"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$strike$Q4Node(child) {
   return w3c$html$strike$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$strike$aQ4Node(children) {
   return w3c$html$strike$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$strike$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$strike$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$strike$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("strike"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$strong$Q4Node(child) {
   return w3c$html$strong$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$strong$aQ4Node(children) {
   return w3c$html$strong$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$strong$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$strong$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$strong$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("strong"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$sub$Q4Node(child) {
   return w3c$html$sub$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$sub$aQ4Node(children) {
   return w3c$html$sub$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$sub$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$sub$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$sub$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("sub"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$sup$Q4Node(child) {
   return w3c$html$sup$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$sup$aQ4Node(children) {
   return w3c$html$sup$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$sup$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$sup$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$sup$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("sup"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$u$Q4Node(child) {
   return w3c$html$u$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$u$aQ4Node(children) {
   return w3c$html$u$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$u$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$u$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$u$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("u"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$form$Q4Node(child) {
   return w3c$html$form$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$form$aQ4Node(children) {
   return w3c$html$form$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$form$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$form$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$form$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("form"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$input$Q4Node(child) {
   return w3c$html$input$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$input$aQ4Node(children) {
   return w3c$html$input$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$input$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$input$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$input$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("input"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$textarea$Q4Node(child) {
   return w3c$html$textarea$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$textarea$aQ4Node(children) {
   return w3c$html$textarea$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$textarea$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$textarea$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$textarea$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("textarea"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$button$Q4Node(child) {
   return w3c$html$button$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$button$aQ4Node(children) {
   return w3c$html$button$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$button$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$button$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$button$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("button"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$select$Q4Node(child) {
   return w3c$html$select$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$select$aQ4Node(children) {
   return w3c$html$select$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$select$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$select$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$select$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("select"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$optgroup$Q4Node(child) {
   return w3c$html$optgroup$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$optgroup$aQ4Node(children) {
   return w3c$html$optgroup$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$optgroup$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$optgroup$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$optgroup$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("optgroup"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$option$Q4Node(child) {
   return w3c$html$option$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$option$aQ4Node(children) {
   return w3c$html$option$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$option$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$option$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$option$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("option"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$label$Q4Node(child) {
   return w3c$html$label$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$label$aQ4Node(children) {
   return w3c$html$label$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$label$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$label$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$label$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("label"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$fieldset$Q4Node(child) {
   return w3c$html$fieldset$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$fieldset$aQ4Node(children) {
   return w3c$html$fieldset$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$fieldset$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$fieldset$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$fieldset$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("fieldset"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$legend$Q4Node(child) {
   return w3c$html$legend$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$legend$aQ4Node(children) {
   return w3c$html$legend$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$legend$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$legend$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$legend$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("legend"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$datalist$Q4Node(child) {
   return w3c$html$datalist$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$datalist$aQ4Node(children) {
   return w3c$html$datalist$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$datalist$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$datalist$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$datalist$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("datalist"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$output$Q4Node(child) {
   return w3c$html$output$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$output$aQ4Node(children) {
   return w3c$html$output$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$output$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$output$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$output$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("output"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$iframe$Q4Node(child) {
   return w3c$html$iframe$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$iframe$aQ4Node(children) {
   return w3c$html$iframe$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$iframe$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$iframe$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$iframe$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("iframe"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$img$Q4Node(child) {
   return w3c$html$img$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$img$aQ4Node(children) {
   return w3c$html$img$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$img$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$img$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$img$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("img"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$map$Q4Node(child) {
   return w3c$html$map$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$map$aQ4Node(children) {
   return w3c$html$map$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$map$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$map$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$map$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("map"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$area$Q4Node(child) {
   return w3c$html$area$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$area$aQ4Node(children) {
   return w3c$html$area$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$area$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$area$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$area$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("area"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$canvas$Q4Node(child) {
   return w3c$html$canvas$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$canvas$aQ4Node(children) {
   return w3c$html$canvas$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$canvas$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$canvas$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$canvas$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("canvas"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$figcaption$Q4Node(child) {
   return w3c$html$figcaption$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$figcaption$aQ4Node(children) {
   return w3c$html$figcaption$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$figcaption$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$figcaption$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$figcaption$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("figcaption"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$figure$Q4Node(child) {
   return w3c$html$figure$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$figure$aQ4Node(children) {
   return w3c$html$figure$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$figure$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$figure$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$figure$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("figure"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$picture$Q4Node(child) {
   return w3c$html$picture$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$picture$aQ4Node(children) {
   return w3c$html$picture$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$picture$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$picture$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$picture$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("picture"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$svg$Q4Node(child) {
   return w3c$html$svg$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$svg$aQ4Node(children) {
   return w3c$html$svg$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$svg$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$svg$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$svg$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("svg"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$a$Q4Node(child) {
   return w3c$html$a$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$a$aQ4Node(children) {
   return w3c$html$a$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$a$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$a$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$a$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("a"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$link$Q4Node(child) {
   return w3c$html$link$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$link$aQ4Node(children) {
   return w3c$html$link$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$link$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$link$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$link$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("link"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$nav$Q4Node(child) {
   return w3c$html$nav$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$nav$aQ4Node(children) {
   return w3c$html$nav$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$nav$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$nav$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$nav$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("nav"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$ul$Q4Node(child) {
   return w3c$html$ul$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$ul$aQ4Node(children) {
   return w3c$html$ul$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$ul$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$ul$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$ul$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("ul"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$ol$Q4Node(child) {
   return w3c$html$ol$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$ol$aQ4Node(children) {
   return w3c$html$ol$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$ol$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$ol$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$ol$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("ol"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$li$Q4Node(child) {
   return w3c$html$li$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$li$aQ4Node(children) {
   return w3c$html$li$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$li$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$li$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$li$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("li"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$dl$Q4Node(child) {
   return w3c$html$dl$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$dl$aQ4Node(children) {
   return w3c$html$dl$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$dl$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$dl$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$dl$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("dl"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$dtr$Q4Node(child) {
   return w3c$html$dtr$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$dtr$aQ4Node(children) {
   return w3c$html$dtr$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$dtr$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$dtr$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$dtr$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("dtr"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$dd$Q4Node(child) {
   return w3c$html$dd$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$dd$aQ4Node(children) {
   return w3c$html$dd$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$dd$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$dd$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$dd$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("dd"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$table$Q4Node(child) {
   return w3c$html$table$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$table$aQ4Node(children) {
   return w3c$html$table$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$table$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$table$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$table$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("table"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$caption$Q4Node(child) {
   return w3c$html$caption$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$caption$aQ4Node(children) {
   return w3c$html$caption$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$caption$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$caption$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$caption$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("caption"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$th$Q4Node(child) {
   return w3c$html$th$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$th$aQ4Node(children) {
   return w3c$html$th$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$th$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$th$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$th$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("th"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$tr$Q4Node(child) {
   return w3c$html$tr$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$tr$aQ4Node(children) {
   return w3c$html$tr$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$tr$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$tr$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$tr$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("tr"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$td$Q4Node(child) {
   return w3c$html$td$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$td$aQ4Node(children) {
   return w3c$html$td$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$td$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$td$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$td$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("td"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$thead$Q4Node(child) {
   return w3c$html$thead$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$thead$aQ4Node(children) {
   return w3c$html$thead$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$thead$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$thead$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$thead$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("thead"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$tbody$Q4Node(child) {
   return w3c$html$tbody$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$tbody$aQ4Node(children) {
   return w3c$html$tbody$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$tbody$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$tbody$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$tbody$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("tbody"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$tfoot$Q4Node(child) {
   return w3c$html$tfoot$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$tfoot$aQ4Node(children) {
   return w3c$html$tfoot$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$tfoot$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$tfoot$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$tfoot$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("tfoot"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$col$Q4Node(child) {
   return w3c$html$col$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$col$aQ4Node(children) {
   return w3c$html$col$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$col$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$col$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$col$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("col"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$colgroup$Q4Node(child) {
   return w3c$html$colgroup$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$colgroup$aQ4Node(children) {
   return w3c$html$colgroup$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$colgroup$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$colgroup$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$colgroup$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("colgroup"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$div$Q4Node(child) {
   return w3c$html$div$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$div$aQ4Node(children) {
   return w3c$html$div$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$div$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$div$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$div$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("div"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$span$Q4Node(child) {
   return w3c$html$span$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$span$aQ4Node(children) {
   return w3c$html$span$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$span$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$span$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$span$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("span"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$header$Q4Node(child) {
   return w3c$html$header$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$header$aQ4Node(children) {
   return w3c$html$header$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$header$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$header$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$header$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("header"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$footer$Q4Node(child) {
   return w3c$html$footer$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$footer$aQ4Node(children) {
   return w3c$html$footer$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$footer$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$footer$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$footer$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("footer"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$main$Q4Node(child) {
   return w3c$html$main$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$main$aQ4Node(children) {
   return w3c$html$main$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$main$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$main$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$main$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("main"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$section$Q4Node(child) {
   return w3c$html$section$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$section$aQ4Node(children) {
   return w3c$html$section$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$section$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$section$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$section$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("section"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$article$Q4Node(child) {
   return w3c$html$article$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$article$aQ4Node(children) {
   return w3c$html$article$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$article$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$article$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$article$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("article"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$aside$Q4Node(child) {
   return w3c$html$aside$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$aside$aQ4Node(children) {
   return w3c$html$aside$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$aside$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$aside$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$aside$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("aside"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$details$Q4Node(child) {
   return w3c$html$details$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$details$aQ4Node(children) {
   return w3c$html$details$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$details$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$details$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$details$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("details"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$dialog$Q4Node(child) {
   return w3c$html$dialog$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$dialog$aQ4Node(children) {
   return w3c$html$dialog$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$dialog$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$dialog$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$dialog$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("dialog"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function w3c$html$summary$Q4Node(child) {
   return w3c$html$summary$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), [Wy.copy(child)]);
}
function w3c$html$summary$aQ4Node(children) {
   return w3c$html$summary$aQ9AttributeaQ4Node(Wy.array(w3c$html$id$Q5ascii6string(Wy.toString("")), 0), Wy.copy(children));
}
function w3c$html$summary$aQ9AttributeQ4Node(attributes, child) {
   return w3c$html$summary$aQ9AttributeaQ4Node(Wy.copy(attributes), [Wy.copy(child)]);
}
function w3c$html$summary$aQ9AttributeaQ4Node(attributes, children) {
   return new Wy.Record({name: Wy.toString("summary"), attributes: Wy.copy(attributes), children: Wy.copy(children)});
}
function is$u2r2Q7tagName5eventQ9iohandler7handlerr2Q7tagName8keyEventQ9iohandler7handlerr2Q7tagName8keyEventQ9iohandler7handler(v) {
   if(((typeof v.keyEvent) === "undefined") || (!is$u1Q7tagNameaQ7tagChar(v.keyEvent)))  {
      return false;
   } else if(((typeof v.handler) === "undefined") || (!is$u2Q9iohandlerQ9iohandlerf2Q13KeyboardEventv1T2v1TaQ2IO(v.handler)))  {
      return false;
   }
   return true;
}
function is$Q4html2IOr3Q5ascii6string3urlf2v1Tu2NQ5ascii6string2v1TaQ2IO9okHandlerfv1T2v1TaQ2IO10errHandler(v) {
   return (v !== null) && (Object.keys(v).length === 3);
}
function is$u3r2Q7tagName5eventQ9iohandler7handlerr2Q7tagName10mouseEventQ9iohandler7handlerr2Q7tagName8keyEventQ9iohandler7handlerr2Q7tagName10mouseEventQ9iohandler7handler(v) {
   if(((typeof v.mouseEvent) === "undefined") || (!is$u1Q7tagNameaQ7tagChar(v.mouseEvent)))  {
      return false;
   } else if(((typeof v.handler) === "undefined") || (!is$u3Q9iohandlerQ9iohandlerQ9iohandlerf2Q10MouseEventv1T2v1TaQ2IO(v.handler)))  {
      return false;
   }
   return true;
}
function is$Q4html9Attributer2Q7tagName3keyQ5ascii6string5value(v) {
   if(((typeof v.key) === "undefined") || (!is$u1Q7tagNameaQ7tagChar(v.key)))  {
      return false;
   } else if(((typeof v.value) === "undefined") || (!is$u1Q5ascii6stringaQ4char(v.value)))  {
      return false;
   }
   return true;
}
function is$Q4html4NodeaQ4char(v) {
   return v.constructor === Array;
}
function is$u1Q7tagNameaQ7tagChar(v) {
   return true;
}
function is$u2Q9iohandlerQ9iohandlerf2Q13KeyboardEventv1T2v1TaQ2IO(v) {
   return true;
}
function is$u3Q9iohandlerQ9iohandlerQ9iohandlerf2Q10MouseEventv1T2v1TaQ2IO(v) {
   return true;
}
function is$u1Q5ascii6stringaQ4char(v) {
   return true;
}
/**
 * Perform an HTTP request to a given URL.  Upon receipt of a
 * response, the handler is notified.
 */
function w3c$ajax$makeHttpRequest(method, url,handler) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4) {
	    handler(this.status,this.responseText);
	}
    };
    xhttp.open(method, url, true);
    xhttp.send();
}
function w3c$dom$alert(message) {
    alert(js$util$from_string(message));
}
