/* This is free software, licensed under the Apache License, Version 2.0
 *
 * Copyright (C) 2024 Hilman Maulana <hilman0.0maulana@gmail.com>
 */

'use strict';
'require view';

return view.extend({
	handleSaveApply: null,
	handleSave: null,
	handleReset: null,
	render: function() {
		return E('iframe', {
			src: '/sidompul.html',
			style: 'width: 100%; height: 100vh; border: none;',
			sandbox: 'allow-scripts allow-same-origin'
		});
	}
});

