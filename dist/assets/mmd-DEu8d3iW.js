function n(r){switch(r){case"index":return`---\r
title: "Landscape view"\r
---\r
graph TB\r
  Users[fa:fa-user Пользователи]\r
  Mkicsai[КИ-Ц САИ ПС.ИНП]\r
  External[Внешние сервисы]\r
  Users -.-> Mkicsai\r
  Mkicsai -.-> External\r
`;case"c1":return`---\r
title: "КИ-Ц САИ ПС.ИНП (системный контекст)"\r
---\r
graph LR\r
  Users[fa:fa-user Пользователи]\r
  Mkicsai[КИ-Ц САИ ПС.ИНП]\r
  subgraph External["Внешние сервисы"]\r
    External.Input[(Входные очереди)]\r
    External.Output[(Выходные очереди)]\r
    External.Services[Внешние сервисы]\r
  end\r
  Users -.-> Mkicsai\r
  Mkicsai -.-> External.Input\r
  Mkicsai -.-> External.Output\r
  Mkicsai -.-> External.Services\r
`;case"c2":return`---\r
title: "КИ-Ц САИ ПС.ИНП (контекст контейнера)"\r
---\r
graph LR\r
  Users[fa:fa-user Пользователи]\r
  subgraph Mkicsai["КИ-Ц САИ ПС.ИНП"]\r
    Mkicsai.Frontend[КИ-Ц САИ ПС.ИНП (веб клиент)]\r
    Mkicsai.Service[КИ-Ц САИ ПС.ИНП]\r
    Mkicsai.Backend[КИ-Ц САИ ПС.ИНП (веб сервер)]\r
    Mkicsai.Storage([Хранилище данных])\r
  end\r
  subgraph External["Внешние сервисы"]\r
    subgraph External.Input["Входные очереди"]\r
      External.Input.Bin[(BIN)]\r
      External.Input.Sts[(STS)]\r
    end\r
    subgraph External.Output["Выходные очереди"]\r
      External.Output.M2033[(2033)]\r
      External.Output.Ecma[(ECMA)]\r
    end\r
    subgraph External.Services["Внешние сервисы"]\r
      External.Services.Aso[ЕМД ПП]\r
      External.Services.Esr[Сервис НСИ]\r
    end\r
  end\r
  Users -.-> Mkicsai.Frontend\r
  Mkicsai.Frontend -.-> Mkicsai.Backend\r
  Mkicsai.Backend -.-> Mkicsai.Storage\r
  Mkicsai.Service -.-> Mkicsai.Storage\r
  Mkicsai.Service -.-> External.Input.Bin\r
  Mkicsai.Service -.-> External.Input.Sts\r
  Mkicsai.Service -.-> External.Output.M2033\r
  Mkicsai.Service -.-> External.Output.Ecma\r
  Mkicsai.Service -.-> External.Services.Aso\r
  Mkicsai.Service -.-> External.Services.Esr\r
`;case"c3_service":return`---\r
title: "КИ-Ц САИ ПС.ИНП (основной сервис)"\r
---\r
graph LR\r
  subgraph @gr1["Основной сервис"]\r
    @gr1.AiSchedule[Планировщик]\r
    subgraph @gr1.["Рабочие процессы"]\r
      @gr1..AiWorker1[Рабочий процесс 1]\r
      @gr1..AiWorker2[Рабочий процесс N]\r
    end\r
  end\r
  subgraph MkicsaiStorage["Хранилище данных"]\r
    MkicsaiStorage.Log([Журналы])\r
    MkicsaiStorage.Monitoring([Мониторинг])\r
  end\r
  @gr1.AiSchedule -.-> @gr1..AiWorker1\r
  @gr1.AiSchedule -.-> @gr1..AiWorker2\r
  @gr1.AiSchedule -.-> MkicsaiStorage.Log\r
  @gr1.AiSchedule -.-> MkicsaiStorage.Monitoring\r
`;case"c3_worker_aoc":return`---\r
title: "Чтение BIN"\r
---\r
graph LR\r
  subgraph Mkicsai["КИ-Ц САИ ПС.ИНП"]\r
    Mkicsai.Aoc[Чтение и первичная обработка BIN]\r
    Mkicsai.Ecma[Анализ ошибок и отправка в ECMA]\r
    subgraph Mkicsai.Storage["Хранилище данных"]\r
      Mkicsai.Storage.Pg([База данных])\r
    end\r
  end\r
  subgraph External["Внешние сервисы"]\r
    External.InputBin[(BIN)]\r
  end\r
  Mkicsai.Aoc -.-> Mkicsai.Ecma\r
  Mkicsai.Aoc -.-> Mkicsai.Storage.Pg\r
  Mkicsai.Aoc -.-> External.InputBin\r
`;case"c3_worker_bin":return`---\r
title: "Обработка BIN"\r
---\r
graph LR\r
  MkicsaiBin[Обработка BIN]\r
  MkicsaiEcma[Анализ ошибок и отправка в ECMA]\r
  subgraph MkicsaiStorage["Хранилище данных"]\r
    MkicsaiStorage.Pg([База данных])\r
    MkicsaiStorage.Cache([Кеш данных])\r
  end\r
  MkicsaiBin -.-> MkicsaiEcma\r
  MkicsaiBin -.-> MkicsaiStorage.Pg\r
  MkicsaiBin -.-> MkicsaiStorage.Cache\r
  MkicsaiEcma -.-> MkicsaiStorage.Cache\r
`;case"c3_worker_sts":return`---\r
title: "Обработка сигналов STS"\r
---\r
graph LR\r
  subgraph Mkicsai["КИ-Ц САИ ПС.ИНП"]\r
    Mkicsai.Sts[Чтение и обработка STS]\r
    Mkicsai.Ecma[Анализ ошибок и отправка в ECMA]\r
    subgraph Mkicsai.Storage["Хранилище данных"]\r
      Mkicsai.Storage.Pg([База данных])\r
      Mkicsai.Storage.Cache([Кеш данных])\r
    end\r
  end\r
  subgraph External["Внешние сервисы"]\r
    External.InputSts[(STS)]\r
  end\r
  Mkicsai.Sts -.-> Mkicsai.Ecma\r
  Mkicsai.Sts -.-> Mkicsai.Storage.Pg\r
  Mkicsai.Sts -.-> Mkicsai.Storage.Cache\r
  Mkicsai.Ecma -.-> Mkicsai.Storage.Cache\r
  Mkicsai.Sts -.-> External.InputSts\r
`;case"c3_worker_esp":return`---\r
title: "Обновление данных о локомотивах."\r
---\r
graph LR\r
  subgraph Mkicsai["КИ-Ц САИ ПС.ИНП"]\r
    Mkicsai.Esp[Чтение и обработка данных из ЕС ПУЛ]\r
    Mkicsai.Ecma[Анализ ошибок и отправка в ECMA]\r
    subgraph Mkicsai.Storage["Хранилище данных"]\r
      Mkicsai.Storage.Pg([База данных])\r
      Mkicsai.Storage.Cache([Кеш данных])\r
    end\r
  end\r
  subgraph External["Внешние сервисы"]\r
    External.InputSts[(STS)]\r
  end\r
  Mkicsai.Esp -.-> Mkicsai.Ecma\r
  Mkicsai.Esp -.-> Mkicsai.Storage.Pg\r
  Mkicsai.Ecma -.-> Mkicsai.Storage.Cache\r
  Mkicsai.Esp -.-> Mkicsai.Storage.Cache\r
  Mkicsai -.-> External.InputSts\r
`;case"c3_worker_aso":return`---\r
title: "Обновление данных ЕМДПП"\r
---\r
graph LR\r
  subgraph Mkicsai["КИ-Ц САИ ПС.ИНП"]\r
    Mkicsai.Aso[Чтение и обработка данных из ЕМД ПП]\r
    Mkicsai.Ecma[Анализ ошибок и отправка в ECMA]\r
    subgraph Mkicsai.Storage["Хранилище данных"]\r
      Mkicsai.Storage.Pg([База данных])\r
      Mkicsai.Storage.Cache([Кеш данных])\r
    end\r
  end\r
  subgraph External["Внешние сервисы"]\r
    External.ServicesAso[ЕМД ПП]\r
  end\r
  Mkicsai.Aso -.-> Mkicsai.Ecma\r
  Mkicsai.Aso -.-> Mkicsai.Storage.Pg\r
  Mkicsai.Aso -.-> Mkicsai.Storage.Cache\r
  Mkicsai.Ecma -.-> Mkicsai.Storage.Cache\r
  Mkicsai.Aso -.-> External.ServicesAso\r
`;case"c3_worker_2033":return`---\r
title: "Отсылка сообщений 2033"\r
---\r
graph LR\r
  subgraph Mkicsai["КИ-Ц САИ ПС.ИНП"]\r
    Mkicsai.M2033[Формирование сообщений 2033]\r
    Mkicsai.Ecma[Анализ ошибок и отправка в ECMA]\r
    subgraph Mkicsai.Storage["Хранилище данных"]\r
      Mkicsai.Storage.Cache([Кеш данных])\r
      Mkicsai.Storage.Pg([База данных])\r
    end\r
  end\r
  subgraph External["Внешние сервисы"]\r
    External.OutputM2033[(2033)]\r
  end\r
  Mkicsai.M2033 -.-> Mkicsai.Ecma\r
  Mkicsai.Ecma -.-> Mkicsai.Storage.Cache\r
  Mkicsai.M2033 -.-> Mkicsai.Storage.Pg\r
  Mkicsai.M2033 -.-> External.OutputM2033\r
`;case"c3_worker_clone":return`---\r
title: "Подготовка и удаление партиций"\r
---\r
graph LR\r
  MkicsaiClone[Создание и чистка оперативных таблиц]\r
  subgraph MkicsaiStorage["Хранилище данных"]\r
    MkicsaiStorage.Pg([База данных])\r
  end\r
  MkicsaiClone -.-> MkicsaiStorage.Pg\r
`;case"c3_worker_ecma":return`---\r
title: "Отсылка сообщений ECMA"\r
---\r
graph LR\r
  subgraph Mkicsai["КИ-Ц САИ ПС.ИНП"]\r
    Mkicsai.Ecma[Анализ ошибок и отправка в ECMA]\r
    subgraph Mkicsai.Storage["Хранилище данных"]\r
      Mkicsai.Storage.Pg([База данных])\r
      Mkicsai.Storage.Cache([Кеш данных])\r
    end\r
  end\r
  subgraph External["Внешние сервисы"]\r
    External.OutputEcma[(ECMA)]\r
  end\r
  Mkicsai.Ecma -.-> Mkicsai.Storage.Cache\r
  Mkicsai.Ecma -.-> External.OutputEcma\r
`;case"c3_worker_esr":return`---\r
title: "Обновление нормативно справочной информации"\r
---\r
graph LR\r
  subgraph Mkicsai["КИ-Ц САИ ПС.ИНП"]\r
    Mkicsai.Esr[Обновление НСИ]\r
    subgraph Mkicsai.Storage["Хранилище данных"]\r
      Mkicsai.Storage.Pg([База данных])\r
    end\r
  end\r
  subgraph External["Внешние сервисы"]\r
    External.ServicesEsr[Сервис НСИ]\r
  end\r
  Mkicsai.Esr -.-> Mkicsai.Storage.Pg\r
  Mkicsai.Esr -.-> External.ServicesEsr\r
`;case"c3_client":return`---\r
title: "КИ-Ц САИ ПС.ИНП (web приложение)"\r
---\r
graph LR\r
  subgraph Users["Пользователи"]\r
    Users.Admin[fa:fa-user Администратор]\r
    Users.Editor[fa:fa-user Редактор]\r
    Users.Analyst[fa:fa-user Аналитик]\r
  end\r
  subgraph Mkicsai["КИ-Ц САИ ПС.ИНП"]\r
    Mkicsai.Frontend[КИ-Ц САИ ПС.ИНП (веб клиент)]\r
    Mkicsai.Backend[КИ-Ц САИ ПС.ИНП (веб сервер)]\r
    subgraph Mkicsai.Storage["Хранилище данных"]\r
      Mkicsai.Storage.Session([Сессии])\r
      Mkicsai.Storage.Pg([База данных])\r
      Mkicsai.Storage.Log([Журналы])\r
      Mkicsai.Storage.Monitoring([Мониторинг])\r
    end\r
  end\r
  Users.Admin -.-> Mkicsai.Frontend\r
  Users.Editor -.-> Mkicsai.Frontend\r
  Users.Analyst -.-> Mkicsai.Frontend\r
  Mkicsai.Frontend -.-> Mkicsai.Backend\r
  Mkicsai.Backend -.-> Mkicsai.Storage.Session\r
  Mkicsai.Backend -.-> Mkicsai.Storage.Pg\r
  Mkicsai.Backend -.-> Mkicsai.Storage.Log\r
  Mkicsai.Backend -.-> Mkicsai.Storage.Monitoring\r
`;default:throw new Error("Unknown viewId: "+r)}}export{n as mmdSource};
