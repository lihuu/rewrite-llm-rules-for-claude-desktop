var body = $request.body;
var obj = JSON.parse(body);

if (obj.model && obj.model.startsWith("claude-")) {
  var modelMap = {
    "claude-deep-seek-v4-lite": "deepseek-v4-lite",
    "claude-deep-seek-v4-pro": "deepseek-v4-pro",
    "claude-deep-seek-v4-flash": "deepseek-v4-flash"
  };
  obj.model = modelMap[obj.model] || obj.model.substring(7);
}

$done({ body: JSON.stringify(obj) });
