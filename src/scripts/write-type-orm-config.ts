import { configService } from '../app/config/config.service';
import fs = require('fs');

fs.writeFileSync('ormconfig.json',
 JSON.stringify(configService.getTypeOrmConfig(), null, 2)
);