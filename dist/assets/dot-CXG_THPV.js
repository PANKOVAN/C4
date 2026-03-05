function t(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    users [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Пользователи</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Пользователи системы, могут обращаться к КИ-Ц<BR/>САИ ПС.ИНП для получения информации и<BR/>управления системой через web-интерфейс.</FONT></TD></TR></TABLE>>,
        likec4_id=users,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mkicsai [height=4.028,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="28">КИ-Ц САИ ПС.ИНП</FONT></TD></TR><TR><TD><FONT POINT-SIZE="21" COLOR="#bfdbfe">Концентратор информации центрального уровня<BR/>предназначен для отслеживания в реальном<BR/>времени прохождений железнодорожного<BR/>подвижного состава через контрольные пункты и<BR/>представляет собой набор микро сервисов,</FONT></TD></TR></TABLE>>,
        likec4_id=mkicsai,
        likec4_level=0,
        margin="0.445,0.445",
        width=7.223];
    users -> mkicsai [likec4_id="1dvilnj",
        minlen=1,
        style=dashed];
    external [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Внешние сервисы</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Внешние сервисы, к которым обращается КИ-Ц<BR/>САИ ПС.ИНП для получения и отправки сообщений<BR/>о прохождении подвижного состава, а также для<BR/>получения дополнительной информации<BR/>необходимой для работы системы.</FONT></TD></TR></TABLE>>,
        likec4_id=external,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mkicsai -> external [likec4_id=gki868,
        minlen=1,
        style=dashed];
}
`;case"c1":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c1,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_external {
        graph [color="#313131",
            fillcolor="#454545",
            label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id=external,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        input [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Входные очереди</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Внешняя очередь</FONT></TD></TR></TABLE>>,
            likec4_id="external.input",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        output [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Выходные очереди</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Внешняя очередь</FONT></TD></TR></TABLE>>,
            likec4_id="external.output",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        services [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Внешние сервисы</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Внешний сервис</FONT></TD></TR></TABLE>>,
            likec4_id="external.services",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    users [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Пользователи</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Пользователи системы, могут обращаться к КИ-Ц<BR/>САИ ПС.ИНП для получения информации и<BR/>управления системой через web-интерфейс.</FONT></TD></TR></TABLE>>,
        likec4_id=users,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mkicsai [height=4.028,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="28">КИ-Ц САИ ПС.ИНП</FONT></TD></TR><TR><TD><FONT POINT-SIZE="21" COLOR="#bfdbfe">Концентратор информации центрального уровня<BR/>предназначен для отслеживания в реальном<BR/>времени прохождений железнодорожного<BR/>подвижного состава через контрольные пункты и<BR/>представляет собой набор микро сервисов,</FONT></TD></TR></TABLE>>,
        likec4_id=mkicsai,
        likec4_level=0,
        margin="0.445,0.445",
        width=7.223];
    users -> mkicsai [likec4_id="1dvilnj",
        minlen=0,
        style=dashed,
        weight=2];
    mkicsai -> input [likec4_id="10amvdk",
        minlen=1,
        style=dashed];
    mkicsai -> output [likec4_id="1o5p8pd",
        minlen=1,
        style=dashed];
    mkicsai -> services [likec4_id="1vrvzz4",
        minlen=1,
        style=dashed];
}
`;case"c2":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c2,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_mkicsai {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>КИ-Ц САИ ПС.ИНП</B></FONT>>,
            likec4_depth=1,
            likec4_id=mkicsai,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        frontend [group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">КИ-Ц САИ ПС.ИНП (веб клиент)</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Веб клиент для взаимодействия с<BR/>КИ-Ц САИ ПС.ИНП, позволяет<BR/>пользователям просматривать<BR/>информацию о прохождении подвижного<BR/>состава через контрольные пункты,</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.frontend",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
        service [group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">КИ-Ц САИ ПС.ИНП</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Концентратор информации<BR/>центрального уровня предназначен<BR/>для отслеживания в реальном времени<BR/>прохождений железнодорожного<BR/>подвижного состава через</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.service",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        backend [group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">КИ-Ц САИ ПС.ИНП (веб сервер)</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Веб сервер для взаимодействия с<BR/>КИ-Ц САИ ПС.ИНП, позволяет<BR/>пользователям просматривать<BR/>информацию о прохождении подвижного<BR/>состава через контрольные пункты,</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.backend",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        storage [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Хранилище данных</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище данных для КИ-Ц САИ ПС.ИНП, включая<BR/>сессии, логи, мониторинг и кеш данных.</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.storage",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_external {
        graph [color="#2d2d2d",
            fillcolor="#3f3f3f",
            label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=2,
            likec4_id=external,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_input {
            graph [color="#313131",
                fillcolor="#454545",
                label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВХОДНЫЕ ОЧЕРЕДИ</B></FONT>>,
                likec4_depth=1,
                likec4_id="external.input",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            bin [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.389,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">BIN</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Входная очередь сообщений о прохождении<BR/>подвижного через контрольные пункты</FONT></TD></TR></TABLE>>,
                likec4_id="external.input.bin",
                likec4_level=2,
                margin="0.278,0.223",
                width=4.445];
            sts [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.389,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">STS</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Входная очередь сообщений о состоянии<BR/>оборудования.</FONT></TD></TR></TABLE>>,
                likec4_id="external.input.sts",
                likec4_level=2,
                margin="0.278,0.223",
                width=4.445];
        }
        subgraph cluster_output {
            graph [color="#313131",
                fillcolor="#454545",
                label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВЫХОДНЫЕ ОЧЕРЕДИ</B></FONT>>,
                likec4_depth=1,
                likec4_id="external.output",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            m2033 [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.389,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">2033</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Выходная очередь сообщений о прохождении<BR/>подвижного через контрольные пункты в формате<BR/>2033.</FONT></TD></TR></TABLE>>,
                likec4_id="external.output.m2033",
                likec4_level=2,
                margin="0.278,0.223",
                width=4.445];
            ecma [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.389,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">ECMA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Выходная очередь сообщений о сбоях и ошибках<BR/>в работе оборудования.</FONT></TD></TR></TABLE>>,
                likec4_id="external.output.ecma",
                likec4_level=2,
                margin="0.278,0.223",
                width=4.445];
        }
        subgraph cluster_services {
            graph [color="#313131",
                fillcolor="#454545",
                label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
                likec4_depth=1,
                likec4_id="external.services",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            aso [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">ЕМД ПП</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Внешний сервис для получения данных о<BR/>прохождении подвижного состава по данным<BR/>внесенным в ЕМД ПП.</FONT></TD></TR></TABLE>>,
                likec4_id="external.services.aso",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            esr [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Сервис НСИ</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Внешний сервис для получения нормативно<BR/>справочной информации (дороги и остановочные<BR/>пункты).</FONT></TD></TR></TABLE>>,
                likec4_id="external.services.esr",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    users [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Пользователи</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Пользователи системы, могут обращаться к КИ-Ц<BR/>САИ ПС.ИНП для получения информации и<BR/>управления системой через web-интерфейс.</FONT></TD></TR></TABLE>>,
        likec4_id=users,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    users -> frontend [likec4_id=un04zj,
        minlen=1,
        style=dashed];
    frontend -> backend [likec4_id=mxoa00,
        style=dashed,
        weight=2];
    service -> storage [likec4_id=nyru26,
        style=dashed,
        weight=4];
    service -> bin [likec4_id=litqdc,
        minlen=1,
        style=dashed];
    service -> sts [likec4_id=litxdd,
        minlen=1,
        style=dashed];
    service -> m2033 [likec4_id=ea7yeb,
        minlen=1,
        style=dashed];
    service -> ecma [likec4_id=o42lpi,
        minlen=1,
        style=dashed];
    service -> aso [likec4_id="1f0iy4g",
        minlen=1,
        style=dashed];
    service -> esr [likec4_id="1f0ius9",
        minlen=1,
        style=dashed];
    backend -> storage [likec4_id=fwg29j,
        style=dashed];
}
`;case"c3_service":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_service,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_@gr1" {
        graph [color="#292f37",
            fillcolor="#3a404a",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>ОСНОВНОЙ СЕРВИС</B></FONT>>,
            likec4_depth=2,
            likec4_id="@gr1",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph "cluster_@gr2" {
            graph [color="#2d333d",
                fillcolor="#3e4651",
                label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>РАБОЧИЕ ПРОЦЕССЫ</B></FONT>>,
                likec4_depth=1,
                likec4_id="@gr2",
                likec4_level=0,
                margin=40,
                style=filled
            ];
            worker1 [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="@gr1",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Рабочий процесс 1</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.worker1",
                likec4_level=1,
                margin="0.112,0.223",
                width=4.445];
            worker2 [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="@gr1",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Рабочий процесс N</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.worker2",
                likec4_level=1,
                margin="0.112,0.223",
                width=4.445];
        }
        schedule [group="@gr1",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Планировщик</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Запуск рабочих процессов по<BR/>расписанию, логирование исключений,<BR/>сбор данных для мониторинга.</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.schedule",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph cluster_storage {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
            likec4_depth=1,
            likec4_id="mkicsai.storage",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        log [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Журналы</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище журналов об ошибках и отклонениях в<BR/>работе системы.</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.storage.log",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        monitoring [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Мониторинг</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище данных для мониторинга<BR/>работы системы.</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.storage.monitoring",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    schedule -> worker1 [likec4_id="9vc888",
        minlen=1,
        style=dashed,
        weight=2];
    schedule -> worker2 [likec4_id="9vc88b",
        minlen=1,
        style=dashed,
        weight=2];
    schedule -> log [likec4_id=zaot30,
        minlen=1,
        style=dashed];
    schedule -> monitoring [likec4_id="1s26mqc",
        minlen=1,
        style=dashed];
}
`;case"c3_worker_aoc":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_worker_aoc,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_mkicsai {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>КИ-Ц САИ ПС.ИНП</B></FONT>>,
            likec4_depth=2,
            likec4_id=mkicsai,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_storage {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
                likec4_depth=1,
                likec4_id="mkicsai.storage",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            pg [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.pg",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        aoc [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Чтение и первичная обработка BIN</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.aoc",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        ecma [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Анализ ошибок и отправка в ECMA</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f5b2a3">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.ecma",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph cluster_external {
        graph [color="#313131",
            fillcolor="#454545",
            label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id=external,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        bin [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">BIN</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Входная очередь сообщений о прохождении<BR/>подвижного через контрольные пункты</FONT></TD></TR></TABLE>>,
            likec4_id="external.input.bin",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    aoc -> ecma [likec4_id=duyelp,
        minlen=1,
        style=dashed,
        weight=4];
    aoc -> pg [likec4_id="1n4eq07",
        minlen=1,
        style=dashed,
        weight=3];
    aoc -> bin [likec4_id="1xk188g",
        minlen=1,
        style=dashed];
}
`;case"c3_worker_bin":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_worker_bin,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_storage {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
            likec4_depth=1,
            likec4_id="mkicsai.storage",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        pg [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.storage.pg",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        cache [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Кеш данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище временных данных, для<BR/>ускорения работы системы.</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.storage.cache",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    bin [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Обработка BIN</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
        likec4_id="mkicsai.bin",
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    ecma [color="#853A2D",
        fillcolor="#AC4D39",
        fontcolor="#FBD3CB",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Анализ ошибок и отправка в ECMA</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f5b2a3">Рабочий процесс</FONT></TD></TR></TABLE>>,
        likec4_id="mkicsai.ecma",
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    bin -> ecma [color="#AC4D39",
        fontcolor="#f5b2a3",
        likec4_id="1upcorp",
        minlen=0,
        style=dashed,
        weight=2];
    bin -> pg [likec4_id=dtt2cv,
        minlen=1,
        style=dashed];
    bin -> cache [likec4_id="4eamic",
        style=dashed];
    ecma -> cache [likec4_id=ba7il7,
        style=dashed];
}
`;case"c3_worker_sts":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_worker_sts,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_mkicsai {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>КИ-Ц САИ ПС.ИНП</B></FONT>>,
            likec4_depth=2,
            likec4_id=mkicsai,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_storage {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
                likec4_depth=1,
                likec4_id="mkicsai.storage",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            pg [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.pg",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            cache [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Кеш данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище временных данных, для<BR/>ускорения работы системы.</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.cache",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        sts [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Чтение и обработка STS</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.sts",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        ecma [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Анализ ошибок и отправка в ECMA</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f5b2a3">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.ecma",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph cluster_external {
        graph [color="#313131",
            fillcolor="#454545",
            label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id=external,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        sts_1 [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">STS</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Входная очередь сообщений о состоянии<BR/>оборудования.</FONT></TD></TR></TABLE>>,
            likec4_id="external.input.sts",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    sts -> ecma [color="#AC4D39",
        fontcolor="#f5b2a3",
        likec4_id="5l2qgk",
        style=dashed,
        weight=4];
    sts -> sts_1 [likec4_id="1284z2w",
        minlen=1,
        style=dashed];
    sts -> pg [likec4_id="4vxany",
        minlen=1,
        style=dashed,
        weight=3];
    sts -> cache [likec4_id=safx1h,
        style=dashed,
        weight=3];
    ecma -> cache [likec4_id=ba7il7,
        style=dashed];
}
`;case"c3_worker_esp":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_worker_esp,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_mkicsai {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>КИ-Ц САИ ПС.ИНП</B></FONT>>,
            likec4_depth=2,
            likec4_id=mkicsai,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_storage {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
                likec4_depth=1,
                likec4_id="mkicsai.storage",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            pg [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.pg",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            cache [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Кеш данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище временных данных, для<BR/>ускорения работы системы.</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.cache",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        esp [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Чтение и обработка данных из ЕС ПУЛ</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.esp",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        ecma [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Анализ ошибок и отправка в ECMA</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f5b2a3">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.ecma",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph cluster_external {
        graph [color="#313131",
            fillcolor="#454545",
            label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id=external,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        sts [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">STS</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Входная очередь сообщений о состоянии<BR/>оборудования.</FONT></TD></TR></TABLE>>,
            likec4_id="external.input.sts",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    esp -> ecma [color="#AC4D39",
        fontcolor="#f5b2a3",
        likec4_id=o2lhty,
        style=dashed,
        weight=2];
    esp -> pg [likec4_id="2g9ccs",
        minlen=1,
        style=dashed];
    esp -> cache [likec4_id=qyymgn,
        style=dashed];
    ecma -> cache [likec4_id=ba7il7,
        style=dashed];
    cache -> sts [likec4_id="1kmpade",
        ltail=cluster_mkicsai,
        minlen=1,
        style=dashed,
        weight=3];
}
`;case"c3_worker_aso":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_worker_aso,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_mkicsai {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>КИ-Ц САИ ПС.ИНП</B></FONT>>,
            likec4_depth=2,
            likec4_id=mkicsai,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_storage {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
                likec4_depth=1,
                likec4_id="mkicsai.storage",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            pg [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.pg",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            cache [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Кеш данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище временных данных, для<BR/>ускорения работы системы.</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.cache",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        aso [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Чтение и обработка данных из ЕМД ПП</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.aso",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        ecma [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Анализ ошибок и отправка в ECMA</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f5b2a3">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.ecma",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph cluster_external {
        graph [color="#313131",
            fillcolor="#454545",
            label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id=external,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        aso_1 [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">ЕМД ПП</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Внешний сервис для получения данных о<BR/>прохождении подвижного состава по данным<BR/>внесенным в ЕМД ПП.</FONT></TD></TR></TABLE>>,
            likec4_id="external.services.aso",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    aso -> ecma [color="#AC4D39",
        fontcolor="#f5b2a3",
        likec4_id="196xywt",
        style=dashed,
        weight=4];
    aso -> aso_1 [likec4_id=z2j6zk,
        minlen=1,
        style=dashed];
    aso -> pg [likec4_id="1e9m5rr",
        minlen=1,
        style=dashed,
        weight=3];
    aso -> cache [likec4_id="1pj6bxo",
        style=dashed,
        weight=3];
    ecma -> cache [likec4_id=ba7il7,
        style=dashed];
}
`;case"c3_worker_2033":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_worker_2033,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_mkicsai {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>КИ-Ц САИ ПС.ИНП</B></FONT>>,
            likec4_depth=2,
            likec4_id=mkicsai,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_storage {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
                likec4_depth=1,
                likec4_id="mkicsai.storage",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            cache [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Кеш данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище временных данных, для<BR/>ускорения работы системы.</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.cache",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            pg [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.pg",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        m2033 [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Формирование сообщений 2033</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.m2033",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        ecma [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Анализ ошибок и отправка в ECMA</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f5b2a3">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.ecma",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph cluster_external {
        graph [color="#313131",
            fillcolor="#454545",
            label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id=external,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        m2033_1 [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">2033</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Выходная очередь сообщений о прохождении<BR/>подвижного через контрольные пункты в формате<BR/>2033.</FONT></TD></TR></TABLE>>,
            likec4_id="external.output.m2033",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    m2033 -> ecma [color="#AC4D39",
        fontcolor="#f5b2a3",
        likec4_id="1rm0vhr",
        style=dashed,
        weight=4];
    m2033 -> m2033_1 [likec4_id=ofb05t,
        minlen=1,
        style=dashed];
    m2033 -> pg [likec4_id="3j1s11",
        minlen=1,
        style=dashed,
        weight=3];
    ecma -> cache [likec4_id=ba7il7,
        minlen=1,
        style=dashed];
}
`;case"c3_worker_clone":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_worker_clone,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_storage {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
            likec4_depth=1,
            likec4_id="mkicsai.storage",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        pg [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.storage.pg",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    clone [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Создание и чистка оперативных таблиц</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
        likec4_id="mkicsai.clone",
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    clone -> pg [likec4_id=xigg5d,
        style=dashed,
        weight=2];
}
`;case"c3_worker_ecma":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_worker_ecma,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_mkicsai {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>КИ-Ц САИ ПС.ИНП</B></FONT>>,
            likec4_depth=2,
            likec4_id=mkicsai,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_storage {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
                likec4_depth=1,
                likec4_id="mkicsai.storage",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            pg [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.pg",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            cache [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Кеш данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище временных данных, для<BR/>ускорения работы системы.</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.cache",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        ecma [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Анализ ошибок и отправка в ECMA</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f5b2a3">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.ecma",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph cluster_external {
        graph [color="#313131",
            fillcolor="#454545",
            label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id=external,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ecma_1 [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">ECMA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Выходная очередь сообщений о сбоях и ошибках<BR/>в работе оборудования.</FONT></TD></TR></TABLE>>,
            likec4_id="external.output.ecma",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    ecma -> cache [likec4_id=ba7il7,
        minlen=0,
        style=dashed,
        weight=3];
    ecma -> ecma_1 [likec4_id="1aw0a4x",
        minlen=1,
        style=dashed];
}
`;case"c3_worker_esr":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_worker_esr,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_mkicsai {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>КИ-Ц САИ ПС.ИНП</B></FONT>>,
            likec4_depth=2,
            likec4_id=mkicsai,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_storage {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
                likec4_depth=1,
                likec4_id="mkicsai.storage",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            pg [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.pg",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        esr [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Обновление НСИ</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Рабочий процесс</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.esr",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph cluster_external {
        graph [color="#313131",
            fillcolor="#454545",
            label=<<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ВНЕШНИЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id=external,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        esr_1 [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Сервис НСИ</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Внешний сервис для получения нормативно<BR/>справочной информации (дороги и остановочные<BR/>пункты).</FONT></TD></TR></TABLE>>,
            likec4_id="external.services.esr",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    esr -> pg [likec4_id="1q8g6by",
        minlen=0,
        style=dashed,
        weight=3];
    esr -> esr_1 [likec4_id="1qv03q8",
        minlen=1,
        style=dashed];
}
`;case"c3_client":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=c3_client,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_users {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ПОЛЬЗОВАТЕЛИ</B></FONT>>,
            likec4_depth=1,
            likec4_id=users,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        admin [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Администратор</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Управление пользователями, системные<BR/>настройки, анализ ошибок и<BR/>производительности.</FONT></TD></TR></TABLE>>,
            likec4_id="users.admin",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        editor [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Редактор</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Правка нормативно справочной информации.<BR/>Установка и снятие считывателей.</FONT></TD></TR></TABLE>>,
            likec4_id="users.editor",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        analyst [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Аналитик</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Анализ работы оборудования установленного на<BR/>местах на основе данных о прохождении<BR/>подвижного состава и сообщений об ошибках.</FONT></TD></TR></TABLE>>,
            likec4_id="users.analyst",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_mkicsai {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>КИ-Ц САИ ПС.ИНП</B></FONT>>,
            likec4_depth=2,
            likec4_id=mkicsai,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_storage {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>ХРАНИЛИЩЕ ДАННЫХ</B></FONT>>,
                likec4_depth=1,
                likec4_id="mkicsai.storage",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            session [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Сессии</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище сессий пользователей<BR/>системы.</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.session",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            pg [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">База данных</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище постоянных<BR/>данных(нормативно справочная<BR/>информация) и условно постоянных<BR/>данных(оперативные данные, которые<BR/>нужно хранить не менее 10 дней).</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.pg",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            log [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Журналы</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище журналов об ошибках и отклонениях в<BR/>работе системы.</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.log",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            monitoring [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=mkicsai,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Мониторинг</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранилище данных для мониторинга<BR/>работы системы.</FONT></TD></TR></TABLE>>,
                likec4_id="mkicsai.storage.monitoring",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        frontend [group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">КИ-Ц САИ ПС.ИНП (веб клиент)</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Веб клиент для взаимодействия с<BR/>КИ-Ц САИ ПС.ИНП, позволяет<BR/>пользователям просматривать<BR/>информацию о прохождении подвижного<BR/>состава через контрольные пункты,</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.frontend",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
        backend [group=mkicsai,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">КИ-Ц САИ ПС.ИНП (веб сервер)</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Веб сервер для взаимодействия с<BR/>КИ-Ц САИ ПС.ИНП, позволяет<BR/>пользователям просматривать<BR/>информацию о прохождении подвижного<BR/>состава через контрольные пункты,</FONT></TD></TR></TABLE>>,
            likec4_id="mkicsai.backend",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    admin -> frontend [likec4_id=u2045a,
        minlen=1,
        style=dashed];
    editor -> frontend [likec4_id="1235txs",
        minlen=1,
        style=dashed];
    analyst -> frontend [likec4_id=ki4f65,
        minlen=1,
        style=dashed];
    frontend -> backend [likec4_id=mxoa00,
        style=dashed,
        weight=3];
    backend -> session [likec4_id=g7vm2v,
        minlen=1,
        style=dashed];
    backend -> pg [likec4_id=ro4fi,
        minlen=1,
        style=dashed];
    backend -> log [likec4_id=pd4cbh,
        minlen=1,
        style=dashed];
    backend -> monitoring [likec4_id="1mnwuz9",
        minlen=1,
        style=dashed];
}
`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="598pt" height="920pt"
 viewBox="0.00 0.00 598.00 920.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 905.06)">
<!-- users -->
<g id="node1" class="node">
<title>users</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="477.43,-890.02 90.58,-890.02 90.58,-710.02 477.43,-710.02 477.43,-890.02"/>
<text xml:space="preserve" text-anchor="start" x="220.66" y="-823.32" font-family="Arial" font-size="19.00" fill="#eff6ff">Пользователи</text>
<text xml:space="preserve" text-anchor="start" x="110.64" y="-800.12" font-family="Arial" font-size="15.00" fill="#bfdbfe">Пользователи системы, могут обращаться к КИ&#45;Ц</text>
<text xml:space="preserve" text-anchor="start" x="142.31" y="-782.12" font-family="Arial" font-size="15.00" fill="#bfdbfe">САИ ПС.ИНП для получения информации и</text>
<text xml:space="preserve" text-anchor="start" x="126.05" y="-764.12" font-family="Arial" font-size="15.00" fill="#bfdbfe">управления системой через web&#45;интерфейс.</text>
</g>
<!-- mkicsai -->
<g id="node2" class="node">
<title>mkicsai</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="568.01,-590.02 0,-590.02 0,-300 568.01,-300 568.01,-590.02"/>
<text xml:space="preserve" text-anchor="start" x="182.1" y="-501.61" font-family="Arial" font-size="28.00" fill="#eff6ff">КИ&#45;Ц САИ ПС.ИНП</text>
<text xml:space="preserve" text-anchor="start" x="41.87" y="-470.31" font-family="Arial" font-size="21.00" fill="#bfdbfe">Концентратор информации центрального уровня</text>
<text xml:space="preserve" text-anchor="start" x="62.3" y="-445.11" font-family="Arial" font-size="21.00" fill="#bfdbfe">предназначен для отслеживания в реальном</text>
<text xml:space="preserve" text-anchor="start" x="79.8" y="-419.91" font-family="Arial" font-size="21.00" fill="#bfdbfe">времени прохождений железнодорожного</text>
<text xml:space="preserve" text-anchor="start" x="36.04" y="-394.71" font-family="Arial" font-size="21.00" fill="#bfdbfe">подвижного состава через контрольные пункты и</text>
<text xml:space="preserve" text-anchor="start" x="65.21" y="-369.51" font-family="Arial" font-size="21.00" fill="#bfdbfe">представляет собой набор микро сервисов,</text>
</g>
<!-- external -->
<g id="node3" class="node">
<title>external</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="477.01,-180 91,-180 91,0 477.01,0 477.01,-180"/>
<text xml:space="preserve" text-anchor="start" x="207.46" y="-131.3" font-family="Arial" font-size="19.00" fill="#fafafa">Внешние сервисы</text>
<text xml:space="preserve" text-anchor="start" x="123.14" y="-108.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Внешние сервисы, к которым обращается КИ&#45;Ц</text>
<text xml:space="preserve" text-anchor="start" x="111.05" y="-90.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">САИ ПС.ИНП для получения и отправки сообщений</text>
<text xml:space="preserve" text-anchor="start" x="111.05" y="-72.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">о прохождении подвижного состава, а также для</text>
<text xml:space="preserve" text-anchor="start" x="142.31" y="-54.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">получения дополнительной информации</text>
<text xml:space="preserve" text-anchor="start" x="163.15" y="-36.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">необходимой для работы системы.</text>
</g>
<!-- users&#45;&gt;mkicsai -->
<g id="edge1" class="edge">
<title>users&#45;&gt;mkicsai</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M284.01,-710.39C284.01,-676.93 284.01,-637.8 284.01,-600.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="286.63,-600.52 284.01,-593.02 281.38,-600.52 286.63,-600.52"/>
</g>
<!-- mkicsai&#45;&gt;external -->
<g id="edge2" class="edge">
<title>mkicsai&#45;&gt;external</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M284.01,-300.17C284.01,-263.26 284.01,-224.38 284.01,-190.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="286.63,-190.39 284.01,-182.89 281.38,-190.39 286.63,-190.39"/>
</g>
</g>
</svg>
`;case"c1":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1086pt" height="891pt"
 viewBox="0.00 0.00 1086.00 891.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 876.05)">
<g id="clust1" class="cluster">
<title>cluster_external</title>
<polygon fill="#454545" stroke="#313131" points="648.01,-8 648.01,-853 1048.05,-853 1048.05,-8 648.01,-8"/>
<text xml:space="preserve" text-anchor="start" x="656.01" y="-840.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<!-- input -->
<g id="node1" class="node">
<title>input</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1008.05,-220 688.01,-220 688.01,-48 1008.05,-48 1008.05,-220"/>
<text xml:space="preserve" text-anchor="start" x="771.49" y="-139.3" font-family="Arial" font-size="19.00" fill="#fafafa">Входные очереди</text>
<text xml:space="preserve" text-anchor="start" x="787.6" y="-116.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Внешняя очередь</text>
</g>
<!-- output -->
<g id="node2" class="node">
<title>output</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1008.05,-502 688.01,-502 688.01,-330 1008.05,-330 1008.05,-502"/>
<text xml:space="preserve" text-anchor="start" x="766.21" y="-421.3" font-family="Arial" font-size="19.00" fill="#fafafa">Выходные очереди</text>
<text xml:space="preserve" text-anchor="start" x="787.6" y="-398.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Внешняя очередь</text>
</g>
<!-- services -->
<g id="node3" class="node">
<title>services</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1008.05,-792 688.01,-792 688.01,-612 1008.05,-612 1008.05,-792"/>
<text xml:space="preserve" text-anchor="start" x="771.49" y="-707.3" font-family="Arial" font-size="19.00" fill="#fafafa">Внешние сервисы</text>
<text xml:space="preserve" text-anchor="start" x="791.77" y="-684.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Внешний сервис</text>
</g>
<!-- users -->
<g id="node4" class="node">
<title>users</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="477.43,-851 90.58,-851 90.58,-671 477.43,-671 477.43,-851"/>
<text xml:space="preserve" text-anchor="start" x="220.66" y="-784.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Пользователи</text>
<text xml:space="preserve" text-anchor="start" x="110.64" y="-761.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Пользователи системы, могут обращаться к КИ&#45;Ц</text>
<text xml:space="preserve" text-anchor="start" x="142.31" y="-743.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">САИ ПС.ИНП для получения информации и</text>
<text xml:space="preserve" text-anchor="start" x="126.05" y="-725.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">управления системой через web&#45;интерфейс.</text>
</g>
<!-- mkicsai -->
<g id="node5" class="node">
<title>mkicsai</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="568.01,-561.01 0,-561.01 0,-270.99 568.01,-270.99 568.01,-561.01"/>
<text xml:space="preserve" text-anchor="start" x="182.1" y="-472.6" font-family="Arial" font-size="28.00" fill="#eff6ff">КИ&#45;Ц САИ ПС.ИНП</text>
<text xml:space="preserve" text-anchor="start" x="41.87" y="-441.3" font-family="Arial" font-size="21.00" fill="#bfdbfe">Концентратор информации центрального уровня</text>
<text xml:space="preserve" text-anchor="start" x="62.3" y="-416.1" font-family="Arial" font-size="21.00" fill="#bfdbfe">предназначен для отслеживания в реальном</text>
<text xml:space="preserve" text-anchor="start" x="79.8" y="-390.9" font-family="Arial" font-size="21.00" fill="#bfdbfe">времени прохождений железнодорожного</text>
<text xml:space="preserve" text-anchor="start" x="36.04" y="-365.7" font-family="Arial" font-size="21.00" fill="#bfdbfe">подвижного состава через контрольные пункты и</text>
<text xml:space="preserve" text-anchor="start" x="65.21" y="-340.5" font-family="Arial" font-size="21.00" fill="#bfdbfe">представляет собой набор микро сервисов,</text>
</g>
<!-- users&#45;&gt;mkicsai -->
<g id="edge1" class="edge">
<title>users&#45;&gt;mkicsai</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M284.01,-671.1C284.01,-637.8 284.01,-604.5 284.01,-571.21"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="286.63,-571.4 284.01,-563.9 281.38,-571.4 286.63,-571.4"/>
</g>
<!-- mkicsai&#45;&gt;input -->
<g id="edge2" class="edge">
<title>mkicsai&#45;&gt;input</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M567.66,-274.17C605.68,-255.1 643.65,-236.04 678.81,-218.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="679.93,-220.78 685.46,-215.07 677.57,-216.09 679.93,-220.78"/>
</g>
<!-- mkicsai&#45;&gt;output -->
<g id="edge3" class="edge">
<title>mkicsai&#45;&gt;output</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M567.66,-416C605.36,-416 643.01,-416 677.91,-416"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="677.63,-418.63 685.13,-416 677.63,-413.38 677.63,-418.63"/>
</g>
<!-- mkicsai&#45;&gt;services -->
<g id="edge4" class="edge">
<title>mkicsai&#45;&gt;services</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M567.66,-559.84C605.68,-579.18 643.65,-598.51 678.81,-616.4"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="677.59,-618.72 685.46,-619.78 679.97,-614.04 677.59,-618.72"/>
</g>
</g>
</svg>
`;case"c2":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="2010pt" height="2487pt"
 viewBox="0.00 0.00 2010.00 2487.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2472.05)">
<g id="clust1" class="cluster">
<title>cluster_mkicsai</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="466.84,-1878 466.84,-2449 1972.04,-2449 1972.04,-1878 466.84,-1878"/>
<text xml:space="preserve" text-anchor="start" x="474.84" y="-2436.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">КИ&#45;Ц САИ ПС.ИНП</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_external</title>
<polygon fill="#3f3f3f" stroke="#2d2d2d" points="950.73,-8 950.73,-1870 1513,-1870 1513,-8 950.73,-8"/>
<text xml:space="preserve" text-anchor="start" x="958.73" y="-1857.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_input</title>
<polygon fill="#454545" stroke="#313131" points="1013.65,-48 1013.65,-603 1450.08,-603 1450.08,-48 1013.65,-48"/>
<text xml:space="preserve" text-anchor="start" x="1021.65" y="-590.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВХОДНЫЕ ОЧЕРЕДИ</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_output</title>
<polygon fill="#454545" stroke="#313131" points="990.73,-643 990.73,-1198 1473,-1198 1473,-643 990.73,-643"/>
<text xml:space="preserve" text-anchor="start" x="998.73" y="-1185.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВЫХОДНЫЕ ОЧЕРЕДИ</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_services</title>
<polygon fill="#454545" stroke="#313131" points="998.44,-1238 998.44,-1809 1465.28,-1809 1465.28,-1238 998.44,-1238"/>
<text xml:space="preserve" text-anchor="start" x="1006.44" y="-1796.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<!-- frontend -->
<g id="node1" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="910.19,-2098 506.84,-2098 506.84,-1918 910.19,-1918 910.19,-2098"/>
<text xml:space="preserve" text-anchor="start" x="554.96" y="-2003.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="598.9" y="-2049.3" font-family="Arial" font-size="19.00" fill="#eff6ff">КИ&#45;Ц САИ ПС.ИНП (веб клиент)</text>
<text xml:space="preserve" text-anchor="start" x="888.18" y="-2003.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="598.9" y="-2026.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Веб клиент для взаимодействия с</text>
<text xml:space="preserve" text-anchor="start" x="598.9" y="-2008.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">КИ&#45;Ц САИ ПС.ИНП, позволяет</text>
<text xml:space="preserve" text-anchor="start" x="598.9" y="-1990.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">пользователям просматривать</text>
<text xml:space="preserve" text-anchor="start" x="598.9" y="-1972.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">информацию о прохождении подвижного</text>
<text xml:space="preserve" text-anchor="start" x="598.9" y="-1954.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">состава через контрольные пункты,</text>
</g>
<!-- service -->
<g id="node2" class="node">
<title>service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="908.11,-2388 508.92,-2388 508.92,-2208 908.11,-2208 908.11,-2388"/>
<text xml:space="preserve" text-anchor="start" x="557.04" y="-2293.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="600.99" y="-2339.3" font-family="Arial" font-size="19.00" fill="#eff6ff">КИ&#45;Ц САИ ПС.ИНП</text>
<text xml:space="preserve" text-anchor="start" x="886.1" y="-2293.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="600.99" y="-2316.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Концентратор информации</text>
<text xml:space="preserve" text-anchor="start" x="600.99" y="-2298.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">центрального уровня предназначен</text>
<text xml:space="preserve" text-anchor="start" x="600.99" y="-2280.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">для отслеживания в реальном времени</text>
<text xml:space="preserve" text-anchor="start" x="600.99" y="-2262.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">прохождений железнодорожного</text>
<text xml:space="preserve" text-anchor="start" x="600.99" y="-2244.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">подвижного состава через</text>
</g>
<!-- backend -->
<g id="node3" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1433.54,-2098 1030.19,-2098 1030.19,-1918 1433.54,-1918 1433.54,-2098"/>
<text xml:space="preserve" text-anchor="start" x="1078.31" y="-2003.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1122.25" y="-2049.3" font-family="Arial" font-size="19.00" fill="#eff6ff">КИ&#45;Ц САИ ПС.ИНП (веб сервер)</text>
<text xml:space="preserve" text-anchor="start" x="1411.53" y="-2003.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1122.25" y="-2026.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Веб сервер для взаимодействия с</text>
<text xml:space="preserve" text-anchor="start" x="1122.25" y="-2008.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">КИ&#45;Ц САИ ПС.ИНП, позволяет</text>
<text xml:space="preserve" text-anchor="start" x="1122.25" y="-1990.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">пользователям просматривать</text>
<text xml:space="preserve" text-anchor="start" x="1122.25" y="-1972.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">информацию о прохождении подвижного</text>
<text xml:space="preserve" text-anchor="start" x="1122.25" y="-1954.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">состава через контрольные пункты,</text>
</g>
<!-- storage -->
<g id="node4" class="node">
<title>storage</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1932.04,-2371.64C1932.04,-2380.67 1847.22,-2388 1742.79,-2388 1638.37,-2388 1553.54,-2380.67 1553.54,-2371.64 1553.54,-2371.64 1553.54,-2224.36 1553.54,-2224.36 1553.54,-2215.33 1638.37,-2208 1742.79,-2208 1847.22,-2208 1932.04,-2215.33 1932.04,-2224.36 1932.04,-2224.36 1932.04,-2371.64 1932.04,-2371.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1932.04,-2371.64C1932.04,-2362.61 1847.22,-2355.27 1742.79,-2355.27 1638.37,-2355.27 1553.54,-2362.61 1553.54,-2371.64"/>
<text xml:space="preserve" text-anchor="start" x="1660.97" y="-2312.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Хранилище данных</text>
<text xml:space="preserve" text-anchor="start" x="1573.59" y="-2289.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище данных для КИ&#45;Ц САИ ПС.ИНП, включая</text>
<text xml:space="preserve" text-anchor="start" x="1601.1" y="-2271.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">сессии, логи, мониторинг и кеш данных.</text>
</g>
<!-- bin -->
<g id="node5" class="node">
<title>bin</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1410.08,-260 1053.65,-260 1053.65,-88 1410.08,-88 1410.08,-260"/>
<text xml:space="preserve" text-anchor="start" x="1216.03" y="-188.3" font-family="Arial" font-size="19.00" fill="#fafafa">BIN</text>
<text xml:space="preserve" text-anchor="start" x="1077.67" y="-165.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Входная очередь сообщений о прохождении</text>
<text xml:space="preserve" text-anchor="start" x="1092.25" y="-147.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">подвижного через контрольные пункты</text>
</g>
<!-- sts -->
<g id="node6" class="node">
<title>sts</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1401.74,-542 1061.99,-542 1061.99,-370 1401.74,-370 1401.74,-542"/>
<text xml:space="preserve" text-anchor="start" x="1213.39" y="-470.3" font-family="Arial" font-size="19.00" fill="#fafafa">STS</text>
<text xml:space="preserve" text-anchor="start" x="1086" y="-447.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Входная очередь сообщений о состоянии</text>
<text xml:space="preserve" text-anchor="start" x="1179.77" y="-429.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">оборудования.</text>
</g>
<!-- m2033 -->
<g id="node7" class="node">
<title>m2033</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1433,-855 1030.73,-855 1030.73,-683 1433,-683 1433,-855"/>
<text xml:space="preserve" text-anchor="start" x="1210.73" y="-792.3" font-family="Arial" font-size="19.00" fill="#fafafa">2033</text>
<text xml:space="preserve" text-anchor="start" x="1073.5" y="-769.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Выходная очередь сообщений о прохождении</text>
<text xml:space="preserve" text-anchor="start" x="1054.75" y="-751.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">подвижного через контрольные пункты в формате</text>
<text xml:space="preserve" text-anchor="start" x="1213.1" y="-733.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">2033.</text>
</g>
<!-- ecma -->
<g id="node8" class="node">
<title>ecma</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1426.75,-1137 1036.98,-1137 1036.98,-965 1426.75,-965 1426.75,-1137"/>
<text xml:space="preserve" text-anchor="start" x="1204.42" y="-1065.3" font-family="Arial" font-size="19.00" fill="#fafafa">ECMA</text>
<text xml:space="preserve" text-anchor="start" x="1061" y="-1042.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Выходная очередь сообщений о сбоях и ошибках</text>
<text xml:space="preserve" text-anchor="start" x="1146.43" y="-1024.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">в работе оборудования.</text>
</g>
<!-- aso -->
<g id="node9" class="node">
<title>aso</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1410.28,-1458 1053.44,-1458 1053.44,-1278 1410.28,-1278 1410.28,-1458"/>
<text xml:space="preserve" text-anchor="start" x="1202.83" y="-1391.3" font-family="Arial" font-size="19.00" fill="#fafafa">ЕМД ПП</text>
<text xml:space="preserve" text-anchor="start" x="1088.09" y="-1368.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Внешний сервис для получения данных о</text>
<text xml:space="preserve" text-anchor="start" x="1073.5" y="-1350.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">прохождении подвижного состава по данным</text>
<text xml:space="preserve" text-anchor="start" x="1161.02" y="-1332.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">внесенным в ЕМД ПП.</text>
</g>
<!-- esr -->
<g id="node10" class="node">
<title>esr</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1425.28,-1748 1038.44,-1748 1038.44,-1568 1425.28,-1568 1425.28,-1748"/>
<text xml:space="preserve" text-anchor="start" x="1181.72" y="-1681.3" font-family="Arial" font-size="19.00" fill="#fafafa">Сервис НСИ</text>
<text xml:space="preserve" text-anchor="start" x="1077.67" y="-1658.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Внешний сервис для получения нормативно</text>
<text xml:space="preserve" text-anchor="start" x="1058.5" y="-1640.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">справочной информации (дороги и остановочные</text>
<text xml:space="preserve" text-anchor="start" x="1202.28" y="-1622.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">пункты).</text>
</g>
<!-- users -->
<g id="node11" class="node">
<title>users</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="386.84,-2098 0,-2098 0,-1918 386.84,-1918 386.84,-2098"/>
<text xml:space="preserve" text-anchor="start" x="130.07" y="-2031.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Пользователи</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-2008.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Пользователи системы, могут обращаться к КИ&#45;Ц</text>
<text xml:space="preserve" text-anchor="start" x="51.73" y="-1990.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">САИ ПС.ИНП для получения информации и</text>
<text xml:space="preserve" text-anchor="start" x="35.47" y="-1972.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">управления системой через web&#45;интерфейс.</text>
</g>
<!-- frontend&#45;&gt;backend -->
<g id="edge2" class="edge">
<title>frontend&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M909.96,-2008C946.04,-2008 983.73,-2008 1020.09,-2008"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1019.78,-2010.63 1027.28,-2008 1019.78,-2005.38 1019.78,-2010.63"/>
</g>
<!-- service&#45;&gt;storage -->
<g id="edge3" class="edge">
<title>service&#45;&gt;storage</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M907.94,-2298C1090.43,-2298 1359.66,-2298 1542.44,-2298"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1542.19,-2300.63 1549.69,-2298 1542.19,-2295.38 1542.19,-2300.63"/>
</g>
<!-- service&#45;&gt;bin -->
<g id="edge4" class="edge">
<title>service&#45;&gt;bin</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M867.01,-2208.02C884.23,-2191.88 899.4,-2173.55 910.19,-2153 1005.16,-1972.15 841.66,-487.71 950.73,-315 973.2,-279.41 1007.65,-252.46 1044.79,-232.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1045.69,-234.67 1051.09,-228.84 1043.23,-230.03 1045.69,-234.67"/>
</g>
<!-- service&#45;&gt;sts -->
<g id="edge5" class="edge">
<title>service&#45;&gt;sts</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M866.45,-2208.42C883.88,-2192.18 899.25,-2173.72 910.19,-2153 989.95,-2001.92 863.03,-762.61 950.73,-616 974.71,-575.92 1012.78,-544.98 1053.23,-521.47"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1054.3,-523.88 1059.53,-517.91 1051.71,-519.31 1054.3,-523.88"/>
</g>
<!-- service&#45;&gt;m2033 -->
<g id="edge6" class="edge">
<title>service&#45;&gt;m2033</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M866.33,-2208.36C883.78,-2192.13 899.19,-2173.68 910.19,-2153 975.08,-2031 876.33,-1026.45 950.73,-910 968.66,-881.93 994.02,-859.23 1022.23,-840.93"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1023.55,-843.2 1028.51,-836.99 1020.76,-838.75 1023.55,-843.2"/>
</g>
<!-- service&#45;&gt;ecma -->
<g id="edge7" class="edge">
<title>service&#45;&gt;ecma</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M866.13,-2208.25C883.61,-2192.04 899.08,-2173.62 910.19,-2153 1009.55,-1968.53 841.67,-1389.91 950.73,-1211 969.92,-1179.53 997.75,-1153.66 1028.52,-1132.6"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1029.96,-1134.8 1034.75,-1128.46 1027.05,-1130.42 1029.96,-1134.8"/>
</g>
<!-- service&#45;&gt;aso -->
<g id="edge8" class="edge">
<title>service&#45;&gt;aso</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M865.74,-2208.04C883.28,-2191.86 898.87,-2173.51 910.19,-2153 979.03,-2028.22 872.85,-1632.34 950.73,-1513 973.66,-1477.87 1007.95,-1450.78 1044.75,-1430.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1045.67,-1432.55 1050.99,-1426.65 1043.15,-1427.94 1045.67,-1432.55"/>
</g>
<!-- service&#45;&gt;esr -->
<g id="edge9" class="edge">
<title>service&#45;&gt;esr</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M863.44,-2208.16C881.57,-2191.88 897.94,-2173.47 910.19,-2153 979.73,-2036.79 879.89,-1966.42 950.73,-1851 974.07,-1812.98 1008.02,-1780.59 1044.3,-1753.82"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1045.57,-1756.14 1050.11,-1749.62 1042.49,-1751.89 1045.57,-1756.14"/>
</g>
<!-- backend&#45;&gt;storage -->
<g id="edge10" class="edge">
<title>backend&#45;&gt;storage</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1390.75,-2097.97C1451.12,-2132.37 1520,-2171.62 1580.66,-2206.18"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1579.1,-2208.32 1586.92,-2209.75 1581.7,-2203.76 1579.1,-2208.32"/>
</g>
<!-- users&#45;&gt;frontend -->
<g id="edge1" class="edge">
<title>users&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M386.57,-2008C422.59,-2008 460.42,-2008 496.96,-2008"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="496.7,-2010.63 504.2,-2008 496.7,-2005.38 496.7,-2010.63"/>
</g>
</g>
</svg>
`;case"c3_service":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1040pt" height="1297pt"
 viewBox="0.00 0.00 1040.00 1297.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1282.05)">
<g id="clust1" class="cluster">
<title>cluster_@gr1</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-587 8,-1259 1002.29,-1259 1002.29,-587 8,-587"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1246.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">ОСНОВНОЙ СЕРВИС</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_@gr2</title>
<polygon fill="#3e4651" stroke="#2d333d" points="562.25,-627 562.25,-1198 962.29,-1198 962.29,-627 562.25,-627"/>
<text xml:space="preserve" text-anchor="start" x="570.25" y="-1185.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">РАБОЧИЕ ПРОЦЕССЫ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="527.18,-8 527.18,-579 997.36,-579 997.36,-8 527.18,-8"/>
<text xml:space="preserve" text-anchor="start" x="535.18" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<!-- worker1 -->
<g id="node1" class="node">
<title>worker1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="922.29,-847 602.25,-847 602.25,-667 922.29,-667 922.29,-847"/>
<text xml:space="preserve" text-anchor="start" x="663.86" y="-752.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="707.81" y="-762.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Рабочий процесс 1</text>
<text xml:space="preserve" text-anchor="start" x="886.79" y="-752.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="707.81" y="-739.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- worker2 -->
<g id="node2" class="node">
<title>worker2</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="922.29,-1137 602.25,-1137 602.25,-957 922.29,-957 922.29,-1137"/>
<text xml:space="preserve" text-anchor="start" x="662.28" y="-1042.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="706.23" y="-1052.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Рабочий процесс N</text>
<text xml:space="preserve" text-anchor="start" x="888.37" y="-1042.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="706.23" y="-1029.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- schedule -->
<g id="node3" class="node">
<title>schedule</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="447.18,-847 48,-847 48,-667 447.18,-667 447.18,-847"/>
<text xml:space="preserve" text-anchor="start" x="96.12" y="-752.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-780.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Планировщик</text>
<text xml:space="preserve" text-anchor="start" x="425.17" y="-752.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-757.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Запуск рабочих процессов по</text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-739.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">расписанию, логирование исключений,</text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-721.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">сбор данных для мониторинга.</text>
</g>
<!-- log -->
<g id="node4" class="node">
<title>log</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M957.36,-211.64C957.36,-220.67 869.92,-228 762.27,-228 654.62,-228 567.18,-220.67 567.18,-211.64 567.18,-211.64 567.18,-64.36 567.18,-64.36 567.18,-55.33 654.62,-48 762.27,-48 869.92,-48 957.36,-55.33 957.36,-64.36 957.36,-64.36 957.36,-211.64 957.36,-211.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M957.36,-211.64C957.36,-202.61 869.92,-195.27 762.27,-195.27 654.62,-195.27 567.18,-202.61 567.18,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="725.32" y="-152.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Журналы</text>
<text xml:space="preserve" text-anchor="start" x="587.24" y="-129.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище журналов об ошибках и отклонениях в</text>
<text xml:space="preserve" text-anchor="start" x="703.93" y="-111.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">работе системы.</text>
</g>
<!-- monitoring -->
<g id="node5" class="node">
<title>monitoring</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M951.44,-501.64C951.44,-510.67 866.65,-518 762.27,-518 657.89,-518 573.1,-510.67 573.1,-501.64 573.1,-501.64 573.1,-354.36 573.1,-354.36 573.1,-345.33 657.89,-338 762.27,-338 866.65,-338 951.44,-345.33 951.44,-354.36 951.44,-354.36 951.44,-501.64 951.44,-501.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M951.44,-501.64C951.44,-492.61 866.65,-485.27 762.27,-485.27 657.89,-485.27 573.1,-492.61 573.1,-501.64"/>
<text xml:space="preserve" text-anchor="start" x="621.22" y="-423.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="665.16" y="-442.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Мониторинг</text>
<text xml:space="preserve" text-anchor="start" x="929.44" y="-423.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="665.16" y="-419.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище данных для мониторинга</text>
<text xml:space="preserve" text-anchor="start" x="665.16" y="-401.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">работы системы.</text>
</g>
<!-- schedule&#45;&gt;worker1 -->
<g id="edge1" class="edge">
<title>schedule&#45;&gt;worker1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M447.17,-757C494.96,-757 545.56,-757 591.87,-757"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="591.78,-759.63 599.28,-757 591.78,-754.38 591.78,-759.63"/>
</g>
<!-- schedule&#45;&gt;worker2 -->
<g id="edge2" class="edge">
<title>schedule&#45;&gt;worker2</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M407.65,-846.97C466.65,-880.35 533.74,-918.29 593.5,-952.1"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="592.19,-954.37 600.01,-955.78 594.77,-949.8 592.19,-954.37"/>
</g>
<!-- schedule&#45;&gt;log -->
<g id="edge3" class="edge">
<title>schedule&#45;&gt;log</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M285.39,-667.22C330.66,-564.99 415.45,-397.36 527.18,-283 545.93,-263.81 567.7,-246.07 590.28,-230.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="591.49,-232.42 596.14,-225.98 588.49,-228.11 591.49,-232.42"/>
</g>
<!-- schedule&#45;&gt;monitoring -->
<g id="edge4" class="edge">
<title>schedule&#45;&gt;monitoring</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M388.68,-667.1C459.19,-621.85 544.59,-567.05 615.84,-521.33"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="617.01,-523.7 621.9,-517.44 614.17,-519.28 617.01,-523.7"/>
</g>
</g>
</svg>
`;case"c3_worker_aoc":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1134pt" height="914pt"
 viewBox="0.00 0.00 1134.00 914.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 899.05)">
<g id="clust1" class="cluster">
<title>cluster_mkicsai</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-273 8,-876 1095.54,-876 1095.54,-273 8,-273"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-863.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">КИ&#45;Ц САИ ПС.ИНП</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="599.86,-313 599.86,-578 1055.54,-578 1055.54,-313 599.86,-313"/>
<text xml:space="preserve" text-anchor="start" x="607.86" y="-565.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_external</title>
<polygon fill="#454545" stroke="#313131" points="617.49,-8 617.49,-265 1037.91,-265 1037.91,-8 617.49,-8"/>
<text xml:space="preserve" text-anchor="start" x="625.49" y="-252.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<!-- pg -->
<g id="node1" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1023.54,-508.64C1023.54,-517.67 935.76,-525 827.7,-525 719.64,-525 631.86,-517.67 631.86,-508.64 631.86,-508.64 631.86,-361.36 631.86,-361.36 631.86,-352.33 719.64,-345 827.7,-345 935.76,-345 1023.54,-352.33 1023.54,-361.36 1023.54,-361.36 1023.54,-508.64 1023.54,-508.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1023.54,-508.64C1023.54,-499.61 935.76,-492.27 827.7,-492.27 719.64,-492.27 631.86,-499.61 631.86,-508.64"/>
<text xml:space="preserve" text-anchor="start" x="679.98" y="-430.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="723.93" y="-476.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="1001.53" y="-430.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="723.93" y="-453.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="723.93" y="-435.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="723.93" y="-417.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="723.93" y="-399.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="723.93" y="-381.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- aoc -->
<g id="node2" class="node">
<title>aoc</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="488.86,-815 48,-815 48,-635 488.86,-635 488.86,-815"/>
<text xml:space="preserve" text-anchor="start" x="96.12" y="-720.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-730.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Чтение и первичная обработка BIN</text>
<text xml:space="preserve" text-anchor="start" x="466.85" y="-720.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-707.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- ecma -->
<g id="node3" class="node">
<title>ecma</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="1046.54,-815 608.86,-815 608.86,-635 1046.54,-635 1046.54,-815"/>
<text xml:space="preserve" text-anchor="start" x="656.98" y="-720.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="700.92" y="-730.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Анализ ошибок и отправка в ECMA</text>
<text xml:space="preserve" text-anchor="start" x="1024.53" y="-720.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="700.92" y="-707.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Рабочий процесс</text>
</g>
<!-- bin -->
<g id="node4" class="node">
<title>bin</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1005.91,-212 649.49,-212 649.49,-40 1005.91,-40 1005.91,-212"/>
<text xml:space="preserve" text-anchor="start" x="811.86" y="-140.3" font-family="Arial" font-size="19.00" fill="#fafafa">BIN</text>
<text xml:space="preserve" text-anchor="start" x="673.5" y="-117.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Входная очередь сообщений о прохождении</text>
<text xml:space="preserve" text-anchor="start" x="688.09" y="-99.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">подвижного через контрольные пункты</text>
</g>
<!-- aoc&#45;&gt;pg -->
<g id="edge2" class="edge">
<title>aoc&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M410.89,-635.07C468.48,-600.06 536.34,-560.8 599.86,-529 606.96,-525.44 614.23,-521.91 621.61,-518.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="622.59,-520.85 628.27,-515.28 620.36,-516.09 622.59,-520.85"/>
</g>
<!-- aoc&#45;&gt;ecma -->
<g id="edge1" class="edge">
<title>aoc&#45;&gt;ecma</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M488.48,-725C524.69,-725 562.31,-725 598.74,-725"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="598.45,-727.63 605.95,-725 598.45,-722.38 598.45,-727.63"/>
</g>
<!-- aoc&#45;&gt;bin -->
<g id="edge3" class="edge">
<title>aoc&#45;&gt;bin</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M324.93,-635.28C385.43,-541.71 488.57,-393.9 599.86,-286 624.66,-261.96 653.35,-238.83 681.82,-218"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="683.25,-220.2 687.79,-213.68 680.17,-215.95 683.25,-220.2"/>
</g>
</g>
</svg>
`;case"c3_worker_bin":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1027pt" height="617pt"
 viewBox="0.00 0.00 1027.00 617.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 602.05)">
<g id="clust1" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="517.68,-8 517.68,-579 989.36,-579 989.36,-8 517.68,-8"/>
<text xml:space="preserve" text-anchor="start" x="525.68" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<!-- pg -->
<g id="node1" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M949.36,-501.64C949.36,-510.67 861.58,-518 753.52,-518 645.46,-518 557.68,-510.67 557.68,-501.64 557.68,-501.64 557.68,-354.36 557.68,-354.36 557.68,-345.33 645.46,-338 753.52,-338 861.58,-338 949.36,-345.33 949.36,-354.36 949.36,-354.36 949.36,-501.64 949.36,-501.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M949.36,-501.64C949.36,-492.61 861.58,-485.27 753.52,-485.27 645.46,-485.27 557.68,-492.61 557.68,-501.64"/>
<text xml:space="preserve" text-anchor="start" x="605.8" y="-423.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="649.75" y="-469.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="927.35" y="-423.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="649.75" y="-446.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="649.75" y="-428.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="649.75" y="-410.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="649.75" y="-392.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="649.75" y="-374.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- cache -->
<g id="node2" class="node">
<title>cache</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M936.44,-211.64C936.44,-220.67 854.45,-228 753.52,-228 652.59,-228 570.6,-220.67 570.6,-211.64 570.6,-211.64 570.6,-64.36 570.6,-64.36 570.6,-55.33 652.59,-48 753.52,-48 854.45,-48 936.44,-55.33 936.44,-64.36 936.44,-64.36 936.44,-211.64 936.44,-211.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M936.44,-211.64C936.44,-202.61 854.45,-195.27 753.52,-195.27 652.59,-195.27 570.6,-202.61 570.6,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="618.72" y="-133.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="662.66" y="-152.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Кеш данных</text>
<text xml:space="preserve" text-anchor="start" x="914.43" y="-133.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="662.66" y="-129.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище временных данных, для</text>
<text xml:space="preserve" text-anchor="start" x="662.66" y="-111.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">ускорения работы системы.</text>
</g>
<!-- bin -->
<g id="node3" class="node">
<title>bin</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="378.86,-518 58.82,-518 58.82,-338 378.86,-338 378.86,-518"/>
<text xml:space="preserve" text-anchor="start" x="138.91" y="-423.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="182.86" y="-433.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Обработка BIN</text>
<text xml:space="preserve" text-anchor="start" x="324.88" y="-423.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="182.86" y="-410.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- ecma -->
<g id="node4" class="node">
<title>ecma</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="437.68,-228 0,-228 0,-48 437.68,-48 437.68,-228"/>
<text xml:space="preserve" text-anchor="start" x="48.12" y="-133.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-143.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Анализ ошибок и отправка в ECMA</text>
<text xml:space="preserve" text-anchor="start" x="415.67" y="-133.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-120.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Рабочий процесс</text>
</g>
<!-- bin&#45;&gt;pg -->
<g id="edge2" class="edge">
<title>bin&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M378.58,-428C431.26,-428 490.69,-428 546.41,-428"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="546.24,-430.63 553.74,-428 546.24,-425.38 546.24,-430.63"/>
</g>
<!-- bin&#45;&gt;cache -->
<g id="edge3" class="edge">
<title>bin&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M378.58,-341.58C444.02,-305.95 519.88,-264.66 586.1,-228.6"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="586.96,-231.12 592.3,-225.23 584.45,-226.51 586.96,-231.12"/>
</g>
<!-- bin&#45;&gt;ecma -->
<g id="edge1" class="edge">
<title>bin&#45;&gt;ecma</title>
<path fill="none" stroke="#ac4d39" stroke-width="2" stroke-dasharray="5,2" d="M218.84,-338.06C218.84,-304.74 218.84,-271.43 218.84,-238.11"/>
<polygon fill="#ac4d39" stroke="#ac4d39" stroke-width="2" points="221.47,-238.3 218.84,-230.8 216.22,-238.3 221.47,-238.3"/>
</g>
<!-- ecma&#45;&gt;cache -->
<g id="edge4" class="edge">
<title>ecma&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M437.66,-138C477.9,-138 519.68,-138 559.14,-138"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="559.13,-140.63 566.63,-138 559.13,-135.38 559.13,-140.63"/>
</g>
</g>
</svg>
`;case"c3_worker_sts":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1581pt" height="983pt"
 viewBox="0.00 0.00 1581.00 983.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 968.05)">
<g id="clust1" class="cluster">
<title>cluster_mkicsai</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-273 8,-945 1543.2,-945 1543.2,-273 8,-273"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-932.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">КИ&#45;Ц САИ ПС.ИНП</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="1031.52,-313 1031.52,-884 1503.2,-884 1503.2,-313 1031.52,-313"/>
<text xml:space="preserve" text-anchor="start" x="1039.52" y="-871.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_external</title>
<polygon fill="#454545" stroke="#313131" points="530.8,-8 530.8,-265 934.56,-265 934.56,-8 530.8,-8"/>
<text xml:space="preserve" text-anchor="start" x="538.8" y="-252.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<!-- pg -->
<g id="node1" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1463.2,-516.64C1463.2,-525.67 1375.42,-533 1267.36,-533 1159.3,-533 1071.52,-525.67 1071.52,-516.64 1071.52,-516.64 1071.52,-369.36 1071.52,-369.36 1071.52,-360.33 1159.3,-353 1267.36,-353 1375.42,-353 1463.2,-360.33 1463.2,-369.36 1463.2,-369.36 1463.2,-516.64 1463.2,-516.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1463.2,-516.64C1463.2,-507.61 1375.42,-500.27 1267.36,-500.27 1159.3,-500.27 1071.52,-507.61 1071.52,-516.64"/>
<text xml:space="preserve" text-anchor="start" x="1119.64" y="-438.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1163.59" y="-484.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="1441.19" y="-438.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1163.59" y="-461.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1163.59" y="-443.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="1163.59" y="-425.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1163.59" y="-407.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="1163.59" y="-389.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- cache -->
<g id="node2" class="node">
<title>cache</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1450.28,-806.64C1450.28,-815.67 1368.29,-823 1267.36,-823 1166.43,-823 1084.44,-815.67 1084.44,-806.64 1084.44,-806.64 1084.44,-659.36 1084.44,-659.36 1084.44,-650.33 1166.43,-643 1267.36,-643 1368.29,-643 1450.28,-650.33 1450.28,-659.36 1450.28,-659.36 1450.28,-806.64 1450.28,-806.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1450.28,-806.64C1450.28,-797.61 1368.29,-790.27 1267.36,-790.27 1166.43,-790.27 1084.44,-797.61 1084.44,-806.64"/>
<text xml:space="preserve" text-anchor="start" x="1132.56" y="-728.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1176.5" y="-747.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Кеш данных</text>
<text xml:space="preserve" text-anchor="start" x="1428.27" y="-728.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1176.5" y="-724.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище временных данных, для</text>
<text xml:space="preserve" text-anchor="start" x="1176.5" y="-706.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">ускорения работы системы.</text>
</g>
<!-- sts -->
<g id="node3" class="node">
<title>sts</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="393.84,-645 48,-645 48,-465 393.84,-465 393.84,-645"/>
<text xml:space="preserve" text-anchor="start" x="96.12" y="-550.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-560.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Чтение и обработка STS</text>
<text xml:space="preserve" text-anchor="start" x="371.83" y="-550.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-537.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- ecma -->
<g id="node4" class="node">
<title>ecma</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="951.52,-846 513.84,-846 513.84,-666 951.52,-666 951.52,-846"/>
<text xml:space="preserve" text-anchor="start" x="561.96" y="-751.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="605.9" y="-761.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Анализ ошибок и отправка в ECMA</text>
<text xml:space="preserve" text-anchor="start" x="929.51" y="-751.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="605.9" y="-738.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Рабочий процесс</text>
</g>
<!-- sts_1 -->
<g id="node5" class="node">
<title>sts_1</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="902.56,-212 562.8,-212 562.8,-40 902.56,-40 902.56,-212"/>
<text xml:space="preserve" text-anchor="start" x="714.2" y="-140.3" font-family="Arial" font-size="19.00" fill="#fafafa">STS</text>
<text xml:space="preserve" text-anchor="start" x="586.82" y="-117.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Входная очередь сообщений о состоянии</text>
<text xml:space="preserve" text-anchor="start" x="680.59" y="-99.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">оборудования.</text>
</g>
<!-- sts&#45;&gt;pg -->
<g id="edge3" class="edge">
<title>sts&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M393.8,-536.57C576.55,-516.97 865.55,-485.98 1060.36,-465.09"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1060.54,-467.71 1067.72,-464.3 1059.98,-462.49 1060.54,-467.71"/>
</g>
<!-- sts&#45;&gt;cache -->
<g id="edge4" class="edge">
<title>sts&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M393.56,-554.08C542.76,-556.62 763.83,-568.41 951.52,-611 991.92,-620.17 1034.01,-633.57 1073.78,-648.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1072.78,-650.6 1080.73,-650.76 1074.61,-645.68 1072.78,-650.6"/>
</g>
<!-- sts&#45;&gt;ecma -->
<g id="edge1" class="edge">
<title>sts&#45;&gt;ecma</title>
<path fill="none" stroke="#ac4d39" stroke-width="2" stroke-dasharray="5,2" d="M393.79,-622.77C429.36,-636.8 467.36,-651.78 504.55,-666.44"/>
<polygon fill="#ac4d39" stroke="#ac4d39" stroke-width="2" points="503.23,-668.74 511.17,-669.05 505.16,-663.86 503.23,-668.74"/>
</g>
<!-- sts&#45;&gt;sts_1 -->
<g id="edge2" class="edge">
<title>sts&#45;&gt;sts_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M293.56,-465.29C349.07,-399.44 430.38,-310.59 513.84,-246 526.56,-236.15 540.2,-226.63 554.21,-217.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="555.52,-219.82 560.43,-213.57 552.7,-215.4 555.52,-219.82"/>
</g>
<!-- ecma&#45;&gt;cache -->
<g id="edge5" class="edge">
<title>ecma&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M951.49,-746.6C991.83,-744.85 1033.7,-743.05 1073.23,-741.34"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1073.1,-743.97 1080.48,-741.03 1072.87,-738.73 1073.1,-743.97"/>
</g>
</g>
</svg>
`;case"c3_worker_esp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="2109pt" height="718pt"
 viewBox="0.00 0.00 2109.00 718.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 703.05)">
<g id="clust1" class="cluster">
<title>cluster_mkicsai</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-680 1659.33,-680 1659.33,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-667.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">КИ&#45;Ц САИ ПС.ИНП</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="1147.66,-48 1147.66,-619 1619.33,-619 1619.33,-48 1147.66,-48"/>
<text xml:space="preserve" text-anchor="start" x="1155.66" y="-606.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_external</title>
<polygon fill="#454545" stroke="#313131" points="1667.33,-350 1667.33,-607 2071.09,-607 2071.09,-350 1667.33,-350"/>
<text xml:space="preserve" text-anchor="start" x="1675.33" y="-594.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<!-- pg -->
<g id="node1" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1579.33,-251.64C1579.33,-260.67 1491.55,-268 1383.49,-268 1275.43,-268 1187.66,-260.67 1187.66,-251.64 1187.66,-251.64 1187.66,-104.36 1187.66,-104.36 1187.66,-95.33 1275.43,-88 1383.49,-88 1491.55,-88 1579.33,-95.33 1579.33,-104.36 1579.33,-104.36 1579.33,-251.64 1579.33,-251.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1579.33,-251.64C1579.33,-242.61 1491.55,-235.27 1383.49,-235.27 1275.43,-235.27 1187.66,-242.61 1187.66,-251.64"/>
<text xml:space="preserve" text-anchor="start" x="1235.77" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-219.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="1557.32" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-196.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-178.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-160.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-142.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-124.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- cache -->
<g id="node2" class="node">
<title>cache</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1566.41,-541.64C1566.41,-550.67 1484.43,-558 1383.49,-558 1282.56,-558 1200.57,-550.67 1200.57,-541.64 1200.57,-541.64 1200.57,-394.36 1200.57,-394.36 1200.57,-385.33 1282.56,-378 1383.49,-378 1484.43,-378 1566.41,-385.33 1566.41,-394.36 1566.41,-394.36 1566.41,-541.64 1566.41,-541.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1566.41,-541.64C1566.41,-532.61 1484.43,-525.27 1383.49,-525.27 1282.56,-525.27 1200.57,-532.61 1200.57,-541.64"/>
<text xml:space="preserve" text-anchor="start" x="1248.69" y="-463.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1292.64" y="-482.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Кеш данных</text>
<text xml:space="preserve" text-anchor="start" x="1544.4" y="-463.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1292.64" y="-459.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище временных данных, для</text>
<text xml:space="preserve" text-anchor="start" x="1292.64" y="-441.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">ускорения работы системы.</text>
</g>
<!-- esp -->
<g id="node3" class="node">
<title>esp</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="509.97,-480 48,-480 48,-300 509.97,-300 509.97,-480"/>
<text xml:space="preserve" text-anchor="start" x="96.12" y="-385.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-395.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Чтение и обработка данных из ЕС ПУЛ</text>
<text xml:space="preserve" text-anchor="start" x="487.96" y="-385.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-372.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- ecma -->
<g id="node4" class="node">
<title>ecma</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="1067.66,-581 629.97,-581 629.97,-401 1067.66,-401 1067.66,-581"/>
<text xml:space="preserve" text-anchor="start" x="678.09" y="-486.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="722.04" y="-496.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Анализ ошибок и отправка в ECMA</text>
<text xml:space="preserve" text-anchor="start" x="1045.65" y="-486.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="722.04" y="-473.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Рабочий процесс</text>
</g>
<!-- sts -->
<g id="node5" class="node">
<title>sts</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="2039.09,-554 1699.33,-554 1699.33,-382 2039.09,-382 2039.09,-554"/>
<text xml:space="preserve" text-anchor="start" x="1850.73" y="-482.3" font-family="Arial" font-size="19.00" fill="#fafafa">STS</text>
<text xml:space="preserve" text-anchor="start" x="1723.35" y="-459.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Входная очередь сообщений о состоянии</text>
<text xml:space="preserve" text-anchor="start" x="1817.11" y="-441.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">оборудования.</text>
</g>
<!-- cache&#45;&gt;sts -->
<g id="edge5" class="edge">
<title>cache&#45;&gt;sts</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1659.33,-468C1669.35,-468 1679.3,-468 1689.11,-468"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1688.89,-470.63 1696.39,-468 1688.89,-465.38 1688.89,-470.63"/>
</g>
<!-- esp&#45;&gt;pg -->
<g id="edge2" class="edge">
<title>esp&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M509.87,-326.91C549.76,-316.92 590.96,-307.19 629.97,-299 813.53,-260.47 1024.52,-227.51 1176.29,-205.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1176.61,-208.37 1183.66,-204.72 1175.87,-203.18 1176.61,-208.37"/>
</g>
<!-- esp&#45;&gt;cache -->
<g id="edge3" class="edge">
<title>esp&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M509.77,-348.37C667.88,-326.73 882.04,-311.29 1067.66,-346 1108.51,-353.64 1150.89,-366.41 1190.81,-380.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1189.84,-383.31 1197.79,-383.44 1191.65,-378.39 1189.84,-383.31"/>
</g>
<!-- esp&#45;&gt;ecma -->
<g id="edge1" class="edge">
<title>esp&#45;&gt;ecma</title>
<path fill="none" stroke="#ac4d39" stroke-width="2" stroke-dasharray="5,2" d="M509.72,-430.86C546.13,-437.34 583.77,-444.04 620.14,-450.5"/>
<polygon fill="#ac4d39" stroke="#ac4d39" stroke-width="2" points="619.54,-453.06 627.38,-451.79 620.46,-447.89 619.54,-453.06"/>
</g>
<!-- ecma&#45;&gt;cache -->
<g id="edge4" class="edge">
<title>ecma&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1067.63,-481.6C1107.96,-479.85 1149.83,-478.05 1189.36,-476.34"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1189.23,-478.97 1196.61,-476.03 1189,-473.73 1189.23,-478.97"/>
</g>
</g>
</svg>
`;case"c3_worker_aso":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1697pt" height="991pt"
 viewBox="0.00 0.00 1697.00 991.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 976.05)">
<g id="clust1" class="cluster">
<title>cluster_mkicsai</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-281 8,-953 1659.33,-953 1659.33,-281 8,-281"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-940.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">КИ&#45;Ц САИ ПС.ИНП</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="1147.66,-321 1147.66,-892 1619.33,-892 1619.33,-321 1147.66,-321"/>
<text xml:space="preserve" text-anchor="start" x="1155.66" y="-879.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_external</title>
<polygon fill="#454545" stroke="#313131" points="638.39,-8 638.39,-273 1059.23,-273 1059.23,-8 638.39,-8"/>
<text xml:space="preserve" text-anchor="start" x="646.39" y="-260.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<!-- pg -->
<g id="node1" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1579.33,-524.64C1579.33,-533.67 1491.55,-541 1383.49,-541 1275.43,-541 1187.66,-533.67 1187.66,-524.64 1187.66,-524.64 1187.66,-377.36 1187.66,-377.36 1187.66,-368.33 1275.43,-361 1383.49,-361 1491.55,-361 1579.33,-368.33 1579.33,-377.36 1579.33,-377.36 1579.33,-524.64 1579.33,-524.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1579.33,-524.64C1579.33,-515.61 1491.55,-508.27 1383.49,-508.27 1275.43,-508.27 1187.66,-515.61 1187.66,-524.64"/>
<text xml:space="preserve" text-anchor="start" x="1235.77" y="-446.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-492.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="1557.32" y="-446.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-469.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-451.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-433.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-415.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="1279.72" y="-397.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- cache -->
<g id="node2" class="node">
<title>cache</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1566.41,-814.64C1566.41,-823.67 1484.43,-831 1383.49,-831 1282.56,-831 1200.57,-823.67 1200.57,-814.64 1200.57,-814.64 1200.57,-667.36 1200.57,-667.36 1200.57,-658.33 1282.56,-651 1383.49,-651 1484.43,-651 1566.41,-658.33 1566.41,-667.36 1566.41,-667.36 1566.41,-814.64 1566.41,-814.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1566.41,-814.64C1566.41,-805.61 1484.43,-798.27 1383.49,-798.27 1282.56,-798.27 1200.57,-805.61 1200.57,-814.64"/>
<text xml:space="preserve" text-anchor="start" x="1248.69" y="-736.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1292.64" y="-755.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Кеш данных</text>
<text xml:space="preserve" text-anchor="start" x="1544.4" y="-736.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1292.64" y="-732.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище временных данных, для</text>
<text xml:space="preserve" text-anchor="start" x="1292.64" y="-714.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">ускорения работы системы.</text>
</g>
<!-- aso -->
<g id="node3" class="node">
<title>aso</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="509.97,-653 48,-653 48,-473 509.97,-473 509.97,-653"/>
<text xml:space="preserve" text-anchor="start" x="96.12" y="-558.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-568.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Чтение и обработка данных из ЕМД ПП</text>
<text xml:space="preserve" text-anchor="start" x="487.96" y="-558.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-545.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- ecma -->
<g id="node4" class="node">
<title>ecma</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="1067.66,-854 629.97,-854 629.97,-674 1067.66,-674 1067.66,-854"/>
<text xml:space="preserve" text-anchor="start" x="678.09" y="-759.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="722.04" y="-769.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Анализ ошибок и отправка в ECMA</text>
<text xml:space="preserve" text-anchor="start" x="1045.65" y="-759.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="722.04" y="-746.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Рабочий процесс</text>
</g>
<!-- aso_1 -->
<g id="node5" class="node">
<title>aso_1</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1027.23,-220 670.39,-220 670.39,-40 1027.23,-40 1027.23,-220"/>
<text xml:space="preserve" text-anchor="start" x="819.78" y="-153.3" font-family="Arial" font-size="19.00" fill="#fafafa">ЕМД ПП</text>
<text xml:space="preserve" text-anchor="start" x="705.04" y="-130.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Внешний сервис для получения данных о</text>
<text xml:space="preserve" text-anchor="start" x="690.45" y="-112.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">прохождении подвижного состава по данным</text>
<text xml:space="preserve" text-anchor="start" x="777.97" y="-94.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">внесенным в ЕМД ПП.</text>
</g>
<!-- aso&#45;&gt;pg -->
<g id="edge3" class="edge">
<title>aso&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M509.77,-539.66C706.51,-519.67 987.24,-491.15 1176.73,-471.9"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1176.89,-474.53 1184.08,-471.16 1176.36,-469.3 1176.89,-474.53"/>
</g>
<!-- aso&#45;&gt;cache -->
<g id="edge4" class="edge">
<title>aso&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M509.66,-561.36C668.19,-564.59 882.87,-577.61 1067.66,-619 1108.08,-628.05 1150.18,-641.41 1189.95,-656"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1188.96,-658.43 1196.9,-658.57 1190.78,-653.5 1188.96,-658.43"/>
</g>
<!-- aso&#45;&gt;ecma -->
<g id="edge1" class="edge">
<title>aso&#45;&gt;ecma</title>
<path fill="none" stroke="#ac4d39" stroke-width="2" stroke-dasharray="5,2" d="M509.72,-644.32C546.28,-657.26 584.1,-670.65 620.61,-683.57"/>
<polygon fill="#ac4d39" stroke="#ac4d39" stroke-width="2" points="619.56,-685.99 627.51,-686.02 621.31,-681.04 619.56,-685.99"/>
</g>
<!-- aso&#45;&gt;aso_1 -->
<g id="edge2" class="edge">
<title>aso&#45;&gt;aso_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M371.03,-473.21C439.22,-408.36 536.49,-320.79 629.97,-254 643.59,-244.27 658.03,-234.67 672.74,-225.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="673.89,-227.74 678.86,-221.54 671.11,-223.29 673.89,-227.74"/>
</g>
<!-- ecma&#45;&gt;cache -->
<g id="edge5" class="edge">
<title>ecma&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1067.63,-754.6C1107.96,-752.85 1149.83,-751.05 1189.36,-749.34"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1189.23,-751.97 1196.61,-749.03 1189,-746.73 1189.23,-751.97"/>
</g>
</g>
</svg>
`;case"c3_worker_2033":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1634pt" height="983pt"
 viewBox="0.00 0.00 1634.00 983.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 968.05)">
<g id="clust1" class="cluster">
<title>cluster_mkicsai</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-273 8,-945 1596.02,-945 1596.02,-273 8,-273"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-932.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">КИ&#45;Ц САИ ПС.ИНП</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="1084.35,-313 1084.35,-884 1556.02,-884 1556.02,-313 1084.35,-313"/>
<text xml:space="preserve" text-anchor="start" x="1092.35" y="-871.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_external</title>
<polygon fill="#454545" stroke="#313131" points="552.37,-8 552.37,-265 1018.64,-265 1018.64,-8 552.37,-8"/>
<text xml:space="preserve" text-anchor="start" x="560.37" y="-252.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<!-- cache -->
<g id="node1" class="node">
<title>cache</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1503.1,-806.64C1503.1,-815.67 1421.12,-823 1320.18,-823 1219.25,-823 1137.26,-815.67 1137.26,-806.64 1137.26,-806.64 1137.26,-659.36 1137.26,-659.36 1137.26,-650.33 1219.25,-643 1320.18,-643 1421.12,-643 1503.1,-650.33 1503.1,-659.36 1503.1,-659.36 1503.1,-806.64 1503.1,-806.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1503.1,-806.64C1503.1,-797.61 1421.12,-790.27 1320.18,-790.27 1219.25,-790.27 1137.26,-797.61 1137.26,-806.64"/>
<text xml:space="preserve" text-anchor="start" x="1185.38" y="-728.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1229.33" y="-747.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Кеш данных</text>
<text xml:space="preserve" text-anchor="start" x="1481.1" y="-728.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1229.33" y="-724.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище временных данных, для</text>
<text xml:space="preserve" text-anchor="start" x="1229.33" y="-706.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">ускорения работы системы.</text>
</g>
<!-- pg -->
<g id="node2" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1516.02,-516.64C1516.02,-525.67 1428.24,-533 1320.18,-533 1212.12,-533 1124.35,-525.67 1124.35,-516.64 1124.35,-516.64 1124.35,-369.36 1124.35,-369.36 1124.35,-360.33 1212.12,-353 1320.18,-353 1428.24,-353 1516.02,-360.33 1516.02,-369.36 1516.02,-369.36 1516.02,-516.64 1516.02,-516.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1516.02,-516.64C1516.02,-507.61 1428.24,-500.27 1320.18,-500.27 1212.12,-500.27 1124.35,-507.61 1124.35,-516.64"/>
<text xml:space="preserve" text-anchor="start" x="1172.47" y="-438.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1216.41" y="-484.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="1494.01" y="-438.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1216.41" y="-461.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1216.41" y="-443.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="1216.41" y="-425.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1216.41" y="-407.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="1216.41" y="-389.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- m2033 -->
<g id="node3" class="node">
<title>m2033</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="446.66,-734 48,-734 48,-554 446.66,-554 446.66,-734"/>
<text xml:space="preserve" text-anchor="start" x="96.12" y="-639.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-649.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Формирование сообщений 2033</text>
<text xml:space="preserve" text-anchor="start" x="424.65" y="-639.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.06" y="-626.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- ecma -->
<g id="node4" class="node">
<title>ecma</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="1004.35,-734 566.66,-734 566.66,-554 1004.35,-554 1004.35,-734"/>
<text xml:space="preserve" text-anchor="start" x="614.78" y="-639.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="658.73" y="-649.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Анализ ошибок и отправка в ECMA</text>
<text xml:space="preserve" text-anchor="start" x="982.34" y="-639.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="658.73" y="-626.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Рабочий процесс</text>
</g>
<!-- m2033_1 -->
<g id="node5" class="node">
<title>m2033_1</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="986.64,-212 584.37,-212 584.37,-40 986.64,-40 986.64,-212"/>
<text xml:space="preserve" text-anchor="start" x="764.37" y="-149.3" font-family="Arial" font-size="19.00" fill="#fafafa">2033</text>
<text xml:space="preserve" text-anchor="start" x="627.14" y="-126.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Выходная очередь сообщений о прохождении</text>
<text xml:space="preserve" text-anchor="start" x="608.39" y="-108.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">подвижного через контрольные пункты в формате</text>
<text xml:space="preserve" text-anchor="start" x="766.74" y="-90.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">2033.</text>
</g>
<!-- m2033&#45;&gt;pg -->
<g id="edge3" class="edge">
<title>m2033&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M408.17,-554.13C453.49,-532.47 503.75,-511.88 552.37,-499 737.97,-449.83 957.09,-438.24 1113.47,-437.52"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1113.16,-440.14 1120.65,-437.49 1113.14,-434.89 1113.16,-440.14"/>
</g>
<!-- m2033&#45;&gt;ecma -->
<g id="edge1" class="edge">
<title>m2033&#45;&gt;ecma</title>
<path fill="none" stroke="#ac4d39" stroke-width="2" stroke-dasharray="5,2" d="M446.46,-644C482.32,-644 519.97,-644 556.6,-644"/>
<polygon fill="#ac4d39" stroke="#ac4d39" stroke-width="2" points="556.37,-646.63 563.87,-644 556.37,-641.38 556.37,-646.63"/>
</g>
<!-- m2033&#45;&gt;m2033_1 -->
<g id="edge2" class="edge">
<title>m2033&#45;&gt;m2033_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M300.58,-554.14C354.8,-466.85 446.43,-334.83 552.37,-246 564.39,-235.92 577.4,-226.38 590.91,-217.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="591.98,-219.84 596.84,-213.54 589.12,-215.43 591.98,-219.84"/>
</g>
<!-- ecma&#45;&gt;cache -->
<g id="edge4" class="edge">
<title>ecma&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1004.32,-680.39C1044.65,-687.13 1086.52,-694.13 1126.06,-700.73"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1125.51,-703.3 1133.34,-701.95 1126.37,-698.12 1125.51,-703.3"/>
</g>
</g>
</svg>
`;case"c3_worker_clone":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1065pt" height="311pt"
 viewBox="0.00 0.00 1065.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.05)">
<g id="clust1" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="571.09,-8 571.09,-273 1026.76,-273 1026.76,-8 571.09,-8"/>
<text xml:space="preserve" text-anchor="start" x="579.09" y="-260.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<!-- pg -->
<g id="node1" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M994.76,-203.64C994.76,-212.67 906.98,-220 798.92,-220 690.86,-220 603.09,-212.67 603.09,-203.64 603.09,-203.64 603.09,-56.36 603.09,-56.36 603.09,-47.33 690.86,-40 798.92,-40 906.98,-40 994.76,-47.33 994.76,-56.36 994.76,-56.36 994.76,-203.64 994.76,-203.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M994.76,-203.64C994.76,-194.61 906.98,-187.27 798.92,-187.27 690.86,-187.27 603.09,-194.61 603.09,-203.64"/>
<text xml:space="preserve" text-anchor="start" x="651.21" y="-125.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="695.15" y="-171.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="972.75" y="-125.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="695.15" y="-148.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="695.15" y="-130.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="695.15" y="-112.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="695.15" y="-94.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="695.15" y="-76.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- clone -->
<g id="node2" class="node">
<title>clone</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="483.09,-220 0,-220 0,-40 483.09,-40 483.09,-220"/>
<text xml:space="preserve" text-anchor="start" x="48.12" y="-125.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-135.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Создание и чистка оперативных таблиц</text>
<text xml:space="preserve" text-anchor="start" x="461.08" y="-125.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-112.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- clone&#45;&gt;pg -->
<g id="edge1" class="edge">
<title>clone&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M482.91,-130C519.2,-130 556.35,-130 591.83,-130"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="591.76,-132.63 599.26,-130 591.76,-127.38 591.76,-132.63"/>
</g>
</g>
</svg>
`;case"c3_worker_ecma":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1083pt" height="947pt"
 viewBox="0.00 0.00 1083.00 947.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 932.05)">
<g id="clust1" class="cluster">
<title>cluster_mkicsai</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-909 559.67,-909 559.67,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-896.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">КИ&#45;Ц САИ ПС.ИНП</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="48,-48 48,-619 519.67,-619 519.67,-48 48,-48"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-606.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_external</title>
<polygon fill="#454545" stroke="#313131" points="590.68,-640 590.68,-897 1044.44,-897 1044.44,-640 590.68,-640"/>
<text xml:space="preserve" text-anchor="start" x="598.68" y="-884.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<!-- pg -->
<g id="node1" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M479.67,-251.64C479.67,-260.67 391.9,-268 283.84,-268 175.78,-268 88,-260.67 88,-251.64 88,-251.64 88,-104.36 88,-104.36 88,-95.33 175.78,-88 283.84,-88 391.9,-88 479.67,-95.33 479.67,-104.36 479.67,-104.36 479.67,-251.64 479.67,-251.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M479.67,-251.64C479.67,-242.61 391.9,-235.27 283.84,-235.27 175.78,-235.27 88,-242.61 88,-251.64"/>
<text xml:space="preserve" text-anchor="start" x="136.12" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="180.06" y="-219.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="457.67" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="180.06" y="-196.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="180.06" y="-178.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="180.06" y="-160.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="180.06" y="-142.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="180.06" y="-124.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- cache -->
<g id="node2" class="node">
<title>cache</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M466.76,-541.64C466.76,-550.67 384.77,-558 283.84,-558 182.9,-558 100.92,-550.67 100.92,-541.64 100.92,-541.64 100.92,-394.36 100.92,-394.36 100.92,-385.33 182.9,-378 283.84,-378 384.77,-378 466.76,-385.33 466.76,-394.36 466.76,-394.36 466.76,-541.64 466.76,-541.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M466.76,-541.64C466.76,-532.61 384.77,-525.27 283.84,-525.27 182.9,-525.27 100.92,-532.61 100.92,-541.64"/>
<text xml:space="preserve" text-anchor="start" x="149.04" y="-463.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="192.98" y="-482.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Кеш данных</text>
<text xml:space="preserve" text-anchor="start" x="444.75" y="-463.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="192.98" y="-459.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище временных данных, для</text>
<text xml:space="preserve" text-anchor="start" x="192.98" y="-441.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">ускорения работы системы.</text>
</g>
<!-- ecma -->
<g id="node3" class="node">
<title>ecma</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="502.68,-848 65,-848 65,-668 502.68,-668 502.68,-848"/>
<text xml:space="preserve" text-anchor="start" x="113.11" y="-753.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="157.06" y="-763.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Анализ ошибок и отправка в ECMA</text>
<text xml:space="preserve" text-anchor="start" x="480.67" y="-753.8" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="157.06" y="-740.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Рабочий процесс</text>
</g>
<!-- ecma_1 -->
<g id="node4" class="node">
<title>ecma_1</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="1012.44,-844 622.68,-844 622.68,-672 1012.44,-672 1012.44,-844"/>
<text xml:space="preserve" text-anchor="start" x="790.11" y="-772.3" font-family="Arial" font-size="19.00" fill="#fafafa">ECMA</text>
<text xml:space="preserve" text-anchor="start" x="646.7" y="-749.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Выходная очередь сообщений о сбоях и ошибках</text>
<text xml:space="preserve" text-anchor="start" x="732.13" y="-731.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">в работе оборудования.</text>
</g>
<!-- ecma&#45;&gt;cache -->
<g id="edge1" class="edge">
<title>ecma&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M283.84,-668.18C283.84,-635.17 283.84,-602.16 283.84,-569.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="286.46,-569.44 283.84,-561.94 281.21,-569.44 286.46,-569.44"/>
</g>
<!-- ecma&#45;&gt;ecma_1 -->
<g id="edge2" class="edge">
<title>ecma&#45;&gt;ecma_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M502.64,-758C539.08,-758 576.77,-758 612.84,-758"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="612.44,-760.63 619.94,-758 612.44,-755.38 612.44,-760.63"/>
</g>
</g>
</svg>
`;case"c3_worker_esr":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1049pt" height="649pt"
 viewBox="0.00 0.00 1049.00 649.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 634.05)">
<g id="clust1" class="cluster">
<title>cluster_mkicsai</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-611 543.67,-611 543.67,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-598.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">КИ&#45;Ц САИ ПС.ИНП</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="48,-48 48,-313 503.67,-313 503.67,-48 48,-48"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-300.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_external</title>
<polygon fill="#454545" stroke="#313131" points="559.67,-338 559.67,-603 1010.51,-603 1010.51,-338 559.67,-338"/>
<text xml:space="preserve" text-anchor="start" x="567.67" y="-590.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ВНЕШНИЕ СЕРВИСЫ</text>
</g>
<!-- pg -->
<g id="node1" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M471.67,-243.64C471.67,-252.67 383.9,-260 275.84,-260 167.78,-260 80,-252.67 80,-243.64 80,-243.64 80,-96.36 80,-96.36 80,-87.33 167.78,-80 275.84,-80 383.9,-80 471.67,-87.33 471.67,-96.36 471.67,-96.36 471.67,-243.64 471.67,-243.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M471.67,-243.64C471.67,-234.61 383.9,-227.27 275.84,-227.27 167.78,-227.27 80,-234.61 80,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="128.12" y="-165.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="172.06" y="-211.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="449.67" y="-165.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="172.06" y="-188.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="172.06" y="-170.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="172.06" y="-152.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="172.06" y="-134.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="172.06" y="-116.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- esr -->
<g id="node2" class="node">
<title>esr</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="435.86,-550 115.82,-550 115.82,-370 435.86,-370 435.86,-550"/>
<text xml:space="preserve" text-anchor="start" x="190.63" y="-455.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="234.57" y="-465.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Обновление НСИ</text>
<text xml:space="preserve" text-anchor="start" x="387.16" y="-455.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="234.57" y="-442.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Рабочий процесс</text>
</g>
<!-- esr_1 -->
<g id="node3" class="node">
<title>esr_1</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="978.51,-550 591.67,-550 591.67,-370 978.51,-370 978.51,-550"/>
<text xml:space="preserve" text-anchor="start" x="734.95" y="-483.3" font-family="Arial" font-size="19.00" fill="#fafafa">Сервис НСИ</text>
<text xml:space="preserve" text-anchor="start" x="630.9" y="-460.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Внешний сервис для получения нормативно</text>
<text xml:space="preserve" text-anchor="start" x="611.73" y="-442.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">справочной информации (дороги и остановочные</text>
<text xml:space="preserve" text-anchor="start" x="755.51" y="-424.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">пункты).</text>
</g>
<!-- esr&#45;&gt;pg -->
<g id="edge1" class="edge">
<title>esr&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M275.84,-370.18C275.84,-337.17 275.84,-304.16 275.84,-271.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="278.46,-271.44 275.84,-263.94 273.21,-271.44 278.46,-271.44"/>
</g>
<!-- esr&#45;&gt;esr_1 -->
<g id="edge2" class="edge">
<title>esr&#45;&gt;esr_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M435.6,-460C481.86,-460 533.04,-460 581.61,-460"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="581.4,-462.63 588.9,-460 581.4,-457.38 581.4,-462.63"/>
</g>
</g>
</svg>
`;case"c3_client":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="2115pt" height="1298pt"
 viewBox="0.00 0.00 2115.00 1298.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1283.05)">
<g id="clust1" class="cluster">
<title>cluster_users</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-193 8,-1054 478.18,-1054 478.18,-193 8,-193"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1041.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ПОЛЬЗОВАТЕЛИ</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_mkicsai</title>
<polygon fill="#1a468d" stroke="#1c3979" points="518.18,-8 518.18,-1260 2076.55,-1260 2076.55,-8 518.18,-8"/>
<text xml:space="preserve" text-anchor="start" x="526.18" y="-1247.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">КИ&#45;Ц САИ ПС.ИНП</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_storage</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="1564.88,-48 1564.88,-1199 2036.55,-1199 2036.55,-48 1564.88,-48"/>
<text xml:space="preserve" text-anchor="start" x="1572.88" y="-1186.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">ХРАНИЛИЩЕ ДАННЫХ</text>
</g>
<!-- admin -->
<g id="node1" class="node">
<title>admin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="406.92,-413 79.26,-413 79.26,-233 406.92,-233 406.92,-413"/>
<text xml:space="preserve" text-anchor="start" x="174.47" y="-346.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Администратор</text>
<text xml:space="preserve" text-anchor="start" x="99.31" y="-323.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Управление пользователями, системные</text>
<text xml:space="preserve" text-anchor="start" x="143.07" y="-305.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">настройки, анализ ошибок и</text>
<text xml:space="preserve" text-anchor="start" x="165.99" y="-287.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">производительности.</text>
</g>
<!-- editor -->
<g id="node2" class="node">
<title>editor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="421.51,-703 64.67,-703 64.67,-523 421.51,-523 421.51,-703"/>
<text xml:space="preserve" text-anchor="start" x="200.86" y="-627.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Редактор</text>
<text xml:space="preserve" text-anchor="start" x="84.73" y="-604.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Правка нормативно справочной информации.</text>
<text xml:space="preserve" text-anchor="start" x="118.07" y="-586.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Установка и снятие считывателей.</text>
</g>
<!-- analyst -->
<g id="node3" class="node">
<title>analyst</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="438.18,-993 48,-993 48,-813 438.18,-813 438.18,-993"/>
<text xml:space="preserve" text-anchor="start" x="200.86" y="-926.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Аналитик</text>
<text xml:space="preserve" text-anchor="start" x="68.06" y="-903.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Анализ работы оборудования установленного на</text>
<text xml:space="preserve" text-anchor="start" x="99.31" y="-885.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">местах на основе данных о прохождении</text>
<text xml:space="preserve" text-anchor="start" x="80.56" y="-867.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">подвижного состава и сообщений об ошибках.</text>
</g>
<!-- session -->
<g id="node4" class="node">
<title>session</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1983.64,-251.64C1983.64,-260.67 1901.65,-268 1800.72,-268 1699.78,-268 1617.8,-260.67 1617.8,-251.64 1617.8,-251.64 1617.8,-104.36 1617.8,-104.36 1617.8,-95.33 1699.78,-88 1800.72,-88 1901.65,-88 1983.64,-95.33 1983.64,-104.36 1983.64,-104.36 1983.64,-251.64 1983.64,-251.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1983.64,-251.64C1983.64,-242.61 1901.65,-235.27 1800.72,-235.27 1699.78,-235.27 1617.8,-242.61 1617.8,-251.64"/>
<text xml:space="preserve" text-anchor="start" x="1665.91" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1709.86" y="-192.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Сессии</text>
<text xml:space="preserve" text-anchor="start" x="1961.63" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1709.86" y="-169.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище сессий пользователей</text>
<text xml:space="preserve" text-anchor="start" x="1709.86" y="-151.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">системы.</text>
</g>
<!-- pg -->
<g id="node5" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1996.55,-541.64C1996.55,-550.67 1908.78,-558 1800.72,-558 1692.66,-558 1604.88,-550.67 1604.88,-541.64 1604.88,-541.64 1604.88,-394.36 1604.88,-394.36 1604.88,-385.33 1692.66,-378 1800.72,-378 1908.78,-378 1996.55,-385.33 1996.55,-394.36 1996.55,-394.36 1996.55,-541.64 1996.55,-541.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1996.55,-541.64C1996.55,-532.61 1908.78,-525.27 1800.72,-525.27 1692.66,-525.27 1604.88,-532.61 1604.88,-541.64"/>
<text xml:space="preserve" text-anchor="start" x="1653" y="-463.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1696.94" y="-509.3" font-family="Arial" font-size="19.00" fill="#f8fafc">База данных</text>
<text xml:space="preserve" text-anchor="start" x="1974.54" y="-463.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1696.94" y="-486.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1696.94" y="-468.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(нормативно справочная</text>
<text xml:space="preserve" text-anchor="start" x="1696.94" y="-450.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">информация) и условно постоянных</text>
<text xml:space="preserve" text-anchor="start" x="1696.94" y="-432.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">данных(оперативные данные, которые</text>
<text xml:space="preserve" text-anchor="start" x="1696.94" y="-414.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">нужно хранить не менее 10 дней).</text>
</g>
<!-- log -->
<g id="node6" class="node">
<title>log</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1995.81,-831.64C1995.81,-840.67 1908.36,-848 1800.72,-848 1693.07,-848 1605.63,-840.67 1605.63,-831.64 1605.63,-831.64 1605.63,-684.36 1605.63,-684.36 1605.63,-675.33 1693.07,-668 1800.72,-668 1908.36,-668 1995.81,-675.33 1995.81,-684.36 1995.81,-684.36 1995.81,-831.64 1995.81,-831.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1995.81,-831.64C1995.81,-822.61 1908.36,-815.27 1800.72,-815.27 1693.07,-815.27 1605.63,-822.61 1605.63,-831.64"/>
<text xml:space="preserve" text-anchor="start" x="1763.76" y="-772.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Журналы</text>
<text xml:space="preserve" text-anchor="start" x="1625.68" y="-749.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище журналов об ошибках и отклонениях в</text>
<text xml:space="preserve" text-anchor="start" x="1742.37" y="-731.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">работе системы.</text>
</g>
<!-- monitoring -->
<g id="node7" class="node">
<title>monitoring</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1989.89,-1121.64C1989.89,-1130.67 1905.1,-1138 1800.72,-1138 1696.33,-1138 1611.54,-1130.67 1611.54,-1121.64 1611.54,-1121.64 1611.54,-974.36 1611.54,-974.36 1611.54,-965.33 1696.33,-958 1800.72,-958 1905.1,-958 1989.89,-965.33 1989.89,-974.36 1989.89,-974.36 1989.89,-1121.64 1989.89,-1121.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1989.89,-1121.64C1989.89,-1112.61 1905.1,-1105.27 1800.72,-1105.27 1696.33,-1105.27 1611.54,-1112.61 1611.54,-1121.64"/>
<text xml:space="preserve" text-anchor="start" x="1659.66" y="-1043.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1703.61" y="-1062.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Мониторинг</text>
<text xml:space="preserve" text-anchor="start" x="1967.88" y="-1043.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1703.61" y="-1039.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранилище данных для мониторинга</text>
<text xml:space="preserve" text-anchor="start" x="1703.61" y="-1021.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">работы системы.</text>
</g>
<!-- frontend -->
<g id="node8" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="961.53,-703 558.18,-703 558.18,-523 961.53,-523 961.53,-703"/>
<text xml:space="preserve" text-anchor="start" x="606.3" y="-608.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="650.24" y="-654.3" font-family="Arial" font-size="19.00" fill="#eff6ff">КИ&#45;Ц САИ ПС.ИНП (веб клиент)</text>
<text xml:space="preserve" text-anchor="start" x="939.52" y="-608.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="650.24" y="-631.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Веб клиент для взаимодействия с</text>
<text xml:space="preserve" text-anchor="start" x="650.24" y="-613.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">КИ&#45;Ц САИ ПС.ИНП, позволяет</text>
<text xml:space="preserve" text-anchor="start" x="650.24" y="-595.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">пользователям просматривать</text>
<text xml:space="preserve" text-anchor="start" x="650.24" y="-577.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">информацию о прохождении подвижного</text>
<text xml:space="preserve" text-anchor="start" x="650.24" y="-559.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">состава через контрольные пункты,</text>
</g>
<!-- backend -->
<g id="node9" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1484.88,-703 1081.53,-703 1081.53,-523 1484.88,-523 1484.88,-703"/>
<text xml:space="preserve" text-anchor="start" x="1129.65" y="-608.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1173.59" y="-654.3" font-family="Arial" font-size="19.00" fill="#eff6ff">КИ&#45;Ц САИ ПС.ИНП (веб сервер)</text>
<text xml:space="preserve" text-anchor="start" x="1462.87" y="-608.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1173.59" y="-631.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Веб сервер для взаимодействия с</text>
<text xml:space="preserve" text-anchor="start" x="1173.59" y="-613.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">КИ&#45;Ц САИ ПС.ИНП, позволяет</text>
<text xml:space="preserve" text-anchor="start" x="1173.59" y="-595.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">пользователям просматривать</text>
<text xml:space="preserve" text-anchor="start" x="1173.59" y="-577.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">информацию о прохождении подвижного</text>
<text xml:space="preserve" text-anchor="start" x="1173.59" y="-559.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">состава через контрольные пункты,</text>
</g>
<!-- admin&#45;&gt;frontend -->
<g id="edge1" class="edge">
<title>admin&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M403.79,-412.97C462.9,-446.27 530.08,-484.11 589.97,-517.86"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="588.68,-520.14 596.5,-521.53 591.25,-515.57 588.68,-520.14"/>
</g>
<!-- editor&#45;&gt;frontend -->
<g id="edge2" class="edge">
<title>editor&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M421.24,-613C462.08,-613 505.91,-613 548.03,-613"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="547.88,-615.63 555.38,-613 547.88,-610.38 547.88,-615.63"/>
</g>
<!-- analyst&#45;&gt;frontend -->
<g id="edge3" class="edge">
<title>analyst&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M403.79,-813.03C462.9,-779.73 530.08,-741.89 589.97,-708.14"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="591.25,-710.43 596.5,-704.47 588.68,-705.86 591.25,-710.43"/>
</g>
<!-- frontend&#45;&gt;backend -->
<g id="edge4" class="edge">
<title>frontend&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M961.3,-613C997.38,-613 1035.07,-613 1071.43,-613"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1071.12,-615.63 1078.62,-613 1071.12,-610.38 1071.12,-615.63"/>
</g>
<!-- backend&#45;&gt;session -->
<g id="edge5" class="edge">
<title>backend&#45;&gt;session</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1360.4,-523.26C1414.14,-462.85 1489.68,-383.5 1564.88,-323 1587.86,-304.52 1613.36,-286.54 1638.84,-269.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1640.07,-272.23 1644.94,-265.95 1637.22,-267.82 1640.07,-272.23"/>
</g>
<!-- backend&#45;&gt;pg -->
<g id="edge6" class="edge">
<title>backend&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1484.62,-556.63C1520.71,-546.48 1558.39,-535.88 1594.61,-525.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1594.86,-528.35 1601.37,-523.79 1593.44,-523.29 1594.86,-528.35"/>
</g>
<!-- backend&#45;&gt;log -->
<g id="edge7" class="edge">
<title>backend&#45;&gt;log</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1484.62,-669.37C1520.84,-679.56 1558.66,-690.2 1595,-700.42"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1593.86,-702.83 1601.79,-702.33 1595.28,-697.77 1593.86,-702.83"/>
</g>
<!-- backend&#45;&gt;monitoring -->
<g id="edge8" class="edge">
<title>backend&#45;&gt;monitoring</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1360.4,-702.74C1414.14,-763.15 1489.68,-842.5 1564.88,-903 1587.69,-921.35 1612.99,-939.2 1638.28,-955.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1636.6,-957.78 1644.32,-959.65 1639.45,-953.37 1636.6,-957.78"/>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}export{t as dotSource,n as svgSource};
