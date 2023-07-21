function InitModule(context: nkruntime.Context, logger: nkruntime.Logger, nakama: nkruntime.Nakama, initializer: nkruntime.Initializer) {
  initializer.registerRpc('matchmaker', findOrCreateMatch)
  initializer.registerMatch(moduleName, {
        matchInit,
        matchJoinAttempt,
        matchJoin,
        matchLeave,
        matchLoop,
        matchTerminate,
        matchSignal,
    });
  logger.info('Javascript module loaded')
}
