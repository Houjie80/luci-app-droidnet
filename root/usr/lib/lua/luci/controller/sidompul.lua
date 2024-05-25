module("luci.controller.sidompul", package.seeall)
function index()
entry({"admin", "services","sidompul"}, template("sidompul"), _("sidompul"), 1).leaf=true
end
