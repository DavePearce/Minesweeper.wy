function std$array$equals$av1Tav1TII(lhs, rhs, start, end) {
   return ((lhs.length >= end) && (rhs.length >= end)) && function() {
      for(var i = start;i < end;i = i + 1) {
         if(!Wy.equals(lhs[i], rhs[i]))  {
            return false;
         }
      }
      return true;
   }();
}
function std$array$contains$av1Tv1TII(lhs, item, start, end) {
   return function() {
      for(var i = start;i < end;i = i + 1) {
         if(Wy.equals(lhs[i], item))  {
            return true;
         }
      }
      return false;
   }();
}
function std$array$unique_elements$av1TI(items, end) {
   return function() {
      for(var i = 0;i < end;i = i + 1) {
         for(var j = i + 1;j < end;j = j + 1) {
            if(!(!Wy.equals(items[i], items[j])))  {
               return false;
            }
         }
      }
      return true;
   }();
}
function std$array$first_index_of$av1Tv1T(items, item) {
   return std$array$first_index_of$av1Tv1TI(Wy.copy(items), Wy.copy(item), 0);
}
function std$array$first_index_of$av1Tv1TI(items, item, start) {
   var i = start;
   while(i < items.length)  {
      if(Wy.equals(items[i], item))  {
         return i;
      }
      i = i + 1;
   }
   return null;
}
function std$array$last_index_of$av1Tv1T(items, item) {
   var i = items.length;
   while(i > 0)  {
      i = i - 1;
      if(Wy.equals(items[i], item))  {
         return i;
      }
   }
   return null;
}
function std$array$replace$av1Tv1Tv1T(items, old, n) {
   var i = 0;
   var oldItems = Wy.copy(items);
   while(i < items.length)  {
      if(Wy.equals(oldItems[i], old))  {
         items[i] = Wy.copy(n);
      }
      i = i + 1;
   }
   return Wy.copy(items);
}
function std$array$slice$av1TII(items, start, end) {
   if(start === end)  {
      return [];
   } else  {
      var nitems = Wy.array(items[0], end - start);
      return std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(items), start, Wy.copy(nitems), 0, nitems.length);
   }
}
function std$array$append$av1Tav1T(lhs, rhs) {
   if(lhs.length === 0)  {
      return Wy.copy(rhs);
   } else  {
      var rs = std$array$resize$av1TIv1T(Wy.copy(lhs), lhs.length + rhs.length, Wy.copy(lhs[0]));
      return std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(rhs), 0, Wy.copy(rs), lhs.length, rhs.length);
   }
}
function std$array$append$av1Tv1T(items, item) {
   var nitems = Wy.array(item, items.length + 1);
   var i = 0;
   while(i < items.length)  {
      nitems[i] = Wy.copy(items[i]);
      i = i + 1;
   }
   return Wy.copy(nitems);
}
function std$array$append$v1Tav1T(item, items) {
   var nitems = Wy.array(item, items.length + 1);
   var i = 0;
   while(i < items.length)  {
      nitems[i + 1] = Wy.copy(items[i]);
      i = i + 1;
   }
   return Wy.copy(nitems);
}
function std$array$resize$av1TI(src, size) {
   if(src.length === 0)  {
      return Wy.copy(src);
   } else  {
      result = Wy.array(src[0], size);
      var i = 0;
      while(i < size)  {
         result[i] = Wy.copy(src[i]);
         i = i + 1;
      }
      return Wy.copy(result);
   }
}
function std$array$resize$av1TIv1T(items, size, item) {
   var nitems = Wy.array(item, size);
   var i = 0;
   while((i < size) && (i < items.length))  {
      nitems[i] = Wy.copy(items[i]);
      i = i + 1;
   }
   return Wy.copy(nitems);
}
function std$array$copy$av1TQ4uintav1TQ4uintQ4uint(src, srcStart, dest, destStart, length) {
   var i = srcStart;
   var j = destStart;
   var srcEnd = srcStart + length;
   while(i < srcEnd)  {
      dest[j] = Wy.copy(src[i]);
      i = i + 1;
      j = j + 1;
   }
   return Wy.copy(dest);
}
function std$ascii$char$type(x) {
   return (0 <= x) && (x <= 127);
}
function std$ascii$letter$type(x) {
   return ((97 <= x) && (x <= 122)) || ((65 <= x) && (x <= 90));
}
function std$ascii$uppercase$type(x) {
   return (65 <= x) && (x <= 90);
}
function std$ascii$lowercase$type(x) {
   return (97 <= x) && (x <= 122);
}
function std$ascii$digit$type(x) {
   return (48 <= x) && (x <= 57);
}
var std$ascii$NUL = 0;
var std$ascii$SOH = 1;
var std$ascii$STX = 2;
var std$ascii$ETX = 3;
var std$ascii$EOT = 4;
var std$ascii$ENQ = 5;
var std$ascii$ACK = 6;
var std$ascii$BEL = 7;
var std$ascii$BS = 8;
var std$ascii$HT = 9;
var std$ascii$LF = 10;
var std$ascii$VT = 11;
var std$ascii$FF = 12;
var std$ascii$CR = 13;
var std$ascii$SO = 14;
var std$ascii$SI = 15;
var std$ascii$DLE = 16;
var std$ascii$DC1 = 17;
var std$ascii$DC2 = 18;
var std$ascii$DC3 = 19;
var std$ascii$DC4 = 20;
var std$ascii$NAK = 21;
var std$ascii$SYN = 22;
var std$ascii$ETB = 23;
var std$ascii$CAN = 24;
var std$ascii$EM = 25;
var std$ascii$SUB = 26;
var std$ascii$ESC = 27;
var std$ascii$FS = 28;
var std$ascii$GS = 29;
var std$ascii$RS = 30;
var std$ascii$US = 31;
var std$ascii$DEL = 127;
function std$ascii$to_byte$Q4char(v) {
   var mask = parseInt('1',2);
   var r = parseInt('0',2);
   var i = 0;
   while(i < 8)  {
      if((v % 2) === 1)  {
         r = r | mask;
      }
      v = Math.floor(v / 2);
      mask = mask << 1;
      i = i + 1;
   }
   return r;
}
function std$ascii$to_bytes$Q6string(s) {
   var r = Wy.array(parseInt('0',2), s.length);
   var i = 0;
   while(i < s.length)  {
      r[i] = std$ascii$to_byte$Q4char(s[i]);
      i = i + 1;
   }
   return Wy.copy(r);
}
function std$ascii$from_bytes$aU(data) {
   var r = Wy.array(0, data.length);
   var i = 0;
   while(i < data.length)  {
      var v = std$integer$to_uint$U(data[i]);
      if(v >= 127)  {
         v = 63;
      }
      r[i] = v;
      i = i + 1;
   }
   return Wy.copy(r);
}
function std$ascii$is_upper_case$Q4char(c) {
   return (65 <= c) && (c <= 90);
}
function std$ascii$is_lower_case$Q4char(c) {
   return (97 <= c) && (c <= 122);
}
function std$ascii$is_letter$Q4char(c) {
   return ((97 <= c) && (c <= 122)) || ((65 <= c) && (c <= 90));
}
function std$ascii$is_digit$Q4char(c) {
   return (48 <= c) && (c <= 57);
}
function std$ascii$is_whitespace$Q4char(c) {
   return (c === 32) || ((c === 9) || ((c === 10) || (c === 13)));
}
function std$ascii$to_string$I(item) {
   var sign;
   if(item < 0)  {
      sign = false;
      item = -item;
   } else  {
      sign = true;
   }
   var tmp = item;
   var digits = 0;
   do {
      tmp = Math.floor(tmp / 10);
      digits = digits + 1;
   } while(tmp !== 0);
   var r = Wy.array(48, digits);
   do {
      var remainder = item % 10;
      item = Math.floor(item / 10);
      var digit = 48 + remainder;
      digits = digits - 1;
      r[digits] = digit;
   } while(item !== 0);
   if(sign)  {
      return Wy.copy(r);
   } else  {
      return std$array$append$av1Tav1T([parseInt('101101',2)], Wy.copy(r));
   }
}
function std$ascii$to_string$aI(items) {
   var r = [];
   var i = 0;
   while(i < items.length)  {
      if(i !== 0)  {
         r = std$array$append$av1Tav1T(Wy.copy(r), [parseInt('101100',2)]);
      }
      r = std$array$append$av1Tav1T(Wy.copy(r), std$ascii$to_string$I(items[i]));
      i = i + 1;
   }
   return Wy.copy(r);
}
function std$ascii$parse_int$Q5ascii6string(input) {
   var start = 0;
   var negative;
   if(input[0] === 45)  {
      negative = true;
      start = start + 1;
   } else  {
      negative = false;
   }
   var r = 0;
   var i = start;
   while(i < input.length)  {
      var c = input[i];
      r = r * 10;
      if(!std$ascii$is_digit$Q4char(c))  {
         return null;
      }
      r = r + (c - 48);
      i = i + 1;
   }
   if(negative)  {
      return -r;
   } else  {
      return r;
   }
}
function std$filesystem$uint$type(x) {
   return x >= 0;
}
var std$filesystem$READONLY = 0;
var std$filesystem$READWRITE = 1;
function std$filesystem$rwMode$type(x) {
   return (x === std$filesystem$READONLY) || (x === std$filesystem$READWRITE);
}
function std$filesystem$open$Q5ascii6stringQ6rwMode(fileName, mode) {
}
function std$integer$i8$type(x) {
   return (x >= (-128)) && (x <= 127);
}
function std$integer$i16$type(x) {
   return (x >= (-32768)) && (x <= 32768);
}
function std$integer$i32$type(x) {
   return (x >= (-2147483648)) && (x <= 2147483647);
}
// function std$integer$i64$type(x) {
//    return (x >= (--9223372036854775808)) && (x <= 9223372036854775807);
// }
function std$integer$u8$type(x) {
   return (x >= 0) && (x <= 255);
}
function std$integer$u16$type(x) {
   return (x >= 0) && (x <= 65535);
}
function std$integer$u32$type(x) {
   return (x >= 0) && (x <= 4294967295);
}
function std$integer$u64$type(x) {
   return (x >= 0) && (x <= -1);
}
function std$integer$uint$type(x) {
   return x >= 0;
}
function std$integer$nat$type(x) {
   return x >= 0;
}
function std$integer$to_unsigned_byte$Q2u8(v) {
   var mask = parseInt('1',2);
   var r = parseInt('0',2);
   var i = 0;
   while(i < 8)  {
      if((v % 2) === 1)  {
         r = r | mask;
      }
      v = Math.floor(v / 2);
      mask = mask << 1;
      i = i + 1;
   }
   return r;
}
function std$integer$to_signed_byte$Q2i8(v) {
   var u;
   if(v >= 0)  {
      u = v;
   } else  {
      u = v + 256;
   }
   return std$integer$to_unsigned_byte$Q2u8(u);
}
function std$integer$to_string$U(b) {
   var r = Wy.array(0, 98);
   var i = 0;
   while(i < 8)  {
      if((b & parseInt('1',2)) === parseInt('1',2))  {
         r[7 - i] = 49;
      } else  {
         r[7 - i] = 48;
      }
      b = b >> 1;
      i = i + 1;
   }
   return Wy.copy(r);
}
function std$integer$to_uint$U(b) {
   var r = 0;
   var base = 1;
   while(b !== parseInt('0',2))  {
      if((b & parseInt('1',2)) === parseInt('1',2))  {
         r = r + base;
      }
      b = (b >> 1) & parseInt('1111111',2);
      base = base * 2;
   }
   return r;
}
function std$integer$to_uint$aU(bytes) {
   var val = 0;
   var base = 1;
   var i = 0;
   while(i < bytes.length)  {
      var v = std$integer$to_uint$U(bytes[i]) * base;
      val = val + v;
      base = base * 256;
      i = i + 1;
   }
   return val;
}
function std$integer$to_int$U(b) {
   var r = 0;
   var base = 1;
   while(b !== parseInt('0',2))  {
      if((b & parseInt('1',2)) === parseInt('1',2))  {
         r = r + base;
      }
      b = (b >> 1) & parseInt('1111111',2);
      base = base * 2;
   }
   if(r >= 128)  {
      return -(256 - r);
   } else  {
      return r;
   }
}
function std$integer$to_int$aU(bytes) {
   var val = 0;
   var base = 1;
   var i = 0;
   while(i < bytes.length)  {
      var v = std$integer$to_uint$U(bytes[i]) * base;
      val = val + v;
      base = base * 256;
      i = i + 1;
   }
   if(val >= Math.floor(base / 2))  {
      return -(base - val);
   } else  {
      return val;
   }
}
function std$io$print$I(value) {
}
function std$io$print$Q5ascii6string(value) {
}
function std$io$println$I(value) {
}
function std$io$println$Q5ascii6string(value) {
}
function std$math$abs$I(x) {
   if(x < 0)  {
      return -x;
   } else  {
      return x;
   }
}
function std$math$max$II(a, b) {
   if(a < b)  {
      return b;
   } else  {
      return a;
   }
}
function std$math$min$II(a, b) {
   if(a > b)  {
      return b;
   } else  {
      return a;
   }
}
function std$math$pow$II(base, exponent) {
   var r = 1;
   var i = 0;
   while(i < exponent)  {
      r = r * base;
      i = i + 1;
   }
   return r;
}
function std$math$isqrt$I(x) {
   var square = 1;
   var delta = 3;
   while(square <= x)  {
      square = square + delta;
      delta = delta + 2;
   }
   return Math.floor(delta / 2) - 1;
}
function std$set$ArraySet$type(v) {
   return std$array$unique_elements$av1TI(Wy.copy(v.items), v.length);
}
function std$set$insert$Q8ArraySetv1T(set, item) {
   if(std$array$contains$av1Tv1TII(Wy.copy(set.items), Wy.copy(item), 0, set.length))  {
      return Wy.copy(set);
   } else  {
      return std$vector$push$Q6Vectorv1T(Wy.copy(set), Wy.copy(item));
   }
}
function std$utf8$uint$type(x) {
   return x >= 0;
}
function std$utf8$char$type(c) {
   return (0 <= c) && (c <= 1112064);
}
function std$utf8$is_internal$U(data) {
   return (data & std$utf8$TRAILING_BYTE_MASK) === data;
}
function std$utf8$is_start_one$U(data) {
   return (data & std$utf8$ONE_BYTE_MASK) === data;
}
function std$utf8$is_start_two$U(data) {
   return (data & std$utf8$TWO_BYTE_MASK) === data;
}
function std$utf8$is_start_three$U(data) {
   return (data & std$utf8$THREE_BYTE_MASK) === data;
}
function std$utf8$is_start_four$U(data) {
   return (data & std$utf8$THREE_BYTE_MASK) === data;
}
function std$utf8$is_start_n$UQ4uint(data, len) {
   return ((len !== 1) || (std$utf8$is_start_one$U(data) || (std$utf8$is_start_two$U(data) || (std$utf8$is_start_three$U(data) || std$utf8$is_start_four$U(data))))) && ((len !== 2) || (std$utf8$is_start_two$U(data) || (std$utf8$is_start_three$U(data) || std$utf8$is_start_four$U(data)))) && ((len !== 3) || (std$utf8$is_start_three$U(data) || std$utf8$is_start_four$U(data))) && ((len !== 4) || std$utf8$is_start_four$U(data));
}
function std$utf8$valid_2nd_byte$aUQ4uint(chars, i) {
   return ((i <= 0) || (!std$utf8$is_internal$U(chars[i]))) || std$utf8$is_start_n$UQ4uint(chars[i - 1], 2);
}
function std$utf8$valid_3rd_byte$aUQ4uint(chars, i) {
   return ((i <= 1) || (!std$utf8$is_internal$U(chars[i]))) || std$utf8$is_start_n$UQ4uint(chars[i - 2], 3);
}
function std$utf8$valid_4th_byte$aUQ4uint(chars, i) {
   return ((i <= 2) || (!std$utf8$is_internal$U(chars[i]))) || std$utf8$is_start_n$UQ4uint(chars[i - 2], 4);
}
function std$utf8$string$type(chars) {
   return function() {
      for(var i = 0;i < chars.length;i = i + 1) {
         if(!std$utf8$valid_2nd_byte$aUQ4uint(Wy.copy(chars), i))  {
            return false;
         }
      }
      return true;
   }() && function() {
      for(var i = 0;i < chars.length;i = i + 1) {
         if(!std$utf8$valid_3rd_byte$aUQ4uint(Wy.copy(chars), i))  {
            return false;
         }
      }
      return true;
   }() && function() {
      for(var i = 0;i < chars.length;i = i + 1) {
         if(!std$utf8$valid_4th_byte$aUQ4uint(Wy.copy(chars), i))  {
            return false;
         }
      }
      return true;
   }();
}
var std$utf8$ONE_BYTE_MASK = parseInt('1111111',2);
var std$utf8$TWO_BYTE_MASK = parseInt('11011111',2);
var std$utf8$THREE_BYTE_MASK = parseInt('11101111',2);
var std$utf8$FOUR_BYTE_MASK = parseInt('11110111',2);
var std$utf8$TRAILING_BYTE_MASK = parseInt('10111111',2);
function std$utf8$length$Q6string(str) {
   var i = 0;
   var len = 0;
   while(i < str.length)  {
      var data = str[i];
      if((data & std$utf8$TRAILING_BYTE_MASK) !== data)  {
         len = len + 1;
      }
      i = i + 1;
   }
   return len;
}
function std$vector$Vector$type($) {
   return $.length <= $.items.length;
}
function std$vector$Vector() {
   return new Wy.Record({items: [], length: 0});
}
function std$vector$Vector$av1T(items) {
   return new Wy.Record({items: Wy.copy(items), length: items.length});
}
function std$vector$top$Q6Vector(vec) {
   return Wy.copy(vec.items[vec.length - 1]);
}
function std$vector$size$Q6Vector(vec) {
   return vec.length;
}
function std$vector$get$Q6VectorI(vec, ith) {
   return Wy.copy(vec.items[ith]);
}
function std$vector$push$Q6Vectorv1T(vec, item) {
   if(vec.length === vec.items.length)  {
      var nlen = (vec.length * 2) + 1;
      vec.items = std$array$resize$av1TIv1T(Wy.copy(vec.items), nlen, Wy.copy(item));
   } else  {
      vec.items[vec.length] = Wy.copy(item);
   }
   vec.length = vec.length + 1;
   return Wy.copy(vec);
}
function std$vector$pop$Q6Vector(vec) {
   vec.length = vec.length - 1;
   return Wy.copy(vec);
}
function std$vector$set$Q6VectorIv1T(vec, ith, item) {
   vec.items[ith] = Wy.copy(item);
   return Wy.copy(vec);
}
function std$vector$clear$Q6Vector(vec) {
   vec.length = 0;
   return Wy.copy(vec);
}
function std$vector$equals$Q6VectorQ6Vector(lhs, rhs) {
   return (lhs.length === rhs.length) && std$array$equals$av1Tav1TII(Wy.copy(lhs.items), Wy.copy(rhs.items), 0, lhs.length);
}
