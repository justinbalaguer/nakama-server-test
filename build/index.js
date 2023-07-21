"use strict";
function InitModule(context, logger, nakama, initializer) {
    initializer.registerRpc('healthcheck', rpcHealthcheck);
    logger.info('Javascript module loaded');
}
function rpcHealthcheck(ctx, logger, nk, payload) {
    logger.info('healthcheck rpc called');
    return JSON.stringify({ success: true });
}
