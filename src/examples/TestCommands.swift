import DDBKit
import DDBKitUtilities

extension MyNewBot {
  var coolCommandGroup: Group {
    Group {
      Command("pong") { i,_,_ in
        try? await bot.createInteractionResponse(to: i, "Ping!")
      }
    }
  }
}