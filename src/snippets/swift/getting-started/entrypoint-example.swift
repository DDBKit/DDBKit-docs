import DDBKit

@main
struct MyNewBot: DiscordBotApp {
	init() async {
		let httpClient = HTTPClient()
		// Edit this as needed.
		bot = await BotGatewayManager(
			eventLoopGroup: httpClient.eventLoopGroup,
			httpClient: httpClient,
			token: "Token Here",  // Do not store your token in your code in production.
			largeThreshold: 250,
			presence: .init(activities: [], status: .online, afk: false),
			intents: [.messageContent, .guildMessages]
		)
		// Will be useful
		cache = await .init(
			gatewayManager: bot,
			intents: .all,  // it's better to minimise cached data to your needs
			requestAllMembers: .enabledWithPresences,
			messageCachingPolicy: .saveEditHistoryAndDeleted
		)
	}

	var body: [any BotScene] {
		ReadyEvent { ready in
			print("hi mom")
		}

		MessageCreateEvent { msg in
			print("[\(msg.author?.username ?? "unknown")] \(msg.content)")
		}
	}

	var bot: Bot
	var cache: Cache
}
