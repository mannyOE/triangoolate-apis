var config = {}

config.secret = "jdZKYKwfTw9D9YMr";

config.server = {
	host: process.env.SERVER_HOST || 'localhost',
	port: process.env.SERVER_PORT || 4040
};
config.db = {
	url: process.env.DATABASE_URL || 'localhost:27017/triangoolate_db'
}


module.exports = config;
