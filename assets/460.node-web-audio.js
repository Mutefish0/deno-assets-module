"use strict";
(exports.id = 460),
  (exports.ids = [460]),
  (exports.modules = {
    7460: (e, t, n) => {
      n.d(t, { toFormData: () => D });
      var a = n(5494),
        r = n(8435);
      let i = 0;
      const s = {
        START_BOUNDARY: i++,
        HEADER_FIELD_START: i++,
        HEADER_FIELD: i++,
        HEADER_VALUE_START: i++,
        HEADER_VALUE: i++,
        HEADER_VALUE_ALMOST_DONE: i++,
        HEADERS_ALMOST_DONE: i++,
        PART_DATA_START: i++,
        PART_DATA: i++,
        END: i++,
      };
      let o = 1;
      const d = o,
        E = (o *= 2),
        A = (e) => 32 | e,
        h = () => {};
      class l {
        constructor(e) {
          (this.index = 0),
            (this.flags = 0),
            (this.onHeaderEnd = h),
            (this.onHeaderField = h),
            (this.onHeadersEnd = h),
            (this.onHeaderValue = h),
            (this.onPartBegin = h),
            (this.onPartData = h),
            (this.onPartEnd = h),
            (this.boundaryChars = {}),
            (e = "\r\n--" + e);
          const t = new Uint8Array(e.length);
          for (let n = 0; n < e.length; n++)
            (t[n] = e.charCodeAt(n)), (this.boundaryChars[t[n]] = !0);
          (this.boundary = t),
            (this.lookbehind = new Uint8Array(this.boundary.length + 8)),
            (this.state = s.START_BOUNDARY);
        }
        write(e) {
          let t = 0;
          const n = e.length;
          let a = this.index,
            {
              lookbehind: r,
              boundary: i,
              boundaryChars: o,
              index: h,
              state: l,
              flags: D,
            } = this;
          const c = this.boundary.length,
            f = c - 1,
            T = e.length;
          let _, R;
          const u = (e) => {
              this[e + "Mark"] = t;
            },
            H = (e) => {
              delete this[e + "Mark"];
            },
            b = (e, t, n, a) => {
              (void 0 !== t && t === n) || this[e](a && a.subarray(t, n));
            },
            L = (n, a) => {
              const r = n + "Mark";
              r in this &&
                (a
                  ? (b(n, this[r], t, e), delete this[r])
                  : (b(n, this[r], e.length, e), (this[r] = 0)));
            };
          for (t = 0; t < n; t++)
            switch (((_ = e[t]), l)) {
              case s.START_BOUNDARY:
                if (h === i.length - 2) {
                  if (45 === _) D |= E;
                  else if (13 !== _) return;
                  h++;
                  break;
                }
                if (h - 1 == i.length - 2) {
                  if (D & E && 45 === _) (l = s.END), (D = 0);
                  else {
                    if (D & E || 10 !== _) return;
                    (h = 0), b("onPartBegin"), (l = s.HEADER_FIELD_START);
                  }
                  break;
                }
                _ !== i[h + 2] && (h = -2), _ === i[h + 2] && h++;
                break;
              case s.HEADER_FIELD_START:
                (l = s.HEADER_FIELD), u("onHeaderField"), (h = 0);
              case s.HEADER_FIELD:
                if (13 === _) {
                  H("onHeaderField"), (l = s.HEADERS_ALMOST_DONE);
                  break;
                }
                if ((h++, 45 === _)) break;
                if (58 === _) {
                  if (1 === h) return;
                  L("onHeaderField", !0), (l = s.HEADER_VALUE_START);
                  break;
                }
                if (((R = A(_)), R < 97 || R > 122)) return;
                break;
              case s.HEADER_VALUE_START:
                if (32 === _) break;
                u("onHeaderValue"), (l = s.HEADER_VALUE);
              case s.HEADER_VALUE:
                13 === _ &&
                  (L("onHeaderValue", !0),
                  b("onHeaderEnd"),
                  (l = s.HEADER_VALUE_ALMOST_DONE));
                break;
              case s.HEADER_VALUE_ALMOST_DONE:
                if (10 !== _) return;
                l = s.HEADER_FIELD_START;
                break;
              case s.HEADERS_ALMOST_DONE:
                if (10 !== _) return;
                b("onHeadersEnd"), (l = s.PART_DATA_START);
                break;
              case s.PART_DATA_START:
                (l = s.PART_DATA), u("onPartData");
              case s.PART_DATA:
                if (((a = h), 0 === h)) {
                  for (t += f; t < T && !(e[t] in o); ) t += c;
                  (t -= f), (_ = e[t]);
                }
                if (h < i.length)
                  i[h] === _ ? (0 === h && L("onPartData", !0), h++) : (h = 0);
                else if (h === i.length)
                  h++, 13 === _ ? (D |= d) : 45 === _ ? (D |= E) : (h = 0);
                else if (h - 1 === i.length)
                  if (D & d) {
                    if (((h = 0), 10 === _)) {
                      (D &= ~d),
                        b("onPartEnd"),
                        b("onPartBegin"),
                        (l = s.HEADER_FIELD_START);
                      break;
                    }
                  } else
                    D & E && 45 === _
                      ? (b("onPartEnd"), (l = s.END), (D = 0))
                      : (h = 0);
                if (h > 0) r[h - 1] = _;
                else if (a > 0) {
                  const e = new Uint8Array(
                    r.buffer,
                    r.byteOffset,
                    r.byteLength
                  );
                  b("onPartData", 0, a, e), (a = 0), u("onPartData"), t--;
                }
                break;
              case s.END:
                break;
              default:
                throw new Error(`Unexpected state entered: ${l}`);
            }
          L("onHeaderField"),
            L("onHeaderValue"),
            L("onPartData"),
            (this.index = h),
            (this.state = l),
            (this.flags = D);
        }
        end() {
          if (
            (this.state === s.HEADER_FIELD_START && 0 === this.index) ||
            (this.state === s.PART_DATA && this.index === this.boundary.length)
          )
            this.onPartEnd();
          else if (this.state !== s.END)
            throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
      async function D(e, t) {
        if (!/multipart/i.test(t)) throw new TypeError("Failed to fetch");
        const n = t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
        if (!n)
          throw new TypeError(
            "no or bad content-type header, no multipart boundary"
          );
        const i = new l(n[1] || n[2]);
        let s, o, d, E, A, h;
        const D = [],
          c = new r.fS(),
          f = (e) => {
            d += u.decode(e, { stream: !0 });
          },
          T = (e) => {
            D.push(e);
          },
          _ = () => {
            const e = new a.ZH(D, h, { type: A });
            c.append(E, e);
          },
          R = () => {
            c.append(E, d);
          },
          u = new TextDecoder("utf-8");
        u.decode(),
          (i.onPartBegin = function () {
            (i.onPartData = f),
              (i.onPartEnd = R),
              (s = ""),
              (o = ""),
              (d = ""),
              (E = ""),
              (A = ""),
              (h = null),
              (D.length = 0);
          }),
          (i.onHeaderField = function (e) {
            s += u.decode(e, { stream: !0 });
          }),
          (i.onHeaderValue = function (e) {
            o += u.decode(e, { stream: !0 });
          }),
          (i.onHeaderEnd = function () {
            if (
              ((o += u.decode()),
              (s = s.toLowerCase()),
              "content-disposition" === s)
            ) {
              const e = o.match(
                /\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i
              );
              e && (E = e[2] || e[3] || ""),
                (h = (function (e) {
                  const t = e.match(
                    /\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i
                  );
                  if (!t) return;
                  const n = t[2] || t[3] || "";
                  let a = n.slice(n.lastIndexOf("\\") + 1);
                  return (
                    (a = a.replace(/%22/g, '"')),
                    (a = a.replace(/&#(\d{4});/g, (e, t) =>
                      String.fromCharCode(t)
                    )),
                    a
                  );
                })(o)),
                h && ((i.onPartData = T), (i.onPartEnd = _));
            } else "content-type" === s && (A = o);
            (o = ""), (s = "");
          });
        for await (const t of e) i.write(t);
        return i.end(), c;
      }
    },
  });
