{ pkgs }: {
	deps = [		pkgs.chromium    pkgs.nodejs	];

  environment.systemPackages = [    pkgs.nodejs-18_x  ];
}
