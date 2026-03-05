function n(r){switch(r){case"index":return`@startuml\r
title "Landscape view"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<Users>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<Mkicsai>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<External>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
person "==Пользователи\\n\\nПользователи системы, могут обращаться к КИ-Ц САИ ПС.ИНП для получения информации и управления системой через web-интерфейс." <<Users>> as Users\r
rectangle "==КИ-Ц САИ ПС.ИНП\\n\\nКонцентратор информации центрального уровня предназначен для отслеживания в реальном времени прохождений железнодорожного подвижного состава через контрольные пункты и представляет собой набор микро сервисов, которые активизируются по расписанию, производят прием сообщений о прохождениях и состоянии оборудования, прием данных из смежных систем, анализ полученных данных, формирование сообщений о проследовании поездов через остановочные пункты, формирование сообщений о сбоях и ошибках в работе оборудования, передачу данных в смежные системы РЖД." <<Mkicsai>> as Mkicsai\r
rectangle "==Внешние сервисы\\n\\nВнешние сервисы, к которым обращается КИ-Ц САИ ПС.ИНП для получения и отправки сообщений о прохождении подвижного состава, а также для получения дополнительной информации необходимой для работы системы." <<External>> as External\r
\r
Users .[#777777,thickness=2].> Mkicsai\r
Mkicsai .[#777777,thickness=2].> External\r
@enduml\r
`;case"c1":return`@startuml\r
title "КИ-Ц САИ ПС.ИНП (системный контекст)"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<Users>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<Mkicsai>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam queue<<ExternalInput>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam queue<<ExternalOutput>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam rectangle<<ExternalServices>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
person "==Пользователи\\n\\nПользователи системы, могут обращаться к КИ-Ц САИ ПС.ИНП для получения информации и управления системой через web-интерфейс." <<Users>> as Users\r
rectangle "==КИ-Ц САИ ПС.ИНП\\n\\nКонцентратор информации центрального уровня предназначен для отслеживания в реальном времени прохождений железнодорожного подвижного состава через контрольные пункты и представляет собой набор микро сервисов, которые активизируются по расписанию, производят прием сообщений о прохождениях и состоянии оборудования, прием данных из смежных систем, анализ полученных данных, формирование сообщений о проследовании поездов через остановочные пункты, формирование сообщений о сбоях и ошибках в работе оборудования, передачу данных в смежные системы РЖД." <<Mkicsai>> as Mkicsai\r
rectangle "Внешние сервисы" <<External>> as External {\r
  skinparam RectangleBorderColor<<External>> #737373\r
  skinparam RectangleFontColor<<External>> #737373\r
  skinparam RectangleBorderStyle<<External>> dashed\r
\r
  queue "==Входные очереди\\n\\nВнешняя очередь" <<ExternalInput>> as ExternalInput\r
  queue "==Выходные очереди\\n\\nВнешняя очередь" <<ExternalOutput>> as ExternalOutput\r
  rectangle "==Внешние сервисы\\n\\nВнешний сервис" <<ExternalServices>> as ExternalServices\r
}\r
\r
Users .[#777777,thickness=2].> Mkicsai\r
Mkicsai .[#777777,thickness=2].> ExternalInput\r
Mkicsai .[#777777,thickness=2].> ExternalOutput\r
Mkicsai .[#777777,thickness=2].> ExternalServices\r
@enduml\r
`;case"c2":return`@startuml\r
title "КИ-Ц САИ ПС.ИНП (контекст контейнера)"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<Users>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<MkicsaiFrontend>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<MkicsaiService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<MkicsaiBackend>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam database<<MkicsaiStorage>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam queue<<ExternalInputBin>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam queue<<ExternalInputSts>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam queue<<ExternalOutputM2033>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam queue<<ExternalOutputEcma>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam rectangle<<ExternalServicesAso>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam rectangle<<ExternalServicesEsr>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
person "==Пользователи\\n\\nПользователи системы, могут обращаться к КИ-Ц САИ ПС.ИНП для получения информации и управления системой через web-интерфейс." <<Users>> as Users\r
rectangle "КИ-Ц САИ ПС.ИНП" <<Mkicsai>> as Mkicsai {\r
  skinparam RectangleBorderColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleFontColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleBorderStyle<<Mkicsai>> dashed\r
\r
  rectangle "==КИ-Ц САИ ПС.ИНП (веб клиент)\\n\\nВеб клиент для взаимодействия с КИ-Ц САИ ПС.ИНП, позволяет пользователям просматривать информацию о прохождении подвижного состава через контрольные пункты, просматривать состояние оборудования, просматривать логи и мониторинг, просматривать данные из смежных систем и управлять системой через web-интерфейс." <<MkicsaiFrontend>> as MkicsaiFrontend\r
  rectangle "==КИ-Ц САИ ПС.ИНП\\n\\nКонцентратор информации центрального уровня предназначен для отслеживания в реальном времени прохождений железнодорожного подвижного состава через контрольные пункты и представляет собой набор микро сервисов, которые активизируются по расписанию, производят прием сообщений о прохождениях и состоянии оборудования, прием данных из смежных систем, анализ полученных данных, формирование сообщений о проследовании поездов через остановочные пункты, формирование сообщений о сбоях и ошибках в работе оборудования, передачу данных в смежные системы РЖД." <<MkicsaiService>> as MkicsaiService\r
  rectangle "==КИ-Ц САИ ПС.ИНП (веб сервер)\\n\\nВеб сервер для взаимодействия с КИ-Ц САИ ПС.ИНП, позволяет пользователям просматривать информацию о прохождении подвижного состава через контрольные пункты, просматривать состояние оборудования, просматривать логи и мониторинг, просматривать данные из смежных систем и управлять системой через web-интерфейс." <<MkicsaiBackend>> as MkicsaiBackend\r
  database "==Хранилище данных\\n\\nХранилище данных для КИ-Ц САИ ПС.ИНП, включая сессии, логи, мониторинг и кеш данных." <<MkicsaiStorage>> as MkicsaiStorage\r
}\r
rectangle "Внешние сервисы" <<External>> as External {\r
  skinparam RectangleBorderColor<<External>> #737373\r
  skinparam RectangleFontColor<<External>> #737373\r
  skinparam RectangleBorderStyle<<External>> dashed\r
\r
  rectangle "Входные очереди" <<ExternalInput>> as ExternalInput {\r
    skinparam RectangleBorderColor<<ExternalInput>> #737373\r
    skinparam RectangleFontColor<<ExternalInput>> #737373\r
    skinparam RectangleBorderStyle<<ExternalInput>> dashed\r
\r
    queue "==BIN\\n\\nВходная очередь сообщений о прохождении подвижного через контрольные пункты" <<ExternalInputBin>> as ExternalInputBin\r
    queue "==STS\\n\\nВходная очередь сообщений о состоянии оборудования." <<ExternalInputSts>> as ExternalInputSts\r
  }\r
  rectangle "Выходные очереди" <<ExternalOutput>> as ExternalOutput {\r
    skinparam RectangleBorderColor<<ExternalOutput>> #737373\r
    skinparam RectangleFontColor<<ExternalOutput>> #737373\r
    skinparam RectangleBorderStyle<<ExternalOutput>> dashed\r
\r
    queue "==2033\\n\\nВыходная очередь сообщений о прохождении подвижного через контрольные пункты в формате 2033." <<ExternalOutputM2033>> as ExternalOutputM2033\r
    queue "==ECMA\\n\\nВыходная очередь сообщений о сбоях и ошибках в работе оборудования." <<ExternalOutputEcma>> as ExternalOutputEcma\r
  }\r
  rectangle "Внешние сервисы" <<ExternalServices>> as ExternalServices {\r
    skinparam RectangleBorderColor<<ExternalServices>> #737373\r
    skinparam RectangleFontColor<<ExternalServices>> #737373\r
    skinparam RectangleBorderStyle<<ExternalServices>> dashed\r
\r
    rectangle "==ЕМД ПП\\n\\nВнешний сервис для получения данных о прохождении подвижного состава по данным внесенным в ЕМД ПП." <<ExternalServicesAso>> as ExternalServicesAso\r
    rectangle "==Сервис НСИ\\n\\nВнешний сервис для получения нормативно справочной информации (дороги и остановочные пункты)." <<ExternalServicesEsr>> as ExternalServicesEsr\r
  }\r
}\r
\r
Users .[#777777,thickness=2].> MkicsaiFrontend\r
MkicsaiFrontend .[#777777,thickness=2].> MkicsaiBackend\r
MkicsaiBackend .[#777777,thickness=2].> MkicsaiStorage\r
MkicsaiService .[#777777,thickness=2].> MkicsaiStorage\r
MkicsaiService .[#777777,thickness=2].> ExternalInputBin\r
MkicsaiService .[#777777,thickness=2].> ExternalInputSts\r
MkicsaiService .[#777777,thickness=2].> ExternalOutputM2033\r
MkicsaiService .[#777777,thickness=2].> ExternalOutputEcma\r
MkicsaiService .[#777777,thickness=2].> ExternalServicesAso\r
MkicsaiService .[#777777,thickness=2].> ExternalServicesEsr\r
@enduml\r
`;case"c3_service":return`@startuml\r
title "КИ-Ц САИ ПС.ИНП (основной сервис)"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiSchedule>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<MkicsaiWorker1>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<MkicsaiWorker2>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam database<<MkicsaiStorageLog>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStorageMonitoring>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
rectangle "Основной сервис" <<@gr1>> as @gr1 {\r
  skinparam RectangleBorderColor<<@gr1>> #64748b\r
  skinparam RectangleFontColor<<@gr1>> #64748b\r
  skinparam RectangleBorderStyle<<@gr1>> dashed\r
\r
  rectangle "==Планировщик\\n\\nЗапуск рабочих процессов по расписанию, логирование исключений, сбор данных для мониторинга." <<MkicsaiSchedule>> as MkicsaiSchedule\r
  rectangle "Рабочие процессы" <<@gr2>> as @gr2 {\r
    skinparam RectangleBorderColor<<@gr2>> #64748b\r
    skinparam RectangleFontColor<<@gr2>> #64748b\r
    skinparam RectangleBorderStyle<<@gr2>> dashed\r
\r
    rectangle "==Рабочий процесс 1\\n\\nРабочий процесс" <<MkicsaiWorker1>> as MkicsaiWorker1\r
    rectangle "==Рабочий процесс N\\n\\nРабочий процесс" <<MkicsaiWorker2>> as MkicsaiWorker2\r
  }\r
}\r
rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
  skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
  skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
  skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
  database "==Журналы\\n\\nХранилище журналов об ошибках и отклонениях в работе системы." <<MkicsaiStorageLog>> as MkicsaiStorageLog\r
  database "==Мониторинг\\n\\nХранилище данных для мониторинга работы системы." <<MkicsaiStorageMonitoring>> as MkicsaiStorageMonitoring\r
}\r
\r
MkicsaiSchedule .[#777777,thickness=2].> MkicsaiWorker1\r
MkicsaiSchedule .[#777777,thickness=2].> MkicsaiWorker2\r
MkicsaiSchedule .[#777777,thickness=2].> MkicsaiStorageLog\r
MkicsaiSchedule .[#777777,thickness=2].> MkicsaiStorageMonitoring\r
@enduml\r
`;case"c3_worker_aoc":return`@startuml\r
title "Чтение BIN"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiAoc>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<MkicsaiEcma>>{\r
  BackgroundColor #ac4d39\r
  FontColor #FFFFFF\r
  BorderColor #ac4d39\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam queue<<ExternalInputBin>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
rectangle "КИ-Ц САИ ПС.ИНП" <<Mkicsai>> as Mkicsai {\r
  skinparam RectangleBorderColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleFontColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleBorderStyle<<Mkicsai>> dashed\r
\r
  rectangle "==Чтение и первичная обработка BIN\\n\\nРабочий процесс" <<MkicsaiAoc>> as MkicsaiAoc\r
  rectangle "==Анализ ошибок и отправка в ECMA\\n\\nРабочий процесс" <<MkicsaiEcma>> as MkicsaiEcma\r
  rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
    skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
    database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
  }\r
}\r
rectangle "Внешние сервисы" <<External>> as External {\r
  skinparam RectangleBorderColor<<External>> #737373\r
  skinparam RectangleFontColor<<External>> #737373\r
  skinparam RectangleBorderStyle<<External>> dashed\r
\r
  queue "==BIN\\n\\nВходная очередь сообщений о прохождении подвижного через контрольные пункты" <<ExternalInputBin>> as ExternalInputBin\r
}\r
\r
MkicsaiAoc .[#777777,thickness=2].> MkicsaiEcma\r
MkicsaiAoc .[#777777,thickness=2].> MkicsaiStoragePg\r
MkicsaiAoc .[#777777,thickness=2].> ExternalInputBin\r
@enduml\r
`;case"c3_worker_bin":return`@startuml\r
title "Обработка BIN"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiBin>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<MkicsaiEcma>>{\r
  BackgroundColor #ac4d39\r
  FontColor #FFFFFF\r
  BorderColor #ac4d39\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStorageCache>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
rectangle "==Обработка BIN\\n\\nРабочий процесс" <<MkicsaiBin>> as MkicsaiBin\r
rectangle "==Анализ ошибок и отправка в ECMA\\n\\nРабочий процесс" <<MkicsaiEcma>> as MkicsaiEcma\r
rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
  skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
  skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
  skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
  database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
  database "==Кеш данных\\n\\nХранилище временных данных, для ускорения работы системы." <<MkicsaiStorageCache>> as MkicsaiStorageCache\r
}\r
\r
MkicsaiBin .[#ac4d39,thickness=2].> MkicsaiEcma\r
MkicsaiBin .[#777777,thickness=2].> MkicsaiStoragePg\r
MkicsaiBin .[#777777,thickness=2].> MkicsaiStorageCache\r
MkicsaiEcma .[#777777,thickness=2].> MkicsaiStorageCache\r
@enduml\r
`;case"c3_worker_sts":return`@startuml\r
title "Обработка сигналов STS"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiSts>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<MkicsaiEcma>>{\r
  BackgroundColor #ac4d39\r
  FontColor #FFFFFF\r
  BorderColor #ac4d39\r
}\r
skinparam queue<<ExternalInputSts>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStorageCache>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
rectangle "КИ-Ц САИ ПС.ИНП" <<Mkicsai>> as Mkicsai {\r
  skinparam RectangleBorderColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleFontColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleBorderStyle<<Mkicsai>> dashed\r
\r
  rectangle "==Чтение и обработка STS\\n\\nРабочий процесс" <<MkicsaiSts>> as MkicsaiSts\r
  rectangle "==Анализ ошибок и отправка в ECMA\\n\\nРабочий процесс" <<MkicsaiEcma>> as MkicsaiEcma\r
  rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
    skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
    database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
    database "==Кеш данных\\n\\nХранилище временных данных, для ускорения работы системы." <<MkicsaiStorageCache>> as MkicsaiStorageCache\r
  }\r
}\r
rectangle "Внешние сервисы" <<External>> as External {\r
  skinparam RectangleBorderColor<<External>> #737373\r
  skinparam RectangleFontColor<<External>> #737373\r
  skinparam RectangleBorderStyle<<External>> dashed\r
\r
  queue "==STS\\n\\nВходная очередь сообщений о состоянии оборудования." <<ExternalInputSts>> as ExternalInputSts\r
}\r
\r
MkicsaiSts .[#ac4d39,thickness=2].> MkicsaiEcma\r
MkicsaiSts .[#777777,thickness=2].> MkicsaiStoragePg\r
MkicsaiSts .[#777777,thickness=2].> MkicsaiStorageCache\r
MkicsaiEcma .[#777777,thickness=2].> MkicsaiStorageCache\r
MkicsaiSts .[#777777,thickness=2].> ExternalInputSts\r
@enduml\r
`;case"c3_worker_esp":return`@startuml\r
title "Обновление данных о локомотивах."\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiEsp>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam queue<<ExternalInputSts>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam rectangle<<MkicsaiEcma>>{\r
  BackgroundColor #ac4d39\r
  FontColor #FFFFFF\r
  BorderColor #ac4d39\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStorageCache>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
rectangle "КИ-Ц САИ ПС.ИНП" <<Mkicsai>> as Mkicsai {\r
  skinparam RectangleBorderColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleFontColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleBorderStyle<<Mkicsai>> dashed\r
\r
  rectangle "==Чтение и обработка данных из ЕС ПУЛ\\n\\nРабочий процесс" <<MkicsaiEsp>> as MkicsaiEsp\r
  rectangle "==Анализ ошибок и отправка в ECMA\\n\\nРабочий процесс" <<MkicsaiEcma>> as MkicsaiEcma\r
  rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
    skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
    database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
    database "==Кеш данных\\n\\nХранилище временных данных, для ускорения работы системы." <<MkicsaiStorageCache>> as MkicsaiStorageCache\r
  }\r
}\r
rectangle "Внешние сервисы" <<External>> as External {\r
  skinparam RectangleBorderColor<<External>> #737373\r
  skinparam RectangleFontColor<<External>> #737373\r
  skinparam RectangleBorderStyle<<External>> dashed\r
\r
  queue "==STS\\n\\nВходная очередь сообщений о состоянии оборудования." <<ExternalInputSts>> as ExternalInputSts\r
}\r
\r
MkicsaiEsp .[#ac4d39,thickness=2].> MkicsaiEcma\r
MkicsaiEsp .[#777777,thickness=2].> MkicsaiStoragePg\r
MkicsaiEcma .[#777777,thickness=2].> MkicsaiStorageCache\r
MkicsaiEsp .[#777777,thickness=2].> MkicsaiStorageCache\r
Mkicsai .[#777777,thickness=2].> ExternalInputSts\r
@enduml\r
`;case"c3_worker_aso":return`@startuml\r
title "Обновление данных ЕМДПП"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiAso>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<MkicsaiEcma>>{\r
  BackgroundColor #ac4d39\r
  FontColor #FFFFFF\r
  BorderColor #ac4d39\r
}\r
skinparam rectangle<<ExternalServicesAso>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStorageCache>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
rectangle "КИ-Ц САИ ПС.ИНП" <<Mkicsai>> as Mkicsai {\r
  skinparam RectangleBorderColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleFontColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleBorderStyle<<Mkicsai>> dashed\r
\r
  rectangle "==Чтение и обработка данных из ЕМД ПП\\n\\nРабочий процесс" <<MkicsaiAso>> as MkicsaiAso\r
  rectangle "==Анализ ошибок и отправка в ECMA\\n\\nРабочий процесс" <<MkicsaiEcma>> as MkicsaiEcma\r
  rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
    skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
    database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
    database "==Кеш данных\\n\\nХранилище временных данных, для ускорения работы системы." <<MkicsaiStorageCache>> as MkicsaiStorageCache\r
  }\r
}\r
rectangle "Внешние сервисы" <<External>> as External {\r
  skinparam RectangleBorderColor<<External>> #737373\r
  skinparam RectangleFontColor<<External>> #737373\r
  skinparam RectangleBorderStyle<<External>> dashed\r
\r
  rectangle "==ЕМД ПП\\n\\nВнешний сервис для получения данных о прохождении подвижного состава по данным внесенным в ЕМД ПП." <<ExternalServicesAso>> as ExternalServicesAso\r
}\r
\r
MkicsaiAso .[#ac4d39,thickness=2].> MkicsaiEcma\r
MkicsaiAso .[#777777,thickness=2].> MkicsaiStoragePg\r
MkicsaiAso .[#777777,thickness=2].> MkicsaiStorageCache\r
MkicsaiEcma .[#777777,thickness=2].> MkicsaiStorageCache\r
MkicsaiAso .[#777777,thickness=2].> ExternalServicesAso\r
@enduml\r
`;case"c3_worker_2033":return`@startuml\r
title "Отсылка сообщений 2033"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiM2033>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam rectangle<<MkicsaiEcma>>{\r
  BackgroundColor #ac4d39\r
  FontColor #FFFFFF\r
  BorderColor #ac4d39\r
}\r
skinparam queue<<ExternalOutputM2033>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
skinparam database<<MkicsaiStorageCache>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
rectangle "КИ-Ц САИ ПС.ИНП" <<Mkicsai>> as Mkicsai {\r
  skinparam RectangleBorderColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleFontColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleBorderStyle<<Mkicsai>> dashed\r
\r
  rectangle "==Формирование сообщений 2033\\n\\nРабочий процесс" <<MkicsaiM2033>> as MkicsaiM2033\r
  rectangle "==Анализ ошибок и отправка в ECMA\\n\\nРабочий процесс" <<MkicsaiEcma>> as MkicsaiEcma\r
  rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
    skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
    database "==Кеш данных\\n\\nХранилище временных данных, для ускорения работы системы." <<MkicsaiStorageCache>> as MkicsaiStorageCache\r
    database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
  }\r
}\r
rectangle "Внешние сервисы" <<External>> as External {\r
  skinparam RectangleBorderColor<<External>> #737373\r
  skinparam RectangleFontColor<<External>> #737373\r
  skinparam RectangleBorderStyle<<External>> dashed\r
\r
  queue "==2033\\n\\nВыходная очередь сообщений о прохождении подвижного через контрольные пункты в формате 2033." <<ExternalOutputM2033>> as ExternalOutputM2033\r
}\r
\r
MkicsaiM2033 .[#ac4d39,thickness=2].> MkicsaiEcma\r
MkicsaiEcma .[#777777,thickness=2].> MkicsaiStorageCache\r
MkicsaiM2033 .[#777777,thickness=2].> MkicsaiStoragePg\r
MkicsaiM2033 .[#777777,thickness=2].> ExternalOutputM2033\r
@enduml\r
`;case"c3_worker_clone":return`@startuml\r
title "Подготовка и удаление партиций"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiClone>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
rectangle "==Создание и чистка оперативных таблиц\\n\\nРабочий процесс" <<MkicsaiClone>> as MkicsaiClone\r
rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
  skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
  skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
  skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
  database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
}\r
\r
MkicsaiClone .[#777777,thickness=2].> MkicsaiStoragePg\r
@enduml\r
`;case"c3_worker_ecma":return`@startuml\r
title "Отсылка сообщений ECMA"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiEcma>>{\r
  BackgroundColor #ac4d39\r
  FontColor #FFFFFF\r
  BorderColor #ac4d39\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStorageCache>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam queue<<ExternalOutputEcma>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
rectangle "КИ-Ц САИ ПС.ИНП" <<Mkicsai>> as Mkicsai {\r
  skinparam RectangleBorderColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleFontColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleBorderStyle<<Mkicsai>> dashed\r
\r
  rectangle "==Анализ ошибок и отправка в ECMA\\n\\nРабочий процесс" <<MkicsaiEcma>> as MkicsaiEcma\r
  rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
    skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
    database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
    database "==Кеш данных\\n\\nХранилище временных данных, для ускорения работы системы." <<MkicsaiStorageCache>> as MkicsaiStorageCache\r
  }\r
}\r
rectangle "Внешние сервисы" <<External>> as External {\r
  skinparam RectangleBorderColor<<External>> #737373\r
  skinparam RectangleFontColor<<External>> #737373\r
  skinparam RectangleBorderStyle<<External>> dashed\r
\r
  queue "==ECMA\\n\\nВыходная очередь сообщений о сбоях и ошибках в работе оборудования." <<ExternalOutputEcma>> as ExternalOutputEcma\r
}\r
\r
MkicsaiEcma .[#777777,thickness=2].> MkicsaiStorageCache\r
MkicsaiEcma .[#777777,thickness=2].> ExternalOutputEcma\r
@enduml\r
`;case"c3_worker_esr":return`@startuml\r
title "Обновление нормативно справочной информации"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<MkicsaiEsr>>{\r
  BackgroundColor #0284c7\r
  FontColor #FFFFFF\r
  BorderColor #0284c7\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam rectangle<<ExternalServicesEsr>>{\r
  BackgroundColor #737373\r
  FontColor #FFFFFF\r
  BorderColor #737373\r
}\r
rectangle "КИ-Ц САИ ПС.ИНП" <<Mkicsai>> as Mkicsai {\r
  skinparam RectangleBorderColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleFontColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleBorderStyle<<Mkicsai>> dashed\r
\r
  rectangle "==Обновление НСИ\\n\\nРабочий процесс" <<MkicsaiEsr>> as MkicsaiEsr\r
  rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
    skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
    database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
  }\r
}\r
rectangle "Внешние сервисы" <<External>> as External {\r
  skinparam RectangleBorderColor<<External>> #737373\r
  skinparam RectangleFontColor<<External>> #737373\r
  skinparam RectangleBorderStyle<<External>> dashed\r
\r
  rectangle "==Сервис НСИ\\n\\nВнешний сервис для получения нормативно справочной информации (дороги и остановочные пункты)." <<ExternalServicesEsr>> as ExternalServicesEsr\r
}\r
\r
MkicsaiEsr .[#777777,thickness=2].> MkicsaiStoragePg\r
MkicsaiEsr .[#777777,thickness=2].> ExternalServicesEsr\r
@enduml\r
`;case"c3_client":return`@startuml\r
title "КИ-Ц САИ ПС.ИНП (web приложение)"\r
left to right direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<UsersAdmin>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam person<<UsersEditor>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam person<<UsersAnalyst>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<MkicsaiFrontend>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam rectangle<<MkicsaiBackend>>{\r
  BackgroundColor #3b82f6\r
  FontColor #FFFFFF\r
  BorderColor #3b82f6\r
}\r
skinparam database<<MkicsaiStorageSession>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStoragePg>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStorageLog>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
skinparam database<<MkicsaiStorageMonitoring>>{\r
  BackgroundColor #428a4f\r
  FontColor #FFFFFF\r
  BorderColor #428a4f\r
}\r
rectangle "Пользователи" <<Users>> as Users {\r
  skinparam RectangleBorderColor<<Users>> #3b82f6\r
  skinparam RectangleFontColor<<Users>> #3b82f6\r
  skinparam RectangleBorderStyle<<Users>> dashed\r
\r
  person "==Администратор\\n\\nУправление пользователями, системные настройки, анализ ошибок и производительности." <<UsersAdmin>> as UsersAdmin\r
  person "==Редактор\\n\\nПравка нормативно справочной информации. Установка и снятие считывателей." <<UsersEditor>> as UsersEditor\r
  person "==Аналитик\\n\\nАнализ работы оборудования установленного на местах на основе данных о прохождении подвижного состава и сообщений об ошибках." <<UsersAnalyst>> as UsersAnalyst\r
}\r
rectangle "КИ-Ц САИ ПС.ИНП" <<Mkicsai>> as Mkicsai {\r
  skinparam RectangleBorderColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleFontColor<<Mkicsai>> #3b82f6\r
  skinparam RectangleBorderStyle<<Mkicsai>> dashed\r
\r
  rectangle "==КИ-Ц САИ ПС.ИНП (веб клиент)\\n\\nВеб клиент для взаимодействия с КИ-Ц САИ ПС.ИНП, позволяет пользователям просматривать информацию о прохождении подвижного состава через контрольные пункты, просматривать состояние оборудования, просматривать логи и мониторинг, просматривать данные из смежных систем и управлять системой через web-интерфейс." <<MkicsaiFrontend>> as MkicsaiFrontend\r
  rectangle "==КИ-Ц САИ ПС.ИНП (веб сервер)\\n\\nВеб сервер для взаимодействия с КИ-Ц САИ ПС.ИНП, позволяет пользователям просматривать информацию о прохождении подвижного состава через контрольные пункты, просматривать состояние оборудования, просматривать логи и мониторинг, просматривать данные из смежных систем и управлять системой через web-интерфейс." <<MkicsaiBackend>> as MkicsaiBackend\r
  rectangle "Хранилище данных" <<MkicsaiStorage>> as MkicsaiStorage {\r
    skinparam RectangleBorderColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleFontColor<<MkicsaiStorage>> #428a4f\r
    skinparam RectangleBorderStyle<<MkicsaiStorage>> dashed\r
\r
    database "==Сессии\\n\\nХранилище сессий пользователей системы." <<MkicsaiStorageSession>> as MkicsaiStorageSession\r
    database "==База данных\\n\\nХранилище постоянных данных(нормативно справочная информация) и условно постоянных данных(оперативные данные, которые нужно хранить не менее 10 дней)." <<MkicsaiStoragePg>> as MkicsaiStoragePg\r
    database "==Журналы\\n\\nХранилище журналов об ошибках и отклонениях в работе системы." <<MkicsaiStorageLog>> as MkicsaiStorageLog\r
    database "==Мониторинг\\n\\nХранилище данных для мониторинга работы системы." <<MkicsaiStorageMonitoring>> as MkicsaiStorageMonitoring\r
  }\r
}\r
\r
UsersAdmin .[#777777,thickness=2].> MkicsaiFrontend\r
UsersEditor .[#777777,thickness=2].> MkicsaiFrontend\r
UsersAnalyst .[#777777,thickness=2].> MkicsaiFrontend\r
MkicsaiFrontend .[#777777,thickness=2].> MkicsaiBackend\r
MkicsaiBackend .[#777777,thickness=2].> MkicsaiStorageSession\r
MkicsaiBackend .[#777777,thickness=2].> MkicsaiStoragePg\r
MkicsaiBackend .[#777777,thickness=2].> MkicsaiStorageLog\r
MkicsaiBackend .[#777777,thickness=2].> MkicsaiStorageMonitoring\r
@enduml\r
`;default:throw new Error("Unknown viewId: "+r)}}export{n as pumlSource};
