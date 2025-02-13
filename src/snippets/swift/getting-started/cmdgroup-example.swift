import DDBKit
import DDBKitUtilities

extension MyNewBot {
  var coolCommandGroup: Group {
    Group {
      Command("pong") { i in
        try await i.respond(with: "ping!")
      }
    }
  }
}
