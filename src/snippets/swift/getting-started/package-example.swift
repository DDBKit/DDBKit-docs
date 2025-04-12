let package = Package(
  name: "MyNewBot",
  platforms: [
    .macOS(.v13)
  ],
  dependencies: [
    .package(url: "https://github.com/llsc12/DDBKit", exact: "0.2.0"), // change this to latest ver
  ],
  targets: [
    // Targets are the basic building blocks of a package, defining a module or a test suite.
    // Targets can depend on other targets in this package and products from dependencies.
    .executableTarget(
      name: "MyNewBot",
      dependencies: [
        .product(name: "DDBKit", package: "DDBKit"),
        .product(name: "Database", package: "DDBKit"),
        .product(name: "DDBKitUtilities", package: "DDBKit"),
        .product(name: "DDBKitFoundation", package: "DDBKit"),
      ]
    ),
  ]
)
