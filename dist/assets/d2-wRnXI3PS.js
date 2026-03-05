function n(r){switch(r){case"index":return`direction: down\r
\r
Users: {\r
  label: "Пользователи"\r
  shape: person\r
}\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
}\r
External: {\r
  label: "Внешние сервисы"\r
}\r
\r
Users -> Mkicsai\r
Mkicsai -> External\r
`;case"c1":return`direction: right\r
\r
Users: {\r
  label: "Пользователи"\r
  shape: person\r
}\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
}\r
External: {\r
  label: "Внешние сервисы"\r
\r
  Input: {\r
    label: "Входные очереди"\r
    shape: queue\r
  }\r
  Output: {\r
    label: "Выходные очереди"\r
    shape: queue\r
  }\r
  Services: {\r
    label: "Внешние сервисы"\r
  }\r
}\r
\r
Users -> Mkicsai\r
Mkicsai -> External.Input\r
Mkicsai -> External.Output\r
Mkicsai -> External.Services\r
`;case"c2":return`direction: right\r
\r
Users: {\r
  label: "Пользователи"\r
  shape: person\r
}\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
\r
  Frontend: {\r
    label: "КИ-Ц САИ ПС.ИНП (веб клиент)"\r
  }\r
  Service: {\r
    label: "КИ-Ц САИ ПС.ИНП"\r
  }\r
  Backend: {\r
    label: "КИ-Ц САИ ПС.ИНП (веб сервер)"\r
  }\r
  Storage: {\r
    label: "Хранилище данных"\r
    shape: stored_data\r
  }\r
}\r
External: {\r
  label: "Внешние сервисы"\r
\r
  Input: {\r
    label: "Входные очереди"\r
    shape: queue\r
\r
    Bin: {\r
      label: "BIN"\r
      shape: queue\r
    }\r
    Sts: {\r
      label: "STS"\r
      shape: queue\r
    }\r
  }\r
  Output: {\r
    label: "Выходные очереди"\r
    shape: queue\r
\r
    M2033: {\r
      label: "2033"\r
      shape: queue\r
    }\r
    Ecma: {\r
      label: "ECMA"\r
      shape: queue\r
    }\r
  }\r
  Services: {\r
    label: "Внешние сервисы"\r
\r
    Aso: {\r
      label: "ЕМД ПП"\r
    }\r
    Esr: {\r
      label: "Сервис НСИ"\r
    }\r
  }\r
}\r
\r
Users -> Mkicsai.Frontend\r
Mkicsai.Frontend -> Mkicsai.Backend\r
Mkicsai.Backend -> Mkicsai.Storage\r
Mkicsai.Service -> Mkicsai.Storage\r
Mkicsai.Service -> External.Input.Bin\r
Mkicsai.Service -> External.Input.Sts\r
Mkicsai.Service -> External.Output.M2033\r
Mkicsai.Service -> External.Output.Ecma\r
Mkicsai.Service -> External.Services.Aso\r
Mkicsai.Service -> External.Services.Esr\r
`;case"c3_service":return`direction: right\r
\r
@gr1: {\r
  label: "Основной сервис"\r
\r
  AiSchedule: {\r
    label: "Планировщик"\r
  }\r
  : {\r
    label: "Рабочие процессы"\r
\r
    AiWorker1: {\r
      label: "Рабочий процесс 1"\r
    }\r
    AiWorker2: {\r
      label: "Рабочий процесс N"\r
    }\r
  }\r
}\r
MkicsaiStorage: {\r
  label: "Хранилище данных"\r
  shape: stored_data\r
\r
  Log: {\r
    label: "Журналы"\r
    shape: stored_data\r
  }\r
  Monitoring: {\r
    label: "Мониторинг"\r
    shape: stored_data\r
  }\r
}\r
\r
@gr1.AiSchedule -> @gr1..AiWorker1\r
@gr1.AiSchedule -> @gr1..AiWorker2\r
@gr1.AiSchedule -> MkicsaiStorage.Log\r
@gr1.AiSchedule -> MkicsaiStorage.Monitoring\r
`;case"c3_worker_aoc":return`direction: right\r
\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
\r
  Aoc: {\r
    label: "Чтение и первичная обработка BIN"\r
  }\r
  Ecma: {\r
    label: "Анализ ошибок и отправка в ECMA"\r
  }\r
  Storage: {\r
    label: "Хранилище данных"\r
    shape: stored_data\r
\r
    Pg: {\r
      label: "База данных"\r
      shape: stored_data\r
    }\r
  }\r
}\r
External: {\r
  label: "Внешние сервисы"\r
\r
  InputBin: {\r
    label: "BIN"\r
    shape: queue\r
  }\r
}\r
\r
Mkicsai.Aoc -> Mkicsai.Ecma\r
Mkicsai.Aoc -> Mkicsai.Storage.Pg\r
Mkicsai.Aoc -> External.InputBin\r
`;case"c3_worker_bin":return`direction: right\r
\r
MkicsaiBin: {\r
  label: "Обработка BIN"\r
}\r
MkicsaiEcma: {\r
  label: "Анализ ошибок и отправка в ECMA"\r
}\r
MkicsaiStorage: {\r
  label: "Хранилище данных"\r
  shape: stored_data\r
\r
  Pg: {\r
    label: "База данных"\r
    shape: stored_data\r
  }\r
  Cache: {\r
    label: "Кеш данных"\r
    shape: stored_data\r
  }\r
}\r
\r
MkicsaiBin -> MkicsaiEcma\r
MkicsaiBin -> MkicsaiStorage.Pg\r
MkicsaiBin -> MkicsaiStorage.Cache\r
MkicsaiEcma -> MkicsaiStorage.Cache\r
`;case"c3_worker_sts":return`direction: right\r
\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
\r
  Sts: {\r
    label: "Чтение и обработка STS"\r
  }\r
  Ecma: {\r
    label: "Анализ ошибок и отправка в ECMA"\r
  }\r
  Storage: {\r
    label: "Хранилище данных"\r
    shape: stored_data\r
\r
    Pg: {\r
      label: "База данных"\r
      shape: stored_data\r
    }\r
    Cache: {\r
      label: "Кеш данных"\r
      shape: stored_data\r
    }\r
  }\r
}\r
External: {\r
  label: "Внешние сервисы"\r
\r
  InputSts: {\r
    label: "STS"\r
    shape: queue\r
  }\r
}\r
\r
Mkicsai.Sts -> Mkicsai.Ecma\r
Mkicsai.Sts -> Mkicsai.Storage.Pg\r
Mkicsai.Sts -> Mkicsai.Storage.Cache\r
Mkicsai.Ecma -> Mkicsai.Storage.Cache\r
Mkicsai.Sts -> External.InputSts\r
`;case"c3_worker_esp":return`direction: right\r
\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
\r
  Esp: {\r
    label: "Чтение и обработка данных из ЕС ПУЛ"\r
  }\r
  Ecma: {\r
    label: "Анализ ошибок и отправка в ECMA"\r
  }\r
  Storage: {\r
    label: "Хранилище данных"\r
    shape: stored_data\r
\r
    Pg: {\r
      label: "База данных"\r
      shape: stored_data\r
    }\r
    Cache: {\r
      label: "Кеш данных"\r
      shape: stored_data\r
    }\r
  }\r
}\r
External: {\r
  label: "Внешние сервисы"\r
\r
  InputSts: {\r
    label: "STS"\r
    shape: queue\r
  }\r
}\r
\r
Mkicsai.Esp -> Mkicsai.Ecma\r
Mkicsai.Esp -> Mkicsai.Storage.Pg\r
Mkicsai.Ecma -> Mkicsai.Storage.Cache\r
Mkicsai.Esp -> Mkicsai.Storage.Cache\r
Mkicsai -> External.InputSts\r
`;case"c3_worker_aso":return`direction: right\r
\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
\r
  Aso: {\r
    label: "Чтение и обработка данных из ЕМД ПП"\r
  }\r
  Ecma: {\r
    label: "Анализ ошибок и отправка в ECMA"\r
  }\r
  Storage: {\r
    label: "Хранилище данных"\r
    shape: stored_data\r
\r
    Pg: {\r
      label: "База данных"\r
      shape: stored_data\r
    }\r
    Cache: {\r
      label: "Кеш данных"\r
      shape: stored_data\r
    }\r
  }\r
}\r
External: {\r
  label: "Внешние сервисы"\r
\r
  ServicesAso: {\r
    label: "ЕМД ПП"\r
  }\r
}\r
\r
Mkicsai.Aso -> Mkicsai.Ecma\r
Mkicsai.Aso -> Mkicsai.Storage.Pg\r
Mkicsai.Aso -> Mkicsai.Storage.Cache\r
Mkicsai.Ecma -> Mkicsai.Storage.Cache\r
Mkicsai.Aso -> External.ServicesAso\r
`;case"c3_worker_2033":return`direction: right\r
\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
\r
  M2033: {\r
    label: "Формирование сообщений 2033"\r
  }\r
  Ecma: {\r
    label: "Анализ ошибок и отправка в ECMA"\r
  }\r
  Storage: {\r
    label: "Хранилище данных"\r
    shape: stored_data\r
\r
    Cache: {\r
      label: "Кеш данных"\r
      shape: stored_data\r
    }\r
    Pg: {\r
      label: "База данных"\r
      shape: stored_data\r
    }\r
  }\r
}\r
External: {\r
  label: "Внешние сервисы"\r
\r
  OutputM2033: {\r
    label: "2033"\r
    shape: queue\r
  }\r
}\r
\r
Mkicsai.M2033 -> Mkicsai.Ecma\r
Mkicsai.Ecma -> Mkicsai.Storage.Cache\r
Mkicsai.M2033 -> Mkicsai.Storage.Pg\r
Mkicsai.M2033 -> External.OutputM2033\r
`;case"c3_worker_clone":return`direction: right\r
\r
MkicsaiClone: {\r
  label: "Создание и чистка оперативных таблиц"\r
}\r
MkicsaiStorage: {\r
  label: "Хранилище данных"\r
  shape: stored_data\r
\r
  Pg: {\r
    label: "База данных"\r
    shape: stored_data\r
  }\r
}\r
\r
MkicsaiClone -> MkicsaiStorage.Pg\r
`;case"c3_worker_ecma":return`direction: right\r
\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
\r
  Ecma: {\r
    label: "Анализ ошибок и отправка в ECMA"\r
  }\r
  Storage: {\r
    label: "Хранилище данных"\r
    shape: stored_data\r
\r
    Pg: {\r
      label: "База данных"\r
      shape: stored_data\r
    }\r
    Cache: {\r
      label: "Кеш данных"\r
      shape: stored_data\r
    }\r
  }\r
}\r
External: {\r
  label: "Внешние сервисы"\r
\r
  OutputEcma: {\r
    label: "ECMA"\r
    shape: queue\r
  }\r
}\r
\r
Mkicsai.Ecma -> Mkicsai.Storage.Cache\r
Mkicsai.Ecma -> External.OutputEcma\r
`;case"c3_worker_esr":return`direction: right\r
\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
\r
  Esr: {\r
    label: "Обновление НСИ"\r
  }\r
  Storage: {\r
    label: "Хранилище данных"\r
    shape: stored_data\r
\r
    Pg: {\r
      label: "База данных"\r
      shape: stored_data\r
    }\r
  }\r
}\r
External: {\r
  label: "Внешние сервисы"\r
\r
  ServicesEsr: {\r
    label: "Сервис НСИ"\r
  }\r
}\r
\r
Mkicsai.Esr -> Mkicsai.Storage.Pg\r
Mkicsai.Esr -> External.ServicesEsr\r
`;case"c3_client":return`direction: right\r
\r
Users: {\r
  label: "Пользователи"\r
  shape: person\r
\r
  Admin: {\r
    label: "Администратор"\r
    shape: person\r
  }\r
  Editor: {\r
    label: "Редактор"\r
    shape: person\r
  }\r
  Analyst: {\r
    label: "Аналитик"\r
    shape: person\r
  }\r
}\r
Mkicsai: {\r
  label: "КИ-Ц САИ ПС.ИНП"\r
\r
  Frontend: {\r
    label: "КИ-Ц САИ ПС.ИНП (веб клиент)"\r
  }\r
  Backend: {\r
    label: "КИ-Ц САИ ПС.ИНП (веб сервер)"\r
  }\r
  Storage: {\r
    label: "Хранилище данных"\r
    shape: stored_data\r
\r
    Session: {\r
      label: "Сессии"\r
      shape: stored_data\r
    }\r
    Pg: {\r
      label: "База данных"\r
      shape: stored_data\r
    }\r
    Log: {\r
      label: "Журналы"\r
      shape: stored_data\r
    }\r
    Monitoring: {\r
      label: "Мониторинг"\r
      shape: stored_data\r
    }\r
  }\r
}\r
\r
Users.Admin -> Mkicsai.Frontend\r
Users.Editor -> Mkicsai.Frontend\r
Users.Analyst -> Mkicsai.Frontend\r
Mkicsai.Frontend -> Mkicsai.Backend\r
Mkicsai.Backend -> Mkicsai.Storage.Session\r
Mkicsai.Backend -> Mkicsai.Storage.Pg\r
Mkicsai.Backend -> Mkicsai.Storage.Log\r
Mkicsai.Backend -> Mkicsai.Storage.Monitoring\r
`;default:throw new Error("Unknown viewId: "+r)}}export{n as d2Source};
