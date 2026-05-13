var body = $request.body;
var obj = JSON.parse(body);

if (obj.model && obj.model.startsWith("claude-")) {
  var modelMap = {
    "claude-deep-seek-v4-pro": "deepseek-v4-pro",
    "claude-deep-seek-v4-flash": "deepseek-v4-flash",
    "claude-mi-mo-v2.5-pro": "mimo-v2.5-pro",
    "claude-mi-mo-v2.5": "mimo-v2.5",
    "claude-q-wen-3.6-plus": "qwen-3.6-plus",
    "claude-ki-mi-2.6": "kimi-k2.6"
  };
  var stripped = obj.model.substring(7);
  obj.model = modelMap[obj.model] || stripped.replace("-", "");
}

$done({ body: JSON.stringify(obj) });
