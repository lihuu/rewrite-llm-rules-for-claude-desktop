var body = $request.body;
var obj = JSON.parse(body);

if (obj.model && obj.model.startsWith("claude-")) {
  obj.model = obj.model.substring(7);
}

$done({ body: JSON.stringify(obj) });
