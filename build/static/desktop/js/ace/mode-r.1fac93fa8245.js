ace.define("ace/mode/tex_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("../lib/lang"),s=e("./text_highlight_rules").TextHighlightRules,o=function(e){e||(e="text"),this.$rules={start:[{token:"comment",regex:"%.*$"},{token:e,regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b",next:"nospell"},{token:"keyword",regex:"\\\\(?:[a-zA-z0-9]+|[^a-zA-z0-9])"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])}]"},{token:e,regex:"\\s+"}],nospell:[{token:"comment",regex:"%.*$",next:"start"},{token:"nospell."+e,regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b"},{token:"keyword",regex:"\\\\(?:[a-zA-z0-9]+|[^a-zA-z0-9])",next:"start"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])]"},{token:"paren.keyword.operator",regex:"}",next:"start"},{token:"nospell."+e,regex:"\\s+"},{token:"nospell."+e,regex:"\\w+"}]}};r.inherits(o,s),t.TexHighlightRules=o}),ace.define("ace/mode/r_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules","ace/mode/tex_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/lang"),s=e("./text_highlight_rules").TextHighlightRules,o=e("./tex_highlight_rules").TexHighlightRules,u=function(){var e="function|if|in|break|next|repeat|else|for|return|switch|while|try|tryCatch|stop|warning|require|library|attach|detach|source|setMethod|setGeneric|setGroupGeneric|setClass|Arg|Cstack_info|Encoding<-|Filter|I|ISOdatetime|LETTERS|La_version|Math.Date|Math.data.frame|Math.factor|NCOL|Negate|OlsonNames|Ops.POSIXt|Ops.difftime|Ops.numeric_version|Position|R.home|R.version.string|RNGversion|Re|Reduce|Summary.POSIXct|Summary.data.frame|Summary.factor|Summary.ordered|Sys.chmod|Sys.getlocale|Sys.glob|Sys.localeconv|Sys.setFileTime|Sys.setlocale|Sys.time|Sys.umask|Sys.which|UseMethod|[.Date|[.POSIXct|[.data.frame|[.factor|[.listof|[.numeric_version|[.simple.list|[<-|[<-.POSIXct|[<-.data.frame|[<-.numeric_version|[[.Date|[[.data.frame|[[.numeric_version|[[<-.data.frame|[[<-.numeric_version|abbreviate|acos|addNA|agrep|alist|all.equal|all.equal.character|all.equal.envRefClass|all.equal.factor|all.equal.language|all.equal.numeric|all.names|any|anyDuplicated.array|anyDuplicated.default|anyNA|anyNA.numeric_version|aperm.default|append|args|arrayInd|as.Date.POSIXct|as.Date.character|as.Date.dates|as.Date.factor|as.POSIXct|as.POSIXct.POSIXlt|as.POSIXct.dates|as.POSIXct.numeric|as.POSIXlt.Date|as.POSIXlt.character|as.POSIXlt.dates|as.POSIXlt.factor|as.array|as.call|as.character.Date|as.character.condition|as.character.error|as.character.hexmode|as.character.octmode|as.complex|as.data.frame.AsIs|as.data.frame.POSIXct|as.data.frame.array|as.data.frame.complex|as.data.frame.default|as.data.frame.factor|as.data.frame.list|as.data.frame.matrix|as.data.frame.noquote|as.data.frame.numeric_version|as.data.frame.raw|as.data.frame.ts|as.difftime|as.double.POSIXlt|as.environment|as.expression.default|as.function|as.hexmode|as.list|as.list.POSIXct|as.list.default|as.list.factor|as.list.numeric_version|as.logical.factor|as.matrix.POSIXlt|as.matrix.default|as.name|as.null.default|as.numeric_version|as.ordered|as.pairlist|as.raw|as.single.default|as.table|as.vector|asNamespace|asS4|asinh|atan|atanh|attachNamespace|attr.all.equal|attributes|autoload|backsolve|basename|besselJ|besselY|bindingIsActive|bindtextdomain|bitwNot|bitwShiftL|bitwXor|body<-|break|browserCondition|browserText|by|by.default|c|c.POSIXct|c.noquote|c.warnings|callCC|casefold|cbind|ceiling|charToRaw|charmatch|check_tzones|chol.default|choose|class<-|close|close.srcfile|closeAllConnections|colMeans|colnames|commandArgs|comment<-|computeRestarts|conditionCall.condition|conditionMessage.condition|contributors|cosh|crossprod|cummin|cumsum|cut|cut.POSIXt|dQuote|data.frame|date|debuggingState|default.stringsAsFactors|deparse|detach|determinant.matrix|diag|diff|diff.POSIXt|difftime|dim|dim<-|dimnames.data.frame|dimnames<-.data.frame|dir.create|dirname|dontCheck|dput|droplevels|droplevels.factor|duplicated|duplicated.array|duplicated.default|duplicated.numeric_version|dyn.unload|eapply|emptyenv|enc2utf8|enquote|environment|environmentIsLocked|eval|evalq|exp|expm1|extSoftVersion|factorial|file|file.append|file.copy|file.exists|file.link|file.mtime|file.remove|file.show|file.symlink|findInterval|findRestart|flush|for|forceAndCall|formals<-|format.AsIs|format.POSIXct|format.data.frame|format.difftime|format.hexmode|format.libraryIQR|format.octmode|format.pval|formatC|forwardsolve|gamma|gc.time|gctorture|get|getAllConnections|getCallingDLLe|getDLLRegisteredRoutines|getDLLRegisteredRoutines.character|getExportedValue|getLoadedDLLs|getNamespaceExports|getNamespaceInfo|getNamespaceUsers|getNativeSymbolInfo|getRversion|getTaskCallbackNames|gettext|getwd|globalenv|grep|grepl|gzcon|iconv|icuGetCollate|identical|if|importIntoEnv|intToBits|integer|interactive|inverse.rle|invokeRestart|is.R|is.atomic|is.character|is.data.frame|is.element|is.expression|is.finite|is.infinite|is.language|is.loaded|is.matrix|is.na.POSIXlt|is.na.numeric_version|is.na<-.default|is.na<-.numeric_version|is.nan|is.numeric|is.numeric.POSIXt|is.numeric_version|is.ordered|is.pairlist|is.qr|is.recursive|is.symbol|is.unsorted|isBaseNamespace|isNamespace|isOpen|isS4|isSymmetric|isTRUE|isdebugged|julian|julian.POSIXt|kappa.default|kappa.qr|l10n_info|labels.default|last.warning|lazyLoadDBexec|lbeta|length|length<-|lengths|levels|levels<-|lfactorial|libcurlVersion|library.dynam|licence|list|list.files|load|loadedNamespaces|local|lockEnvironment|log10|log2|logical|ls|make.unique|mapply|mat.or.vec|match.arg|match.fun|max|mean|mean.POSIXct|mean.default|mem.limits|memDecompress|merge|merge.default|mget|missing|mode<-|month.name|months.Date|mostattributes<-|names.POSIXlt|names<-.POSIXlt|namespaceImport|namespaceImportFrom|nargs|ncol|next|nlevels|norm|nrow|numeric_version|objects|oldClass<-|open|open.srcfile|open.srcfilecopy|order|outer|packageEvent|packageStartupMessage|pairlist|parent.env<-|parse|paste|path.expand|pcre_config|pipe|pmax|pmin|polyroot|pretty|prettyNum|print.AsIs|print.DLLInfoList|print.Date|print.NativeRoutineList|print.POSIXlt|print.condition|print.data.frame|print.difftime|print.function|print.libraryIQR|print.noquote|print.octmode|print.proc_time|print.rle|print.srcfile|print.summary.table|print.table|prmatrix|prod|provideDimnames|pushBack|q|qr.Q|qr.X|qr.default|qr.qty|qr.resid|quarters|quarters.POSIXt|quote|range.default|rapply|rawConnection|rawShift|rawToChar|rbind.data.frame|read.dcf|readChar|readRDS|readline|regexec|registerS3method|regmatches|remove|rep|rep.POSIXct|rep.factor|rep.numeric_version|repeat|replicate|requireNamespace|restartFormals|return|rev|rle|round|round.POSIXt|row.names|row.names.default|row.names<-.data.frame|rowMeans|rownames|rowsum|rowsum.default|sample|sapply|save.image|scale|scan|searchpaths|seek.connection|seq.Date|seq.default|seq_along|sequence|set.seed|setNamespaceInfo|setTimeLimit|setequal|shQuote|sign|signif|simpleError|simpleWarning|sin|sinh|sink.number|slice.index|socketSelect|solve.default|sort|sort.default|sort.list|split|split.POSIXct|split.default|split<-.data.frame|sprintf|srcfile|srcfilecopy|standardGeneric|stdin|stop|storage.mode|strftime|strsplit|strtrim|strwrap|subset|subset.default|substitute|substr<-|substring<-|summary|summary.POSIXct|summary.connection|summary.default|summary.matrix|summary.srcfile|summary.table|suppressPackageStartupMessages|svd|switch|sys.calls|sys.frames|sys.load.image|sys.on.exit|sys.parents|sys.source|system|system.time|t|t.default|tabulate|tanh|tapply|tcrossprod|tempfile|textConnection|toString|tolower|toupper|traceback|tracingState|transform.data.frame|trigamma|trunc|trunc.POSIXt|truncate.connection|tryCatch|unclass|union|unique.POSIXlt|unique.data.frame|unique.matrix|unique.warnings|units.difftime|units<-.difftime|unlink|unloadNamespace|unname|unsplit|untracemem|upper.tri|utf8ToInt|vector|warning|weekdays|weekdays.POSIXt|which.max|while|with.default|withRestarts|within|within.list|write.dcf|writeChar|xor|xor.octmode|xtfrm|xtfrm.Date|xtfrm.POSIXlt|xtfrm.default|xtfrm.factor|xzfile|.hexmode",t="builtins|options|?NA|abs|append|c|cat|cbind|diff|gl|grep|identical|jitter|julian|length|ls|mat.or.vec|paste|range|rep|rev|seq|sequence|sign|sort|order|tolower|toupper|unique|system|vector|formatC|floor|ceiling|round|signif|trunc|Sys.getenv|Sys.putenv|Sys.time|Sys.Date|getwd|setwd|?files|list.files|file.info|log|logb|log10|log2|exp|expm1|log1p|sqrt|cos|sin|tan|acos|asin|atan|atan2|cosh|sinh|tanh|acosh|asinh|atanh|union|intersect|setdiff|setequal|eigen|deriv|integrate|sqrt|sum|?Control|?Extract|?Logic|?Mod|?Paren|?regex|?Syntax|?Special|help|plot|par|curve|points|arrows|abline|lines|segments|hist|pairs|matplot|?device|postscript|pdf|png|jpeg|X11|persp|contour|image|lm|glm|nls|lqs|optim|optimize|constrOptim|nlm|nlminb|?Chisquare|?Poisson|cor.test|cumsum|cumprod|cummin|cummax|density|ks.test|loess|lowess|mad|meanx|weighted.meanx|medianx|minx|maxx|quantile|rnorm|runif|splinefun|smooth.spline|sd|summary|t.test|var|sample|ecdf|qqplot",n="NULL|NA|TRUE|FALSE|T|F|Inf|NaN|NA_integer_|NA_real_|NA_character_|NA_complex_|pi|letters|LETTERS|month.abb,month.name",r=this.$keywords=this.createKeywordMapper({"support.function":t,keyword:e,"constant.language":n},"identifier");this.$rules={start:[{token:"comment.sectionhead",regex:"#+(?!').*(?:----|====|####)\\s*$"},{token:"comment",regex:"#+'",next:"rd-start"},{token:"comment",regex:"#.*$"},{token:"string",regex:'["]',next:"qqstring"},{token:"string",regex:"[']",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+[Li]?\\b"},{token:"constant.numeric",regex:"\\d+L\\b"},{token:"constant.numeric",regex:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b"},{token:"constant.numeric",regex:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b"},{token:"constant.language.boolean",regex:"(?:TRUE|FALSE|T|F)\\b"},{token:"identifier",regex:"`.*?`"},{token:r,regex:"[a-zA-Z.][a-zA-Z0-9._]*\\b"},{token:"keyword.operator",regex:"%%|>=|<=|==|!=|\\->|<\\-|\\|\\||&&|=|\\+|\\-|\\*|/|\\^|>|<|!|&|\\||~|\\$|:"},{token:"keyword.operator",regex:"%.*?%"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}]};var i=(new o("comment")).getRules();for(var s=0;s<i.start.length;s++)i.start[s].token+=".virtual-comment";this.addRules(i,"rd-"),this.$rules["rd-start"].unshift({token:"text",regex:"^",next:"start"}),this.$rules["rd-start"].unshift({token:"keyword",regex:"@(?!@)[^ ]*"}),this.$rules["rd-start"].unshift({token:"comment",regex:"@@"}),this.$rules["rd-start"].push({token:"comment",regex:"[^%\\\\[({\\])}]+"})};r.inherits(u,s),t.RHighlightRules=u}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var s=i[1].length,o=e.findMatchingBracket({row:t,column:s});if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),ace.define("ace/mode/r",["require","exports","module","ace/range","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules","ace/mode/r_highlight_rules","ace/mode/matching_brace_outdent","ace/unicode"],function(e,t,n){"use strict";var r=e("../range").Range,i=e("../lib/oop"),s=e("./text").Mode,o=e("./text_highlight_rules").TextHighlightRules,u=e("./r_highlight_rules").RHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,f=e("../unicode"),l=function(){this.HighlightRules=u,this.$outdent=new a};i.inherits(l,s),function(){this.lineCommentStart="#",this.$id="ace/mode/r"}.call(l.prototype),t.Mode=l})