/*! For license information please see 115.node-web-audio.js.LICENSE.txt */
(exports.id = 115),
  (exports.ids = [115]),
  (exports.modules = {
    5157: (e, t, r) => {
      if (!globalThis.DOMException)
        try {
          const { MessageChannel: e } = r(8167),
            t = new e().port1,
            o = new ArrayBuffer();
          t.postMessage(o, [o, o]);
        } catch (e) {
          "DOMException" === e.constructor.name &&
            (globalThis.DOMException = e.constructor);
        }
      e.exports = globalThis.DOMException;
    },
    5010: function (e, t) {
      var r;
      (r = function (e) {
        "use strict";
        function t() {}
        function r(e) {
          return ("object" == typeof e && null !== e) || "function" == typeof e;
        }
        const o = t;
        function n(e, t) {
          try {
            Object.defineProperty(e, "name", { value: t, configurable: !0 });
          } catch (e) {}
        }
        const i = Promise,
          s = Promise.prototype.then,
          a = Promise.reject.bind(i);
        function l(e) {
          return new i(e);
        }
        function u(e) {
          return l((t) => t(e));
        }
        function c(e) {
          return a(e);
        }
        function d(e, t, r) {
          return s.call(e, t, r);
        }
        function f(e, t, r) {
          d(d(e, t, r), void 0, o);
        }
        function h(e, t) {
          f(e, t);
        }
        function p(e, t) {
          f(e, void 0, t);
        }
        function b(e, t, r) {
          return d(e, t, r);
        }
        function y(e) {
          d(e, void 0, o);
        }
        let m = (e) => {
          if ("function" == typeof queueMicrotask) m = queueMicrotask;
          else {
            const e = u(void 0);
            m = (t) => d(e, t);
          }
          return m(e);
        };
        function _(e, t, r) {
          if ("function" != typeof e)
            throw new TypeError("Argument is not a function");
          return Function.prototype.apply.call(e, t, r);
        }
        function g(e, t, r) {
          try {
            return u(_(e, t, r));
          } catch (e) {
            return c(e);
          }
        }
        class w {
          constructor() {
            (this._cursor = 0),
              (this._size = 0),
              (this._front = { _elements: [], _next: void 0 }),
              (this._back = this._front),
              (this._cursor = 0),
              (this._size = 0);
          }
          get length() {
            return this._size;
          }
          push(e) {
            const t = this._back;
            let r = t;
            16383 === t._elements.length &&
              (r = { _elements: [], _next: void 0 }),
              t._elements.push(e),
              r !== t && ((this._back = r), (t._next = r)),
              ++this._size;
          }
          shift() {
            const e = this._front;
            let t = e;
            const r = this._cursor;
            let o = r + 1;
            const n = e._elements,
              i = n[r];
            return (
              16384 === o && ((t = e._next), (o = 0)),
              --this._size,
              (this._cursor = o),
              e !== t && (this._front = t),
              (n[r] = void 0),
              i
            );
          }
          forEach(e) {
            let t = this._cursor,
              r = this._front,
              o = r._elements;
            for (
              ;
              !(
                (t === o.length && void 0 === r._next) ||
                (t === o.length &&
                  ((r = r._next), (o = r._elements), (t = 0), 0 === o.length))
              );

            )
              e(o[t]), ++t;
          }
          peek() {
            const e = this._front,
              t = this._cursor;
            return e._elements[t];
          }
        }
        const v = Symbol("[[AbortSteps]]"),
          S = Symbol("[[ErrorSteps]]"),
          T = Symbol("[[CancelSteps]]"),
          R = Symbol("[[PullSteps]]"),
          P = Symbol("[[ReleaseSteps]]");
        function E(e, t) {
          (e._ownerReadableStream = t),
            (t._reader = e),
            "readable" === t._state
              ? k(e)
              : "closed" === t._state
              ? (function (e) {
                  k(e), B(e);
                })(e)
              : O(e, t._storedError);
        }
        function C(e, t) {
          return zr(e._ownerReadableStream, t);
        }
        function q(e) {
          const t = e._ownerReadableStream;
          "readable" === t._state
            ? j(
                e,
                new TypeError(
                  "Reader was released and can no longer be used to monitor the stream's closedness"
                )
              )
            : (function (e, t) {
                O(
                  e,
                  new TypeError(
                    "Reader was released and can no longer be used to monitor the stream's closedness"
                  )
                );
              })(e),
            t._readableStreamController[P](),
            (t._reader = void 0),
            (e._ownerReadableStream = void 0);
        }
        function A(e) {
          return new TypeError(
            "Cannot " + e + " a stream using a released reader"
          );
        }
        function k(e) {
          e._closedPromise = l((t, r) => {
            (e._closedPromise_resolve = t), (e._closedPromise_reject = r);
          });
        }
        function O(e, t) {
          k(e), j(e, t);
        }
        function j(e, t) {
          void 0 !== e._closedPromise_reject &&
            (y(e._closedPromise),
            e._closedPromise_reject(t),
            (e._closedPromise_resolve = void 0),
            (e._closedPromise_reject = void 0));
        }
        function B(e) {
          void 0 !== e._closedPromise_resolve &&
            (e._closedPromise_resolve(void 0),
            (e._closedPromise_resolve = void 0),
            (e._closedPromise_reject = void 0));
        }
        const z =
            Number.isFinite ||
            function (e) {
              return "number" == typeof e && isFinite(e);
            },
          L =
            Math.trunc ||
            function (e) {
              return e < 0 ? Math.ceil(e) : Math.floor(e);
            };
        function W(e, t) {
          if (
            void 0 !== e &&
            "object" != typeof (r = e) &&
            "function" != typeof r
          )
            throw new TypeError(`${t} is not an object.`);
          var r;
        }
        function $(e, t) {
          if ("function" != typeof e)
            throw new TypeError(`${t} is not a function.`);
        }
        function F(e, t) {
          if (
            !(function (e) {
              return (
                ("object" == typeof e && null !== e) || "function" == typeof e
              );
            })(e)
          )
            throw new TypeError(`${t} is not an object.`);
        }
        function M(e, t, r) {
          if (void 0 === e)
            throw new TypeError(`Parameter ${t} is required in '${r}'.`);
        }
        function I(e, t, r) {
          if (void 0 === e) throw new TypeError(`${t} is required in '${r}'.`);
        }
        function x(e) {
          return Number(e);
        }
        function U(e) {
          return 0 === e ? 0 : e;
        }
        function D(e, t) {
          const r = Number.MAX_SAFE_INTEGER;
          let o = Number(e);
          if (((o = U(o)), !z(o)))
            throw new TypeError(`${t} is not a finite number`);
          if (
            ((o = (function (e) {
              return U(L(e));
            })(o)),
            o < 0 || o > r)
          )
            throw new TypeError(
              `${t} is outside the accepted range of 0 to ${r}, inclusive`
            );
          return z(o) && 0 !== o ? o : 0;
        }
        function N(e, t) {
          if (!jr(e)) throw new TypeError(`${t} is not a ReadableStream.`);
        }
        function H(e) {
          return new Z(e);
        }
        function V(e, t) {
          e._reader._readRequests.push(t);
        }
        function Y(e, t, r) {
          const o = e._reader._readRequests.shift();
          r ? o._closeSteps() : o._chunkSteps(t);
        }
        function Q(e) {
          return e._reader._readRequests.length;
        }
        function G(e) {
          const t = e._reader;
          return void 0 !== t && !!J(t);
        }
        class Z {
          constructor(e) {
            if (
              (M(e, 1, "ReadableStreamDefaultReader"),
              N(e, "First parameter"),
              Br(e))
            )
              throw new TypeError(
                "This stream has already been locked for exclusive reading by another reader"
              );
            E(this, e), (this._readRequests = new w());
          }
          get closed() {
            return J(this) ? this._closedPromise : c(ee("closed"));
          }
          cancel(e = void 0) {
            return J(this)
              ? void 0 === this._ownerReadableStream
                ? c(A("cancel"))
                : C(this, e)
              : c(ee("cancel"));
          }
          read() {
            if (!J(this)) return c(ee("read"));
            if (void 0 === this._ownerReadableStream) return c(A("read from"));
            let e, t;
            const r = l((r, o) => {
              (e = r), (t = o);
            });
            return (
              K(this, {
                _chunkSteps: (t) => e({ value: t, done: !1 }),
                _closeSteps: () => e({ value: void 0, done: !0 }),
                _errorSteps: (e) => t(e),
              }),
              r
            );
          }
          releaseLock() {
            if (!J(this)) throw ee("releaseLock");
            void 0 !== this._ownerReadableStream &&
              (function (e) {
                q(e);
                X(e, new TypeError("Reader was released"));
              })(this);
          }
        }
        function J(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(e, "_readRequests") &&
            e instanceof Z
          );
        }
        function K(e, t) {
          const r = e._ownerReadableStream;
          (r._disturbed = !0),
            "closed" === r._state
              ? t._closeSteps()
              : "errored" === r._state
              ? t._errorSteps(r._storedError)
              : r._readableStreamController[R](t);
        }
        function X(e, t) {
          const r = e._readRequests;
          (e._readRequests = new w()),
            r.forEach((e) => {
              e._errorSteps(t);
            });
        }
        function ee(e) {
          return new TypeError(
            `ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`
          );
        }
        Object.defineProperties(Z.prototype, {
          cancel: { enumerable: !0 },
          read: { enumerable: !0 },
          releaseLock: { enumerable: !0 },
          closed: { enumerable: !0 },
        }),
          n(Z.prototype.cancel, "cancel"),
          n(Z.prototype.read, "read"),
          n(Z.prototype.releaseLock, "releaseLock"),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(Z.prototype, Symbol.toStringTag, {
              value: "ReadableStreamDefaultReader",
              configurable: !0,
            });
        const te = Object.getPrototypeOf(
          Object.getPrototypeOf(async function* () {}).prototype
        );
        class re {
          constructor(e, t) {
            (this._ongoingPromise = void 0),
              (this._isFinished = !1),
              (this._reader = e),
              (this._preventCancel = t);
          }
          next() {
            const e = () => this._nextSteps();
            return (
              (this._ongoingPromise = this._ongoingPromise
                ? b(this._ongoingPromise, e, e)
                : e()),
              this._ongoingPromise
            );
          }
          return(e) {
            const t = () => this._returnSteps(e);
            return this._ongoingPromise ? b(this._ongoingPromise, t, t) : t();
          }
          _nextSteps() {
            if (this._isFinished)
              return Promise.resolve({ value: void 0, done: !0 });
            const e = this._reader;
            let t, r;
            const o = l((e, o) => {
              (t = e), (r = o);
            });
            return (
              K(e, {
                _chunkSteps: (e) => {
                  (this._ongoingPromise = void 0),
                    m(() => t({ value: e, done: !1 }));
                },
                _closeSteps: () => {
                  (this._ongoingPromise = void 0),
                    (this._isFinished = !0),
                    q(e),
                    t({ value: void 0, done: !0 });
                },
                _errorSteps: (t) => {
                  (this._ongoingPromise = void 0),
                    (this._isFinished = !0),
                    q(e),
                    r(t);
                },
              }),
              o
            );
          }
          _returnSteps(e) {
            if (this._isFinished)
              return Promise.resolve({ value: e, done: !0 });
            this._isFinished = !0;
            const t = this._reader;
            if (!this._preventCancel) {
              const r = C(t, e);
              return q(t), b(r, () => ({ value: e, done: !0 }));
            }
            return q(t), u({ value: e, done: !0 });
          }
        }
        const oe = {
          next() {
            return ne(this) ? this._asyncIteratorImpl.next() : c(ie("next"));
          },
          return(e) {
            return ne(this)
              ? this._asyncIteratorImpl.return(e)
              : c(ie("return"));
          },
        };
        function ne(e) {
          if (!r(e)) return !1;
          if (!Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl"))
            return !1;
          try {
            return e._asyncIteratorImpl instanceof re;
          } catch (e) {
            return !1;
          }
        }
        function ie(e) {
          return new TypeError(
            `ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`
          );
        }
        Object.setPrototypeOf(oe, te);
        const se =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
        var ae, le, ue;
        function ce(e) {
          return e.slice();
        }
        function de(e, t, r, o, n) {
          new Uint8Array(e).set(new Uint8Array(r, o, n), t);
        }
        let fe = (e) => (
            (fe =
              "function" == typeof e.transfer
                ? (e) => e.transfer()
                : "function" == typeof structuredClone
                ? (e) => structuredClone(e, { transfer: [e] })
                : (e) => e),
            fe(e)
          ),
          he = (e) => (
            (he =
              "boolean" == typeof e.detached
                ? (e) => e.detached
                : (e) => 0 === e.byteLength),
            he(e)
          );
        function pe(e, t, r) {
          if (e.slice) return e.slice(t, r);
          const o = r - t,
            n = new ArrayBuffer(o);
          return de(n, 0, e, t, o), n;
        }
        function be(e, t) {
          const r = e[t];
          if (null != r) {
            if ("function" != typeof r)
              throw new TypeError(`${String(t)} is not a function`);
            return r;
          }
        }
        const ye =
          null !==
            (ue =
              null !== (ae = Symbol.asyncIterator) && void 0 !== ae
                ? ae
                : null === (le = Symbol.for) || void 0 === le
                ? void 0
                : le.call(Symbol, "Symbol.asyncIterator")) && void 0 !== ue
            ? ue
            : "@@asyncIterator";
        function me(e, t = "sync", o) {
          if (void 0 === o)
            if ("async" === t) {
              if (void 0 === (o = be(e, ye)))
                return (function (e) {
                  const t = { [Symbol.iterator]: () => e.iterator },
                    r = (async function* () {
                      return yield* t;
                    })();
                  return { iterator: r, nextMethod: r.next, done: !1 };
                })(me(e, "sync", be(e, Symbol.iterator)));
            } else o = be(e, Symbol.iterator);
          if (void 0 === o) throw new TypeError("The object is not iterable");
          const n = _(o, e, []);
          if (!r(n))
            throw new TypeError("The iterator method must return an object");
          return { iterator: n, nextMethod: n.next, done: !1 };
        }
        function _e(e) {
          const t = pe(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
          return new Uint8Array(t);
        }
        function ge(e) {
          const t = e._queue.shift();
          return (
            (e._queueTotalSize -= t.size),
            e._queueTotalSize < 0 && (e._queueTotalSize = 0),
            t.value
          );
        }
        function we(e, t, r) {
          if ("number" != typeof (o = r) || se(o) || o < 0 || r === 1 / 0)
            throw new RangeError(
              "Size must be a finite, non-NaN, non-negative number."
            );
          var o;
          e._queue.push({ value: t, size: r }), (e._queueTotalSize += r);
        }
        function ve(e) {
          (e._queue = new w()), (e._queueTotalSize = 0);
        }
        function Se(e) {
          return e === DataView;
        }
        class Te {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get view() {
            if (!Ee(this)) throw Je("view");
            return this._view;
          }
          respond(e) {
            if (!Ee(this)) throw Je("respond");
            if (
              (M(e, 1, "respond"),
              (e = D(e, "First parameter")),
              void 0 === this._associatedReadableByteStreamController)
            )
              throw new TypeError("This BYOB request has been invalidated");
            if (he(this._view.buffer))
              throw new TypeError(
                "The BYOB request's buffer has been detached and so cannot be used as a response"
              );
            Qe(this._associatedReadableByteStreamController, e);
          }
          respondWithNewView(e) {
            if (!Ee(this)) throw Je("respondWithNewView");
            if ((M(e, 1, "respondWithNewView"), !ArrayBuffer.isView(e)))
              throw new TypeError(
                "You can only respond with array buffer views"
              );
            if (void 0 === this._associatedReadableByteStreamController)
              throw new TypeError("This BYOB request has been invalidated");
            if (he(e.buffer))
              throw new TypeError(
                "The given view's buffer has been detached and so cannot be used as a response"
              );
            Ge(this._associatedReadableByteStreamController, e);
          }
        }
        Object.defineProperties(Te.prototype, {
          respond: { enumerable: !0 },
          respondWithNewView: { enumerable: !0 },
          view: { enumerable: !0 },
        }),
          n(Te.prototype.respond, "respond"),
          n(Te.prototype.respondWithNewView, "respondWithNewView"),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(Te.prototype, Symbol.toStringTag, {
              value: "ReadableStreamBYOBRequest",
              configurable: !0,
            });
        class Re {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get byobRequest() {
            if (!Pe(this)) throw Ke("byobRequest");
            return Ve(this);
          }
          get desiredSize() {
            if (!Pe(this)) throw Ke("desiredSize");
            return Ye(this);
          }
          close() {
            if (!Pe(this)) throw Ke("close");
            if (this._closeRequested)
              throw new TypeError(
                "The stream has already been closed; do not close it again!"
              );
            const e = this._controlledReadableByteStream._state;
            if ("readable" !== e)
              throw new TypeError(
                `The stream (in ${e} state) is not in the readable state and cannot be closed`
              );
            Ue(this);
          }
          enqueue(e) {
            if (!Pe(this)) throw Ke("enqueue");
            if ((M(e, 1, "enqueue"), !ArrayBuffer.isView(e)))
              throw new TypeError("chunk must be an array buffer view");
            if (0 === e.byteLength)
              throw new TypeError("chunk must have non-zero byteLength");
            if (0 === e.buffer.byteLength)
              throw new TypeError(
                "chunk's buffer must have non-zero byteLength"
              );
            if (this._closeRequested)
              throw new TypeError("stream is closed or draining");
            const t = this._controlledReadableByteStream._state;
            if ("readable" !== t)
              throw new TypeError(
                `The stream (in ${t} state) is not in the readable state and cannot be enqueued to`
              );
            De(this, e);
          }
          error(e = void 0) {
            if (!Pe(this)) throw Ke("error");
            Ne(this, e);
          }
          [T](e) {
            qe(this), ve(this);
            const t = this._cancelAlgorithm(e);
            return xe(this), t;
          }
          [R](e) {
            const t = this._controlledReadableByteStream;
            if (this._queueTotalSize > 0) return void He(this, e);
            const r = this._autoAllocateChunkSize;
            if (void 0 !== r) {
              let t;
              try {
                t = new ArrayBuffer(r);
              } catch (t) {
                return void e._errorSteps(t);
              }
              const o = {
                buffer: t,
                bufferByteLength: r,
                byteOffset: 0,
                byteLength: r,
                bytesFilled: 0,
                minimumFill: 1,
                elementSize: 1,
                viewConstructor: Uint8Array,
                readerType: "default",
              };
              this._pendingPullIntos.push(o);
            }
            V(t, e), Ce(this);
          }
          [P]() {
            if (this._pendingPullIntos.length > 0) {
              const e = this._pendingPullIntos.peek();
              (e.readerType = "none"),
                (this._pendingPullIntos = new w()),
                this._pendingPullIntos.push(e);
            }
          }
        }
        function Pe(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_controlledReadableByteStream"
            ) &&
            e instanceof Re
          );
        }
        function Ee(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_associatedReadableByteStreamController"
            ) &&
            e instanceof Te
          );
        }
        function Ce(e) {
          const t = (function (e) {
            const t = e._controlledReadableByteStream;
            if ("readable" !== t._state) return !1;
            if (e._closeRequested) return !1;
            if (!e._started) return !1;
            if (G(t) && Q(t) > 0) return !0;
            if (ot(t) && rt(t) > 0) return !0;
            return Ye(e) > 0;
          })(e);
          t &&
            (e._pulling
              ? (e._pullAgain = !0)
              : ((e._pulling = !0),
                f(
                  e._pullAlgorithm(),
                  () => (
                    (e._pulling = !1),
                    e._pullAgain && ((e._pullAgain = !1), Ce(e)),
                    null
                  ),
                  (t) => (Ne(e, t), null)
                )));
        }
        function qe(e) {
          $e(e), (e._pendingPullIntos = new w());
        }
        function Ae(e, t) {
          let r = !1;
          "closed" === e._state && (r = !0);
          const o = ke(t);
          "default" === t.readerType
            ? Y(e, o, r)
            : (function (e, t, r) {
                const o = e._reader._readIntoRequests.shift();
                r ? o._closeSteps(t) : o._chunkSteps(t);
              })(e, o, r);
        }
        function ke(e) {
          const t = e.bytesFilled,
            r = e.elementSize;
          return new e.viewConstructor(e.buffer, e.byteOffset, t / r);
        }
        function Oe(e, t, r, o) {
          e._queue.push({ buffer: t, byteOffset: r, byteLength: o }),
            (e._queueTotalSize += o);
        }
        function je(e, t, r, o) {
          let n;
          try {
            n = pe(t, r, r + o);
          } catch (t) {
            throw (Ne(e, t), t);
          }
          Oe(e, n, 0, o);
        }
        function Be(e, t) {
          t.bytesFilled > 0 && je(e, t.buffer, t.byteOffset, t.bytesFilled),
            Ie(e);
        }
        function ze(e, t) {
          const r = Math.min(e._queueTotalSize, t.byteLength - t.bytesFilled),
            o = t.bytesFilled + r;
          let n = r,
            i = !1;
          const s = o - (o % t.elementSize);
          s >= t.minimumFill && ((n = s - t.bytesFilled), (i = !0));
          const a = e._queue;
          for (; n > 0; ) {
            const r = a.peek(),
              o = Math.min(n, r.byteLength),
              i = t.byteOffset + t.bytesFilled;
            de(t.buffer, i, r.buffer, r.byteOffset, o),
              r.byteLength === o
                ? a.shift()
                : ((r.byteOffset += o), (r.byteLength -= o)),
              (e._queueTotalSize -= o),
              Le(0, o, t),
              (n -= o);
          }
          return i;
        }
        function Le(e, t, r) {
          r.bytesFilled += t;
        }
        function We(e) {
          0 === e._queueTotalSize && e._closeRequested
            ? (xe(e), Lr(e._controlledReadableByteStream))
            : Ce(e);
        }
        function $e(e) {
          null !== e._byobRequest &&
            ((e._byobRequest._associatedReadableByteStreamController = void 0),
            (e._byobRequest._view = null),
            (e._byobRequest = null));
        }
        function Fe(e) {
          for (; e._pendingPullIntos.length > 0; ) {
            if (0 === e._queueTotalSize) return;
            const t = e._pendingPullIntos.peek();
            ze(e, t) && (Ie(e), Ae(e._controlledReadableByteStream, t));
          }
        }
        function Me(e, t) {
          const r = e._pendingPullIntos.peek();
          $e(e),
            "closed" === e._controlledReadableByteStream._state
              ? (function (e, t) {
                  "none" === t.readerType && Ie(e);
                  const r = e._controlledReadableByteStream;
                  if (ot(r)) for (; rt(r) > 0; ) Ae(r, Ie(e));
                })(e, r)
              : (function (e, t, r) {
                  if ((Le(0, t, r), "none" === r.readerType))
                    return Be(e, r), void Fe(e);
                  if (r.bytesFilled < r.minimumFill) return;
                  Ie(e);
                  const o = r.bytesFilled % r.elementSize;
                  if (o > 0) {
                    const t = r.byteOffset + r.bytesFilled;
                    je(e, r.buffer, t - o, o);
                  }
                  (r.bytesFilled -= o),
                    Ae(e._controlledReadableByteStream, r),
                    Fe(e);
                })(e, t, r),
            Ce(e);
        }
        function Ie(e) {
          return e._pendingPullIntos.shift();
        }
        function xe(e) {
          (e._pullAlgorithm = void 0), (e._cancelAlgorithm = void 0);
        }
        function Ue(e) {
          const t = e._controlledReadableByteStream;
          if (!e._closeRequested && "readable" === t._state)
            if (e._queueTotalSize > 0) e._closeRequested = !0;
            else {
              if (e._pendingPullIntos.length > 0) {
                const t = e._pendingPullIntos.peek();
                if (t.bytesFilled % t.elementSize != 0) {
                  const t = new TypeError(
                    "Insufficient bytes to fill elements in the given buffer"
                  );
                  throw (Ne(e, t), t);
                }
              }
              xe(e), Lr(t);
            }
        }
        function De(e, t) {
          const r = e._controlledReadableByteStream;
          if (e._closeRequested || "readable" !== r._state) return;
          const { buffer: o, byteOffset: n, byteLength: i } = t;
          if (he(o))
            throw new TypeError(
              "chunk's buffer is detached and so cannot be enqueued"
            );
          const s = fe(o);
          if (e._pendingPullIntos.length > 0) {
            const t = e._pendingPullIntos.peek();
            if (he(t.buffer))
              throw new TypeError(
                "The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk"
              );
            $e(e),
              (t.buffer = fe(t.buffer)),
              "none" === t.readerType && Be(e, t);
          }
          G(r)
            ? ((function (e) {
                const t = e._controlledReadableByteStream._reader;
                for (; t._readRequests.length > 0; ) {
                  if (0 === e._queueTotalSize) return;
                  He(e, t._readRequests.shift());
                }
              })(e),
              0 === Q(r)
                ? Oe(e, s, n, i)
                : (e._pendingPullIntos.length > 0 && Ie(e),
                  Y(r, new Uint8Array(s, n, i), !1)))
            : ot(r)
            ? (Oe(e, s, n, i), Fe(e))
            : Oe(e, s, n, i),
            Ce(e);
        }
        function Ne(e, t) {
          const r = e._controlledReadableByteStream;
          "readable" === r._state && (qe(e), ve(e), xe(e), Wr(r, t));
        }
        function He(e, t) {
          const r = e._queue.shift();
          (e._queueTotalSize -= r.byteLength), We(e);
          const o = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
          t._chunkSteps(o);
        }
        function Ve(e) {
          if (null === e._byobRequest && e._pendingPullIntos.length > 0) {
            const t = e._pendingPullIntos.peek(),
              r = new Uint8Array(
                t.buffer,
                t.byteOffset + t.bytesFilled,
                t.byteLength - t.bytesFilled
              ),
              o = Object.create(Te.prototype);
            !(function (e, t, r) {
              (e._associatedReadableByteStreamController = t), (e._view = r);
            })(o, e, r),
              (e._byobRequest = o);
          }
          return e._byobRequest;
        }
        function Ye(e) {
          const t = e._controlledReadableByteStream._state;
          return "errored" === t
            ? null
            : "closed" === t
            ? 0
            : e._strategyHWM - e._queueTotalSize;
        }
        function Qe(e, t) {
          const r = e._pendingPullIntos.peek();
          if ("closed" === e._controlledReadableByteStream._state) {
            if (0 !== t)
              throw new TypeError(
                "bytesWritten must be 0 when calling respond() on a closed stream"
              );
          } else {
            if (0 === t)
              throw new TypeError(
                "bytesWritten must be greater than 0 when calling respond() on a readable stream"
              );
            if (r.bytesFilled + t > r.byteLength)
              throw new RangeError("bytesWritten out of range");
          }
          (r.buffer = fe(r.buffer)), Me(e, t);
        }
        function Ge(e, t) {
          const r = e._pendingPullIntos.peek();
          if ("closed" === e._controlledReadableByteStream._state) {
            if (0 !== t.byteLength)
              throw new TypeError(
                "The view's length must be 0 when calling respondWithNewView() on a closed stream"
              );
          } else if (0 === t.byteLength)
            throw new TypeError(
              "The view's length must be greater than 0 when calling respondWithNewView() on a readable stream"
            );
          if (r.byteOffset + r.bytesFilled !== t.byteOffset)
            throw new RangeError(
              "The region specified by view does not match byobRequest"
            );
          if (r.bufferByteLength !== t.buffer.byteLength)
            throw new RangeError(
              "The buffer of view has different capacity than byobRequest"
            );
          if (r.bytesFilled + t.byteLength > r.byteLength)
            throw new RangeError(
              "The region specified by view is larger than byobRequest"
            );
          const o = t.byteLength;
          (r.buffer = fe(t.buffer)), Me(e, o);
        }
        function Ze(e, t, r, o, n, i, s) {
          (t._controlledReadableByteStream = e),
            (t._pullAgain = !1),
            (t._pulling = !1),
            (t._byobRequest = null),
            (t._queue = t._queueTotalSize = void 0),
            ve(t),
            (t._closeRequested = !1),
            (t._started = !1),
            (t._strategyHWM = i),
            (t._pullAlgorithm = o),
            (t._cancelAlgorithm = n),
            (t._autoAllocateChunkSize = s),
            (t._pendingPullIntos = new w()),
            (e._readableStreamController = t),
            f(
              u(r()),
              () => ((t._started = !0), Ce(t), null),
              (e) => (Ne(t, e), null)
            );
        }
        function Je(e) {
          return new TypeError(
            `ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`
          );
        }
        function Ke(e) {
          return new TypeError(
            `ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`
          );
        }
        function Xe(e, t) {
          if ("byob" != (e = `${e}`))
            throw new TypeError(
              `${t} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`
            );
          return e;
        }
        function et(e) {
          return new nt(e);
        }
        function tt(e, t) {
          e._reader._readIntoRequests.push(t);
        }
        function rt(e) {
          return e._reader._readIntoRequests.length;
        }
        function ot(e) {
          const t = e._reader;
          return void 0 !== t && !!it(t);
        }
        Object.defineProperties(Re.prototype, {
          close: { enumerable: !0 },
          enqueue: { enumerable: !0 },
          error: { enumerable: !0 },
          byobRequest: { enumerable: !0 },
          desiredSize: { enumerable: !0 },
        }),
          n(Re.prototype.close, "close"),
          n(Re.prototype.enqueue, "enqueue"),
          n(Re.prototype.error, "error"),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(Re.prototype, Symbol.toStringTag, {
              value: "ReadableByteStreamController",
              configurable: !0,
            });
        class nt {
          constructor(e) {
            if (
              (M(e, 1, "ReadableStreamBYOBReader"),
              N(e, "First parameter"),
              Br(e))
            )
              throw new TypeError(
                "This stream has already been locked for exclusive reading by another reader"
              );
            if (!Pe(e._readableStreamController))
              throw new TypeError(
                "Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source"
              );
            E(this, e), (this._readIntoRequests = new w());
          }
          get closed() {
            return it(this) ? this._closedPromise : c(lt("closed"));
          }
          cancel(e = void 0) {
            return it(this)
              ? void 0 === this._ownerReadableStream
                ? c(A("cancel"))
                : C(this, e)
              : c(lt("cancel"));
          }
          read(e, t = {}) {
            if (!it(this)) return c(lt("read"));
            if (!ArrayBuffer.isView(e))
              return c(new TypeError("view must be an array buffer view"));
            if (0 === e.byteLength)
              return c(new TypeError("view must have non-zero byteLength"));
            if (0 === e.buffer.byteLength)
              return c(
                new TypeError("view's buffer must have non-zero byteLength")
              );
            if (he(e.buffer))
              return c(new TypeError("view's buffer has been detached"));
            let r;
            try {
              r = (function (e, t) {
                var r;
                return (
                  W(e, t),
                  {
                    min: D(
                      null !== (r = null == e ? void 0 : e.min) && void 0 !== r
                        ? r
                        : 1,
                      `${t} has member 'min' that`
                    ),
                  }
                );
              })(t, "options");
            } catch (e) {
              return c(e);
            }
            const o = r.min;
            if (0 === o)
              return c(new TypeError("options.min must be greater than 0"));
            if (
              (function (e) {
                return Se(e.constructor);
              })(e)
            ) {
              if (o > e.byteLength)
                return c(
                  new RangeError(
                    "options.min must be less than or equal to view's byteLength"
                  )
                );
            } else if (o > e.length)
              return c(
                new RangeError(
                  "options.min must be less than or equal to view's length"
                )
              );
            if (void 0 === this._ownerReadableStream) return c(A("read from"));
            let n, i;
            const s = l((e, t) => {
              (n = e), (i = t);
            });
            return (
              st(this, e, o, {
                _chunkSteps: (e) => n({ value: e, done: !1 }),
                _closeSteps: (e) => n({ value: e, done: !0 }),
                _errorSteps: (e) => i(e),
              }),
              s
            );
          }
          releaseLock() {
            if (!it(this)) throw lt("releaseLock");
            void 0 !== this._ownerReadableStream &&
              (function (e) {
                q(e);
                at(e, new TypeError("Reader was released"));
              })(this);
          }
        }
        function it(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") &&
            e instanceof nt
          );
        }
        function st(e, t, r, o) {
          const n = e._ownerReadableStream;
          (n._disturbed = !0),
            "errored" === n._state
              ? o._errorSteps(n._storedError)
              : (function (e, t, r, o) {
                  const n = e._controlledReadableByteStream,
                    i = t.constructor,
                    s = (function (e) {
                      return Se(e) ? 1 : e.BYTES_PER_ELEMENT;
                    })(i),
                    { byteOffset: a, byteLength: l } = t,
                    u = r * s;
                  let c;
                  try {
                    c = fe(t.buffer);
                  } catch (e) {
                    return void o._errorSteps(e);
                  }
                  const d = {
                    buffer: c,
                    bufferByteLength: c.byteLength,
                    byteOffset: a,
                    byteLength: l,
                    bytesFilled: 0,
                    minimumFill: u,
                    elementSize: s,
                    viewConstructor: i,
                    readerType: "byob",
                  };
                  if (e._pendingPullIntos.length > 0)
                    return e._pendingPullIntos.push(d), void tt(n, o);
                  if ("closed" !== n._state) {
                    if (e._queueTotalSize > 0) {
                      if (ze(e, d)) {
                        const t = ke(d);
                        return We(e), void o._chunkSteps(t);
                      }
                      if (e._closeRequested) {
                        const t = new TypeError(
                          "Insufficient bytes to fill elements in the given buffer"
                        );
                        return Ne(e, t), void o._errorSteps(t);
                      }
                    }
                    e._pendingPullIntos.push(d), tt(n, o), Ce(e);
                  } else {
                    const e = new i(d.buffer, d.byteOffset, 0);
                    o._closeSteps(e);
                  }
                })(n._readableStreamController, t, r, o);
        }
        function at(e, t) {
          const r = e._readIntoRequests;
          (e._readIntoRequests = new w()),
            r.forEach((e) => {
              e._errorSteps(t);
            });
        }
        function lt(e) {
          return new TypeError(
            `ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`
          );
        }
        function ut(e, t) {
          const { highWaterMark: r } = e;
          if (void 0 === r) return t;
          if (se(r) || r < 0) throw new RangeError("Invalid highWaterMark");
          return r;
        }
        function ct(e) {
          const { size: t } = e;
          return t || (() => 1);
        }
        function dt(e, t) {
          W(e, t);
          const r = null == e ? void 0 : e.highWaterMark,
            o = null == e ? void 0 : e.size;
          return {
            highWaterMark: void 0 === r ? void 0 : x(r),
            size: void 0 === o ? void 0 : ft(o, `${t} has member 'size' that`),
          };
        }
        function ft(e, t) {
          return $(e, t), (t) => x(e(t));
        }
        function ht(e, t, r) {
          return $(e, r), (r) => g(e, t, [r]);
        }
        function pt(e, t, r) {
          return $(e, r), () => g(e, t, []);
        }
        function bt(e, t, r) {
          return $(e, r), (r) => _(e, t, [r]);
        }
        function yt(e, t, r) {
          return $(e, r), (r, o) => g(e, t, [r, o]);
        }
        function mt(e, t) {
          if (!St(e)) throw new TypeError(`${t} is not a WritableStream.`);
        }
        Object.defineProperties(nt.prototype, {
          cancel: { enumerable: !0 },
          read: { enumerable: !0 },
          releaseLock: { enumerable: !0 },
          closed: { enumerable: !0 },
        }),
          n(nt.prototype.cancel, "cancel"),
          n(nt.prototype.read, "read"),
          n(nt.prototype.releaseLock, "releaseLock"),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(nt.prototype, Symbol.toStringTag, {
              value: "ReadableStreamBYOBReader",
              configurable: !0,
            });
        const _t = "function" == typeof AbortController;
        class gt {
          constructor(e = {}, t = {}) {
            void 0 === e ? (e = null) : F(e, "First parameter");
            const r = dt(t, "Second parameter"),
              o = (function (e, t) {
                W(e, t);
                const r = null == e ? void 0 : e.abort,
                  o = null == e ? void 0 : e.close,
                  n = null == e ? void 0 : e.start,
                  i = null == e ? void 0 : e.type,
                  s = null == e ? void 0 : e.write;
                return {
                  abort:
                    void 0 === r
                      ? void 0
                      : ht(r, e, `${t} has member 'abort' that`),
                  close:
                    void 0 === o
                      ? void 0
                      : pt(o, e, `${t} has member 'close' that`),
                  start:
                    void 0 === n
                      ? void 0
                      : bt(n, e, `${t} has member 'start' that`),
                  write:
                    void 0 === s
                      ? void 0
                      : yt(s, e, `${t} has member 'write' that`),
                  type: i,
                };
              })(e, "First parameter");
            if ((vt(this), void 0 !== o.type))
              throw new RangeError("Invalid type is specified");
            const n = ct(r);
            !(function (e, t, r, o) {
              const n = Object.create(Mt.prototype);
              let i, s, a, l;
              (i = void 0 !== t.start ? () => t.start(n) : () => {}),
                (s =
                  void 0 !== t.write ? (e) => t.write(e, n) : () => u(void 0)),
                (a = void 0 !== t.close ? () => t.close() : () => u(void 0)),
                (l = void 0 !== t.abort ? (e) => t.abort(e) : () => u(void 0)),
                xt(e, n, i, s, a, l, r, o);
            })(this, o, ut(r, 1), n);
          }
          get locked() {
            if (!St(this)) throw Qt("locked");
            return Tt(this);
          }
          abort(e = void 0) {
            return St(this)
              ? Tt(this)
                ? c(
                    new TypeError(
                      "Cannot abort a stream that already has a writer"
                    )
                  )
                : Rt(this, e)
              : c(Qt("abort"));
          }
          close() {
            return St(this)
              ? Tt(this)
                ? c(
                    new TypeError(
                      "Cannot close a stream that already has a writer"
                    )
                  )
                : At(this)
                ? c(new TypeError("Cannot close an already-closing stream"))
                : Pt(this)
              : c(Qt("close"));
          }
          getWriter() {
            if (!St(this)) throw Qt("getWriter");
            return wt(this);
          }
        }
        function wt(e) {
          return new jt(e);
        }
        function vt(e) {
          (e._state = "writable"),
            (e._storedError = void 0),
            (e._writer = void 0),
            (e._writableStreamController = void 0),
            (e._writeRequests = new w()),
            (e._inFlightWriteRequest = void 0),
            (e._closeRequest = void 0),
            (e._inFlightCloseRequest = void 0),
            (e._pendingAbortRequest = void 0),
            (e._backpressure = !1);
        }
        function St(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_writableStreamController"
            ) &&
            e instanceof gt
          );
        }
        function Tt(e) {
          return void 0 !== e._writer;
        }
        function Rt(e, t) {
          var r;
          if ("closed" === e._state || "errored" === e._state) return u(void 0);
          (e._writableStreamController._abortReason = t),
            null === (r = e._writableStreamController._abortController) ||
              void 0 === r ||
              r.abort(t);
          const o = e._state;
          if ("closed" === o || "errored" === o) return u(void 0);
          if (void 0 !== e._pendingAbortRequest)
            return e._pendingAbortRequest._promise;
          let n = !1;
          "erroring" === o && ((n = !0), (t = void 0));
          const i = l((r, o) => {
            e._pendingAbortRequest = {
              _promise: void 0,
              _resolve: r,
              _reject: o,
              _reason: t,
              _wasAlreadyErroring: n,
            };
          });
          return (e._pendingAbortRequest._promise = i), n || Ct(e, t), i;
        }
        function Pt(e) {
          const t = e._state;
          if ("closed" === t || "errored" === t)
            return c(
              new TypeError(
                `The stream (in ${t} state) is not in the writable state and cannot be closed`
              )
            );
          const r = l((t, r) => {
              const o = { _resolve: t, _reject: r };
              e._closeRequest = o;
            }),
            o = e._writer;
          var n;
          return (
            void 0 !== o && e._backpressure && "writable" === t && sr(o),
            we((n = e._writableStreamController), Ft, 0),
            Nt(n),
            r
          );
        }
        function Et(e, t) {
          "writable" !== e._state ? qt(e) : Ct(e, t);
        }
        function Ct(e, t) {
          const r = e._writableStreamController;
          (e._state = "erroring"), (e._storedError = t);
          const o = e._writer;
          void 0 !== o && Lt(o, t),
            !(function (e) {
              return (
                void 0 !== e._inFlightWriteRequest ||
                void 0 !== e._inFlightCloseRequest
              );
            })(e) &&
              r._started &&
              qt(e);
        }
        function qt(e) {
          (e._state = "errored"), e._writableStreamController[S]();
          const t = e._storedError;
          if (
            (e._writeRequests.forEach((e) => {
              e._reject(t);
            }),
            (e._writeRequests = new w()),
            void 0 === e._pendingAbortRequest)
          )
            return void kt(e);
          const r = e._pendingAbortRequest;
          if (((e._pendingAbortRequest = void 0), r._wasAlreadyErroring))
            return r._reject(t), void kt(e);
          f(
            e._writableStreamController[v](r._reason),
            () => (r._resolve(), kt(e), null),
            (t) => (r._reject(t), kt(e), null)
          );
        }
        function At(e) {
          return (
            void 0 !== e._closeRequest || void 0 !== e._inFlightCloseRequest
          );
        }
        function kt(e) {
          void 0 !== e._closeRequest &&
            (e._closeRequest._reject(e._storedError),
            (e._closeRequest = void 0));
          const t = e._writer;
          void 0 !== t && er(t, e._storedError);
        }
        function Ot(e, t) {
          const r = e._writer;
          void 0 !== r &&
            t !== e._backpressure &&
            (t
              ? (function (e) {
                  rr(e);
                })(r)
              : sr(r)),
            (e._backpressure = t);
        }
        Object.defineProperties(gt.prototype, {
          abort: { enumerable: !0 },
          close: { enumerable: !0 },
          getWriter: { enumerable: !0 },
          locked: { enumerable: !0 },
        }),
          n(gt.prototype.abort, "abort"),
          n(gt.prototype.close, "close"),
          n(gt.prototype.getWriter, "getWriter"),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(gt.prototype, Symbol.toStringTag, {
              value: "WritableStream",
              configurable: !0,
            });
        class jt {
          constructor(e) {
            if (
              (M(e, 1, "WritableStreamDefaultWriter"),
              mt(e, "First parameter"),
              Tt(e))
            )
              throw new TypeError(
                "This stream has already been locked for exclusive writing by another writer"
              );
            (this._ownerWritableStream = e), (e._writer = this);
            const t = e._state;
            if ("writable" === t)
              !At(e) && e._backpressure ? rr(this) : nr(this), Kt(this);
            else if ("erroring" === t) or(this, e._storedError), Kt(this);
            else if ("closed" === t) nr(this), Kt(this), tr(this);
            else {
              const t = e._storedError;
              or(this, t), Xt(this, t);
            }
          }
          get closed() {
            return Bt(this) ? this._closedPromise : c(Zt("closed"));
          }
          get desiredSize() {
            if (!Bt(this)) throw Zt("desiredSize");
            if (void 0 === this._ownerWritableStream) throw Jt("desiredSize");
            return (function (e) {
              const t = e._ownerWritableStream,
                r = t._state;
              return "errored" === r || "erroring" === r
                ? null
                : "closed" === r
                ? 0
                : Dt(t._writableStreamController);
            })(this);
          }
          get ready() {
            return Bt(this) ? this._readyPromise : c(Zt("ready"));
          }
          abort(e = void 0) {
            return Bt(this)
              ? void 0 === this._ownerWritableStream
                ? c(Jt("abort"))
                : (function (e, t) {
                    return Rt(e._ownerWritableStream, t);
                  })(this, e)
              : c(Zt("abort"));
          }
          close() {
            if (!Bt(this)) return c(Zt("close"));
            const e = this._ownerWritableStream;
            return void 0 === e
              ? c(Jt("close"))
              : At(e)
              ? c(new TypeError("Cannot close an already-closing stream"))
              : zt(this);
          }
          releaseLock() {
            if (!Bt(this)) throw Zt("releaseLock");
            void 0 !== this._ownerWritableStream && Wt(this);
          }
          write(e = void 0) {
            return Bt(this)
              ? void 0 === this._ownerWritableStream
                ? c(Jt("write to"))
                : $t(this, e)
              : c(Zt("write"));
          }
        }
        function Bt(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") &&
            e instanceof jt
          );
        }
        function zt(e) {
          return Pt(e._ownerWritableStream);
        }
        function Lt(e, t) {
          "pending" === e._readyPromiseState
            ? ir(e, t)
            : (function (e, t) {
                or(e, t);
              })(e, t);
        }
        function Wt(e) {
          const t = e._ownerWritableStream,
            r = new TypeError(
              "Writer was released and can no longer be used to monitor the stream's closedness"
            );
          Lt(e, r),
            (function (e, t) {
              "pending" === e._closedPromiseState
                ? er(e, t)
                : (function (e, t) {
                    Xt(e, t);
                  })(e, t);
            })(e, r),
            (t._writer = void 0),
            (e._ownerWritableStream = void 0);
        }
        function $t(e, t) {
          const r = e._ownerWritableStream,
            o = r._writableStreamController,
            n = (function (e, t) {
              try {
                return e._strategySizeAlgorithm(t);
              } catch (t) {
                return Ht(e, t), 1;
              }
            })(o, t);
          if (r !== e._ownerWritableStream) return c(Jt("write to"));
          const i = r._state;
          if ("errored" === i) return c(r._storedError);
          if (At(r) || "closed" === i)
            return c(
              new TypeError(
                "The stream is closing or closed and cannot be written to"
              )
            );
          if ("erroring" === i) return c(r._storedError);
          const s = (function (e) {
            return l((t, r) => {
              const o = { _resolve: t, _reject: r };
              e._writeRequests.push(o);
            });
          })(r);
          return (
            (function (e, t, r) {
              try {
                we(e, t, r);
              } catch (t) {
                return void Ht(e, t);
              }
              const o = e._controlledWritableStream;
              At(o) || "writable" !== o._state || Ot(o, Vt(e)), Nt(e);
            })(o, t, n),
            s
          );
        }
        Object.defineProperties(jt.prototype, {
          abort: { enumerable: !0 },
          close: { enumerable: !0 },
          releaseLock: { enumerable: !0 },
          write: { enumerable: !0 },
          closed: { enumerable: !0 },
          desiredSize: { enumerable: !0 },
          ready: { enumerable: !0 },
        }),
          n(jt.prototype.abort, "abort"),
          n(jt.prototype.close, "close"),
          n(jt.prototype.releaseLock, "releaseLock"),
          n(jt.prototype.write, "write"),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(jt.prototype, Symbol.toStringTag, {
              value: "WritableStreamDefaultWriter",
              configurable: !0,
            });
        const Ft = {};
        class Mt {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get abortReason() {
            if (!It(this)) throw Gt("abortReason");
            return this._abortReason;
          }
          get signal() {
            if (!It(this)) throw Gt("signal");
            if (void 0 === this._abortController)
              throw new TypeError(
                "WritableStreamDefaultController.prototype.signal is not supported"
              );
            return this._abortController.signal;
          }
          error(e = void 0) {
            if (!It(this)) throw Gt("error");
            "writable" === this._controlledWritableStream._state && Yt(this, e);
          }
          [v](e) {
            const t = this._abortAlgorithm(e);
            return Ut(this), t;
          }
          [S]() {
            ve(this);
          }
        }
        function It(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_controlledWritableStream"
            ) &&
            e instanceof Mt
          );
        }
        function xt(e, t, r, o, n, i, s, a) {
          (t._controlledWritableStream = e),
            (e._writableStreamController = t),
            (t._queue = void 0),
            (t._queueTotalSize = void 0),
            ve(t),
            (t._abortReason = void 0),
            (t._abortController = (function () {
              if (_t) return new AbortController();
            })()),
            (t._started = !1),
            (t._strategySizeAlgorithm = a),
            (t._strategyHWM = s),
            (t._writeAlgorithm = o),
            (t._closeAlgorithm = n),
            (t._abortAlgorithm = i);
          const l = Vt(t);
          Ot(e, l),
            f(
              u(r()),
              () => ((t._started = !0), Nt(t), null),
              (r) => ((t._started = !0), Et(e, r), null)
            );
        }
        function Ut(e) {
          (e._writeAlgorithm = void 0),
            (e._closeAlgorithm = void 0),
            (e._abortAlgorithm = void 0),
            (e._strategySizeAlgorithm = void 0);
        }
        function Dt(e) {
          return e._strategyHWM - e._queueTotalSize;
        }
        function Nt(e) {
          const t = e._controlledWritableStream;
          if (!e._started) return;
          if (void 0 !== t._inFlightWriteRequest) return;
          if ("erroring" === t._state) return void qt(t);
          if (0 === e._queue.length) return;
          const r = e._queue.peek().value;
          r === Ft
            ? (function (e) {
                const t = e._controlledWritableStream;
                (function (e) {
                  (e._inFlightCloseRequest = e._closeRequest),
                    (e._closeRequest = void 0);
                })(t),
                  ge(e);
                const r = e._closeAlgorithm();
                Ut(e),
                  f(
                    r,
                    () => (
                      (function (e) {
                        e._inFlightCloseRequest._resolve(void 0),
                          (e._inFlightCloseRequest = void 0),
                          "erroring" === e._state &&
                            ((e._storedError = void 0),
                            void 0 !== e._pendingAbortRequest &&
                              (e._pendingAbortRequest._resolve(),
                              (e._pendingAbortRequest = void 0))),
                          (e._state = "closed");
                        const t = e._writer;
                        void 0 !== t && tr(t);
                      })(t),
                      null
                    ),
                    (e) => (
                      (function (e, t) {
                        e._inFlightCloseRequest._reject(t),
                          (e._inFlightCloseRequest = void 0),
                          void 0 !== e._pendingAbortRequest &&
                            (e._pendingAbortRequest._reject(t),
                            (e._pendingAbortRequest = void 0)),
                          Et(e, t);
                      })(t, e),
                      null
                    )
                  );
              })(e)
            : (function (e, t) {
                const r = e._controlledWritableStream;
                !(function (e) {
                  e._inFlightWriteRequest = e._writeRequests.shift();
                })(r);
                f(
                  e._writeAlgorithm(t),
                  () => {
                    !(function (e) {
                      e._inFlightWriteRequest._resolve(void 0),
                        (e._inFlightWriteRequest = void 0);
                    })(r);
                    const t = r._state;
                    if ((ge(e), !At(r) && "writable" === t)) {
                      const t = Vt(e);
                      Ot(r, t);
                    }
                    return Nt(e), null;
                  },
                  (t) => (
                    "writable" === r._state && Ut(e),
                    (function (e, t) {
                      e._inFlightWriteRequest._reject(t),
                        (e._inFlightWriteRequest = void 0),
                        Et(e, t);
                    })(r, t),
                    null
                  )
                );
              })(e, r);
        }
        function Ht(e, t) {
          "writable" === e._controlledWritableStream._state && Yt(e, t);
        }
        function Vt(e) {
          return Dt(e) <= 0;
        }
        function Yt(e, t) {
          const r = e._controlledWritableStream;
          Ut(e), Ct(r, t);
        }
        function Qt(e) {
          return new TypeError(
            `WritableStream.prototype.${e} can only be used on a WritableStream`
          );
        }
        function Gt(e) {
          return new TypeError(
            `WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`
          );
        }
        function Zt(e) {
          return new TypeError(
            `WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`
          );
        }
        function Jt(e) {
          return new TypeError(
            "Cannot " + e + " a stream using a released writer"
          );
        }
        function Kt(e) {
          e._closedPromise = l((t, r) => {
            (e._closedPromise_resolve = t),
              (e._closedPromise_reject = r),
              (e._closedPromiseState = "pending");
          });
        }
        function Xt(e, t) {
          Kt(e), er(e, t);
        }
        function er(e, t) {
          void 0 !== e._closedPromise_reject &&
            (y(e._closedPromise),
            e._closedPromise_reject(t),
            (e._closedPromise_resolve = void 0),
            (e._closedPromise_reject = void 0),
            (e._closedPromiseState = "rejected"));
        }
        function tr(e) {
          void 0 !== e._closedPromise_resolve &&
            (e._closedPromise_resolve(void 0),
            (e._closedPromise_resolve = void 0),
            (e._closedPromise_reject = void 0),
            (e._closedPromiseState = "resolved"));
        }
        function rr(e) {
          (e._readyPromise = l((t, r) => {
            (e._readyPromise_resolve = t), (e._readyPromise_reject = r);
          })),
            (e._readyPromiseState = "pending");
        }
        function or(e, t) {
          rr(e), ir(e, t);
        }
        function nr(e) {
          rr(e), sr(e);
        }
        function ir(e, t) {
          void 0 !== e._readyPromise_reject &&
            (y(e._readyPromise),
            e._readyPromise_reject(t),
            (e._readyPromise_resolve = void 0),
            (e._readyPromise_reject = void 0),
            (e._readyPromiseState = "rejected"));
        }
        function sr(e) {
          void 0 !== e._readyPromise_resolve &&
            (e._readyPromise_resolve(void 0),
            (e._readyPromise_resolve = void 0),
            (e._readyPromise_reject = void 0),
            (e._readyPromiseState = "fulfilled"));
        }
        Object.defineProperties(Mt.prototype, {
          abortReason: { enumerable: !0 },
          signal: { enumerable: !0 },
          error: { enumerable: !0 },
        }),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(Mt.prototype, Symbol.toStringTag, {
              value: "WritableStreamDefaultController",
              configurable: !0,
            });
        const ar =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof global
              ? global
              : void 0,
          lr =
            (function () {
              const e = null == ar ? void 0 : ar.DOMException;
              return (function (e) {
                if ("function" != typeof e && "object" != typeof e) return !1;
                if ("DOMException" !== e.name) return !1;
                try {
                  return new e(), !0;
                } catch (e) {
                  return !1;
                }
              })(e)
                ? e
                : void 0;
            })() ||
            (function () {
              const e = function (e, t) {
                (this.message = e || ""),
                  (this.name = t || "Error"),
                  Error.captureStackTrace &&
                    Error.captureStackTrace(this, this.constructor);
              };
              return (
                n(e, "DOMException"),
                (e.prototype = Object.create(Error.prototype)),
                Object.defineProperty(e.prototype, "constructor", {
                  value: e,
                  writable: !0,
                  configurable: !0,
                }),
                e
              );
            })();
        function ur(e, r, o, n, i, s) {
          const a = H(e),
            b = wt(r);
          e._disturbed = !0;
          let m = !1,
            _ = u(void 0);
          return l((g, w) => {
            let v;
            if (void 0 !== s) {
              if (
                ((v = () => {
                  const t =
                      void 0 !== s.reason
                        ? s.reason
                        : new lr("Aborted", "AbortError"),
                    o = [];
                  n ||
                    o.push(() =>
                      "writable" === r._state ? Rt(r, t) : u(void 0)
                    ),
                    i ||
                      o.push(() =>
                        "readable" === e._state ? zr(e, t) : u(void 0)
                      ),
                    C(() => Promise.all(o.map((e) => e())), !0, t);
                }),
                s.aborted)
              )
                return void v();
              s.addEventListener("abort", v);
            }
            var S, T, R;
            if (
              (E(
                e,
                a._closedPromise,
                (e) => (n ? A(!0, e) : C(() => Rt(r, e), !0, e), null)
              ),
              E(
                r,
                b._closedPromise,
                (t) => (i ? A(!0, t) : C(() => zr(e, t), !0, t), null)
              ),
              (S = e),
              (T = a._closedPromise),
              (R = () => (
                o
                  ? A()
                  : C(() =>
                      (function (e) {
                        const t = e._ownerWritableStream,
                          r = t._state;
                        return At(t) || "closed" === r
                          ? u(void 0)
                          : "errored" === r
                          ? c(t._storedError)
                          : zt(e);
                      })(b)
                    ),
                null
              )),
              "closed" === S._state ? R() : h(T, R),
              At(r) || "closed" === r._state)
            ) {
              const t = new TypeError(
                "the destination writable stream closed before all data could be piped to it"
              );
              i ? A(!0, t) : C(() => zr(e, t), !0, t);
            }
            function P() {
              const e = _;
              return d(_, () => (e !== _ ? P() : void 0));
            }
            function E(e, t, r) {
              "errored" === e._state ? r(e._storedError) : p(t, r);
            }
            function C(e, t, o) {
              function n() {
                return (
                  f(
                    e(),
                    () => k(t, o),
                    (e) => k(!0, e)
                  ),
                  null
                );
              }
              m ||
                ((m = !0), "writable" !== r._state || At(r) ? n() : h(P(), n));
            }
            function A(e, t) {
              m ||
                ((m = !0),
                "writable" !== r._state || At(r)
                  ? k(e, t)
                  : h(P(), () => k(e, t)));
            }
            function k(e, t) {
              return (
                Wt(b),
                q(a),
                void 0 !== s && s.removeEventListener("abort", v),
                e ? w(t) : g(void 0),
                null
              );
            }
            y(
              l((e, r) => {
                !(function o(n) {
                  n
                    ? e()
                    : d(
                        m
                          ? u(!0)
                          : d(b._readyPromise, () =>
                              l((e, r) => {
                                K(a, {
                                  _chunkSteps: (r) => {
                                    (_ = d($t(b, r), void 0, t)), e(!1);
                                  },
                                  _closeSteps: () => e(!0),
                                  _errorSteps: r,
                                });
                              })
                            ),
                        o,
                        r
                      );
                })(!1);
              })
            );
          });
        }
        class cr {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!dr(this)) throw vr("desiredSize");
            return _r(this);
          }
          close() {
            if (!dr(this)) throw vr("close");
            if (!gr(this))
              throw new TypeError(
                "The stream is not in a state that permits close"
              );
            br(this);
          }
          enqueue(e = void 0) {
            if (!dr(this)) throw vr("enqueue");
            if (!gr(this))
              throw new TypeError(
                "The stream is not in a state that permits enqueue"
              );
            return yr(this, e);
          }
          error(e = void 0) {
            if (!dr(this)) throw vr("error");
            mr(this, e);
          }
          [T](e) {
            ve(this);
            const t = this._cancelAlgorithm(e);
            return pr(this), t;
          }
          [R](e) {
            const t = this._controlledReadableStream;
            if (this._queue.length > 0) {
              const r = ge(this);
              this._closeRequested && 0 === this._queue.length
                ? (pr(this), Lr(t))
                : fr(this),
                e._chunkSteps(r);
            } else V(t, e), fr(this);
          }
          [P]() {}
        }
        function dr(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_controlledReadableStream"
            ) &&
            e instanceof cr
          );
        }
        function fr(e) {
          hr(e) &&
            (e._pulling
              ? (e._pullAgain = !0)
              : ((e._pulling = !0),
                f(
                  e._pullAlgorithm(),
                  () => (
                    (e._pulling = !1),
                    e._pullAgain && ((e._pullAgain = !1), fr(e)),
                    null
                  ),
                  (t) => (mr(e, t), null)
                )));
        }
        function hr(e) {
          const t = e._controlledReadableStream;
          return (
            !!gr(e) && !!e._started && (!!(Br(t) && Q(t) > 0) || _r(e) > 0)
          );
        }
        function pr(e) {
          (e._pullAlgorithm = void 0),
            (e._cancelAlgorithm = void 0),
            (e._strategySizeAlgorithm = void 0);
        }
        function br(e) {
          if (!gr(e)) return;
          const t = e._controlledReadableStream;
          (e._closeRequested = !0), 0 === e._queue.length && (pr(e), Lr(t));
        }
        function yr(e, t) {
          if (!gr(e)) return;
          const r = e._controlledReadableStream;
          if (Br(r) && Q(r) > 0) Y(r, t, !1);
          else {
            let r;
            try {
              r = e._strategySizeAlgorithm(t);
            } catch (t) {
              throw (mr(e, t), t);
            }
            try {
              we(e, t, r);
            } catch (t) {
              throw (mr(e, t), t);
            }
          }
          fr(e);
        }
        function mr(e, t) {
          const r = e._controlledReadableStream;
          "readable" === r._state && (ve(e), pr(e), Wr(r, t));
        }
        function _r(e) {
          const t = e._controlledReadableStream._state;
          return "errored" === t
            ? null
            : "closed" === t
            ? 0
            : e._strategyHWM - e._queueTotalSize;
        }
        function gr(e) {
          const t = e._controlledReadableStream._state;
          return !e._closeRequested && "readable" === t;
        }
        function wr(e, t, r, o, n, i, s) {
          (t._controlledReadableStream = e),
            (t._queue = void 0),
            (t._queueTotalSize = void 0),
            ve(t),
            (t._started = !1),
            (t._closeRequested = !1),
            (t._pullAgain = !1),
            (t._pulling = !1),
            (t._strategySizeAlgorithm = s),
            (t._strategyHWM = i),
            (t._pullAlgorithm = o),
            (t._cancelAlgorithm = n),
            (e._readableStreamController = t),
            f(
              u(r()),
              () => ((t._started = !0), fr(t), null),
              (e) => (mr(t, e), null)
            );
        }
        function vr(e) {
          return new TypeError(
            `ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`
          );
        }
        function Sr(e) {
          return r((o = e)) && void 0 !== o.getReader
            ? (function (e) {
                let o;
                return (
                  (o = Ar(
                    t,
                    function () {
                      let t;
                      try {
                        t = e.read();
                      } catch (e) {
                        return c(e);
                      }
                      return b(t, (e) => {
                        if (!r(e))
                          throw new TypeError(
                            "The promise returned by the reader.read() method must fulfill with an object"
                          );
                        if (e.done) br(o._readableStreamController);
                        else {
                          const t = e.value;
                          yr(o._readableStreamController, t);
                        }
                      });
                    },
                    function (t) {
                      try {
                        return u(e.cancel(t));
                      } catch (e) {
                        return c(e);
                      }
                    },
                    0
                  )),
                  o
                );
              })(e.getReader())
            : (function (e) {
                let o;
                const n = me(e, "async");
                return (
                  (o = Ar(
                    t,
                    function () {
                      let e;
                      try {
                        e = (function (e) {
                          const t = _(e.nextMethod, e.iterator, []);
                          if (!r(t))
                            throw new TypeError(
                              "The iterator.next() method must return an object"
                            );
                          return t;
                        })(n);
                      } catch (e) {
                        return c(e);
                      }
                      return b(u(e), (e) => {
                        if (!r(e))
                          throw new TypeError(
                            "The promise returned by the iterator.next() method must fulfill with an object"
                          );
                        const t = (function (e) {
                          return Boolean(e.done);
                        })(e);
                        if (t) br(o._readableStreamController);
                        else {
                          const t = (function (e) {
                            return e.value;
                          })(e);
                          yr(o._readableStreamController, t);
                        }
                      });
                    },
                    function (e) {
                      const t = n.iterator;
                      let o, i;
                      try {
                        o = be(t, "return");
                      } catch (e) {
                        return c(e);
                      }
                      if (void 0 === o) return u(void 0);
                      try {
                        i = _(o, t, [e]);
                      } catch (e) {
                        return c(e);
                      }
                      return b(u(i), (e) => {
                        if (!r(e))
                          throw new TypeError(
                            "The promise returned by the iterator.return() method must fulfill with an object"
                          );
                      });
                    },
                    0
                  )),
                  o
                );
              })(e);
          var o;
        }
        function Tr(e, t, r) {
          return $(e, r), (r) => g(e, t, [r]);
        }
        function Rr(e, t, r) {
          return $(e, r), (r) => g(e, t, [r]);
        }
        function Pr(e, t, r) {
          return $(e, r), (r) => _(e, t, [r]);
        }
        function Er(e, t) {
          if ("bytes" != (e = `${e}`))
            throw new TypeError(
              `${t} '${e}' is not a valid enumeration value for ReadableStreamType`
            );
          return e;
        }
        function Cr(e, t) {
          W(e, t);
          const r = null == e ? void 0 : e.preventAbort,
            o = null == e ? void 0 : e.preventCancel,
            n = null == e ? void 0 : e.preventClose,
            i = null == e ? void 0 : e.signal;
          return (
            void 0 !== i &&
              (function (e, t) {
                if (
                  !(function (e) {
                    if ("object" != typeof e || null === e) return !1;
                    try {
                      return "boolean" == typeof e.aborted;
                    } catch (e) {
                      return !1;
                    }
                  })(e)
                )
                  throw new TypeError(`${t} is not an AbortSignal.`);
              })(i, `${t} has member 'signal' that`),
            {
              preventAbort: Boolean(r),
              preventCancel: Boolean(o),
              preventClose: Boolean(n),
              signal: i,
            }
          );
        }
        Object.defineProperties(cr.prototype, {
          close: { enumerable: !0 },
          enqueue: { enumerable: !0 },
          error: { enumerable: !0 },
          desiredSize: { enumerable: !0 },
        }),
          n(cr.prototype.close, "close"),
          n(cr.prototype.enqueue, "enqueue"),
          n(cr.prototype.error, "error"),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(cr.prototype, Symbol.toStringTag, {
              value: "ReadableStreamDefaultController",
              configurable: !0,
            });
        class qr {
          constructor(e = {}, t = {}) {
            void 0 === e ? (e = null) : F(e, "First parameter");
            const r = dt(t, "Second parameter"),
              o = (function (e, t) {
                W(e, t);
                const r = e,
                  o = null == r ? void 0 : r.autoAllocateChunkSize,
                  n = null == r ? void 0 : r.cancel,
                  i = null == r ? void 0 : r.pull,
                  s = null == r ? void 0 : r.start,
                  a = null == r ? void 0 : r.type;
                return {
                  autoAllocateChunkSize:
                    void 0 === o
                      ? void 0
                      : D(o, `${t} has member 'autoAllocateChunkSize' that`),
                  cancel:
                    void 0 === n
                      ? void 0
                      : Tr(n, r, `${t} has member 'cancel' that`),
                  pull:
                    void 0 === i
                      ? void 0
                      : Rr(i, r, `${t} has member 'pull' that`),
                  start:
                    void 0 === s
                      ? void 0
                      : Pr(s, r, `${t} has member 'start' that`),
                  type:
                    void 0 === a
                      ? void 0
                      : Er(a, `${t} has member 'type' that`),
                };
              })(e, "First parameter");
            if ((Or(this), "bytes" === o.type)) {
              if (void 0 !== r.size)
                throw new RangeError(
                  "The strategy for a byte stream cannot have a size function"
                );
              !(function (e, t, r) {
                const o = Object.create(Re.prototype);
                let n, i, s;
                (n = void 0 !== t.start ? () => t.start(o) : () => {}),
                  (i = void 0 !== t.pull ? () => t.pull(o) : () => u(void 0)),
                  (s =
                    void 0 !== t.cancel ? (e) => t.cancel(e) : () => u(void 0));
                const a = t.autoAllocateChunkSize;
                if (0 === a)
                  throw new TypeError(
                    "autoAllocateChunkSize must be greater than 0"
                  );
                Ze(e, o, n, i, s, r, a);
              })(this, o, ut(r, 0));
            } else {
              const e = ct(r);
              !(function (e, t, r, o) {
                const n = Object.create(cr.prototype);
                let i, s, a;
                (i = void 0 !== t.start ? () => t.start(n) : () => {}),
                  (s = void 0 !== t.pull ? () => t.pull(n) : () => u(void 0)),
                  (a =
                    void 0 !== t.cancel ? (e) => t.cancel(e) : () => u(void 0)),
                  wr(e, n, i, s, a, r, o);
              })(this, o, ut(r, 1), e);
            }
          }
          get locked() {
            if (!jr(this)) throw $r("locked");
            return Br(this);
          }
          cancel(e = void 0) {
            return jr(this)
              ? Br(this)
                ? c(
                    new TypeError(
                      "Cannot cancel a stream that already has a reader"
                    )
                  )
                : zr(this, e)
              : c($r("cancel"));
          }
          getReader(e = void 0) {
            if (!jr(this)) throw $r("getReader");
            return void 0 ===
              (function (e, t) {
                W(e, t);
                const r = null == e ? void 0 : e.mode;
                return {
                  mode:
                    void 0 === r
                      ? void 0
                      : Xe(r, `${t} has member 'mode' that`),
                };
              })(e, "First parameter").mode
              ? H(this)
              : et(this);
          }
          pipeThrough(e, t = {}) {
            if (!jr(this)) throw $r("pipeThrough");
            M(e, 1, "pipeThrough");
            const r = (function (e, t) {
                W(e, t);
                const r = null == e ? void 0 : e.readable;
                I(r, "readable", "ReadableWritablePair"),
                  N(r, `${t} has member 'readable' that`);
                const o = null == e ? void 0 : e.writable;
                return (
                  I(o, "writable", "ReadableWritablePair"),
                  mt(o, `${t} has member 'writable' that`),
                  { readable: r, writable: o }
                );
              })(e, "First parameter"),
              o = Cr(t, "Second parameter");
            if (Br(this))
              throw new TypeError(
                "ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream"
              );
            if (Tt(r.writable))
              throw new TypeError(
                "ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream"
              );
            return (
              y(
                ur(
                  this,
                  r.writable,
                  o.preventClose,
                  o.preventAbort,
                  o.preventCancel,
                  o.signal
                )
              ),
              r.readable
            );
          }
          pipeTo(e, t = {}) {
            if (!jr(this)) return c($r("pipeTo"));
            if (void 0 === e) return c("Parameter 1 is required in 'pipeTo'.");
            if (!St(e))
              return c(
                new TypeError(
                  "ReadableStream.prototype.pipeTo's first argument must be a WritableStream"
                )
              );
            let r;
            try {
              r = Cr(t, "Second parameter");
            } catch (e) {
              return c(e);
            }
            return Br(this)
              ? c(
                  new TypeError(
                    "ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"
                  )
                )
              : Tt(e)
              ? c(
                  new TypeError(
                    "ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"
                  )
                )
              : ur(
                  this,
                  e,
                  r.preventClose,
                  r.preventAbort,
                  r.preventCancel,
                  r.signal
                );
          }
          tee() {
            if (!jr(this)) throw $r("tee");
            return ce(
              Pe((e = this)._readableStreamController)
                ? (function (e) {
                    let t,
                      r,
                      o,
                      n,
                      i,
                      s = H(e),
                      a = !1,
                      c = !1,
                      d = !1,
                      f = !1,
                      h = !1;
                    const b = l((e) => {
                      i = e;
                    });
                    function y(e) {
                      p(
                        e._closedPromise,
                        (t) => (
                          e !== s ||
                            (Ne(o._readableStreamController, t),
                            Ne(n._readableStreamController, t),
                            (f && h) || i(void 0)),
                          null
                        )
                      );
                    }
                    function _() {
                      it(s) && (q(s), (s = H(e)), y(s)),
                        K(s, {
                          _chunkSteps: (t) => {
                            m(() => {
                              (c = !1), (d = !1);
                              const r = t;
                              let s = t;
                              if (!f && !h)
                                try {
                                  s = _e(t);
                                } catch (t) {
                                  return (
                                    Ne(o._readableStreamController, t),
                                    Ne(n._readableStreamController, t),
                                    void i(zr(e, t))
                                  );
                                }
                              f || De(o._readableStreamController, r),
                                h || De(n._readableStreamController, s),
                                (a = !1),
                                c ? w() : d && v();
                            });
                          },
                          _closeSteps: () => {
                            (a = !1),
                              f || Ue(o._readableStreamController),
                              h || Ue(n._readableStreamController),
                              o._readableStreamController._pendingPullIntos
                                .length > 0 &&
                                Qe(o._readableStreamController, 0),
                              n._readableStreamController._pendingPullIntos
                                .length > 0 &&
                                Qe(n._readableStreamController, 0),
                              (f && h) || i(void 0);
                          },
                          _errorSteps: () => {
                            a = !1;
                          },
                        });
                    }
                    function g(t, r) {
                      J(s) && (q(s), (s = et(e)), y(s));
                      const l = r ? n : o,
                        u = r ? o : n;
                      st(s, t, 1, {
                        _chunkSteps: (t) => {
                          m(() => {
                            (c = !1), (d = !1);
                            const o = r ? h : f;
                            if (r ? f : h)
                              o || Ge(l._readableStreamController, t);
                            else {
                              let r;
                              try {
                                r = _e(t);
                              } catch (t) {
                                return (
                                  Ne(l._readableStreamController, t),
                                  Ne(u._readableStreamController, t),
                                  void i(zr(e, t))
                                );
                              }
                              o || Ge(l._readableStreamController, t),
                                De(u._readableStreamController, r);
                            }
                            (a = !1), c ? w() : d && v();
                          });
                        },
                        _closeSteps: (e) => {
                          a = !1;
                          const t = r ? h : f,
                            o = r ? f : h;
                          t || Ue(l._readableStreamController),
                            o || Ue(u._readableStreamController),
                            void 0 !== e &&
                              (t || Ge(l._readableStreamController, e),
                              !o &&
                                u._readableStreamController._pendingPullIntos
                                  .length > 0 &&
                                Qe(u._readableStreamController, 0)),
                            (t && o) || i(void 0);
                        },
                        _errorSteps: () => {
                          a = !1;
                        },
                      });
                    }
                    function w() {
                      if (a) return (c = !0), u(void 0);
                      a = !0;
                      const e = Ve(o._readableStreamController);
                      return null === e ? _() : g(e._view, !1), u(void 0);
                    }
                    function v() {
                      if (a) return (d = !0), u(void 0);
                      a = !0;
                      const e = Ve(n._readableStreamController);
                      return null === e ? _() : g(e._view, !0), u(void 0);
                    }
                    function S() {}
                    return (
                      (o = kr(S, w, function (o) {
                        if (((f = !0), (t = o), h)) {
                          const o = ce([t, r]),
                            n = zr(e, o);
                          i(n);
                        }
                        return b;
                      })),
                      (n = kr(S, v, function (o) {
                        if (((h = !0), (r = o), f)) {
                          const o = ce([t, r]),
                            n = zr(e, o);
                          i(n);
                        }
                        return b;
                      })),
                      y(s),
                      [o, n]
                    );
                  })(e)
                : (function (e, t) {
                    const r = H(e);
                    let o,
                      n,
                      i,
                      s,
                      a,
                      c = !1,
                      d = !1,
                      f = !1,
                      h = !1;
                    const b = l((e) => {
                      a = e;
                    });
                    function y() {
                      return c
                        ? ((d = !0), u(void 0))
                        : ((c = !0),
                          K(r, {
                            _chunkSteps: (e) => {
                              m(() => {
                                d = !1;
                                const t = e,
                                  r = e;
                                f || yr(i._readableStreamController, t),
                                  h || yr(s._readableStreamController, r),
                                  (c = !1),
                                  d && y();
                              });
                            },
                            _closeSteps: () => {
                              (c = !1),
                                f || br(i._readableStreamController),
                                h || br(s._readableStreamController),
                                (f && h) || a(void 0);
                            },
                            _errorSteps: () => {
                              c = !1;
                            },
                          }),
                          u(void 0));
                    }
                    function _() {}
                    return (
                      (i = Ar(_, y, function (t) {
                        if (((f = !0), (o = t), h)) {
                          const t = ce([o, n]),
                            r = zr(e, t);
                          a(r);
                        }
                        return b;
                      })),
                      (s = Ar(_, y, function (t) {
                        if (((h = !0), (n = t), f)) {
                          const t = ce([o, n]),
                            r = zr(e, t);
                          a(r);
                        }
                        return b;
                      })),
                      p(
                        r._closedPromise,
                        (e) => (
                          mr(i._readableStreamController, e),
                          mr(s._readableStreamController, e),
                          (f && h) || a(void 0),
                          null
                        )
                      ),
                      [i, s]
                    );
                  })(e)
            );
            var e;
          }
          values(e = void 0) {
            if (!jr(this)) throw $r("values");
            return (function (e, t) {
              const r = H(e),
                o = new re(r, t),
                n = Object.create(oe);
              return (n._asyncIteratorImpl = o), n;
            })(
              this,
              (function (e, t) {
                W(e, "First parameter");
                const r = null == e ? void 0 : e.preventCancel;
                return { preventCancel: Boolean(r) };
              })(e).preventCancel
            );
          }
          [ye](e) {
            return this.values(e);
          }
          static from(e) {
            return Sr(e);
          }
        }
        function Ar(e, t, r, o = 1, n = () => 1) {
          const i = Object.create(qr.prototype);
          return Or(i), wr(i, Object.create(cr.prototype), e, t, r, o, n), i;
        }
        function kr(e, t, r) {
          const o = Object.create(qr.prototype);
          return (
            Or(o), Ze(o, Object.create(Re.prototype), e, t, r, 0, void 0), o
          );
        }
        function Or(e) {
          (e._state = "readable"),
            (e._reader = void 0),
            (e._storedError = void 0),
            (e._disturbed = !1);
        }
        function jr(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_readableStreamController"
            ) &&
            e instanceof qr
          );
        }
        function Br(e) {
          return void 0 !== e._reader;
        }
        function zr(e, r) {
          if (((e._disturbed = !0), "closed" === e._state)) return u(void 0);
          if ("errored" === e._state) return c(e._storedError);
          Lr(e);
          const o = e._reader;
          if (void 0 !== o && it(o)) {
            const e = o._readIntoRequests;
            (o._readIntoRequests = new w()),
              e.forEach((e) => {
                e._closeSteps(void 0);
              });
          }
          return b(e._readableStreamController[T](r), t);
        }
        function Lr(e) {
          e._state = "closed";
          const t = e._reader;
          if (void 0 !== t && (B(t), J(t))) {
            const e = t._readRequests;
            (t._readRequests = new w()),
              e.forEach((e) => {
                e._closeSteps();
              });
          }
        }
        function Wr(e, t) {
          (e._state = "errored"), (e._storedError = t);
          const r = e._reader;
          void 0 !== r && (j(r, t), J(r) ? X(r, t) : at(r, t));
        }
        function $r(e) {
          return new TypeError(
            `ReadableStream.prototype.${e} can only be used on a ReadableStream`
          );
        }
        function Fr(e, t) {
          W(e, t);
          const r = null == e ? void 0 : e.highWaterMark;
          return (
            I(r, "highWaterMark", "QueuingStrategyInit"),
            { highWaterMark: x(r) }
          );
        }
        Object.defineProperties(qr, { from: { enumerable: !0 } }),
          Object.defineProperties(qr.prototype, {
            cancel: { enumerable: !0 },
            getReader: { enumerable: !0 },
            pipeThrough: { enumerable: !0 },
            pipeTo: { enumerable: !0 },
            tee: { enumerable: !0 },
            values: { enumerable: !0 },
            locked: { enumerable: !0 },
          }),
          n(qr.from, "from"),
          n(qr.prototype.cancel, "cancel"),
          n(qr.prototype.getReader, "getReader"),
          n(qr.prototype.pipeThrough, "pipeThrough"),
          n(qr.prototype.pipeTo, "pipeTo"),
          n(qr.prototype.tee, "tee"),
          n(qr.prototype.values, "values"),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(qr.prototype, Symbol.toStringTag, {
              value: "ReadableStream",
              configurable: !0,
            }),
          Object.defineProperty(qr.prototype, ye, {
            value: qr.prototype.values,
            writable: !0,
            configurable: !0,
          });
        const Mr = (e) => e.byteLength;
        n(Mr, "size");
        class Ir {
          constructor(e) {
            M(e, 1, "ByteLengthQueuingStrategy"),
              (e = Fr(e, "First parameter")),
              (this._byteLengthQueuingStrategyHighWaterMark = e.highWaterMark);
          }
          get highWaterMark() {
            if (!Ur(this)) throw xr("highWaterMark");
            return this._byteLengthQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!Ur(this)) throw xr("size");
            return Mr;
          }
        }
        function xr(e) {
          return new TypeError(
            `ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`
          );
        }
        function Ur(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_byteLengthQueuingStrategyHighWaterMark"
            ) &&
            e instanceof Ir
          );
        }
        Object.defineProperties(Ir.prototype, {
          highWaterMark: { enumerable: !0 },
          size: { enumerable: !0 },
        }),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(Ir.prototype, Symbol.toStringTag, {
              value: "ByteLengthQueuingStrategy",
              configurable: !0,
            });
        const Dr = () => 1;
        n(Dr, "size");
        class Nr {
          constructor(e) {
            M(e, 1, "CountQueuingStrategy"),
              (e = Fr(e, "First parameter")),
              (this._countQueuingStrategyHighWaterMark = e.highWaterMark);
          }
          get highWaterMark() {
            if (!Vr(this)) throw Hr("highWaterMark");
            return this._countQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!Vr(this)) throw Hr("size");
            return Dr;
          }
        }
        function Hr(e) {
          return new TypeError(
            `CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`
          );
        }
        function Vr(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_countQueuingStrategyHighWaterMark"
            ) &&
            e instanceof Nr
          );
        }
        function Yr(e, t, r) {
          return $(e, r), (r) => g(e, t, [r]);
        }
        function Qr(e, t, r) {
          return $(e, r), (r) => _(e, t, [r]);
        }
        function Gr(e, t, r) {
          return $(e, r), (r, o) => g(e, t, [r, o]);
        }
        function Zr(e, t, r) {
          return $(e, r), (r) => g(e, t, [r]);
        }
        Object.defineProperties(Nr.prototype, {
          highWaterMark: { enumerable: !0 },
          size: { enumerable: !0 },
        }),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(Nr.prototype, Symbol.toStringTag, {
              value: "CountQueuingStrategy",
              configurable: !0,
            });
        class Jr {
          constructor(e = {}, t = {}, r = {}) {
            void 0 === e && (e = null);
            const o = dt(t, "Second parameter"),
              n = dt(r, "Third parameter"),
              i = (function (e, t) {
                W(e, t);
                const r = null == e ? void 0 : e.cancel,
                  o = null == e ? void 0 : e.flush,
                  n = null == e ? void 0 : e.readableType,
                  i = null == e ? void 0 : e.start,
                  s = null == e ? void 0 : e.transform,
                  a = null == e ? void 0 : e.writableType;
                return {
                  cancel:
                    void 0 === r
                      ? void 0
                      : Zr(r, e, `${t} has member 'cancel' that`),
                  flush:
                    void 0 === o
                      ? void 0
                      : Yr(o, e, `${t} has member 'flush' that`),
                  readableType: n,
                  start:
                    void 0 === i
                      ? void 0
                      : Qr(i, e, `${t} has member 'start' that`),
                  transform:
                    void 0 === s
                      ? void 0
                      : Gr(s, e, `${t} has member 'transform' that`),
                  writableType: a,
                };
              })(e, "First parameter");
            if (void 0 !== i.readableType)
              throw new RangeError("Invalid readableType specified");
            if (void 0 !== i.writableType)
              throw new RangeError("Invalid writableType specified");
            const s = ut(n, 0),
              a = ct(n),
              d = ut(o, 1),
              h = ct(o);
            let p;
            !(function (e, t, r, o, n, i) {
              function s() {
                return t;
              }
              (e._writable = (function (e, t, r, o, n = 1, i = () => 1) {
                const s = Object.create(gt.prototype);
                return (
                  vt(s), xt(s, Object.create(Mt.prototype), e, t, r, o, n, i), s
                );
              })(
                s,
                function (t) {
                  return (function (e, t) {
                    const r = e._transformStreamController;
                    return e._backpressure
                      ? b(e._backpressureChangePromise, () => {
                          const o = e._writable;
                          if ("erroring" === o._state) throw o._storedError;
                          return ao(r, t);
                        })
                      : ao(r, t);
                  })(e, t);
                },
                function () {
                  return (function (e) {
                    const t = e._transformStreamController;
                    if (void 0 !== t._finishPromise) return t._finishPromise;
                    const r = e._readable;
                    t._finishPromise = l((e, r) => {
                      (t._finishPromise_resolve = e),
                        (t._finishPromise_reject = r);
                    });
                    const o = t._flushAlgorithm();
                    return (
                      io(t),
                      f(
                        o,
                        () => (
                          "errored" === r._state
                            ? co(t, r._storedError)
                            : (br(r._readableStreamController), uo(t)),
                          null
                        ),
                        (e) => (
                          mr(r._readableStreamController, e), co(t, e), null
                        )
                      ),
                      t._finishPromise
                    );
                  })(e);
                },
                function (t) {
                  return (function (e, t) {
                    const r = e._transformStreamController;
                    if (void 0 !== r._finishPromise) return r._finishPromise;
                    const o = e._readable;
                    r._finishPromise = l((e, t) => {
                      (r._finishPromise_resolve = e),
                        (r._finishPromise_reject = t);
                    });
                    const n = r._cancelAlgorithm(t);
                    return (
                      io(r),
                      f(
                        n,
                        () => (
                          "errored" === o._state
                            ? co(r, o._storedError)
                            : (mr(o._readableStreamController, t), uo(r)),
                          null
                        ),
                        (e) => (
                          mr(o._readableStreamController, e), co(r, e), null
                        )
                      ),
                      r._finishPromise
                    );
                  })(e, t);
                },
                r,
                o
              )),
                (e._readable = Ar(
                  s,
                  function () {
                    return (function (e) {
                      return ro(e, !1), e._backpressureChangePromise;
                    })(e);
                  },
                  function (t) {
                    return (function (e, t) {
                      const r = e._transformStreamController;
                      if (void 0 !== r._finishPromise) return r._finishPromise;
                      const o = e._writable;
                      r._finishPromise = l((e, t) => {
                        (r._finishPromise_resolve = e),
                          (r._finishPromise_reject = t);
                      });
                      const n = r._cancelAlgorithm(t);
                      return (
                        io(r),
                        f(
                          n,
                          () => (
                            "errored" === o._state
                              ? co(r, o._storedError)
                              : (Ht(o._writableStreamController, t),
                                to(e),
                                uo(r)),
                            null
                          ),
                          (t) => (
                            Ht(o._writableStreamController, t),
                            to(e),
                            co(r, t),
                            null
                          )
                        ),
                        r._finishPromise
                      );
                    })(e, t);
                  },
                  n,
                  i
                )),
                (e._backpressure = void 0),
                (e._backpressureChangePromise = void 0),
                (e._backpressureChangePromise_resolve = void 0),
                ro(e, !0),
                (e._transformStreamController = void 0);
            })(
              this,
              l((e) => {
                p = e;
              }),
              d,
              h,
              s,
              a
            ),
              (function (e, t) {
                const r = Object.create(oo.prototype);
                let o, n, i;
                (o =
                  void 0 !== t.transform
                    ? (e) => t.transform(e, r)
                    : (e) => {
                        try {
                          return so(r, e), u(void 0);
                        } catch (e) {
                          return c(e);
                        }
                      }),
                  (n = void 0 !== t.flush ? () => t.flush(r) : () => u(void 0)),
                  (i =
                    void 0 !== t.cancel ? (e) => t.cancel(e) : () => u(void 0)),
                  (function (e, t, r, o, n) {
                    (t._controlledTransformStream = e),
                      (e._transformStreamController = t),
                      (t._transformAlgorithm = r),
                      (t._flushAlgorithm = o),
                      (t._cancelAlgorithm = n),
                      (t._finishPromise = void 0),
                      (t._finishPromise_resolve = void 0),
                      (t._finishPromise_reject = void 0);
                  })(e, r, o, n, i);
              })(this, i),
              void 0 !== i.start
                ? p(i.start(this._transformStreamController))
                : p(void 0);
          }
          get readable() {
            if (!Kr(this)) throw fo("readable");
            return this._readable;
          }
          get writable() {
            if (!Kr(this)) throw fo("writable");
            return this._writable;
          }
        }
        function Kr(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_transformStreamController"
            ) &&
            e instanceof Jr
          );
        }
        function Xr(e, t) {
          mr(e._readable._readableStreamController, t), eo(e, t);
        }
        function eo(e, t) {
          io(e._transformStreamController),
            Ht(e._writable._writableStreamController, t),
            to(e);
        }
        function to(e) {
          e._backpressure && ro(e, !1);
        }
        function ro(e, t) {
          void 0 !== e._backpressureChangePromise &&
            e._backpressureChangePromise_resolve(),
            (e._backpressureChangePromise = l((t) => {
              e._backpressureChangePromise_resolve = t;
            })),
            (e._backpressure = t);
        }
        Object.defineProperties(Jr.prototype, {
          readable: { enumerable: !0 },
          writable: { enumerable: !0 },
        }),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(Jr.prototype, Symbol.toStringTag, {
              value: "TransformStream",
              configurable: !0,
            });
        class oo {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!no(this)) throw lo("desiredSize");
            return _r(
              this._controlledTransformStream._readable
                ._readableStreamController
            );
          }
          enqueue(e = void 0) {
            if (!no(this)) throw lo("enqueue");
            so(this, e);
          }
          error(e = void 0) {
            if (!no(this)) throw lo("error");
            var t;
            (t = e), Xr(this._controlledTransformStream, t);
          }
          terminate() {
            if (!no(this)) throw lo("terminate");
            !(function (e) {
              const t = e._controlledTransformStream;
              br(t._readable._readableStreamController);
              eo(t, new TypeError("TransformStream terminated"));
            })(this);
          }
        }
        function no(e) {
          return (
            !!r(e) &&
            !!Object.prototype.hasOwnProperty.call(
              e,
              "_controlledTransformStream"
            ) &&
            e instanceof oo
          );
        }
        function io(e) {
          (e._transformAlgorithm = void 0),
            (e._flushAlgorithm = void 0),
            (e._cancelAlgorithm = void 0);
        }
        function so(e, t) {
          const r = e._controlledTransformStream,
            o = r._readable._readableStreamController;
          if (!gr(o))
            throw new TypeError(
              "Readable side is not in a state that permits enqueue"
            );
          try {
            yr(o, t);
          } catch (e) {
            throw (eo(r, e), r._readable._storedError);
          }
          const n = (function (e) {
            return !hr(e);
          })(o);
          n !== r._backpressure && ro(r, !0);
        }
        function ao(e, t) {
          return b(e._transformAlgorithm(t), void 0, (t) => {
            throw (Xr(e._controlledTransformStream, t), t);
          });
        }
        function lo(e) {
          return new TypeError(
            `TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`
          );
        }
        function uo(e) {
          void 0 !== e._finishPromise_resolve &&
            (e._finishPromise_resolve(),
            (e._finishPromise_resolve = void 0),
            (e._finishPromise_reject = void 0));
        }
        function co(e, t) {
          void 0 !== e._finishPromise_reject &&
            (y(e._finishPromise),
            e._finishPromise_reject(t),
            (e._finishPromise_resolve = void 0),
            (e._finishPromise_reject = void 0));
        }
        function fo(e) {
          return new TypeError(
            `TransformStream.prototype.${e} can only be used on a TransformStream`
          );
        }
        Object.defineProperties(oo.prototype, {
          enqueue: { enumerable: !0 },
          error: { enumerable: !0 },
          terminate: { enumerable: !0 },
          desiredSize: { enumerable: !0 },
        }),
          n(oo.prototype.enqueue, "enqueue"),
          n(oo.prototype.error, "error"),
          n(oo.prototype.terminate, "terminate"),
          "symbol" == typeof Symbol.toStringTag &&
            Object.defineProperty(oo.prototype, Symbol.toStringTag, {
              value: "TransformStreamDefaultController",
              configurable: !0,
            }),
          (e.ByteLengthQueuingStrategy = Ir),
          (e.CountQueuingStrategy = Nr),
          (e.ReadableByteStreamController = Re),
          (e.ReadableStream = qr),
          (e.ReadableStreamBYOBReader = nt),
          (e.ReadableStreamBYOBRequest = Te),
          (e.ReadableStreamDefaultController = cr),
          (e.ReadableStreamDefaultReader = Z),
          (e.TransformStream = Jr),
          (e.TransformStreamDefaultController = oo),
          (e.WritableStream = gt),
          (e.WritableStreamDefaultController = Mt),
          (e.WritableStreamDefaultWriter = jt);
      }),
        r(t);
    },
    3328: (e, t, r) => {
      if (!globalThis.ReadableStream)
        try {
          const e = r(1708),
            { emitWarning: t } = e;
          try {
            (e.emitWarning = () => {}),
              Object.assign(globalThis, r(7830)),
              (e.emitWarning = t);
          } catch (r) {
            throw ((e.emitWarning = t), r);
          }
        } catch (e) {
          Object.assign(globalThis, r(5010));
        }
      try {
        const { Blob: e } = r(181);
        e &&
          !e.prototype.stream &&
          (e.prototype.stream = function (e) {
            let t = 0;
            const r = this;
            return new ReadableStream({
              type: "bytes",
              async pull(e) {
                const o = r.slice(t, Math.min(r.size, t + 65536)),
                  n = await o.arrayBuffer();
                (t += n.byteLength),
                  e.enqueue(new Uint8Array(n)),
                  t === r.size && e.close();
              },
            });
          });
      } catch (e) {}
    },
    7288: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var o = r(3720);
      const n = class extends o.A {
        #e = 0;
        #t = "";
        constructor(e, t, r = {}) {
          if (arguments.length < 2)
            throw new TypeError(
              `Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`
            );
          super(e, r), null === r && (r = {});
          const o =
            void 0 === r.lastModified ? Date.now() : Number(r.lastModified);
          Number.isNaN(o) || (this.#e = o), (this.#t = String(t));
        }
        get name() {
          return this.#t;
        }
        get lastModified() {
          return this.#e;
        }
        get [Symbol.toStringTag]() {
          return "File";
        }
        static [Symbol.hasInstance](e) {
          return (
            !!e && e instanceof o.A && /^(File)$/.test(e[Symbol.toStringTag])
          );
        }
      };
    },
    5494: (e, t, r) => {
      "use strict";
      r.d(t, {
        F8: () => u,
        NX: () => d,
        YQ: () => a.A,
        ZH: () => s.A,
        _M: () => f,
        k4: () => c,
      });
      var o = r(3024),
        n = r(6760),
        i = r(5157),
        s = r(7288),
        a = r(3720);
      const { stat: l } = o.promises,
        u = (e, t) => h((0, o.statSync)(e), e, t),
        c = (e, t) => l(e).then((r) => h(r, e, t)),
        d = (e, t) => l(e).then((r) => p(r, e, t)),
        f = (e, t) => p((0, o.statSync)(e), e, t),
        h = (e, t, r = "") =>
          new a.A(
            [
              new b({
                path: t,
                size: e.size,
                lastModified: e.mtimeMs,
                start: 0,
              }),
            ],
            { type: r }
          ),
        p = (e, t, r = "") =>
          new s.A(
            [
              new b({
                path: t,
                size: e.size,
                lastModified: e.mtimeMs,
                start: 0,
              }),
            ],
            (0, n.basename)(t),
            { type: r, lastModified: e.mtimeMs }
          );
      class b {
        #r;
        #o;
        constructor(e) {
          (this.#r = e.path),
            (this.#o = e.start),
            (this.size = e.size),
            (this.lastModified = e.lastModified);
        }
        slice(e, t) {
          return new b({
            path: this.#r,
            lastModified: this.lastModified,
            size: t - e,
            start: this.#o + e,
          });
        }
        async *stream() {
          const { mtimeMs: e } = await l(this.#r);
          if (e > this.lastModified)
            throw new i(
              "The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.",
              "NotReadableError"
            );
          yield* (0, o.createReadStream)(this.#r, {
            start: this.#o,
            end: this.#o + this.size - 1,
          });
        }
        get [Symbol.toStringTag]() {
          return "Blob";
        }
      }
    },
    3720: (e, t, r) => {
      "use strict";
      async function* o(e, t = !0) {
        for (const r of e)
          if ("stream" in r) yield* r.stream();
          else if (ArrayBuffer.isView(r))
            if (t) {
              let e = r.byteOffset;
              const t = r.byteOffset + r.byteLength;
              for (; e !== t; ) {
                const o = Math.min(t - e, 65536),
                  n = r.buffer.slice(e, e + o);
                (e += n.byteLength), yield new Uint8Array(n);
              }
            } else yield r;
          else {
            let e = 0,
              t = r;
            for (; e !== t.size; ) {
              const r = t.slice(e, Math.min(t.size, e + 65536)),
                o = await r.arrayBuffer();
              (e += o.byteLength), yield new Uint8Array(o);
            }
          }
      }
      r.d(t, { A: () => i }), r(3328);
      const n = class e {
        #n = [];
        #i = "";
        #s = 0;
        #a = "transparent";
        constructor(t = [], r = {}) {
          if ("object" != typeof t || null === t)
            throw new TypeError(
              "Failed to construct 'Blob': The provided value cannot be converted to a sequence."
            );
          if ("function" != typeof t[Symbol.iterator])
            throw new TypeError(
              "Failed to construct 'Blob': The object must have a callable @@iterator property."
            );
          if ("object" != typeof r && "function" != typeof r)
            throw new TypeError(
              "Failed to construct 'Blob': parameter 2 cannot convert to dictionary."
            );
          null === r && (r = {});
          const o = new TextEncoder();
          for (const r of t) {
            let t;
            (t = ArrayBuffer.isView(r)
              ? new Uint8Array(
                  r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength)
                )
              : r instanceof ArrayBuffer
              ? new Uint8Array(r.slice(0))
              : r instanceof e
              ? r
              : o.encode(`${r}`)),
              (this.#s += ArrayBuffer.isView(t) ? t.byteLength : t.size),
              this.#n.push(t);
          }
          this.#a = `${void 0 === r.endings ? "transparent" : r.endings}`;
          const n = void 0 === r.type ? "" : String(r.type);
          this.#i = /^[\x20-\x7E]*$/.test(n) ? n : "";
        }
        get size() {
          return this.#s;
        }
        get type() {
          return this.#i;
        }
        async text() {
          const e = new TextDecoder();
          let t = "";
          for await (const r of o(this.#n, !1))
            t += e.decode(r, { stream: !0 });
          return (t += e.decode()), t;
        }
        async arrayBuffer() {
          const e = new Uint8Array(this.size);
          let t = 0;
          for await (const r of o(this.#n, !1)) e.set(r, t), (t += r.length);
          return e.buffer;
        }
        stream() {
          const e = o(this.#n, !0);
          return new globalThis.ReadableStream({
            type: "bytes",
            async pull(t) {
              const r = await e.next();
              r.done ? t.close() : t.enqueue(r.value);
            },
            async cancel() {
              await e.return();
            },
          });
        }
        slice(t = 0, r = this.size, o = "") {
          const { size: n } = this;
          let i = t < 0 ? Math.max(n + t, 0) : Math.min(t, n),
            s = r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
          const a = Math.max(s - i, 0),
            l = this.#n,
            u = [];
          let c = 0;
          for (const e of l) {
            if (c >= a) break;
            const t = ArrayBuffer.isView(e) ? e.byteLength : e.size;
            if (i && t <= i) (i -= t), (s -= t);
            else {
              let r;
              ArrayBuffer.isView(e)
                ? ((r = e.subarray(i, Math.min(t, s))), (c += r.byteLength))
                : ((r = e.slice(i, Math.min(t, s))), (c += r.size)),
                (s -= t),
                u.push(r),
                (i = 0);
            }
          }
          const d = new e([], { type: String(o).toLowerCase() });
          return (d.#s = a), (d.#n = u), d;
        }
        get [Symbol.toStringTag]() {
          return "Blob";
        }
        static [Symbol.hasInstance](e) {
          return (
            e &&
            "object" == typeof e &&
            "function" == typeof e.constructor &&
            ("function" == typeof e.stream ||
              "function" == typeof e.arrayBuffer) &&
            /^(Blob|File)$/.test(e[Symbol.toStringTag])
          );
        }
      };
      Object.defineProperties(n.prototype, {
        size: { enumerable: !0 },
        type: { enumerable: !0 },
        slice: { enumerable: !0 },
      });
      const i = n;
    },
    8435: (e, t, r) => {
      "use strict";
      r.d(t, { $n: () => p, fS: () => h });
      var o = r(3720),
        n = r(7288),
        { toStringTag: i, iterator: s, hasInstance: a } = Symbol,
        l = Math.random,
        u =
          "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(
            ","
          ),
        c = (e, t, r) => (
          (e += ""),
          /^(Blob|File)$/.test(t && t[i])
            ? [
                ((r = void 0 !== r ? r + "" : "File" == t[i] ? t.name : "blob"),
                e),
                t.name !== r || "blob" == t[i] ? new n.A([t], r, t) : t,
              ]
            : [e, t + ""]
        ),
        d = (e, t) =>
          (t ? e : e.replace(/\r?\n|\r/g, "\r\n"))
            .replace(/\n/g, "%0A")
            .replace(/\r/g, "%0D")
            .replace(/"/g, "%22"),
        f = (e, t, r) => {
          if (t.length < r)
            throw new TypeError(
              `Failed to execute '${e}' on 'FormData': ${r} arguments required, but only ${t.length} present.`
            );
        };
      const h = class {
        #l = [];
        constructor(...e) {
          if (e.length)
            throw new TypeError(
              "Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'."
            );
        }
        get [i]() {
          return "FormData";
        }
        [s]() {
          return this.entries();
        }
        static [a](e) {
          return (
            e &&
            "object" == typeof e &&
            "FormData" === e[i] &&
            !u.some((t) => "function" != typeof e[t])
          );
        }
        append(...e) {
          f("append", arguments, 2), this.#l.push(c(...e));
        }
        delete(e) {
          f("delete", arguments, 1),
            (e += ""),
            (this.#l = this.#l.filter(([t]) => t !== e));
        }
        get(e) {
          f("get", arguments, 1), (e += "");
          for (var t = this.#l, r = t.length, o = 0; o < r; o++)
            if (t[o][0] === e) return t[o][1];
          return null;
        }
        getAll(e, t) {
          return (
            f("getAll", arguments, 1),
            (t = []),
            (e += ""),
            this.#l.forEach((r) => r[0] === e && t.push(r[1])),
            t
          );
        }
        has(e) {
          return (
            f("has", arguments, 1), (e += ""), this.#l.some((t) => t[0] === e)
          );
        }
        forEach(e, t) {
          for (var [r, o] of (f("forEach", arguments, 1), this))
            e.call(t, o, r, this);
        }
        set(...e) {
          f("set", arguments, 2);
          var t = [],
            r = !0;
          (e = c(...e)),
            this.#l.forEach((o) => {
              o[0] === e[0] ? r && (r = !t.push(e)) : t.push(o);
            }),
            r && t.push(e),
            (this.#l = t);
        }
        *entries() {
          yield* this.#l;
        }
        *keys() {
          for (var [e] of this) yield e;
        }
        *values() {
          for (var [, e] of this) yield e;
        }
      };
      function p(e, t = o.A) {
        var r = `${l()}${l()}`.replace(/\./g, "").slice(-28).padStart(32, "-"),
          n = [],
          i = `--${r}\r\nContent-Disposition: form-data; name="`;
        return (
          e.forEach((e, t) =>
            "string" == typeof e
              ? n.push(
                  i +
                    d(t) +
                    `"\r\n\r\n${e.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r\n`
                )
              : n.push(
                  i +
                    d(t) +
                    `"; filename="${d(e.name, 1)}"\r\nContent-Type: ${
                      e.type || "application/octet-stream"
                    }\r\n\r\n`,
                  e,
                  "\r\n"
                )
          ),
          n.push(`--${r}--`),
          new t(n, { type: "multipart/form-data; boundary=" + r })
        );
      }
    },
    3115: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          AbortError: () => N,
          Blob: () => H.YQ,
          FetchError: () => h,
          File: () => H.ZH,
          FormData: () => d.fS,
          Headers: () => A,
          Request: () => U,
          Response: () => B,
          blobFrom: () => H.k4,
          blobFromSync: () => H.F8,
          default: () => Y,
          fileFrom: () => H.NX,
          fileFromSync: () => H._M,
          isRedirect: () => O,
        });
      var o = r(7067),
        n = r(4708),
        i = r(8522),
        s = r(7075),
        a = r(4573);
      const l = function (e) {
        if (!/^data:/i.test(e))
          throw new TypeError(
            '`uri` does not appear to be a Data URI (must begin with "data:")'
          );
        const t = (e = e.replace(/\r?\n/g, "")).indexOf(",");
        if (-1 === t || t <= 4) throw new TypeError("malformed data: URI");
        const r = e.substring(5, t).split(";");
        let o = "",
          n = !1;
        const i = r[0] || "text/plain";
        let s = i;
        for (let e = 1; e < r.length; e++)
          "base64" === r[e]
            ? (n = !0)
            : r[e] &&
              ((s += `;${r[e]}`),
              0 === r[e].indexOf("charset=") && (o = r[e].substring(8)));
        r[0] || o.length || ((s += ";charset=US-ASCII"), (o = "US-ASCII"));
        const a = n ? "base64" : "ascii",
          l = unescape(e.substring(t + 1)),
          u = Buffer.from(l, a);
        return (u.type = i), (u.typeFull = s), (u.charset = o), u;
      };
      var u = r(7975),
        c = r(3720),
        d = r(8435);
      class f extends Error {
        constructor(e, t) {
          super(e),
            Error.captureStackTrace(this, this.constructor),
            (this.type = t);
        }
        get name() {
          return this.constructor.name;
        }
        get [Symbol.toStringTag]() {
          return this.constructor.name;
        }
      }
      class h extends f {
        constructor(e, t, r) {
          super(e, t),
            r &&
              ((this.code = this.errno = r.code),
              (this.erroredSysCall = r.syscall));
        }
      }
      const p = Symbol.toStringTag,
        b = (e) =>
          "object" == typeof e &&
          "function" == typeof e.append &&
          "function" == typeof e.delete &&
          "function" == typeof e.get &&
          "function" == typeof e.getAll &&
          "function" == typeof e.has &&
          "function" == typeof e.set &&
          "function" == typeof e.sort &&
          "URLSearchParams" === e[p],
        y = (e) =>
          e &&
          "object" == typeof e &&
          "function" == typeof e.arrayBuffer &&
          "string" == typeof e.type &&
          "function" == typeof e.stream &&
          "function" == typeof e.constructor &&
          /^(Blob|File)$/.test(e[p]),
        m = (e, t) => {
          const r = new URL(t).hostname,
            o = new URL(e).hostname;
          return r === o || r.endsWith(`.${o}`);
        },
        _ = (e, t) => new URL(t).protocol === new URL(e).protocol,
        g = (0, u.promisify)(s.pipeline),
        w = Symbol("Body internals");
      class v {
        constructor(e, { size: t = 0 } = {}) {
          let r = null;
          null === e
            ? (e = null)
            : b(e)
            ? (e = a.Buffer.from(e.toString()))
            : y(e) ||
              a.Buffer.isBuffer(e) ||
              (u.types.isAnyArrayBuffer(e)
                ? (e = a.Buffer.from(e))
                : ArrayBuffer.isView(e)
                ? (e = a.Buffer.from(e.buffer, e.byteOffset, e.byteLength))
                : e instanceof s ||
                  (e instanceof d.fS
                    ? (r = (e = (0, d.$n)(e)).type.split("=")[1])
                    : (e = a.Buffer.from(String(e)))));
          let o = e;
          a.Buffer.isBuffer(e)
            ? (o = s.Readable.from(e))
            : y(e) && (o = s.Readable.from(e.stream())),
            (this[w] = {
              body: e,
              stream: o,
              boundary: r,
              disturbed: !1,
              error: null,
            }),
            (this.size = t),
            e instanceof s &&
              e.on("error", (e) => {
                const t =
                  e instanceof f
                    ? e
                    : new h(
                        `Invalid response body while trying to fetch ${this.url}: ${e.message}`,
                        "system",
                        e
                      );
                this[w].error = t;
              });
        }
        get body() {
          return this[w].stream;
        }
        get bodyUsed() {
          return this[w].disturbed;
        }
        async arrayBuffer() {
          const { buffer: e, byteOffset: t, byteLength: r } = await S(this);
          return e.slice(t, t + r);
        }
        async formData() {
          const e = this.headers.get("content-type");
          if (e.startsWith("application/x-www-form-urlencoded")) {
            const e = new d.fS(),
              t = new URLSearchParams(await this.text());
            for (const [r, o] of t) e.append(r, o);
            return e;
          }
          const { toFormData: t } = await r.e(460).then(r.bind(r, 7460));
          return t(this.body, e);
        }
        async blob() {
          const e =
              (this.headers && this.headers.get("content-type")) ||
              (this[w].body && this[w].body.type) ||
              "",
            t = await this.arrayBuffer();
          return new c.A([t], { type: e });
        }
        async json() {
          const e = await this.text();
          return JSON.parse(e);
        }
        async text() {
          const e = await S(this);
          return new TextDecoder().decode(e);
        }
        buffer() {
          return S(this);
        }
      }
      async function S(e) {
        if (e[w].disturbed)
          throw new TypeError(`body used already for: ${e.url}`);
        if (((e[w].disturbed = !0), e[w].error)) throw e[w].error;
        const { body: t } = e;
        if (null === t) return a.Buffer.alloc(0);
        if (!(t instanceof s)) return a.Buffer.alloc(0);
        const r = [];
        let o = 0;
        try {
          for await (const n of t) {
            if (e.size > 0 && o + n.length > e.size) {
              const r = new h(
                `content size at ${e.url} over limit: ${e.size}`,
                "max-size"
              );
              throw (t.destroy(r), r);
            }
            (o += n.length), r.push(n);
          }
        } catch (t) {
          throw t instanceof f
            ? t
            : new h(
                `Invalid response body while trying to fetch ${e.url}: ${t.message}`,
                "system",
                t
              );
        }
        if (!0 !== t.readableEnded && !0 !== t._readableState.ended)
          throw new h(
            `Premature close of server response while trying to fetch ${e.url}`
          );
        try {
          return r.every((e) => "string" == typeof e)
            ? a.Buffer.from(r.join(""))
            : a.Buffer.concat(r, o);
        } catch (t) {
          throw new h(
            `Could not create Buffer from response body for ${e.url}: ${t.message}`,
            "system",
            t
          );
        }
      }
      (v.prototype.buffer = (0, u.deprecate)(
        v.prototype.buffer,
        "Please use 'response.arrayBuffer()' instead of 'response.buffer()'",
        "node-fetch#buffer"
      )),
        Object.defineProperties(v.prototype, {
          body: { enumerable: !0 },
          bodyUsed: { enumerable: !0 },
          arrayBuffer: { enumerable: !0 },
          blob: { enumerable: !0 },
          json: { enumerable: !0 },
          text: { enumerable: !0 },
          data: {
            get: (0, u.deprecate)(
              () => {},
              "data doesn't exist, use json(), text(), arrayBuffer(), or body instead",
              "https://github.com/node-fetch/node-fetch/issues/1000 (response)"
            ),
          },
        });
      const T = (e, t) => {
          let r,
            o,
            { body: n } = e[w];
          if (e.bodyUsed) throw new Error("cannot clone body after it is used");
          return (
            n instanceof s &&
              "function" != typeof n.getBoundary &&
              ((r = new s.PassThrough({ highWaterMark: t })),
              (o = new s.PassThrough({ highWaterMark: t })),
              n.pipe(r),
              n.pipe(o),
              (e[w].stream = r),
              (n = o)),
            n
          );
        },
        R = (0, u.deprecate)(
          (e) => e.getBoundary(),
          "form-data doesn't follow the spec and requires special treatment. Use alternative package",
          "https://github.com/node-fetch/node-fetch/issues/1167"
        ),
        P = (e, t) =>
          null === e
            ? null
            : "string" == typeof e
            ? "text/plain;charset=UTF-8"
            : b(e)
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : y(e)
            ? e.type || null
            : a.Buffer.isBuffer(e) ||
              u.types.isAnyArrayBuffer(e) ||
              ArrayBuffer.isView(e)
            ? null
            : e instanceof d.fS
            ? `multipart/form-data; boundary=${t[w].boundary}`
            : e && "function" == typeof e.getBoundary
            ? `multipart/form-data;boundary=${R(e)}`
            : e instanceof s
            ? null
            : "text/plain;charset=UTF-8",
        E = async (e, { body: t }) => {
          null === t ? e.end() : await g(t, e);
        },
        C =
          "function" == typeof o.validateHeaderName
            ? o.validateHeaderName
            : (e) => {
                if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)) {
                  const t = new TypeError(
                    `Header name must be a valid HTTP token [${e}]`
                  );
                  throw (
                    (Object.defineProperty(t, "code", {
                      value: "ERR_INVALID_HTTP_TOKEN",
                    }),
                    t)
                  );
                }
              },
        q =
          "function" == typeof o.validateHeaderValue
            ? o.validateHeaderValue
            : (e, t) => {
                if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)) {
                  const t = new TypeError(
                    `Invalid character in header content ["${e}"]`
                  );
                  throw (
                    (Object.defineProperty(t, "code", {
                      value: "ERR_INVALID_CHAR",
                    }),
                    t)
                  );
                }
              };
      class A extends URLSearchParams {
        constructor(e) {
          let t = [];
          if (e instanceof A) {
            const r = e.raw();
            for (const [e, o] of Object.entries(r))
              t.push(...o.map((t) => [e, t]));
          } else if (null == e);
          else {
            if ("object" != typeof e || u.types.isBoxedPrimitive(e))
              throw new TypeError(
                "Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)"
              );
            {
              const r = e[Symbol.iterator];
              if (null == r) t.push(...Object.entries(e));
              else {
                if ("function" != typeof r)
                  throw new TypeError("Header pairs must be iterable");
                t = [...e]
                  .map((e) => {
                    if ("object" != typeof e || u.types.isBoxedPrimitive(e))
                      throw new TypeError(
                        "Each header pair must be an iterable object"
                      );
                    return [...e];
                  })
                  .map((e) => {
                    if (2 !== e.length)
                      throw new TypeError(
                        "Each header pair must be a name/value tuple"
                      );
                    return [...e];
                  });
              }
            }
          }
          return (
            (t =
              t.length > 0
                ? t.map(
                    ([e, t]) => (
                      C(e),
                      q(e, String(t)),
                      [String(e).toLowerCase(), String(t)]
                    )
                  )
                : void 0),
            super(t),
            new Proxy(this, {
              get(e, t, r) {
                switch (t) {
                  case "append":
                  case "set":
                    return (r, o) => (
                      C(r),
                      q(r, String(o)),
                      URLSearchParams.prototype[t].call(
                        e,
                        String(r).toLowerCase(),
                        String(o)
                      )
                    );
                  case "delete":
                  case "has":
                  case "getAll":
                    return (r) => (
                      C(r),
                      URLSearchParams.prototype[t].call(
                        e,
                        String(r).toLowerCase()
                      )
                    );
                  case "keys":
                    return () => (
                      e.sort(),
                      new Set(URLSearchParams.prototype.keys.call(e)).keys()
                    );
                  default:
                    return Reflect.get(e, t, r);
                }
              },
            })
          );
        }
        get [Symbol.toStringTag]() {
          return this.constructor.name;
        }
        toString() {
          return Object.prototype.toString.call(this);
        }
        get(e) {
          const t = this.getAll(e);
          if (0 === t.length) return null;
          let r = t.join(", ");
          return /^content-encoding$/i.test(e) && (r = r.toLowerCase()), r;
        }
        forEach(e, t = void 0) {
          for (const r of this.keys())
            Reflect.apply(e, t, [this.get(r), r, this]);
        }
        *values() {
          for (const e of this.keys()) yield this.get(e);
        }
        *entries() {
          for (const e of this.keys()) yield [e, this.get(e)];
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        raw() {
          return [...this.keys()].reduce(
            (e, t) => ((e[t] = this.getAll(t)), e),
            {}
          );
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return [...this.keys()].reduce((e, t) => {
            const r = this.getAll(t);
            return (e[t] = "host" === t ? r[0] : r.length > 1 ? r : r[0]), e;
          }, {});
        }
      }
      Object.defineProperties(
        A.prototype,
        ["get", "entries", "forEach", "values"].reduce(
          (e, t) => ((e[t] = { enumerable: !0 }), e),
          {}
        )
      );
      const k = new Set([301, 302, 303, 307, 308]),
        O = (e) => k.has(e),
        j = Symbol("Response internals");
      class B extends v {
        constructor(e = null, t = {}) {
          super(e, t);
          const r = null != t.status ? t.status : 200,
            o = new A(t.headers);
          if (null !== e && !o.has("Content-Type")) {
            const t = P(e, this);
            t && o.append("Content-Type", t);
          }
          this[j] = {
            type: "default",
            url: t.url,
            status: r,
            statusText: t.statusText || "",
            headers: o,
            counter: t.counter,
            highWaterMark: t.highWaterMark,
          };
        }
        get type() {
          return this[j].type;
        }
        get url() {
          return this[j].url || "";
        }
        get status() {
          return this[j].status;
        }
        get ok() {
          return this[j].status >= 200 && this[j].status < 300;
        }
        get redirected() {
          return this[j].counter > 0;
        }
        get statusText() {
          return this[j].statusText;
        }
        get headers() {
          return this[j].headers;
        }
        get highWaterMark() {
          return this[j].highWaterMark;
        }
        clone() {
          return new B(T(this, this.highWaterMark), {
            type: this.type,
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected,
            size: this.size,
            highWaterMark: this.highWaterMark,
          });
        }
        static redirect(e, t = 302) {
          if (!O(t))
            throw new RangeError(
              'Failed to execute "redirect" on "response": Invalid status code'
            );
          return new B(null, {
            headers: { location: new URL(e).toString() },
            status: t,
          });
        }
        static error() {
          const e = new B(null, { status: 0, statusText: "" });
          return (e[j].type = "error"), e;
        }
        static json(e = void 0, t = {}) {
          const r = JSON.stringify(e);
          if (void 0 === r)
            throw new TypeError("data is not JSON serializable");
          const o = new A(t && t.headers);
          return (
            o.has("content-type") || o.set("content-type", "application/json"),
            new B(r, { ...t, headers: o })
          );
        }
        get [Symbol.toStringTag]() {
          return "Response";
        }
      }
      Object.defineProperties(B.prototype, {
        type: { enumerable: !0 },
        url: { enumerable: !0 },
        status: { enumerable: !0 },
        ok: { enumerable: !0 },
        redirected: { enumerable: !0 },
        statusText: { enumerable: !0 },
        headers: { enumerable: !0 },
        clone: { enumerable: !0 },
      });
      var z = r(3136),
        L = r(7030);
      function W(e, t = !1) {
        return null == e
          ? "no-referrer"
          : ((e = new URL(e)),
            /^(about|blob|data):$/.test(e.protocol)
              ? "no-referrer"
              : ((e.username = ""),
                (e.password = ""),
                (e.hash = ""),
                t && ((e.pathname = ""), (e.search = "")),
                e));
      }
      const $ = new Set([
        "",
        "no-referrer",
        "no-referrer-when-downgrade",
        "same-origin",
        "origin",
        "strict-origin",
        "origin-when-cross-origin",
        "strict-origin-when-cross-origin",
        "unsafe-url",
      ]);
      function F(e) {
        return (
          !!/^about:(blank|srcdoc)$/.test(e) ||
          "data:" === e.protocol ||
          !!/^(blob|filesystem):$/.test(e.protocol) ||
          (function (e) {
            if (/^(http|ws)s:$/.test(e.protocol)) return !0;
            const t = e.host.replace(/(^\[)|(]$)/g, ""),
              r = (0, L.isIP)(t);
            return (
              !(4 !== r || !/^127\./.test(t)) ||
              !(6 !== r || !/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)) ||
              ("localhost" !== e.host &&
                !e.host.endsWith(".localhost") &&
                "file:" === e.protocol)
            );
          })(e)
        );
      }
      const M = Symbol("Request internals"),
        I = (e) => "object" == typeof e && "object" == typeof e[M],
        x = (0, u.deprecate)(
          () => {},
          ".data is not a valid RequestInit property, use .body instead",
          "https://github.com/node-fetch/node-fetch/issues/1000 (request)"
        );
      class U extends v {
        constructor(e, t = {}) {
          let r;
          if (
            (I(e) ? (r = new URL(e.url)) : ((r = new URL(e)), (e = {})),
            "" !== r.username || "" !== r.password)
          )
            throw new TypeError(`${r} is an url with embedded credentials.`);
          let o = t.method || e.method || "GET";
          if (
            (/^(delete|get|head|options|post|put)$/i.test(o) &&
              (o = o.toUpperCase()),
            !I(t) && "data" in t && x(),
            (null != t.body || (I(e) && null !== e.body)) &&
              ("GET" === o || "HEAD" === o))
          )
            throw new TypeError(
              "Request with GET/HEAD method cannot have body"
            );
          const n = t.body ? t.body : I(e) && null !== e.body ? T(e) : null;
          super(n, { size: t.size || e.size || 0 });
          const i = new A(t.headers || e.headers || {});
          if (null !== n && !i.has("Content-Type")) {
            const e = P(n, this);
            e && i.set("Content-Type", e);
          }
          let s = I(e) ? e.signal : null;
          if (
            ("signal" in t && (s = t.signal),
            null != s &&
              ("object" != typeof (a = s) ||
                ("AbortSignal" !== a[p] && "EventTarget" !== a[p])))
          )
            throw new TypeError(
              "Expected signal to be an instanceof AbortSignal or EventTarget"
            );
          var a;
          let l = null == t.referrer ? e.referrer : t.referrer;
          if ("" === l) l = "no-referrer";
          else if (l) {
            const e = new URL(l);
            l = /^about:(\/\/)?client$/.test(e) ? "client" : e;
          } else l = void 0;
          (this[M] = {
            method: o,
            redirect: t.redirect || e.redirect || "follow",
            headers: i,
            parsedURL: r,
            signal: s,
            referrer: l,
          }),
            (this.follow =
              void 0 === t.follow
                ? void 0 === e.follow
                  ? 20
                  : e.follow
                : t.follow),
            (this.compress =
              void 0 === t.compress
                ? void 0 === e.compress || e.compress
                : t.compress),
            (this.counter = t.counter || e.counter || 0),
            (this.agent = t.agent || e.agent),
            (this.highWaterMark = t.highWaterMark || e.highWaterMark || 16384),
            (this.insecureHTTPParser =
              t.insecureHTTPParser || e.insecureHTTPParser || !1),
            (this.referrerPolicy = t.referrerPolicy || e.referrerPolicy || "");
        }
        get method() {
          return this[M].method;
        }
        get url() {
          return (0, z.format)(this[M].parsedURL);
        }
        get headers() {
          return this[M].headers;
        }
        get redirect() {
          return this[M].redirect;
        }
        get signal() {
          return this[M].signal;
        }
        get referrer() {
          return "no-referrer" === this[M].referrer
            ? ""
            : "client" === this[M].referrer
            ? "about:client"
            : this[M].referrer
            ? this[M].referrer.toString()
            : void 0;
        }
        get referrerPolicy() {
          return this[M].referrerPolicy;
        }
        set referrerPolicy(e) {
          this[M].referrerPolicy = (function (e) {
            if (!$.has(e)) throw new TypeError(`Invalid referrerPolicy: ${e}`);
            return e;
          })(e);
        }
        clone() {
          return new U(this);
        }
        get [Symbol.toStringTag]() {
          return "Request";
        }
      }
      Object.defineProperties(U.prototype, {
        method: { enumerable: !0 },
        url: { enumerable: !0 },
        headers: { enumerable: !0 },
        redirect: { enumerable: !0 },
        clone: { enumerable: !0 },
        signal: { enumerable: !0 },
        referrer: { enumerable: !0 },
        referrerPolicy: { enumerable: !0 },
      });
      const D = (e) => {
        const { parsedURL: t } = e[M],
          r = new A(e[M].headers);
        r.has("Accept") || r.set("Accept", "*/*");
        let o = null;
        if (
          (null === e.body && /^(post|put)$/i.test(e.method) && (o = "0"),
          null !== e.body)
        ) {
          const t = ((e) => {
            const { body: t } = e[w];
            return null === t
              ? 0
              : y(t)
              ? t.size
              : a.Buffer.isBuffer(t)
              ? t.length
              : t &&
                "function" == typeof t.getLengthSync &&
                t.hasKnownLength &&
                t.hasKnownLength()
              ? t.getLengthSync()
              : null;
          })(e);
          "number" != typeof t || Number.isNaN(t) || (o = String(t));
        }
        o && r.set("Content-Length", o),
          "" === e.referrerPolicy &&
            (e.referrerPolicy = "strict-origin-when-cross-origin"),
          e.referrer && "no-referrer" !== e.referrer
            ? (e[M].referrer = (function (
                e,
                { referrerURLCallback: t, referrerOriginCallback: r } = {}
              ) {
                if ("no-referrer" === e.referrer || "" === e.referrerPolicy)
                  return null;
                const o = e.referrerPolicy;
                if ("about:client" === e.referrer) return "no-referrer";
                const n = e.referrer;
                let i = W(n),
                  s = W(n, !0);
                i.toString().length > 4096 && (i = s),
                  t && (i = t(i)),
                  r && (s = r(s));
                const a = new URL(e.url);
                switch (o) {
                  case "no-referrer":
                    return "no-referrer";
                  case "origin":
                    return s;
                  case "unsafe-url":
                    return i;
                  case "strict-origin":
                    return F(i) && !F(a) ? "no-referrer" : s.toString();
                  case "strict-origin-when-cross-origin":
                    return i.origin === a.origin
                      ? i
                      : F(i) && !F(a)
                      ? "no-referrer"
                      : s;
                  case "same-origin":
                    return i.origin === a.origin ? i : "no-referrer";
                  case "origin-when-cross-origin":
                    return i.origin === a.origin ? i : s;
                  case "no-referrer-when-downgrade":
                    return F(i) && !F(a) ? "no-referrer" : i;
                  default:
                    throw new TypeError(`Invalid referrerPolicy: ${o}`);
                }
              })(e))
            : (e[M].referrer = "no-referrer"),
          e[M].referrer instanceof URL && r.set("Referer", e.referrer),
          r.has("User-Agent") || r.set("User-Agent", "node-fetch"),
          e.compress &&
            !r.has("Accept-Encoding") &&
            r.set("Accept-Encoding", "gzip, deflate, br");
        let { agent: n } = e;
        "function" == typeof n && (n = n(t));
        const i = ((e) => {
          if (e.search) return e.search;
          const t = e.href.length - 1,
            r = e.hash || ("#" === e.href[t] ? "#" : "");
          return "?" === e.href[t - r.length] ? "?" : "";
        })(t);
        return {
          parsedURL: t,
          options: {
            path: t.pathname + i,
            method: e.method,
            headers: r[Symbol.for("nodejs.util.inspect.custom")](),
            insecureHTTPParser: e.insecureHTTPParser,
            agent: n,
          },
        };
      };
      class N extends f {
        constructor(e, t = "aborted") {
          super(e, t);
        }
      }
      var H = r(5494);
      const V = new Set(["data:", "http:", "https:"]);
      async function Y(e, t) {
        return new Promise((r, u) => {
          const c = new U(e, t),
            { parsedURL: d, options: f } = D(c);
          if (!V.has(d.protocol))
            throw new TypeError(
              `node-fetch cannot load ${e}. URL scheme "${d.protocol.replace(
                /:$/,
                ""
              )}" is not supported.`
            );
          if ("data:" === d.protocol) {
            const e = l(c.url),
              t = new B(e, { headers: { "Content-Type": e.typeFull } });
            return void r(t);
          }
          const p = ("https:" === d.protocol ? n : o).request,
            { signal: b } = c;
          let y = null;
          const g = () => {
            const e = new N("The operation was aborted.");
            u(e),
              c.body && c.body instanceof s.Readable && c.body.destroy(e),
              y && y.body && y.body.emit("error", e);
          };
          if (b && b.aborted) return void g();
          const w = () => {
              g(), S();
            },
            v = p(d.toString(), f);
          b && b.addEventListener("abort", w);
          const S = () => {
            v.abort(), b && b.removeEventListener("abort", w);
          };
          v.on("error", (e) => {
            u(
              new h(
                `request to ${c.url} failed, reason: ${e.message}`,
                "system",
                e
              )
            ),
              S();
          }),
            (function (e, t) {
              const r = a.Buffer.from("0\r\n\r\n");
              let o,
                n = !1,
                i = !1;
              e.on("response", (e) => {
                const { headers: t } = e;
                n =
                  "chunked" === t["transfer-encoding"] && !t["content-length"];
              }),
                e.on("socket", (t) => {
                  const s = () => {
                      if (n && !i) {
                        const e = new Error("Premature close");
                        (e.code = "ERR_STREAM_PREMATURE_CLOSE"),
                          ((e) => {
                            y && y.body && y.body.destroy(e);
                          })(e);
                      }
                    },
                    l = (e) => {
                      (i = 0 === a.Buffer.compare(e.slice(-5), r)),
                        !i &&
                          o &&
                          (i =
                            0 ===
                              a.Buffer.compare(o.slice(-3), r.slice(0, 3)) &&
                            0 === a.Buffer.compare(e.slice(-2), r.slice(3))),
                        (o = e);
                    };
                  t.prependListener("close", s),
                    t.on("data", l),
                    e.on("close", () => {
                      t.removeListener("close", s), t.removeListener("data", l);
                    });
                });
            })(v),
            process.version < "v14" &&
              v.on("socket", (e) => {
                let t;
                e.prependListener("end", () => {
                  t = e._eventsCount;
                }),
                  e.prependListener("close", (r) => {
                    if (y && t < e._eventsCount && !r) {
                      const e = new Error("Premature close");
                      (e.code = "ERR_STREAM_PREMATURE_CLOSE"),
                        y.body.emit("error", e);
                    }
                  });
              }),
            v.on("response", (e) => {
              v.setTimeout(0);
              const o = (function (e = []) {
                return new A(
                  e
                    .reduce(
                      (e, t, r, o) => (
                        r % 2 == 0 && e.push(o.slice(r, r + 2)), e
                      ),
                      []
                    )
                    .filter(([e, t]) => {
                      try {
                        return C(e), q(e, String(t)), !0;
                      } catch {
                        return !1;
                      }
                    })
                );
              })(e.rawHeaders);
              if (O(e.statusCode)) {
                const n = o.get("Location");
                let i = null;
                try {
                  i = null === n ? null : new URL(n, c.url);
                } catch {
                  if ("manual" !== c.redirect)
                    return (
                      u(
                        new h(
                          `uri requested responds with an invalid redirect URL: ${n}`,
                          "invalid-redirect"
                        )
                      ),
                      void S()
                    );
                }
                switch (c.redirect) {
                  case "error":
                    return (
                      u(
                        new h(
                          `uri requested responds with a redirect, redirect mode is set to error: ${c.url}`,
                          "no-redirect"
                        )
                      ),
                      void S()
                    );
                  case "manual":
                    break;
                  case "follow": {
                    if (null === i) break;
                    if (c.counter >= c.follow)
                      return (
                        u(
                          new h(
                            `maximum redirect reached at: ${c.url}`,
                            "max-redirect"
                          )
                        ),
                        void S()
                      );
                    const n = {
                      headers: new A(c.headers),
                      follow: c.follow,
                      counter: c.counter + 1,
                      agent: c.agent,
                      compress: c.compress,
                      method: c.method,
                      body: T(c),
                      signal: c.signal,
                      size: c.size,
                      referrer: c.referrer,
                      referrerPolicy: c.referrerPolicy,
                    };
                    if (!m(c.url, i) || !_(c.url, i))
                      for (const e of [
                        "authorization",
                        "www-authenticate",
                        "cookie",
                        "cookie2",
                      ])
                        n.headers.delete(e);
                    if (
                      303 !== e.statusCode &&
                      c.body &&
                      t.body instanceof s.Readable
                    )
                      return (
                        u(
                          new h(
                            "Cannot follow redirect with body being a readable stream",
                            "unsupported-redirect"
                          )
                        ),
                        void S()
                      );
                    (303 !== e.statusCode &&
                      ((301 !== e.statusCode && 302 !== e.statusCode) ||
                        "POST" !== c.method)) ||
                      ((n.method = "GET"),
                      (n.body = void 0),
                      n.headers.delete("content-length"));
                    const a = (function (e) {
                      const t = (e.get("referrer-policy") || "").split(
                        /[,\s]+/
                      );
                      let r = "";
                      for (const e of t) e && $.has(e) && (r = e);
                      return r;
                    })(o);
                    return (
                      a && (n.referrerPolicy = a), r(Y(new U(i, n))), void S()
                    );
                  }
                  default:
                    return u(
                      new TypeError(
                        `Redirect option '${c.redirect}' is not a valid value of RequestRedirect`
                      )
                    );
                }
              }
              b &&
                e.once("end", () => {
                  b.removeEventListener("abort", w);
                });
              let n = (0, s.pipeline)(e, new s.PassThrough(), (e) => {
                e && u(e);
              });
              process.version < "v12.10" && e.on("aborted", w);
              const a = {
                  url: c.url,
                  status: e.statusCode,
                  statusText: e.statusMessage,
                  headers: o,
                  size: c.size,
                  counter: c.counter,
                  highWaterMark: c.highWaterMark,
                },
                l = o.get("Content-Encoding");
              if (
                !c.compress ||
                "HEAD" === c.method ||
                null === l ||
                204 === e.statusCode ||
                304 === e.statusCode
              )
                return (y = new B(n, a)), void r(y);
              const d = { flush: i.Z_SYNC_FLUSH, finishFlush: i.Z_SYNC_FLUSH };
              if ("gzip" === l || "x-gzip" === l)
                return (
                  (n = (0, s.pipeline)(n, i.createGunzip(d), (e) => {
                    e && u(e);
                  })),
                  (y = new B(n, a)),
                  void r(y)
                );
              if ("deflate" === l || "x-deflate" === l) {
                const t = (0, s.pipeline)(e, new s.PassThrough(), (e) => {
                  e && u(e);
                });
                return (
                  t.once("data", (e) => {
                    (n =
                      8 == (15 & e[0])
                        ? (0, s.pipeline)(n, i.createInflate(), (e) => {
                            e && u(e);
                          })
                        : (0, s.pipeline)(n, i.createInflateRaw(), (e) => {
                            e && u(e);
                          })),
                      (y = new B(n, a)),
                      r(y);
                  }),
                  void t.once("end", () => {
                    y || ((y = new B(n, a)), r(y));
                  })
                );
              }
              if ("br" === l)
                return (
                  (n = (0, s.pipeline)(n, i.createBrotliDecompress(), (e) => {
                    e && u(e);
                  })),
                  (y = new B(n, a)),
                  void r(y)
                );
              (y = new B(n, a)), r(y);
            }),
            E(v, c).catch(u);
        });
      }
    },
  });
