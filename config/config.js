var config = {}

config.secret = "jdZKYKwfTw9D9YMr";

config.server = {
	host: process.env.SERVER_HOST || 'localhost',
	port: process.env.SERVER_PORT || 4040
};
config.db = {
	url: process.env.DATABASE_URL || 'localhost:27017/triangoolate_db'
}
config.redis = {
	host: process.env.REDIS_HOST || 'localhost',
	port: process.env.REDIS_PORT || 6379
}

module.exports = config;
