# Dependencies

    library(xml2)
    library(rvest)
    library(tidyverse)

    ## -- Attaching packages --------------------------------------- tidyverse 1.3.1 --

    ## v ggplot2 3.3.5     v purrr   0.3.4
    ## v tibble  3.1.4     v dplyr   1.0.7
    ## v tidyr   1.1.3     v stringr 1.4.0
    ## v readr   2.0.1     v forcats 0.5.1

    ## -- Conflicts ------------------------------------------ tidyverse_conflicts() --
    ## x dplyr::filter()         masks stats::filter()
    ## x readr::guess_encoding() masks rvest::guess_encoding()
    ## x dplyr::lag()            masks stats::lag()

    library(jsonlite)

    ## 
    ## 载入程辑包：'jsonlite'

    ## The following object is masked from 'package:purrr':
    ## 
    ##     flatten

# Retrieve Web Content

    url = "https://www.sac-cu.org/MSPH/CourseDB/courselist.aspx"

    webpage = read_html(url,encoding = 'utf-8')

# Alter semester in form to get courses offered in Spring, Summer, Autumn

## fall 2022

    form = html_form(webpage)[[1]]
    form = form %>% html_form_set(ddlSemester = "2022|3")

    resp = html_form_submit(form)

    ## Submitting with 'btnSearch'

    fallPage = read_html(resp)

    fallPage %>% html_form()

    ## [[1]]
    ## <form> 'form1' (POST courselist.aspx)
    ##   <field> (hidden) __VIEWSTATE: /wEPDwUJNjM5OTI4N...
    ##   <field> (hidden) __VIEWSTATEGENERATOR: C4E59EE8
    ##   <field> (hidden) __EVENTVALIDATION: /wEdAOICuDLznqutX...
    ##   <field> (radio) rblView: 1
    ##   <field> (radio) rblView: 0
    ##   <field> (select) ddlSemester: 2022|3
    ##   <field> (select) ddlDept: -1
    ##   <field> (select) ddlDay: -1
    ##   <field> (text) tbxCourseNum: 
    ##   <field> (text) tbxInstructor: 
    ##   <field> (text) tbxKeyWords: 
    ##   <field> (submit) btnSearch: Find Courses...
    ##   <field> (image) grvCourses$ctl02$btnExpand: 
    ##   <field> (image) grvCourses$ctl03$btnExpand: 
    ##   <field> (image) grvCourses$ctl04$btnExpand: 
    ##   <field> (image) grvCourses$ctl05$btnExpand: 
    ##   <field> (image) grvCourses$ctl06$btnExpand: 
    ##   <field> (image) grvCourses$ctl07$btnExpand: 
    ##   <field> (image) grvCourses$ctl08$btnExpand: 
    ##   <field> (image) grvCourses$ctl09$btnExpand: 
    ##   <field> (image) grvCourses$ctl10$btnExpand: 
    ##   <field> (image) grvCourses$ctl11$btnExpand: 
    ##   <field> (image) grvCourses$ctl12$btnExpand: 
    ##   <field> (image) grvCourses$ctl13$btnExpand: 
    ##   <field> (image) grvCourses$ctl14$btnExpand: 
    ##   <field> (image) grvCourses$ctl15$btnExpand: 
    ##   <field> (image) grvCourses$ctl16$btnExpand: 
    ##   <field> (image) grvCourses$ctl17$btnExpand: 
    ##   <field> (image) grvCourses$ctl18$btnExpand: 
    ##   <field> (image) grvCourses$ctl19$btnExpand: 
    ##   <field> (image) grvCourses$ctl20$btnExpand: 
    ##   <field> (image) grvCourses$ctl21$btnExpand: 
    ##   <field> (image) grvCourses$ctl22$btnExpand: 
    ##   <field> (image) grvCourses$ctl23$btnExpand: 
    ##   <field> (image) grvCourses$ctl24$btnExpand: 
    ##   <field> (image) grvCourses$ctl25$btnExpand: 
    ##   <field> (image) grvCourses$ctl26$btnExpand: 
    ##   <field> (image) grvCourses$ctl27$btnExpand: 
    ##   <field> (image) grvCourses$ctl28$btnExpand: 
    ##   <field> (image) grvCourses$ctl29$btnExpand: 
    ##   <field> (image) grvCourses$ctl30$btnExpand: 
    ##   <field> (image) grvCourses$ctl31$btnExpand: 
    ##   <field> (image) grvCourses$ctl32$btnExpand: 
    ##   <field> (image) grvCourses$ctl33$btnExpand: 
    ##   <field> (image) grvCourses$ctl34$btnExpand: 
    ##   <field> (image) grvCourses$ctl35$btnExpand: 
    ##   <field> (image) grvCourses$ctl36$btnExpand: 
    ##   <field> (image) grvCourses$ctl37$btnExpand: 
    ##   <field> (image) grvCourses$ctl38$btnExpand: 
    ##   <field> (image) grvCourses$ctl39$btnExpand: 
    ##   <field> (image) grvCourses$ctl40$btnExpand: 
    ##   <field> (image) grvCourses$ctl41$btnExpand: 
    ##   <field> (image) grvCourses$ctl42$btnExpand: 
    ##   <field> (image) grvCourses$ctl43$btnExpand: 
    ##   <field> (image) grvCourses$ctl44$btnExpand: 
    ##   <field> (image) grvCourses$ctl45$btnExpand: 
    ##   <field> (image) grvCourses$ctl46$btnExpand: 
    ##   <field> (image) grvCourses$ctl47$btnExpand: 
    ##   <field> (image) grvCourses$ctl48$btnExpand: 
    ##   <field> (image) grvCourses$ctl49$btnExpand: 
    ##   <field> (image) grvCourses$ctl50$btnExpand: 
    ##   <field> (image) grvCourses$ctl51$btnExpand: 
    ##   <field> (image) grvCourses$ctl52$btnExpand: 
    ##   <field> (image) grvCourses$ctl53$btnExpand: 
    ##   <field> (image) grvCourses$ctl54$btnExpand: 
    ##   <field> (image) grvCourses$ctl55$btnExpand: 
    ##   <field> (image) grvCourses$ctl56$btnExpand: 
    ##   <field> (image) grvCourses$ctl57$btnExpand: 
    ##   <field> (image) grvCourses$ctl58$btnExpand: 
    ##   <field> (image) grvCourses$ctl59$btnExpand: 
    ##   <field> (image) grvCourses$ctl60$btnExpand: 
    ##   <field> (image) grvCourses$ctl61$btnExpand: 
    ##   <field> (image) grvCourses$ctl62$btnExpand: 
    ##   <field> (image) grvCourses$ctl63$btnExpand: 
    ##   <field> (image) grvCourses$ctl64$btnExpand: 
    ##   <field> (image) grvCourses$ctl65$btnExpand: 
    ##   <field> (image) grvCourses$ctl66$btnExpand: 
    ##   <field> (image) grvCourses$ctl67$btnExpand: 
    ##   <field> (image) grvCourses$ctl68$btnExpand: 
    ##   <field> (image) grvCourses$ctl69$btnExpand: 
    ##   <field> (image) grvCourses$ctl70$btnExpand: 
    ##   <field> (image) grvCourses$ctl71$btnExpand: 
    ##   <field> (image) grvCourses$ctl72$btnExpand: 
    ##   <field> (image) grvCourses$ctl73$btnExpand: 
    ##   <field> (image) grvCourses$ctl74$btnExpand: 
    ##   <field> (image) grvCourses$ctl75$btnExpand: 
    ##   <field> (image) grvCourses$ctl76$btnExpand: 
    ##   <field> (image) grvCourses$ctl77$btnExpand: 
    ##   <field> (image) grvCourses$ctl78$btnExpand: 
    ##   <field> (image) grvCourses$ctl79$btnExpand: 
    ##   <field> (image) grvCourses$ctl80$btnExpand: 
    ##   <field> (image) grvCourses$ctl81$btnExpand: 
    ##   <field> (image) grvCourses$ctl82$btnExpand: 
    ##   <field> (image) grvCourses$ctl83$btnExpand: 
    ##   <field> (image) grvCourses$ctl84$btnExpand: 
    ##   <field> (image) grvCourses$ctl85$btnExpand: 
    ##   <field> (image) grvCourses$ctl86$btnExpand: 
    ##   <field> (image) grvCourses$ctl87$btnExpand: 
    ##   <field> (image) grvCourses$ctl88$btnExpand: 
    ##   <field> (image) grvCourses$ctl89$btnExpand: 
    ##   <field> (image) grvCourses$ctl90$btnExpand: 
    ##   <field> (image) grvCourses$ctl91$btnExpand: 
    ##   <field> (image) grvCourses$ctl92$btnExpand: 
    ##   <field> (image) grvCourses$ctl93$btnExpand: 
    ##   <field> (image) grvCourses$ctl94$btnExpand: 
    ##   <field> (image) grvCourses$ctl95$btnExpand: 
    ##   <field> (image) grvCourses$ctl96$btnExpand: 
    ##   <field> (image) grvCourses$ctl97$btnExpand: 
    ##   <field> (image) grvCourses$ctl98$btnExpand: 
    ##   <field> (image) grvCourses$ctl99$btnExpand: 
    ##   <field> (image) grvCourses$ctl100$btnExpand: 
    ##   <field> (image) grvCourses$ctl101$btnExpand: 
    ##   <field> (image) grvCourses$ctl102$btnExpand: 
    ##   <field> (image) grvCourses$ctl103$btnExpand: 
    ##   <field> (image) grvCourses$ctl104$btnExpand: 
    ##   <field> (image) grvCourses$ctl105$btnExpand: 
    ##   <field> (image) grvCourses$ctl106$btnExpand: 
    ##   <field> (image) grvCourses$ctl107$btnExpand: 
    ##   <field> (image) grvCourses$ctl108$btnExpand: 
    ##   <field> (image) grvCourses$ctl109$btnExpand: 
    ##   <field> (image) grvCourses$ctl110$btnExpand: 
    ##   <field> (image) grvCourses$ctl111$btnExpand: 
    ##   <field> (image) grvCourses$ctl112$btnExpand: 
    ##   <field> (image) grvCourses$ctl113$btnExpand: 
    ##   <field> (image) grvCourses$ctl114$btnExpand: 
    ##   <field> (image) grvCourses$ctl115$btnExpand: 
    ##   <field> (image) grvCourses$ctl116$btnExpand: 
    ##   <field> (image) grvCourses$ctl117$btnExpand: 
    ##   <field> (image) grvCourses$ctl118$btnExpand: 
    ##   <field> (image) grvCourses$ctl119$btnExpand: 
    ##   <field> (image) grvCourses$ctl120$btnExpand: 
    ##   <field> (image) grvCourses$ctl121$btnExpand: 
    ##   <field> (image) grvCourses$ctl122$btnExpand: 
    ##   <field> (image) grvCourses$ctl123$btnExpand: 
    ##   <field> (image) grvCourses$ctl124$btnExpand: 
    ##   <field> (image) grvCourses$ctl125$btnExpand: 
    ##   <field> (image) grvCourses$ctl126$btnExpand: 
    ##   <field> (image) grvCourses$ctl127$btnExpand: 
    ##   <field> (image) grvCourses$ctl128$btnExpand: 
    ##   <field> (image) grvCourses$ctl129$btnExpand: 
    ##   <field> (image) grvCourses$ctl130$btnExpand: 
    ##   <field> (image) grvCourses$ctl131$btnExpand: 
    ##   <field> (image) grvCourses$ctl132$btnExpand: 
    ##   <field> (image) grvCourses$ctl133$btnExpand: 
    ##   <field> (image) grvCourses$ctl134$btnExpand: 
    ##   <field> (image) grvCourses$ctl135$btnExpand: 
    ##   <field> (image) grvCourses$ctl136$btnExpand: 
    ##   <field> (image) grvCourses$ctl137$btnExpand: 
    ##   <field> (image) grvCourses$ctl138$btnExpand: 
    ##   <field> (image) grvCourses$ctl139$btnExpand: 
    ##   <field> (image) grvCourses$ctl140$btnExpand: 
    ##   <field> (image) grvCourses$ctl141$btnExpand: 
    ##   <field> (image) grvCourses$ctl142$btnExpand: 
    ##   <field> (image) grvCourses$ctl143$btnExpand: 
    ##   <field> (image) grvCourses$ctl144$btnExpand: 
    ##   <field> (image) grvCourses$ctl145$btnExpand: 
    ##   <field> (image) grvCourses$ctl146$btnExpand: 
    ##   <field> (image) grvCourses$ctl147$btnExpand: 
    ##   <field> (image) grvCourses$ctl148$btnExpand: 
    ##   <field> (image) grvCourses$ctl149$btnExpand: 
    ##   <field> (image) grvCourses$ctl150$btnExpand: 
    ##   <field> (image) grvCourses$ctl151$btnExpand: 
    ##   <field> (image) grvCourses$ctl152$btnExpand: 
    ##   <field> (image) grvCourses$ctl153$btnExpand: 
    ##   <field> (image) grvCourses$ctl154$btnExpand: 
    ##   <field> (image) grvCourses$ctl155$btnExpand: 
    ##   <field> (image) grvCourses$ctl156$btnExpand: 
    ##   <field> (image) grvCourses$ctl157$btnExpand: 
    ##   <field> (image) grvCourses$ctl158$btnExpand: 
    ##   <field> (image) grvCourses$ctl159$btnExpand: 
    ##   <field> (image) grvCourses$ctl160$btnExpand: 
    ##   <field> (image) grvCourses$ctl161$btnExpand:

-   from form output, we found course id are 02 - 161.

<!-- -->

    fallPage$courseId = c(c("02", "03", "04", "05", "06", "07", "08", "09"), as.character(10:161))

## summer 2022

    form = html_form(webpage)[[1]]
    form = form %>% html_form_set(ddlSemester = "2022|2")

    resp = html_form_submit(form)

    ## Submitting with 'btnSearch'

    summerPage = read_html(resp)
    summerPage %>% html_form()

    ## [[1]]
    ## <form> 'form1' (POST courselist.aspx)
    ##   <field> (hidden) __VIEWSTATE: /wEPDwUJNjM5OTI4N...
    ##   <field> (hidden) __VIEWSTATEGENERATOR: C4E59EE8
    ##   <field> (hidden) __EVENTVALIDATION: /wEdAEwlXhZ0Y7vd8...
    ##   <field> (radio) rblView: 1
    ##   <field> (radio) rblView: 0
    ##   <field> (select) ddlSemester: 2022|2
    ##   <field> (select) ddlDept: -1
    ##   <field> (select) ddlDay: -1
    ##   <field> (text) tbxCourseNum: 
    ##   <field> (text) tbxInstructor: 
    ##   <field> (text) tbxKeyWords: 
    ##   <field> (submit) btnSearch: Find Courses...
    ##   <field> (image) grvCourses$ctl02$btnExpand: 
    ##   <field> (image) grvCourses$ctl03$btnExpand: 
    ##   <field> (image) grvCourses$ctl04$btnExpand: 
    ##   <field> (image) grvCourses$ctl05$btnExpand: 
    ##   <field> (image) grvCourses$ctl06$btnExpand: 
    ##   <field> (image) grvCourses$ctl07$btnExpand: 
    ##   <field> (image) grvCourses$ctl08$btnExpand: 
    ##   <field> (image) grvCourses$ctl09$btnExpand: 
    ##   <field> (image) grvCourses$ctl10$btnExpand: 
    ##   <field> (image) grvCourses$ctl11$btnExpand: 
    ##   <field> (image) grvCourses$ctl12$btnExpand: 
    ##   <field> (image) grvCourses$ctl13$btnExpand: 
    ##   <field> (image) grvCourses$ctl14$btnExpand: 
    ##   <field> (image) grvCourses$ctl15$btnExpand: 
    ##   <field> (image) grvCourses$ctl16$btnExpand: 
    ##   <field> (image) grvCourses$ctl17$btnExpand: 
    ##   <field> (image) grvCourses$ctl18$btnExpand: 
    ##   <field> (image) grvCourses$ctl19$btnExpand: 
    ##   <field> (image) grvCourses$ctl20$btnExpand: 
    ##   <field> (image) grvCourses$ctl21$btnExpand: 
    ##   <field> (image) grvCourses$ctl22$btnExpand:

-   from form output, we found course id are 02 - 22.

<!-- -->

    summerPage$courseId = c(c("02", "03", "04", "05", "06", "07", "08", "09"), as.character(10:22))

## spring 2022

    form = html_form(webpage)[[1]]
    form = form %>% html_form_set(ddlSemester = "2022|1")

    resp = html_form_submit(form)

    ## Submitting with 'btnSearch'

    springPage = read_html(resp)
    springPage %>% html_form()

    ## [[1]]
    ## <form> 'form1' (POST courselist.aspx)
    ##   <field> (hidden) __VIEWSTATE: /wEPDwUJNjM5OTI4N...
    ##   <field> (hidden) __VIEWSTATEGENERATOR: C4E59EE8
    ##   <field> (hidden) __EVENTVALIDATION: /wEdAPADlz5h8/ZE4...
    ##   <field> (radio) rblView: 1
    ##   <field> (radio) rblView: 0
    ##   <field> (select) ddlSemester: 2022|1
    ##   <field> (select) ddlDept: -1
    ##   <field> (select) ddlDay: -1
    ##   <field> (text) tbxCourseNum: 
    ##   <field> (text) tbxInstructor: 
    ##   <field> (text) tbxKeyWords: 
    ##   <field> (submit) btnSearch: Find Courses...
    ##   <field> (image) grvCourses$ctl02$btnExpand: 
    ##   <field> (image) grvCourses$ctl03$btnExpand: 
    ##   <field> (image) grvCourses$ctl04$btnExpand: 
    ##   <field> (image) grvCourses$ctl05$btnExpand: 
    ##   <field> (image) grvCourses$ctl06$btnExpand: 
    ##   <field> (image) grvCourses$ctl07$btnExpand: 
    ##   <field> (image) grvCourses$ctl08$btnExpand: 
    ##   <field> (image) grvCourses$ctl09$btnExpand: 
    ##   <field> (image) grvCourses$ctl10$btnExpand: 
    ##   <field> (image) grvCourses$ctl11$btnExpand: 
    ##   <field> (image) grvCourses$ctl12$btnExpand: 
    ##   <field> (image) grvCourses$ctl13$btnExpand: 
    ##   <field> (image) grvCourses$ctl14$btnExpand: 
    ##   <field> (image) grvCourses$ctl15$btnExpand: 
    ##   <field> (image) grvCourses$ctl16$btnExpand: 
    ##   <field> (image) grvCourses$ctl17$btnExpand: 
    ##   <field> (image) grvCourses$ctl18$btnExpand: 
    ##   <field> (image) grvCourses$ctl19$btnExpand: 
    ##   <field> (image) grvCourses$ctl20$btnExpand: 
    ##   <field> (image) grvCourses$ctl21$btnExpand: 
    ##   <field> (image) grvCourses$ctl22$btnExpand: 
    ##   <field> (image) grvCourses$ctl23$btnExpand: 
    ##   <field> (image) grvCourses$ctl24$btnExpand: 
    ##   <field> (image) grvCourses$ctl25$btnExpand: 
    ##   <field> (image) grvCourses$ctl26$btnExpand: 
    ##   <field> (image) grvCourses$ctl27$btnExpand: 
    ##   <field> (image) grvCourses$ctl28$btnExpand: 
    ##   <field> (image) grvCourses$ctl29$btnExpand: 
    ##   <field> (image) grvCourses$ctl30$btnExpand: 
    ##   <field> (image) grvCourses$ctl31$btnExpand: 
    ##   <field> (image) grvCourses$ctl32$btnExpand: 
    ##   <field> (image) grvCourses$ctl33$btnExpand: 
    ##   <field> (image) grvCourses$ctl34$btnExpand: 
    ##   <field> (image) grvCourses$ctl35$btnExpand: 
    ##   <field> (image) grvCourses$ctl36$btnExpand: 
    ##   <field> (image) grvCourses$ctl37$btnExpand: 
    ##   <field> (image) grvCourses$ctl38$btnExpand: 
    ##   <field> (image) grvCourses$ctl39$btnExpand: 
    ##   <field> (image) grvCourses$ctl40$btnExpand: 
    ##   <field> (image) grvCourses$ctl41$btnExpand: 
    ##   <field> (image) grvCourses$ctl42$btnExpand: 
    ##   <field> (image) grvCourses$ctl43$btnExpand: 
    ##   <field> (image) grvCourses$ctl44$btnExpand: 
    ##   <field> (image) grvCourses$ctl45$btnExpand: 
    ##   <field> (image) grvCourses$ctl46$btnExpand: 
    ##   <field> (image) grvCourses$ctl47$btnExpand: 
    ##   <field> (image) grvCourses$ctl48$btnExpand: 
    ##   <field> (image) grvCourses$ctl49$btnExpand: 
    ##   <field> (image) grvCourses$ctl50$btnExpand: 
    ##   <field> (image) grvCourses$ctl51$btnExpand: 
    ##   <field> (image) grvCourses$ctl52$btnExpand: 
    ##   <field> (image) grvCourses$ctl53$btnExpand: 
    ##   <field> (image) grvCourses$ctl54$btnExpand: 
    ##   <field> (image) grvCourses$ctl55$btnExpand: 
    ##   <field> (image) grvCourses$ctl56$btnExpand: 
    ##   <field> (image) grvCourses$ctl57$btnExpand: 
    ##   <field> (image) grvCourses$ctl58$btnExpand: 
    ##   <field> (image) grvCourses$ctl59$btnExpand: 
    ##   <field> (image) grvCourses$ctl60$btnExpand: 
    ##   <field> (image) grvCourses$ctl61$btnExpand: 
    ##   <field> (image) grvCourses$ctl62$btnExpand: 
    ##   <field> (image) grvCourses$ctl63$btnExpand: 
    ##   <field> (image) grvCourses$ctl64$btnExpand: 
    ##   <field> (image) grvCourses$ctl65$btnExpand: 
    ##   <field> (image) grvCourses$ctl66$btnExpand: 
    ##   <field> (image) grvCourses$ctl67$btnExpand: 
    ##   <field> (image) grvCourses$ctl68$btnExpand: 
    ##   <field> (image) grvCourses$ctl69$btnExpand: 
    ##   <field> (image) grvCourses$ctl70$btnExpand: 
    ##   <field> (image) grvCourses$ctl71$btnExpand: 
    ##   <field> (image) grvCourses$ctl72$btnExpand: 
    ##   <field> (image) grvCourses$ctl73$btnExpand: 
    ##   <field> (image) grvCourses$ctl74$btnExpand: 
    ##   <field> (image) grvCourses$ctl75$btnExpand: 
    ##   <field> (image) grvCourses$ctl76$btnExpand: 
    ##   <field> (image) grvCourses$ctl77$btnExpand: 
    ##   <field> (image) grvCourses$ctl78$btnExpand: 
    ##   <field> (image) grvCourses$ctl79$btnExpand: 
    ##   <field> (image) grvCourses$ctl80$btnExpand: 
    ##   <field> (image) grvCourses$ctl81$btnExpand: 
    ##   <field> (image) grvCourses$ctl82$btnExpand: 
    ##   <field> (image) grvCourses$ctl83$btnExpand: 
    ##   <field> (image) grvCourses$ctl84$btnExpand: 
    ##   <field> (image) grvCourses$ctl85$btnExpand: 
    ##   <field> (image) grvCourses$ctl86$btnExpand: 
    ##   <field> (image) grvCourses$ctl87$btnExpand: 
    ##   <field> (image) grvCourses$ctl88$btnExpand: 
    ##   <field> (image) grvCourses$ctl89$btnExpand: 
    ##   <field> (image) grvCourses$ctl90$btnExpand: 
    ##   <field> (image) grvCourses$ctl91$btnExpand: 
    ##   <field> (image) grvCourses$ctl92$btnExpand: 
    ##   <field> (image) grvCourses$ctl93$btnExpand: 
    ##   <field> (image) grvCourses$ctl94$btnExpand: 
    ##   <field> (image) grvCourses$ctl95$btnExpand: 
    ##   <field> (image) grvCourses$ctl96$btnExpand: 
    ##   <field> (image) grvCourses$ctl97$btnExpand: 
    ##   <field> (image) grvCourses$ctl98$btnExpand: 
    ##   <field> (image) grvCourses$ctl99$btnExpand: 
    ##   <field> (image) grvCourses$ctl100$btnExpand: 
    ##   <field> (image) grvCourses$ctl101$btnExpand: 
    ##   <field> (image) grvCourses$ctl102$btnExpand: 
    ##   <field> (image) grvCourses$ctl103$btnExpand: 
    ##   <field> (image) grvCourses$ctl104$btnExpand: 
    ##   <field> (image) grvCourses$ctl105$btnExpand: 
    ##   <field> (image) grvCourses$ctl106$btnExpand: 
    ##   <field> (image) grvCourses$ctl107$btnExpand: 
    ##   <field> (image) grvCourses$ctl108$btnExpand: 
    ##   <field> (image) grvCourses$ctl109$btnExpand: 
    ##   <field> (image) grvCourses$ctl110$btnExpand: 
    ##   <field> (image) grvCourses$ctl111$btnExpand: 
    ##   <field> (image) grvCourses$ctl112$btnExpand: 
    ##   <field> (image) grvCourses$ctl113$btnExpand: 
    ##   <field> (image) grvCourses$ctl114$btnExpand: 
    ##   <field> (image) grvCourses$ctl115$btnExpand: 
    ##   <field> (image) grvCourses$ctl116$btnExpand: 
    ##   <field> (image) grvCourses$ctl117$btnExpand: 
    ##   <field> (image) grvCourses$ctl118$btnExpand: 
    ##   <field> (image) grvCourses$ctl119$btnExpand: 
    ##   <field> (image) grvCourses$ctl120$btnExpand: 
    ##   <field> (image) grvCourses$ctl121$btnExpand: 
    ##   <field> (image) grvCourses$ctl122$btnExpand: 
    ##   <field> (image) grvCourses$ctl123$btnExpand: 
    ##   <field> (image) grvCourses$ctl124$btnExpand: 
    ##   <field> (image) grvCourses$ctl125$btnExpand: 
    ##   <field> (image) grvCourses$ctl126$btnExpand: 
    ##   <field> (image) grvCourses$ctl127$btnExpand: 
    ##   <field> (image) grvCourses$ctl128$btnExpand: 
    ##   <field> (image) grvCourses$ctl129$btnExpand: 
    ##   <field> (image) grvCourses$ctl130$btnExpand: 
    ##   <field> (image) grvCourses$ctl131$btnExpand: 
    ##   <field> (image) grvCourses$ctl132$btnExpand: 
    ##   <field> (image) grvCourses$ctl133$btnExpand: 
    ##   <field> (image) grvCourses$ctl134$btnExpand: 
    ##   <field> (image) grvCourses$ctl135$btnExpand: 
    ##   <field> (image) grvCourses$ctl136$btnExpand: 
    ##   <field> (image) grvCourses$ctl137$btnExpand: 
    ##   <field> (image) grvCourses$ctl138$btnExpand: 
    ##   <field> (image) grvCourses$ctl139$btnExpand: 
    ##   <field> (image) grvCourses$ctl140$btnExpand: 
    ##   <field> (image) grvCourses$ctl141$btnExpand: 
    ##   <field> (image) grvCourses$ctl142$btnExpand: 
    ##   <field> (image) grvCourses$ctl143$btnExpand: 
    ##   <field> (image) grvCourses$ctl144$btnExpand: 
    ##   <field> (image) grvCourses$ctl145$btnExpand: 
    ##   <field> (image) grvCourses$ctl146$btnExpand: 
    ##   <field> (image) grvCourses$ctl147$btnExpand: 
    ##   <field> (image) grvCourses$ctl148$btnExpand: 
    ##   <field> (image) grvCourses$ctl149$btnExpand: 
    ##   <field> (image) grvCourses$ctl150$btnExpand: 
    ##   <field> (image) grvCourses$ctl151$btnExpand: 
    ##   <field> (image) grvCourses$ctl152$btnExpand: 
    ##   <field> (image) grvCourses$ctl153$btnExpand: 
    ##   <field> (image) grvCourses$ctl154$btnExpand: 
    ##   <field> (image) grvCourses$ctl155$btnExpand: 
    ##   <field> (image) grvCourses$ctl156$btnExpand: 
    ##   <field> (image) grvCourses$ctl157$btnExpand: 
    ##   <field> (image) grvCourses$ctl158$btnExpand: 
    ##   <field> (image) grvCourses$ctl159$btnExpand: 
    ##   <field> (image) grvCourses$ctl160$btnExpand: 
    ##   <field> (image) grvCourses$ctl161$btnExpand: 
    ##   <field> (image) grvCourses$ctl162$btnExpand: 
    ##   <field> (image) grvCourses$ctl163$btnExpand: 
    ##   <field> (image) grvCourses$ctl164$btnExpand: 
    ##   <field> (image) grvCourses$ctl165$btnExpand: 
    ##   <field> (image) grvCourses$ctl166$btnExpand: 
    ##   <field> (image) grvCourses$ctl167$btnExpand: 
    ##   <field> (image) grvCourses$ctl168$btnExpand: 
    ##   <field> (image) grvCourses$ctl169$btnExpand: 
    ##   <field> (image) grvCourses$ctl170$btnExpand: 
    ##   <field> (image) grvCourses$ctl171$btnExpand: 
    ##   <field> (image) grvCourses$ctl172$btnExpand: 
    ##   <field> (image) grvCourses$ctl173$btnExpand: 
    ##   <field> (image) grvCourses$ctl174$btnExpand: 
    ##   <field> (image) grvCourses$ctl175$btnExpand: 
    ##   <field> (image) grvCourses$ctl176$btnExpand: 
    ##   <field> (image) grvCourses$ctl177$btnExpand: 
    ##   <field> (image) grvCourses$ctl178$btnExpand: 
    ##   <field> (image) grvCourses$ctl179$btnExpand: 
    ##   <field> (image) grvCourses$ctl180$btnExpand: 
    ##   <field> (image) grvCourses$ctl181$btnExpand: 
    ##   <field> (image) grvCourses$ctl182$btnExpand: 
    ##   <field> (image) grvCourses$ctl183$btnExpand: 
    ##   <field> (image) grvCourses$ctl184$btnExpand: 
    ##   <field> (image) grvCourses$ctl185$btnExpand: 
    ##   <field> (image) grvCourses$ctl186$btnExpand: 
    ##   <field> (image) grvCourses$ctl187$btnExpand: 
    ##   <field> (image) grvCourses$ctl188$btnExpand: 
    ##   <field> (image) grvCourses$ctl189$btnExpand: 
    ##   <field> (image) grvCourses$ctl190$btnExpand: 
    ##   <field> (image) grvCourses$ctl191$btnExpand: 
    ##   <field> (image) grvCourses$ctl192$btnExpand: 
    ##   <field> (image) grvCourses$ctl193$btnExpand: 
    ##   <field> (image) grvCourses$ctl194$btnExpand: 
    ##   <field> (image) grvCourses$ctl195$btnExpand: 
    ##   <field> (image) grvCourses$ctl196$btnExpand: 
    ##   <field> (image) grvCourses$ctl197$btnExpand: 
    ##   <field> (image) grvCourses$ctl198$btnExpand: 
    ##   <field> (image) grvCourses$ctl199$btnExpand: 
    ##   <field> (image) grvCourses$ctl200$btnExpand: 
    ##   <field> (image) grvCourses$ctl201$btnExpand: 
    ##   <field> (image) grvCourses$ctl202$btnExpand: 
    ##   <field> (image) grvCourses$ctl203$btnExpand: 
    ##   <field> (image) grvCourses$ctl204$btnExpand: 
    ##   <field> (image) grvCourses$ctl205$btnExpand: 
    ##   <field> (image) grvCourses$ctl206$btnExpand: 
    ##   <field> (image) grvCourses$ctl207$btnExpand: 
    ##   <field> (image) grvCourses$ctl208$btnExpand: 
    ##   <field> (image) grvCourses$ctl209$btnExpand: 
    ##   <field> (image) grvCourses$ctl210$btnExpand: 
    ##   <field> (image) grvCourses$ctl211$btnExpand: 
    ##   <field> (image) grvCourses$ctl212$btnExpand: 
    ##   <field> (image) grvCourses$ctl213$btnExpand: 
    ##   <field> (image) grvCourses$ctl214$btnExpand: 
    ##   <field> (image) grvCourses$ctl215$btnExpand: 
    ##   <field> (image) grvCourses$ctl216$btnExpand: 
    ##   <field> (image) grvCourses$ctl217$btnExpand: 
    ##   <field> (image) grvCourses$ctl218$btnExpand: 
    ##   <field> (image) grvCourses$ctl219$btnExpand: 
    ##   <field> (image) grvCourses$ctl220$btnExpand: 
    ##   <field> (image) grvCourses$ctl221$btnExpand: 
    ##   <field> (image) grvCourses$ctl222$btnExpand: 
    ##   <field> (image) grvCourses$ctl223$btnExpand: 
    ##   <field> (image) grvCourses$ctl224$btnExpand: 
    ##   <field> (image) grvCourses$ctl225$btnExpand: 
    ##   <field> (image) grvCourses$ctl226$btnExpand: 
    ##   <field> (image) grvCourses$ctl227$btnExpand: 
    ##   <field> (image) grvCourses$ctl228$btnExpand: 
    ##   <field> (image) grvCourses$ctl229$btnExpand: 
    ##   <field> (image) grvCourses$ctl230$btnExpand: 
    ##   <field> (image) grvCourses$ctl231$btnExpand: 
    ##   <field> (image) grvCourses$ctl232$btnExpand:

-   from form output, we found course id are 02 - 232.

<!-- -->

    springPage$courseId = c(c("02", "03", "04", "05", "06", "07", "08", "09"), as.character(10:232))

# collect courses infomation from webpages

-   department label: `_Label1`

-   course code label: `_btnPDF`

-   course name label: `_Label13`

<!-- -->

    dept = "_Label1"
    code = "_btnPDF"
    name = "_Label13"


    springPage$season = "Spring"
    summerPage$season = "Summer"
    fallPage$season = "Fall"


    pages = list(springPage, summerPage, fallPage)

    res = data.frame(matrix(ncol = 4, nrow = 0))



    for (page in pages) {
      for (courseId in page$courseId) {
        deptXpathStr = paste('//*[@id="grvCourses_ctl', courseId, dept, '"]', sep = "")
        codeXpathStr = paste('//*[@id="grvCourses_ctl', courseId, code, '"]', sep = "")
        nameXpathStr = paste('//*[@id="grvCourses_ctl', courseId, name, '"]', sep = "")
        courseDept = page %>% html_nodes(xpath = deptXpathStr) %>% html_text(T)
        courseCode = page %>% html_nodes(xpath = codeXpathStr) %>% html_text(T)
        courseName = page %>% html_nodes(xpath = nameXpathStr) %>% html_text(T)
        courseSeason = page$season
        res = rbind(res, c(courseDept, courseCode, courseName, courseSeason))
      }
    }

    colnames(res) = c("dept", "code", "name", "season")

    res

    ##     dept   code
    ## 1   BIST  89260
    ## 2   BIST  P6110
    ## 3   BIST  P6170
    ## 4   BIST  P8100
    ## 5   BIST  P8101
    ## 6   BIST  P8103
    ## 7   BIST  P8106
    ## 8   BIST  P8109
    ## 9   BIST  P8110
    ## 10  BIST  P8120
    ## 11  BIST  P8131
    ## 12  BIST  P8139
    ## 13  BIST  P8140
    ## 14  BIST  P8144
    ## 15  BIST  P8158
    ## 16  BIST  P8160
    ## 17  BIST  P8170
    ## 18  BIST  P8180
    ## 19  BIST  P8180
    ## 20  BIST  P8185
    ## 21  BIST  P8185
    ## 22  BIST  P8185
    ## 23  BIST  P8185
    ## 24  BIST  P9110
    ## 25  BIST  P9160
    ## 26  BIST  P9185
    ## 27  EHSC  P6320
    ## 28  EHSC  P6340
    ## 29  EHSC  P6360
    ## 30  EHSC  P6370
    ## 31  EHSC  P6385
    ## 32  EHSC  P8303
    ## 33  EHSC  P8304
    ## 34  EHSC  P8313
    ## 35  EHSC  P8320
    ## 36  EHSC  P8321
    ## 37  EHSC  P8322
    ## 38  EHSC  P8323
    ## 39  EHSC  P8324
    ## 40  EHSC  P8327
    ## 41  EHSC  P8329
    ## 42  EHSC  P8332
    ## 43  EHSC  P8334
    ## 44  EHSC  P8371
    ## 45  EHSC  P8371
    ## 46  EHSC  P8377
    ## 47  EHSC  P9300
    ## 48  EHSC  P9361
    ## 49  EHSC  P9362
    ## 50  EHSC  P9370
    ## 51  EHSC  P9380
    ## 52  EHSC  P9395
    ## 53  EPID  P6811
    ## 54  EPID  P6813
    ## 55  EPID  P8406
    ## 56  EPID  P8415
    ## 57  EPID  P8417
    ## 58  EPID  P8429
    ## 59  EPID  P8438
    ## 60  EPID  P8438
    ## 61  EPID  P8438
    ## 62  EPID  P8438
    ## 63  EPID  P8438
    ## 64  EPID  P8440
    ## 65  EPID  P8442
    ## 66  EPID  P8443
    ## 67  EPID  P8445
    ## 68  EPID  P8451
    ## 69  EPID  P8476
    ## 70  EPID  P8477
    ## 71  EPID  P8481
    ## 72  EPID  P8483
    ## 73  EPID  P8490
    ## 74  EPID  P8490
    ## 75  EPID  P8499
    ## 76  EPID  P8820
    ## 77  EPID  P8881
    ## 78  EPID  P9400
    ## 79  EPID  P9415
    ## 80  EPID  P9419
    ## 81  EPID  P9420
    ## 82  EPID  P9420
    ## 83  EPID  P9440
    ## 84  EPID  P9446
    ## 85  EPID  P9487
    ## 86  EPID  P9489
    ## 87  EPID  P9490
    ## 88  EPID  P9493
    ## 89  EPID  P9494
    ## 90  HPMN  P6503
    ## 91  HPMN  P6508
    ## 92  HPMN  P6513
    ## 93  HPMN  P6520
    ## 94  HPMN  P6529
    ## 95  HPMN  P6529
    ## 96  HPMN  P6545
    ## 97  HPMN  P8202
    ## 98  HPMN  P8204
    ## 99  HPMN  P8205
    ## 100 HPMN  P8210
    ## 101 HPMN  P8211
    ## 102 HPMN  P8212
    ## 103 HPMN  P8213
    ## 104 HPMN  P8215
    ## 105 HPMN  P8216
    ## 106 HPMN  P8217
    ## 107 HPMN  P8218
    ## 108 HPMN  P8219
    ## 109 HPMN  P8220
    ## 110 HPMN  P8502
    ## 111 HPMN  P8515
    ## 112 HPMN  P8515
    ## 113 HPMN  P8517
    ## 114 HPMN  P8520
    ## 115 HPMN  P8522
    ## 116 HPMN  P8527
    ## 117 HPMN  P8529
    ## 118 HPMN  P8531
    ## 119 HPMN  P8531
    ## 120 HPMN  P8533
    ## 121 HPMN  P8536
    ## 122 HPMN  P8544
    ## 123 HPMN  P8548
    ## 124 HPMN  P8555
    ## 125 HPMN  P8556
    ## 126 HPMN  P8556
    ## 127 HPMN  P8557
    ## 128 HPMN  P8558
    ## 129 HPMN  P8568
    ## 130 HPMN  P8571
    ## 131 HPMN  P8572
    ## 132 HPMN  P8585
    ## 133 HPMN  P8586
    ## 134 HPMN  P8587
    ## 135 HPMN  P8593
    ## 136 HPMN  P8594
    ## 137 HPMN  P8595
    ## 138 HPMN  P8598
    ## 139 MTFC  G0003
    ## 140 MTFC  G0004
    ## 141 POPF  P8601
    ## 142 POPF  P8602
    ## 143 POPF  P8602
    ## 144 POPF  P8602
    ## 145 POPF  P8602
    ## 146 POPF  P8602
    ## 147 POPF  P8607
    ## 148 POPF  P8608
    ## 149 POPF  P8616
    ## 150 POPF  P8617
    ## 151 POPF  P8620
    ## 152 POPF  P8623
    ## 153 POPF  P8623
    ## 154 POPF  P8624
    ## 155 POPF  P8624
    ## 156 POPF  P8624
    ## 157 POPF  P8624
    ## 158 POPF  P8625
    ## 159 POPF  P8628
    ## 160 POPF  P8635
    ## 161 POPF  P8636
    ## 162 POPF  P8637
    ## 163 POPF  P8640
    ## 164 POPF  P8640
    ## 165 POPF  P8645
    ## 166 POPF  P8648
    ## 167 POPF  P8654
    ## 168 POPF  P8657
    ## 169 POPF  P8665
    ## 170 POPF  P8670
    ## 171 POPF  P8673
    ## 172 POPF  P8679
    ## 173 POPF  P8679
    ## 174 POPF  P8681
    ## 175 POPF  P8682
    ## 176 POPF  P8683
    ## 177 POPF  P8684
    ## 178 POPF  P8686
    ## 179 POPF  P8691
    ## 180 POPF  P8693
    ## 181 POPF  P9620
    ## 182 POPF  P9630
    ## 183 POPF  P9651
    ## 184 POPF  P9675
    ## 185 POPF  P9691
    ## 186 POPF  P9691
    ## 187 PUBH GU4100
    ## 188 PUBH  P8086
    ## 189 PUBH  P9040
    ## 190 PUBH  P9050
    ## 191 PUBH  P9060
    ## 192 PUBH UN3200
    ## 193 RESI  G0006
    ## 194 RESI  G0007
    ## 195 RSRH  P0001
    ## 196 RSRH  P0003
    ## 197 SOSC  P6728
    ## 198 SOSC  P6728
    ## 199 SOSC  P6750
    ## 200 SOSC  P6760
    ## 201 SOSC  P6776
    ## 202 SOSC  P6777
    ## 203 SOSC  P6785
    ## 204 SOSC  P8705
    ## 205 SOSC  P8708
    ## 206 SOSC  P8709
    ## 207 SOSC  P8741
    ## 208 SOSC  P8745
    ## 209 SOSC  P8745
    ## 210 SOSC  P8747
    ## 211 SOSC  P8762
    ## 212 SOSC  P8766
    ## 213 SOSC  P8771
    ## 214 SOSC  P8772
    ## 215 SOSC  P8772
    ## 216 SOSC  P8785
    ## 217 SOSC  P8785
    ## 218 SOSC  P8785
    ## 219 SOSC  P8787
    ## 220 SOSC  P8789
    ## 221 SOSC  P8792
    ## 222 SOSC  P8794
    ## 223 SOSC  P8795
    ## 224 SOSC  P8796
    ## 225 SOSC  P8796
    ## 226 SOSC  P8796
    ## 227 SOSC  P8798
    ## 228 SOSC  P8901
    ## 229 SOSC  P8901
    ## 230 SOSC  P8906
    ## 231 SOSC  P8908
    ## 232 BIST  P8112
    ## 233 BIST  P8120
    ## 234 EHSC  P9303
    ## 235 EPID  P8400
    ## 236 EPID  P9419
    ## 237 EPID  P9420
    ## 238 EPID  P9446
    ## 239 HPMN  P8508
    ## 240 HPMN  P8514
    ## 241 HPMN  P8515
    ## 242 HPMN  P8529
    ## 243 HPMN  P8533
    ## 244 HPMN  P8536
    ## 245 HPMN  P8545
    ## 246 HPMN  P8556
    ## 247 MTFC  G0003
    ## 248 MTFC  G0004
    ## 249 RESI  G0006
    ## 250 RESI  G0007
    ## 251 RSRH  P0001
    ## 252 RSRH  P0003
    ## 253 BIST  P6104
    ## 254 BIST  P6110
    ## 255 BIST  P8100
    ## 256 BIST  P8103
    ## 257 BIST  P8104
    ## 258 BIST  P8105
    ## 259 BIST  P8107
    ## 260 BIST  P8108
    ## 261 BIST  P8110
    ## 262 BIST  P8119
    ## 263 BIST  P8120
    ## 264 BIST  P8122
    ## 265 BIST  P8124
    ## 266 BIST  P8130
    ## 267 BIST  P8140
    ## 268 BIST  P8142
    ## 269 BIST  P8149
    ## 270 BIST  P8157
    ## 271 BIST  P8180
    ## 272 BIST  P8180
    ## 273 BIST  P9104
    ## 274 BIST  P9109
    ## 275 BIST  P9111
    ## 276 BIST  P9120
    ## 277 BIST  P9130
    ## 278 BIST  P9165
    ## 279 BIST  P9186
    ## 280 EHSC  P6300
    ## 281 EHSC  P8301
    ## 282 EHSC  P8306
    ## 283 EHSC  P8307
    ## 284 EHSC  P8308
    ## 285 EHSC  P8312
    ## 286 EHSC  P8317
    ## 287 EHSC  P8318
    ## 288 EHSC  P8319
    ## 289 EHSC  P8325
    ## 290 EHSC  P8371
    ## 291 EHSC  P8371
    ## 292 EHSC  P9303
    ## 293 EHSC  P9361
    ## 294 EHSC  P9370
    ## 295 EHSC  P9395
    ## 296 EPID  P6400
    ## 297 EPID  P8400
    ## 298 EPID  P8410
    ## 299 EPID  P8414
    ## 300 EPID  P8416
    ## 301 EPID  P8421
    ## 302 EPID  P8428
    ## 303 EPID  P8430
    ## 304 EPID  P8432
    ## 305 EPID  P8449
    ## 306 EPID  P8450
    ## 307 EPID  P8465
    ## 308 EPID  P8469
    ## 309 EPID  P8470
    ## 310 EPID  P8471
    ## 311 EPID  P8475
    ## 312 EPID  P8476
    ## 313 EPID  P8479
    ## 314 EPID  P8481
    ## 315 EPID  P8493
    ## 316 EPID  P9405
    ## 317 EPID  P9410
    ## 318 EPID  P9419
    ## 319 EPID  P9419
    ## 320 EPID  P9420
    ## 321 EPID  P9446
    ## 322 EPID  P9485
    ## 323 EPID  P9490
    ## 324 EPID  P9490
    ## 325 HPMN  P6503
    ## 326 HPMN  P6513
    ## 327 HPMN  P6529
    ## 328 HPMN  P6529
    ## 329 HPMN  P6530
    ## 330 HPMN  P6530
    ## 331 HPMN  P6545
    ## 332 HPMN  P8201
    ## 333 HPMN  P8214
    ## 334 HPMN  P8215
    ## 335 HPMN  P8220
    ## 336 HPMN  P8508
    ## 337 HPMN  P8508
    ## 338 HPMN  P8510
    ## 339 HPMN  P8510
    ## 340 HPMN  P8513
    ## 341 HPMN  P8514
    ## 342 HPMN  P8514
    ## 343 HPMN  P8517
    ## 344 HPMN  P8518
    ## 345 HPMN  P8518
    ## 346 HPMN  P8527
    ## 347 HPMN  P8531
    ## 348 HPMN  P8540
    ## 349 HPMN  P8548
    ## 350 HPMN  P8548
    ## 351 HPMN  P8553
    ## 352 HPMN  P8557
    ## 353 HPMN  P8557
    ## 354 HPMN  P8558
    ## 355 HPMN  P8559
    ## 356 HPMN  P8561
    ## 357 HPMN  P8565
    ## 358 HPMN  P8566
    ## 359 HPMN  P8571
    ## 360 HPMN  P8575
    ## 361 HPMN  P8584
    ## 362 HPMN  P8596
    ## 363 HPMN  P8597
    ## 364 MTFC  G0003
    ## 365 MTFC  G0004
    ## 366 POPF  P8600
    ## 367 POPF  P8607
    ## 368 POPF  P8607
    ## 369 POPF  P8615
    ## 370 POPF  P8623
    ## 371 POPF  P8630
    ## 372 POPF  P8633
    ## 373 POPF  P8637
    ## 374 POPF  P8638
    ## 375 POPF  P8639
    ## 376 POPF  P8640
    ## 377 POPF  P8645
    ## 378 POPF  P8651
    ## 379 POPF  P8654
    ## 380 POPF  P8656
    ## 381 POPF  P8661
    ## 382 POPF  P8662
    ## 383 POPF  P8676
    ## 384 POPF  P8684
    ## 385 POPF  P8687
    ## 386 POPF  P8688
    ## 387 POPF  P8693
    ## 388 POPF  P8694
    ## 389 POPF  P8698
    ## 390 PUBH GU4200
    ## 391 PUBH  P8086
    ## 392 PUBH UN3200
    ## 393 PUBH UN3400
    ## 394 RESI  G0006
    ## 395 RESI  G0007
    ## 396 RSRH  P0001
    ## 397 RSRH  P0003
    ## 398 SOSC  P6730
    ## 399 SOSC  P6775
    ## 400 SOSC  P8703
    ## 401 SOSC  P8705
    ## 402 SOSC  P8705
    ## 403 SOSC  P8707
    ## 404 SOSC  P8736
    ## 405 SOSC  P8745
    ## 406 SOSC  P8750
    ## 407 SOSC  P8755
    ## 408 SOSC  P8776
    ## 409 SOSC  P8785
    ## 410 SOSC  P8785
    ## 411 SOSC  P8796
    ## 412 SOSC  P8798
    ##                                                                                             name
    ## 1                                                     Building Interdisciplinary Research Models
    ## 2                                                                 Statistical Computing with SAS
    ## 3                                                    New Drug Development: A Regulatory Overview
    ## 4                                                                           Applied Regression I
    ## 5                                                            Introduction to Health Data Science
    ## 6                                        Patient Oriented Research Career Development Colloquium
    ## 7                                                                                Data Science II
    ## 8                                                                          Statistical Inference
    ## 9                                                                          Applied Regression II
    ## 10                                                                  Analysis of Categorical Data
    ## 11                                                                     Biostatistical Methods II
    ## 12                                                                  Statistical Genetic Modeling
    ## 13                                                    Introduction to Randomized Clinical Trials
    ## 14                                                                     Pharmaceutical Statistics
    ## 15                          Latent Variable and Structural Equation Modeling for Health Sciences
    ## 16                                                      Topics in Advanced Statistical Computing
    ## 17                                                               Integrative Capstone Experience
    ## 18                        Relational Databases and SQL Programming for Research and Data Science
    ## 19                        Relational Databases and SQL Programming for Research and Data Science
    ## 20                                                                   Capstone Consulting Seminar
    ## 21                                                                   Capstone Consulting Seminar
    ## 22                                                                   Capstone Consulting Seminar
    ## 23                                                                   Capstone Consulting Seminar
    ## 24                                                            Theory of Statistical Inference II
    ## 25                                    Master's Essay in Biostatistics: Clinical Research Methods
    ## 26                     Statistical Practices and Research for Interdisciplinary Sciences (SPRIS)
    ## 27                                     Fundamentals of Toxicology for Health-related Disciplines
    ## 28                                       Sustainable Development and Global Environmental Health
    ## 29                                                         Analysis of Environmental Health Data
    ## 30                                         Journal Club in Molecular Epidemiology and Toxicology
    ## 31                                                      Principles of Genetics & the Environment
    ## 32                               Food Security, Plant Biology, Climate Change, and Public Health
    ## 33                                                       Public Health Impacts of Climate Change
    ## 34                                                                                Toxicokinetics
    ## 35                                                  Applied Environmental and Industrial Hygiene
    ## 36                                         Introduction to Data Science for Environmental Health
    ## 37                                                 Environmental Determinants of Human Health II
    ## 38                                           Laboratory Methods in Environmental Health Sciences
    ## 39                                                             Climate and Health Weekly Seminar
    ## 40       Environmental Justice Health and Policy Analysis for Environmental Health Professionals
    ## 41                                                           Water, Sanitation, and Human Health
    ## 42                                                              Advanced Analytic Methods in EHS
    ## 43                                                                      Computational Toxicology
    ## 44                                                                             Public Health GIS
    ## 45                                                                             Public Health GIS
    ## 46                                                                            EHS Policy Seminar
    ## 47                     Capstone: Critical Thinking and Analysis in Environmental Health Sciences
    ## 48                                                                     Master's Essay Research I
    ## 49                                                                    Master's Essay Research II
    ## 50                                                 Journal Club in Environmental Health Sciences
    ## 51                                                             Advanced GIS and Spatial Analysis
    ## 52                                                                             Doctoral Research
    ## 53                                                            Priorities in Global Public Health
    ## 54                                                            Priorities in Global Mental Health
    ## 55                                                           Epidemiology of Infectious Diseases
    ## 56                                                                  Chronic Disease Epidemiology
    ## 57                                              Selected Problems of Measurement in Epidemiology
    ## 58                                         Current Work in Injury Control and Prevention Seminar
    ## 59                             Epidemiology II: Design and Conduct of Observational Epidemiology
    ## 60                             Epidemiology II: Design and Conduct of Observational Epidemiology
    ## 61                             Epidemiology II: Design and Conduct of Observational Epidemiology
    ## 62                             Epidemiology II: Design and Conduct of Observational Epidemiology
    ## 63                             Epidemiology II: Design and Conduct of Observational Epidemiology
    ## 64                                                       Epidemiology of Cardiovascular Diseases
    ## 65                                                      Epidemiology and Control of Tuberculosis
    ## 66                                                                         Microbiome and Health
    ## 67                                            Current and Emerging Issues in Injury and Violence
    ## 68                           Introduction to Machine Learning for Epidemiology and Public Health
    ## 69                                                       Epidemiology of Chronic Disease Seminar
    ## 70                                                          Epi Modeling for Infectious Diseases
    ## 71                                                      Seminar in Social Determinants of Health
    ## 72                                                Applications of Epidemiologic Research Methods
    ## 73                                                                      Tutorial in Epidemiology
    ## 74                                                                      Tutorial in Epidemiology
    ## 75                                                                 Field Methods in Epidemiology
    ## 76                                                              Advanced Topics in Global Health
    ## 77                                                           Global Health Pre-Practicum Seminar
    ## 78                                            Epidemiology IV: Critical Thinking in Epidemiology
    ## 79                                            Epidemiologic Challenges in Substance Use Research
    ## 80                                                              Master's Essay in Epidemiology I
    ## 81                                                             Master's Essay in Epidemiology II
    ## 82                                                             Master's Essay in Epidemiology II
    ## 83                         Applying the Causal Roadmap to Single Timepoint and Longitudinal Data
    ## 84                                            Faculty-Fellow Seminar in Psychiatric Epidemiology
    ## 85                                                    Epi VI: Advanced Techniques in Epi Methods
    ## 86                                                        Application of Epi Research Methods II
    ## 87                                                                      Tutorial in Epidemiology
    ## 88                                                                     Neurological Epidemiology
    ## 89                                           Publications, Presentations, and Scientific Writing
    ## 90                                                              Introduction to Health Economics
    ## 91                                                        Health Policy and the Political System
    ## 92                                                        Critical Issues in Hospital Management
    ## 93                                                                        Healthcare in the Arts
    ## 94                                                           Healthcare Accounting and Budgeting
    ## 95                                                           Healthcare Accounting and Budgeting
    ## 96                                                    Analytics and Managerial Decision-Making I
    ## 97                                                             Behavioral Policy & Public Health
    ## 98                                                                    Strategy for Health Policy
    ## 99                                             Venture Capital: Funding Innovation in Healthcare
    ## 100                                               The Untold Stories in US Health Policy History
    ## 101                                     Race and Public Policy: Interpreting Sub-Systemic Racism
    ## 102                                                                    Digital Health Revolution
    ## 103                                            Health Claims Data Analytics: Real-World Strategy
    ## 104                                                                Case Competition Fundamentals
    ## 105               Changing the Narrative: Disrupting Assumptions through Dialog & Self-Awareness
    ## 106               Spurring Social Justice in Public Health: Creating Models for Practical Change
    ## 107                                                   Healthcare Leadership: Leading with Equity
    ## 108            Public Health Communications:  Take this course. Communicate clearly. Save lives.
    ## 109                                                                      Economics of Prevention
    ## 110                                                         Empirical Analysis for Health Policy
    ## 111                                                                        Health Care Marketing
    ## 112                                                                        Health Care Marketing
    ## 113                        Management Challenges in the Evolving Healthcare and Insurance System
    ## 114                               Healthcare Ethics: Development and Management of Public Policy
    ## 115                                               Post-Acute and Long Term Care Delivery Systems
    ## 116                                                     Managing Human Capital in Health Systems
    ## 117                                                    Analytics & Managerial Decision Making II
    ## 118                                                         Health Policy and Political Analysis
    ## 119                                                         Health Policy and Political Analysis
    ## 120                                                              Healthcare Financial Management
    ## 121                                                               Health Innovation & Technology
    ## 122                                                               Environmental Health Economics
    ## 123                                                                            Public Health Law
    ## 124                                                          Public Health Concepts for Managers
    ## 125                                                                  Competitive Health Strategy
    ## 126                                                                  Competitive Health Strategy
    ## 127                                                       Managerial and Organizational Behavior
    ## 128                                                                         Strategic Management
    ## 129                                   Decision Analysis for Clinical and Public Health Practices
    ## 130                                                 Pivot: Professional Strategic Communications
    ## 131                                                 Pivot: Professional Strategic Communications
    ## 132                                   The Business of Healthcare: Reform and Contemporary Issues
    ## 133                                     Applied Methods in Health Services and Outcomes Research
    ## 134                                                               Advanced Health Policy Seminar
    ## 135                                                           Strategic Investment in Healthcare
    ## 136                                                                 Addressing the Opioid Crisis
    ## 137                                   Emerging Markets in Health Care: Public Ends Private Means
    ## 138                   On the Road from Volume to Value: Understanding Healthcare Payment Systems
    ## 139                                                         Matriculation & Facilities F/T (PhD)
    ## 140                                                         Matriculation & Facilities P/T (PhD)
    ## 141                                                               Public Health Program Planning
    ## 142                                                      Seminar: Public Health Program Planning
    ## 143                                                      Seminar: Public Health Program Planning
    ## 144                                                      Seminar: Public Health Program Planning
    ## 145                                                      Seminar: Public Health Program Planning
    ## 146                                                      Seminar: Public Health Program Planning
    ## 147                                                             Health and Human Rights Advocacy
    ## 148                                  The Public Health Impact of Sexually Transmitted Infections
    ## 149                                                   Public Health Aspects of Adolescent Health
    ## 150                                                          Research Design and Data Collection
    ## 151                                                 Protecting Children in Humanitarian Settings
    ## 152                                                                   Quantitative Data Analysis
    ## 153                                                                   Quantitative Data Analysis
    ## 154                                                                  Breakout sessions for P8617
    ## 155                                                                  Breakout sessions for P8617
    ## 156                                                                  Breakout sessions for P8617
    ## 157                                                                  Breakout sessions for P8617
    ## 158                              Outbreak Preparedness and Response in Resource-Limited Settings
    ## 159                                                           Evidence to Action in Child Health
    ## 160 Realizing Global LGBTI Health and Human Rights:  Activism, Advocacy, and Humanitarian Action
    ## 161                         Policy on Illicit Drugs: Public Health and Human Rights Perspectives
    ## 162                                                                    Qualitative Data Analysis
    ## 163                                                                Methods in Program Evaluation
    ## 164                                                                Methods in Program Evaluation
    ## 165                                                               Environmental Justice Advocacy
    ## 166                                                    Food and Nutrition in Complex Emergencies
    ## 167                                                                     Malaria Program Planning
    ## 168                                       Adverse Childhood Experiences and Trauma Informed Care
    ## 169                                             Global Sexual and Reproductive Health and Rights
    ## 170                                               Training of Trainers of Public Health Programs
    ## 171                                      Sexual and Reproductive Health in Humanitarian Settings
    ## 172                                                 Investigative Methods in Complex Emergencies
    ## 173                                                 Investigative Methods in Complex Emergencies
    ## 174                                                                            Beyond Motherhood
    ## 175                                Abortion in the United States: Politics, Policy and Provision
    ## 176                                    Psychosocial and Mental Health Issues in Forced Migration
    ## 177                                        Demography and Public Health: Understanding to Action
    ## 178                                     The Protection of Human Rights in the Contemporary World
    ## 179                                               Public Health Advocacy for Reproductive Health
    ## 180                          Capstone Paper-Heilbrunn Department of Population and Family Health
    ## 181                   Applications of Implementation Science in Low- and Middle-Income Countries
    ## 182                                          Research Ethics and Responsible Conduct of Research
    ## 183                                                   DrPH Dissertation Proposal Writing Seminar
    ## 184                                                         Systems Thinking for Maternal Health
    ## 185                     Lessons (Un)Learned in Humanitarian Assistance: A Historical Perspective
    ## 186                     Lessons (Un)Learned in Humanitarian Assistance: A Historical Perspective
    ## 187                                                                           (Y)our Longer Life
    ## 188                                                               Public Health Practice Seminar
    ## 189                                            Seminar in Managerial and Organizational Behavior
    ## 190                                                              Seminar in Strategic Management
    ## 191                                                     Essentials of Teaching and Communication
    ## 192                                                                Introduction to Public Health
    ## 193                                                                       1 Residence Unit (PhD)
    ## 194                                                                     1/2 Residence Unit (PhD)
    ## 195                                                    Doctoral Research Registration F/T (DrPH)
    ## 196                                                    Doctoral Research Registration P/T (DrPH)
    ## 197                                             Health Promotion: Theory, Research, and Practice
    ## 198                                             Health Promotion: Theory, Research, and Practice
    ## 199                                         Confronting Obesity: Society, Structures, and Policy
    ## 200                                                                Community Engagement Practice
    ## 201                                              Digital Storytelling: Why Public Health Matters
    ## 202                                                          Data Visualization and Storytelling
    ## 203                                          Poisoned Worlds: Corporate Behavior & Public Health
    ## 204                                                                Evaluation of Health Programs
    ## 205                                                                          SMS Master's Thesis
    ## 206                                       Seminar in Sexuality, Gender, Health, and Human Rights
    ## 207                                                       Structural Approaches to Global Health
    ## 208                                                   Social and Economic Determinants of Health
    ## 209                                                   Social and Economic Determinants of Health
    ## 210                                                                      Ethics of Public Health
    ## 211                                                         Chronic Disease and Community Health
    ## 212                                      Designing Needs and Assets Assessments in Public Health
    ## 213                                                       Community Based Participatory Research
    ## 214                                                        Designing Public Health Interventions
    ## 215                                                        Designing Public Health Interventions
    ## 216                                                                 Qualitative Research Methods
    ## 217                                                                 Qualitative Research Methods
    ## 218                                                                 Qualitative Research Methods
    ## 219                                                                 Advanced Intervention Design
    ## 220                                                Contemporary Debates in Sociomedical Sciences
    ## 221                                                     Dissemination and Implementation Science
    ## 222                                              Society, Health Equity and Health Communication
    ## 223                                                                         New Media and Health
    ## 224                                         Quantitative Research Design for the Social Sciences
    ## 225                                         Quantitative Research Design for the Social Sciences
    ## 226                                         Quantitative Research Design for the Social Sciences
    ## 227                                             Seminar in Research and Professional Development
    ## 228                                                              Seminar in Health Communication
    ## 229                                                              Seminar in Health Communication
    ## 230                                                     Communicating Health Risks to the Public
    ## 231                               The Global Menstrual Movement: Understanding Policy & Practice
    ## 232                                                          Systematic Review and Meta-Analysis
    ## 233                                                                 Analysis of Categorical Data
    ## 234                                                  Applied Environmental Public Health Science
    ## 235                               Principles of Epidemiology III: Applied Epidemiologic Analysis
    ## 236                                                             Master's Essay in Epidemiology I
    ## 237                                                            Master's Essay in Epidemiology II
    ## 238                                           Faculty-Fellow Seminar in Psychiatric Epidemiology
    ## 239                                                                 Analysis of Large Scale Data
    ## 240                                                              Governance, Health Law & Ethics
    ## 241                                                                        Health Care Marketing
    ## 242                                                    Analytics & Managerial Decision Making II
    ## 243                                                              Healthcare Financial Management
    ## 244                                                               Health Innovation & Technology
    ## 245                                                      Applied Analysis of Complex Survey Data
    ## 246                                                                  Competitive Health Strategy
    ## 247                                                         Matriculation & Facilities F/T (PhD)
    ## 248                                                         Matriculation & Facilities P/T (PhD)
    ## 249                                                                       1 Residence Unit (PhD)
    ## 250                                                                     1/2 Residence Unit (PhD)
    ## 251                                                    Doctoral Research Registration F/T (DrPH)
    ## 252                                                    Doctoral Research Registration P/T (DrPH)
    ## 253                                                       Introduction to Biostatistical Methods
    ## 254                                                               Statistical Computing with SAS
    ## 255                                                                         Applied Regression I
    ## 256                                      Patient Oriented Research Career Development Colloquium
    ## 257                                                                                  Probability
    ## 258                                                                               Data Science I
    ## 259                                                      Introduction to Mathematical Statistics
    ## 260                                                                            Survival Analysis
    ## 261                                                                        Applied Regression II
    ## 262                      Advanced Statistical and Computational Methods in Genetics and Genomics
    ## 263                                                                 Analysis of Categorical Data
    ## 264                                                     Statistical Methods for Causal Inference
    ## 265                                                     Graphical Models for Complex Health Data
    ## 266                                                                     Biostatistical Methods I
    ## 267                                                   Introduction to Randomized Clinical Trials
    ## 268                                                                   Clinical Trial Methodology
    ## 269                                                                    Human Population Genetics
    ## 270                                                                Analysis of Longitudinal Data
    ## 271                       Relational Databases and SQL Programming for Research and Data Science
    ## 272                       Relational Databases and SQL Programming for Research and Data Science
    ## 273                                                             Probability for Biostatisticians
    ## 274                                                            Theory of Statistical Inference I
    ## 275                                                                        Asymptotic Statistics
    ## 276                                             Topics in Statistical Learning and Data Mining I
    ## 277                                                             Advanced Biostatistical Method I
    ## 278                                   Master's Essay in Biostatistics: Patient Oriented Research
    ## 279                  Statistical Practices and Research for Interdisciplinary Science (SPRIS) II
    ## 280                                                                Environmental Health Sciences
    ## 281                                            Atmospheric and Climate Science for Public Health
    ## 282                                                       Occupational and Environmental Hygiene
    ## 283                                                                       Molecular Epidemiology
    ## 284                                                                         Molecular Toxicology
    ## 285                                                                     Principles of Toxicology
    ## 286                                                   Frameworks for Environmental Health Policy
    ## 287                                                      Science Basic to Public Health Practice
    ## 288                                                           Biomarkers in Environmental Health
    ## 289                                               Risk Assessment, Communication, and Management
    ## 290                                                                            Public Health GIS
    ## 291                                                                            Public Health GIS
    ## 292                                                  Applied Environmental Public Health Science
    ## 293                                                                    Master's Essay Research I
    ## 294                                                Journal Club in Environmental Health Sciences
    ## 295                                                                            Doctoral Research
    ## 296                                                                 Principles of Epidemiology I
    ## 297                               Principles of Epidemiology III: Applied Epidemiologic Analysis
    ## 298                                                                     Psychiatric Epidemiology
    ## 299                                                                          Cancer Epidemiology
    ## 300                                                                         Spatial Epidemiology
    ## 301                       Introduction to Clinical Psychiatry for Epidemiology and Public Health
    ## 302                                        Current Work in Injury Control and Prevention Seminar
    ## 303                                                                   Public Health Surveillance
    ## 304                                                                   Environmental Epidemiology
    ## 305                                                               Optimization for Interventions
    ## 306                                                                        Clinical Epidemiology
    ## 307                                                                 Epidemiology of HIV and AIDS
    ## 308                                                                      Epidemiology of Malaria
    ## 309                                                    Epidemiology of Drug and Alcohol Problems
    ## 310                                                                          Social Epidemiology
    ## 311                                                                 Emerging Infectious Diseases
    ## 312                                                      Epidemiology of Chronic Disease Seminar
    ## 313                                       Epidemiologic Methods in Global Mental Health Research
    ## 314                                                     Seminar in Social Determinants of Health
    ## 315                                                                      Lifecourse Epidemiology
    ## 316                                                                      History of Epidemiology
    ## 317                                              Biology and Pathophysiology for Epidemiologists
    ## 318                                                             Master's Essay in Epidemiology I
    ## 319                                                             Master's Essay in Epidemiology I
    ## 320                                                            Master's Essay in Epidemiology II
    ## 321                                           Faculty-Fellow Seminar in Psychiatric Epidemiology
    ## 322                                                 Epidemiology V: Concepts in Causal Inference
    ## 323                                                                     Tutorial in Epidemiology
    ## 324                                                                     Tutorial in Epidemiology
    ## 325                                                             Introduction to Health Economics
    ## 326                                                       Critical Issues in Hospital Management
    ## 327                                                          Healthcare Accounting and Budgeting
    ## 328                                                          Healthcare Accounting and Budgeting
    ## 329                                        Issues and Approaches in Health Policy and Management
    ## 330                                        Issues and Approaches in Health Policy and Management
    ## 331                                                   Analytics and Managerial Decision-Making I
    ## 332                                                                        SAS Insights for CEOR
    ## 333                                        Law & Policy: Mass Incarceration in the United States
    ## 334                                                                Case Competition Fundamentals
    ## 335                                                                      Economics of Prevention
    ## 336                                                                 Analysis of Large Scale Data
    ## 337                                                                 Analysis of Large Scale Data
    ## 338                                                      Strategic Issues in Health Care Quality
    ## 339                                                      Strategic Issues in Health Care Quality
    ## 340                                      Healthcare Services for Vulnerable, At-Risk Populations
    ## 341                                                              Governance, Health Law & Ethics
    ## 342                                                              Governance, Health Law & Ethics
    ## 343                        Management Challenges in the Evolving Healthcare and Insurance System
    ## 344               Advanced Healthcare Finance: Valuation and Investment of Healthcare Businesses
    ## 345               Advanced Healthcare Finance: Valuation and Investment of Healthcare Businesses
    ## 346                                                     Managing Human Capital in Health Systems
    ## 347                                                         Health Policy and Political Analysis
    ## 348                    Is Bigger Better? An Analysis of Consolidation in the Healthcare Industry
    ## 349                                                                            Public Health Law
    ## 350                                                                            Public Health Law
    ## 351                                                Strategic Planning for Health Insurance Plans
    ## 352                                                       Managerial and Organizational Behavior
    ## 353                                                       Managerial and Organizational Behavior
    ## 354                                                                         Strategic Management
    ## 355                                                             Comparative Strategic Management
    ## 356                                                           Managing Public Health Non-Profits
    ## 357                                Landscape of Healthcare Quality: Perspectives and Initiatives
    ## 358                                                     Entrepreneurship for Healthcare Managers
    ## 359                                                 Pivot: Professional Strategic Communications
    ## 360                                                  Cross-National Health Policy and Management
    ## 361                                             Transforming the Delivery of Healthcare Services
    ## 362                                                          Computing in Context: Health Policy
    ## 363                                     The Politics and Policies of Humanitarian Aid and Health
    ## 364                                                         Matriculation & Facilities F/T (PhD)
    ## 365                                                         Matriculation & Facilities P/T (PhD)
    ## 366                                                              Pedagogy of Sexuality Education
    ## 367                                                             Health and Human Rights Advocacy
    ## 368                                                             Health and Human Rights Advocacy
    ## 369                                                              Current Issues in Sexual Health
    ## 370                                                                   Quantitative Data Analysis
    ## 371                                                    Chronic Diseases in Humanitarian Settings
    ## 372                                                                Issues in School-Based Health
    ## 373                                                                    Qualitative Data Analysis
    ## 374                                              Digital Technology & Health Across The Lifespan
    ## 375                                                 Gender-Based Violence in Complex Emergencies
    ## 376                                                                Methods in Program Evaluation
    ## 377                                                               Environmental Justice Advocacy
    ## 378                                                  Water and Sanitation in Complex Emergencies
    ## 379                                                                     Malaria Program Planning
    ## 380                                                                             Immigrant Health
    ## 381      Planning, Managing & Communicating For Evidence-Based Public Health Research & Programs
    ## 382                                                          Child Development & Health Programs
    ## 383                                    Epidemiological Methods for Measuring Human Rights Abuses
    ## 384                                        Demography and Public Health: Understanding to Action
    ## 385                                                        Public Health and Humanitarian Action
    ## 386                                                           Forced Migration Practicum Seminar
    ## 387                          Capstone Paper-Heilbrunn Department of Population and Family Health
    ## 388                                      Key Issues in Adolescent Sexual and Reproductive Health
    ## 389                                      Interdisciplinary Seminar in Population & Family Health
    ## 390                                      Environment, Health, and Justice: Concepts and Practice
    ## 391                                                               Public Health Practice Seminar
    ## 392                                                                Introduction to Public Health
    ## 393                                              Data Science and Health Equity in New York City
    ## 394                                                                       1 Residence Unit (PhD)
    ## 395                                                                     1/2 Residence Unit (PhD)
    ## 396                                                    Doctoral Research Registration F/T (DrPH)
    ## 397                                                    Doctoral Research Registration P/T (DrPH)
    ## 398                 Vital Records and Vital Statistics: The Backbone of Public Health in America
    ## 399                                                                         Health Communication
    ## 400                                                                              Health Advocacy
    ## 401                                                                Evaluation of Health Programs
    ## 402                                                                Evaluation of Health Programs
    ## 403                                                                          SMS Thesis Proposal
    ## 404                                            Theories and Perspectives on Sexuality and Health
    ## 405                                                   Social and Economic Determinants of Health
    ## 406                                                                              Race and Health
    ## 407                                                         Introduction to Medical Anthropology
    ## 408                                                                    Advancing Health Literacy
    ## 409                                                                 Qualitative Research Methods
    ## 410                                                                 Qualitative Research Methods
    ## 411                                         Quantitative Research Design for the Social Sciences
    ## 412                                             Seminar in Research and Professional Development
    ##     season
    ## 1   Spring
    ## 2   Spring
    ## 3   Spring
    ## 4   Spring
    ## 5   Spring
    ## 6   Spring
    ## 7   Spring
    ## 8   Spring
    ## 9   Spring
    ## 10  Spring
    ## 11  Spring
    ## 12  Spring
    ## 13  Spring
    ## 14  Spring
    ## 15  Spring
    ## 16  Spring
    ## 17  Spring
    ## 18  Spring
    ## 19  Spring
    ## 20  Spring
    ## 21  Spring
    ## 22  Spring
    ## 23  Spring
    ## 24  Spring
    ## 25  Spring
    ## 26  Spring
    ## 27  Spring
    ## 28  Spring
    ## 29  Spring
    ## 30  Spring
    ## 31  Spring
    ## 32  Spring
    ## 33  Spring
    ## 34  Spring
    ## 35  Spring
    ## 36  Spring
    ## 37  Spring
    ## 38  Spring
    ## 39  Spring
    ## 40  Spring
    ## 41  Spring
    ## 42  Spring
    ## 43  Spring
    ## 44  Spring
    ## 45  Spring
    ## 46  Spring
    ## 47  Spring
    ## 48  Spring
    ## 49  Spring
    ## 50  Spring
    ## 51  Spring
    ## 52  Spring
    ## 53  Spring
    ## 54  Spring
    ## 55  Spring
    ## 56  Spring
    ## 57  Spring
    ## 58  Spring
    ## 59  Spring
    ## 60  Spring
    ## 61  Spring
    ## 62  Spring
    ## 63  Spring
    ## 64  Spring
    ## 65  Spring
    ## 66  Spring
    ## 67  Spring
    ## 68  Spring
    ## 69  Spring
    ## 70  Spring
    ## 71  Spring
    ## 72  Spring
    ## 73  Spring
    ## 74  Spring
    ## 75  Spring
    ## 76  Spring
    ## 77  Spring
    ## 78  Spring
    ## 79  Spring
    ## 80  Spring
    ## 81  Spring
    ## 82  Spring
    ## 83  Spring
    ## 84  Spring
    ## 85  Spring
    ## 86  Spring
    ## 87  Spring
    ## 88  Spring
    ## 89  Spring
    ## 90  Spring
    ## 91  Spring
    ## 92  Spring
    ## 93  Spring
    ## 94  Spring
    ## 95  Spring
    ## 96  Spring
    ## 97  Spring
    ## 98  Spring
    ## 99  Spring
    ## 100 Spring
    ## 101 Spring
    ## 102 Spring
    ## 103 Spring
    ## 104 Spring
    ## 105 Spring
    ## 106 Spring
    ## 107 Spring
    ## 108 Spring
    ## 109 Spring
    ## 110 Spring
    ## 111 Spring
    ## 112 Spring
    ## 113 Spring
    ## 114 Spring
    ## 115 Spring
    ## 116 Spring
    ## 117 Spring
    ## 118 Spring
    ## 119 Spring
    ## 120 Spring
    ## 121 Spring
    ## 122 Spring
    ## 123 Spring
    ## 124 Spring
    ## 125 Spring
    ## 126 Spring
    ## 127 Spring
    ## 128 Spring
    ## 129 Spring
    ## 130 Spring
    ## 131 Spring
    ## 132 Spring
    ## 133 Spring
    ## 134 Spring
    ## 135 Spring
    ## 136 Spring
    ## 137 Spring
    ## 138 Spring
    ## 139 Spring
    ## 140 Spring
    ## 141 Spring
    ## 142 Spring
    ## 143 Spring
    ## 144 Spring
    ## 145 Spring
    ## 146 Spring
    ## 147 Spring
    ## 148 Spring
    ## 149 Spring
    ## 150 Spring
    ## 151 Spring
    ## 152 Spring
    ## 153 Spring
    ## 154 Spring
    ## 155 Spring
    ## 156 Spring
    ## 157 Spring
    ## 158 Spring
    ## 159 Spring
    ## 160 Spring
    ## 161 Spring
    ## 162 Spring
    ## 163 Spring
    ## 164 Spring
    ## 165 Spring
    ## 166 Spring
    ## 167 Spring
    ## 168 Spring
    ## 169 Spring
    ## 170 Spring
    ## 171 Spring
    ## 172 Spring
    ## 173 Spring
    ## 174 Spring
    ## 175 Spring
    ## 176 Spring
    ## 177 Spring
    ## 178 Spring
    ## 179 Spring
    ## 180 Spring
    ## 181 Spring
    ## 182 Spring
    ## 183 Spring
    ## 184 Spring
    ## 185 Spring
    ## 186 Spring
    ## 187 Spring
    ## 188 Spring
    ## 189 Spring
    ## 190 Spring
    ## 191 Spring
    ## 192 Spring
    ## 193 Spring
    ## 194 Spring
    ## 195 Spring
    ## 196 Spring
    ## 197 Spring
    ## 198 Spring
    ## 199 Spring
    ## 200 Spring
    ## 201 Spring
    ## 202 Spring
    ## 203 Spring
    ## 204 Spring
    ## 205 Spring
    ## 206 Spring
    ## 207 Spring
    ## 208 Spring
    ## 209 Spring
    ## 210 Spring
    ## 211 Spring
    ## 212 Spring
    ## 213 Spring
    ## 214 Spring
    ## 215 Spring
    ## 216 Spring
    ## 217 Spring
    ## 218 Spring
    ## 219 Spring
    ## 220 Spring
    ## 221 Spring
    ## 222 Spring
    ## 223 Spring
    ## 224 Spring
    ## 225 Spring
    ## 226 Spring
    ## 227 Spring
    ## 228 Spring
    ## 229 Spring
    ## 230 Spring
    ## 231 Spring
    ## 232 Summer
    ## 233 Summer
    ## 234 Summer
    ## 235 Summer
    ## 236 Summer
    ## 237 Summer
    ## 238 Summer
    ## 239 Summer
    ## 240 Summer
    ## 241 Summer
    ## 242 Summer
    ## 243 Summer
    ## 244 Summer
    ## 245 Summer
    ## 246 Summer
    ## 247 Summer
    ## 248 Summer
    ## 249 Summer
    ## 250 Summer
    ## 251 Summer
    ## 252 Summer
    ## 253   Fall
    ## 254   Fall
    ## 255   Fall
    ## 256   Fall
    ## 257   Fall
    ## 258   Fall
    ## 259   Fall
    ## 260   Fall
    ## 261   Fall
    ## 262   Fall
    ## 263   Fall
    ## 264   Fall
    ## 265   Fall
    ## 266   Fall
    ## 267   Fall
    ## 268   Fall
    ## 269   Fall
    ## 270   Fall
    ## 271   Fall
    ## 272   Fall
    ## 273   Fall
    ## 274   Fall
    ## 275   Fall
    ## 276   Fall
    ## 277   Fall
    ## 278   Fall
    ## 279   Fall
    ## 280   Fall
    ## 281   Fall
    ## 282   Fall
    ## 283   Fall
    ## 284   Fall
    ## 285   Fall
    ## 286   Fall
    ## 287   Fall
    ## 288   Fall
    ## 289   Fall
    ## 290   Fall
    ## 291   Fall
    ## 292   Fall
    ## 293   Fall
    ## 294   Fall
    ## 295   Fall
    ## 296   Fall
    ## 297   Fall
    ## 298   Fall
    ## 299   Fall
    ## 300   Fall
    ## 301   Fall
    ## 302   Fall
    ## 303   Fall
    ## 304   Fall
    ## 305   Fall
    ## 306   Fall
    ## 307   Fall
    ## 308   Fall
    ## 309   Fall
    ## 310   Fall
    ## 311   Fall
    ## 312   Fall
    ## 313   Fall
    ## 314   Fall
    ## 315   Fall
    ## 316   Fall
    ## 317   Fall
    ## 318   Fall
    ## 319   Fall
    ## 320   Fall
    ## 321   Fall
    ## 322   Fall
    ## 323   Fall
    ## 324   Fall
    ## 325   Fall
    ## 326   Fall
    ## 327   Fall
    ## 328   Fall
    ## 329   Fall
    ## 330   Fall
    ## 331   Fall
    ## 332   Fall
    ## 333   Fall
    ## 334   Fall
    ## 335   Fall
    ## 336   Fall
    ## 337   Fall
    ## 338   Fall
    ## 339   Fall
    ## 340   Fall
    ## 341   Fall
    ## 342   Fall
    ## 343   Fall
    ## 344   Fall
    ## 345   Fall
    ## 346   Fall
    ## 347   Fall
    ## 348   Fall
    ## 349   Fall
    ## 350   Fall
    ## 351   Fall
    ## 352   Fall
    ## 353   Fall
    ## 354   Fall
    ## 355   Fall
    ## 356   Fall
    ## 357   Fall
    ## 358   Fall
    ## 359   Fall
    ## 360   Fall
    ## 361   Fall
    ## 362   Fall
    ## 363   Fall
    ## 364   Fall
    ## 365   Fall
    ## 366   Fall
    ## 367   Fall
    ## 368   Fall
    ## 369   Fall
    ## 370   Fall
    ## 371   Fall
    ## 372   Fall
    ## 373   Fall
    ## 374   Fall
    ## 375   Fall
    ## 376   Fall
    ## 377   Fall
    ## 378   Fall
    ## 379   Fall
    ## 380   Fall
    ## 381   Fall
    ## 382   Fall
    ## 383   Fall
    ## 384   Fall
    ## 385   Fall
    ## 386   Fall
    ## 387   Fall
    ## 388   Fall
    ## 389   Fall
    ## 390   Fall
    ## 391   Fall
    ## 392   Fall
    ## 393   Fall
    ## 394   Fall
    ## 395   Fall
    ## 396   Fall
    ## 397   Fall
    ## 398   Fall
    ## 399   Fall
    ## 400   Fall
    ## 401   Fall
    ## 402   Fall
    ## 403   Fall
    ## 404   Fall
    ## 405   Fall
    ## 406   Fall
    ## 407   Fall
    ## 408   Fall
    ## 409   Fall
    ## 410   Fall
    ## 411   Fall
    ## 412   Fall

# Save course information to JSON

    # add some attribute for website development

    res = res %>% mutate(
      rating = 0.0,
      numsReview = 0
    )

    toJSON(res)

    ## [{"dept":"BIST","code":"89260","name":"Building Interdisciplinary Research Models","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P6110","name":"Statistical Computing with SAS","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P6170","name":"New Drug Development: A Regulatory Overview","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8100","name":"Applied Regression I","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8101","name":"Introduction to Health Data Science","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8103","name":"Patient Oriented Research Career Development Colloquium","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8106","name":"Data Science II","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8109","name":"Statistical Inference","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8110","name":"Applied Regression II","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8120","name":"Analysis of Categorical Data","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8131","name":"Biostatistical Methods II","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8139","name":"Statistical Genetic Modeling","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8140","name":"Introduction to Randomized Clinical Trials","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8144","name":"Pharmaceutical Statistics","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8158","name":"Latent Variable and Structural Equation Modeling for Health Sciences","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8160","name":"Topics in Advanced Statistical Computing","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8170","name":"Integrative Capstone Experience","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8180","name":"Relational Databases and SQL Programming for Research and Data Science","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8180","name":"Relational Databases and SQL Programming for Research and Data Science","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8185","name":"Capstone Consulting Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8185","name":"Capstone Consulting Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8185","name":"Capstone Consulting Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8185","name":"Capstone Consulting Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P9110","name":"Theory of Statistical Inference II","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P9160","name":"Master's Essay in Biostatistics: Clinical Research Methods","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P9185","name":"Statistical Practices and Research for Interdisciplinary Sciences (SPRIS)","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6320","name":"Fundamentals of Toxicology for Health-related Disciplines","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6340","name":"Sustainable Development and Global Environmental Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6360","name":"Analysis of Environmental Health Data","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6370","name":"Journal Club in Molecular Epidemiology and Toxicology","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6385","name":"Principles of Genetics & the Environment","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8303","name":"Food Security, Plant Biology, Climate Change, and Public Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8304","name":"Public Health Impacts of Climate Change","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8313","name":"Toxicokinetics","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8320","name":"Applied Environmental and Industrial Hygiene","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8321","name":"Introduction to Data Science for Environmental Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8322","name":"Environmental Determinants of Human Health II","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8323","name":"Laboratory Methods in Environmental Health Sciences","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8324","name":"Climate and Health Weekly Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8327","name":"Environmental Justice Health and Policy Analysis for Environmental Health Professionals","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8329","name":"Water, Sanitation, and Human Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8332","name":"Advanced Analytic Methods in EHS","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8334","name":"Computational Toxicology","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8371","name":"Public Health GIS","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8371","name":"Public Health GIS","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8377","name":"EHS Policy Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9300","name":"Capstone: Critical Thinking and Analysis in Environmental Health Sciences","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9361","name":"Master's Essay Research I","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9362","name":"Master's Essay Research II","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9370","name":"Journal Club in Environmental Health Sciences","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9380","name":"Advanced GIS and Spatial Analysis","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9395","name":"Doctoral Research","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P6811","name":"Priorities in Global Public Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P6813","name":"Priorities in Global Mental Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8406","name":"Epidemiology of Infectious Diseases","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8415","name":"Chronic Disease Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8417","name":"Selected Problems of Measurement in Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8429","name":"Current Work in Injury Control and Prevention Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8440","name":"Epidemiology of Cardiovascular Diseases","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8442","name":"Epidemiology and Control of Tuberculosis","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8443","name":"Microbiome and Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8445","name":"Current and Emerging Issues in Injury and Violence","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8451","name":"Introduction to Machine Learning for Epidemiology and Public Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8476","name":"Epidemiology of Chronic Disease Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8477","name":"Epi Modeling for Infectious Diseases","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8481","name":"Seminar in Social Determinants of Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8483","name":"Applications of Epidemiologic Research Methods","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8490","name":"Tutorial in Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8490","name":"Tutorial in Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8499","name":"Field Methods in Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8820","name":"Advanced Topics in Global Health","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8881","name":"Global Health Pre-Practicum Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9400","name":"Epidemiology IV: Critical Thinking in Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9415","name":"Epidemiologic Challenges in Substance Use Research","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9419","name":"Master's Essay in Epidemiology I","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9420","name":"Master's Essay in Epidemiology II","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9420","name":"Master's Essay in Epidemiology II","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9440","name":"Applying the Causal Roadmap to Single Timepoint and Longitudinal Data","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9446","name":"Faculty-Fellow Seminar in Psychiatric Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9487","name":"Epi VI: Advanced Techniques in Epi Methods","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9489","name":"Application of Epi Research Methods II","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9490","name":"Tutorial in Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9493","name":"Neurological Epidemiology","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9494","name":"Publications, Presentations, and Scientific Writing","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6503","name":"Introduction to Health Economics","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6508","name":"Health Policy and the Political System","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6513","name":"Critical Issues in Hospital Management","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6520","name":"Healthcare in the Arts","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6529","name":"Healthcare Accounting and Budgeting","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6529","name":"Healthcare Accounting and Budgeting","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6545","name":"Analytics and Managerial Decision-Making I","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8202","name":"Behavioral Policy & Public Health","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8204","name":"Strategy for Health Policy","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8205","name":"Venture Capital: Funding Innovation in Healthcare","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8210","name":"The Untold Stories in US Health Policy History","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8211","name":"Race and Public Policy: Interpreting Sub-Systemic Racism","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8212","name":"Digital Health Revolution","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8213","name":"Health Claims Data Analytics: Real-World Strategy","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8215","name":"Case Competition Fundamentals","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8216","name":"Changing the Narrative: Disrupting Assumptions through Dialog & Self-Awareness","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8217","name":"Spurring Social Justice in Public Health: Creating Models for Practical Change","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8218","name":"Healthcare Leadership: Leading with Equity","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8219","name":"Public Health Communications:  Take this course. Communicate clearly. Save lives.","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8220","name":"Economics of Prevention","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8502","name":"Empirical Analysis for Health Policy","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8515","name":"Health Care Marketing","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8515","name":"Health Care Marketing","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8517","name":"Management Challenges in the Evolving Healthcare and Insurance System","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8520","name":"Healthcare Ethics: Development and Management of Public Policy","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8522","name":"Post-Acute and Long Term Care Delivery Systems","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8527","name":"Managing Human Capital in Health Systems","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8529","name":"Analytics & Managerial Decision Making II","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8531","name":"Health Policy and Political Analysis","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8531","name":"Health Policy and Political Analysis","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8533","name":"Healthcare Financial Management","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8536","name":"Health Innovation & Technology","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8544","name":"Environmental Health Economics","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8548","name":"Public Health Law","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8555","name":"Public Health Concepts for Managers","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8556","name":"Competitive Health Strategy","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8556","name":"Competitive Health Strategy","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8557","name":"Managerial and Organizational Behavior","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8558","name":"Strategic Management","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8568","name":"Decision Analysis for Clinical and Public Health Practices","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8571","name":"Pivot: Professional Strategic Communications","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8572","name":"Pivot: Professional Strategic Communications","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8585","name":"The Business of Healthcare: Reform and Contemporary Issues","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8586","name":"Applied Methods in Health Services and Outcomes Research","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8587","name":"Advanced Health Policy Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8593","name":"Strategic Investment in Healthcare","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8594","name":"Addressing the Opioid Crisis","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8595","name":"Emerging Markets in Health Care: Public Ends Private Means","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8598","name":"On the Road from Volume to Value: Understanding Healthcare Payment Systems","season":"Spring","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0003","name":"Matriculation & Facilities F/T (PhD)","season":"Spring","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0004","name":"Matriculation & Facilities P/T (PhD)","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8601","name":"Public Health Program Planning","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8607","name":"Health and Human Rights Advocacy","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8608","name":"The Public Health Impact of Sexually Transmitted Infections","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8616","name":"Public Health Aspects of Adolescent Health","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8617","name":"Research Design and Data Collection","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8620","name":"Protecting Children in Humanitarian Settings","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8623","name":"Quantitative Data Analysis","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8623","name":"Quantitative Data Analysis","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8624","name":"Breakout sessions for P8617","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8624","name":"Breakout sessions for P8617","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8624","name":"Breakout sessions for P8617","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8624","name":"Breakout sessions for P8617","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8625","name":"Outbreak Preparedness and Response in Resource-Limited Settings","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8628","name":"Evidence to Action in Child Health","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8635","name":"Realizing Global LGBTI Health and Human Rights:  Activism, Advocacy, and Humanitarian Action","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8636","name":"Policy on Illicit Drugs: Public Health and Human Rights Perspectives","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8637","name":"Qualitative Data Analysis","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8640","name":"Methods in Program Evaluation","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8640","name":"Methods in Program Evaluation","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8645","name":"Environmental Justice Advocacy","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8648","name":"Food and Nutrition in Complex Emergencies","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8654","name":"Malaria Program Planning","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8657","name":"Adverse Childhood Experiences and Trauma Informed Care","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8665","name":"Global Sexual and Reproductive Health and Rights","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8670","name":"Training of Trainers of Public Health Programs","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8673","name":"Sexual and Reproductive Health in Humanitarian Settings","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8679","name":"Investigative Methods in Complex Emergencies","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8679","name":"Investigative Methods in Complex Emergencies","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8681","name":"Beyond Motherhood","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8682","name":"Abortion in the United States: Politics, Policy and Provision","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8683","name":"Psychosocial and Mental Health Issues in Forced Migration","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8684","name":"Demography and Public Health: Understanding to Action","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8686","name":"The Protection of Human Rights in the Contemporary World","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8691","name":"Public Health Advocacy for Reproductive Health","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8693","name":"Capstone Paper-Heilbrunn Department of Population and Family Health","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9620","name":"Applications of Implementation Science in Low- and Middle-Income Countries","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9630","name":"Research Ethics and Responsible Conduct of Research","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9651","name":"DrPH Dissertation Proposal Writing Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9675","name":"Systems Thinking for Maternal Health","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9691","name":"Lessons (Un)Learned in Humanitarian Assistance: A Historical Perspective","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9691","name":"Lessons (Un)Learned in Humanitarian Assistance: A Historical Perspective","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"GU4100","name":"(Y)our Longer Life","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"P8086","name":"Public Health Practice Seminar","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"P9040","name":"Seminar in Managerial and Organizational Behavior","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"P9050","name":"Seminar in Strategic Management","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"P9060","name":"Essentials of Teaching and Communication","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"UN3200","name":"Introduction to Public Health","season":"Spring","rating":0,"numsReview":0},{"dept":"RESI","code":"G0006","name":"1 Residence Unit (PhD)","season":"Spring","rating":0,"numsReview":0},{"dept":"RESI","code":"G0007","name":"1/2 Residence Unit (PhD)","season":"Spring","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0001","name":"Doctoral Research Registration F/T (DrPH)","season":"Spring","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0003","name":"Doctoral Research Registration P/T (DrPH)","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6728","name":"Health Promotion: Theory, Research, and Practice","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6728","name":"Health Promotion: Theory, Research, and Practice","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6750","name":"Confronting Obesity: Society, Structures, and Policy","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6760","name":"Community Engagement Practice","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6776","name":"Digital Storytelling: Why Public Health Matters","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6777","name":"Data Visualization and Storytelling","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6785","name":"Poisoned Worlds: Corporate Behavior & Public Health","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8705","name":"Evaluation of Health Programs","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8708","name":"SMS Master's Thesis","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8709","name":"Seminar in Sexuality, Gender, Health, and Human Rights","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8741","name":"Structural Approaches to Global Health","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8745","name":"Social and Economic Determinants of Health","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8745","name":"Social and Economic Determinants of Health","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8747","name":"Ethics of Public Health","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8762","name":"Chronic Disease and Community Health","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8766","name":"Designing Needs and Assets Assessments in Public Health","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8771","name":"Community Based Participatory Research","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8772","name":"Designing Public Health Interventions","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8772","name":"Designing Public Health Interventions","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8787","name":"Advanced Intervention Design","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8789","name":"Contemporary Debates in Sociomedical Sciences","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8792","name":"Dissemination and Implementation Science","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8794","name":"Society, Health Equity and Health Communication","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8795","name":"New Media and Health","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8796","name":"Quantitative Research Design for the Social Sciences","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8796","name":"Quantitative Research Design for the Social Sciences","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8796","name":"Quantitative Research Design for the Social Sciences","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8798","name":"Seminar in Research and Professional Development","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8901","name":"Seminar in Health Communication","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8901","name":"Seminar in Health Communication","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8906","name":"Communicating Health Risks to the Public","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8908","name":"The Global Menstrual Movement: Understanding Policy & Practice","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8112","name":"Systematic Review and Meta-Analysis","season":"Summer","rating":0,"numsReview":0},{"dept":"BIST","code":"P8120","name":"Analysis of Categorical Data","season":"Summer","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9303","name":"Applied Environmental Public Health Science","season":"Summer","rating":0,"numsReview":0},{"dept":"EPID","code":"P8400","name":"Principles of Epidemiology III: Applied Epidemiologic Analysis","season":"Summer","rating":0,"numsReview":0},{"dept":"EPID","code":"P9419","name":"Master's Essay in Epidemiology I","season":"Summer","rating":0,"numsReview":0},{"dept":"EPID","code":"P9420","name":"Master's Essay in Epidemiology II","season":"Summer","rating":0,"numsReview":0},{"dept":"EPID","code":"P9446","name":"Faculty-Fellow Seminar in Psychiatric Epidemiology","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8508","name":"Analysis of Large Scale Data","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8514","name":"Governance, Health Law & Ethics","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8515","name":"Health Care Marketing","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8529","name":"Analytics & Managerial Decision Making II","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8533","name":"Healthcare Financial Management","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8536","name":"Health Innovation & Technology","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8545","name":"Applied Analysis of Complex Survey Data","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8556","name":"Competitive Health Strategy","season":"Summer","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0003","name":"Matriculation & Facilities F/T (PhD)","season":"Summer","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0004","name":"Matriculation & Facilities P/T (PhD)","season":"Summer","rating":0,"numsReview":0},{"dept":"RESI","code":"G0006","name":"1 Residence Unit (PhD)","season":"Summer","rating":0,"numsReview":0},{"dept":"RESI","code":"G0007","name":"1/2 Residence Unit (PhD)","season":"Summer","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0001","name":"Doctoral Research Registration F/T (DrPH)","season":"Summer","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0003","name":"Doctoral Research Registration P/T (DrPH)","season":"Summer","rating":0,"numsReview":0},{"dept":"BIST","code":"P6104","name":"Introduction to Biostatistical Methods","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P6110","name":"Statistical Computing with SAS","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8100","name":"Applied Regression I","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8103","name":"Patient Oriented Research Career Development Colloquium","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8104","name":"Probability","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8105","name":"Data Science I","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8107","name":"Introduction to Mathematical Statistics","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8108","name":"Survival Analysis","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8110","name":"Applied Regression II","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8119","name":"Advanced Statistical and Computational Methods in Genetics and Genomics","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8120","name":"Analysis of Categorical Data","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8122","name":"Statistical Methods for Causal Inference","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8124","name":"Graphical Models for Complex Health Data","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8130","name":"Biostatistical Methods I","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8140","name":"Introduction to Randomized Clinical Trials","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8142","name":"Clinical Trial Methodology","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8149","name":"Human Population Genetics","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8157","name":"Analysis of Longitudinal Data","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8180","name":"Relational Databases and SQL Programming for Research and Data Science","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8180","name":"Relational Databases and SQL Programming for Research and Data Science","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9104","name":"Probability for Biostatisticians","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9109","name":"Theory of Statistical Inference I","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9111","name":"Asymptotic Statistics","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9120","name":"Topics in Statistical Learning and Data Mining I","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9130","name":"Advanced Biostatistical Method I","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9165","name":"Master's Essay in Biostatistics: Patient Oriented Research","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9186","name":"Statistical Practices and Research for Interdisciplinary Science (SPRIS) II","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6300","name":"Environmental Health Sciences","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8301","name":"Atmospheric and Climate Science for Public Health","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8306","name":"Occupational and Environmental Hygiene","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8307","name":"Molecular Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8308","name":"Molecular Toxicology","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8312","name":"Principles of Toxicology","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8317","name":"Frameworks for Environmental Health Policy","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8318","name":"Science Basic to Public Health Practice","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8319","name":"Biomarkers in Environmental Health","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8325","name":"Risk Assessment, Communication, and Management","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8371","name":"Public Health GIS","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8371","name":"Public Health GIS","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9303","name":"Applied Environmental Public Health Science","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9361","name":"Master's Essay Research I","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9370","name":"Journal Club in Environmental Health Sciences","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9395","name":"Doctoral Research","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P6400","name":"Principles of Epidemiology I","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8400","name":"Principles of Epidemiology III: Applied Epidemiologic Analysis","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8410","name":"Psychiatric Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8414","name":"Cancer Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8416","name":"Spatial Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8421","name":"Introduction to Clinical Psychiatry for Epidemiology and Public Health","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8428","name":"Current Work in Injury Control and Prevention Seminar","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8430","name":"Public Health Surveillance","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8432","name":"Environmental Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8449","name":"Optimization for Interventions","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8450","name":"Clinical Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8465","name":"Epidemiology of HIV and AIDS","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8469","name":"Epidemiology of Malaria","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8470","name":"Epidemiology of Drug and Alcohol Problems","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8471","name":"Social Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8475","name":"Emerging Infectious Diseases","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8476","name":"Epidemiology of Chronic Disease Seminar","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8479","name":"Epidemiologic Methods in Global Mental Health Research","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8481","name":"Seminar in Social Determinants of Health","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8493","name":"Lifecourse Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9405","name":"History of Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9410","name":"Biology and Pathophysiology for Epidemiologists","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9419","name":"Master's Essay in Epidemiology I","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9419","name":"Master's Essay in Epidemiology I","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9420","name":"Master's Essay in Epidemiology II","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9446","name":"Faculty-Fellow Seminar in Psychiatric Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9485","name":"Epidemiology V: Concepts in Causal Inference","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9490","name":"Tutorial in Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9490","name":"Tutorial in Epidemiology","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6503","name":"Introduction to Health Economics","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6513","name":"Critical Issues in Hospital Management","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6529","name":"Healthcare Accounting and Budgeting","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6529","name":"Healthcare Accounting and Budgeting","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6530","name":"Issues and Approaches in Health Policy and Management","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6530","name":"Issues and Approaches in Health Policy and Management","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6545","name":"Analytics and Managerial Decision-Making I","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8201","name":"SAS Insights for CEOR","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8214","name":"Law & Policy: Mass Incarceration in the United States","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8215","name":"Case Competition Fundamentals","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8220","name":"Economics of Prevention","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8508","name":"Analysis of Large Scale Data","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8508","name":"Analysis of Large Scale Data","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8510","name":"Strategic Issues in Health Care Quality","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8510","name":"Strategic Issues in Health Care Quality","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8513","name":"Healthcare Services for Vulnerable, At-Risk Populations","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8514","name":"Governance, Health Law & Ethics","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8514","name":"Governance, Health Law & Ethics","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8517","name":"Management Challenges in the Evolving Healthcare and Insurance System","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8518","name":"Advanced Healthcare Finance: Valuation and Investment of Healthcare Businesses","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8518","name":"Advanced Healthcare Finance: Valuation and Investment of Healthcare Businesses","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8527","name":"Managing Human Capital in Health Systems","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8531","name":"Health Policy and Political Analysis","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8540","name":"Is Bigger Better? An Analysis of Consolidation in the Healthcare Industry","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8548","name":"Public Health Law","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8548","name":"Public Health Law","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8553","name":"Strategic Planning for Health Insurance Plans","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8557","name":"Managerial and Organizational Behavior","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8557","name":"Managerial and Organizational Behavior","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8558","name":"Strategic Management","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8559","name":"Comparative Strategic Management","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8561","name":"Managing Public Health Non-Profits","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8565","name":"Landscape of Healthcare Quality: Perspectives and Initiatives","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8566","name":"Entrepreneurship for Healthcare Managers","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8571","name":"Pivot: Professional Strategic Communications","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8575","name":"Cross-National Health Policy and Management","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8584","name":"Transforming the Delivery of Healthcare Services","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8596","name":"Computing in Context: Health Policy","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8597","name":"The Politics and Policies of Humanitarian Aid and Health","season":"Fall","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0003","name":"Matriculation & Facilities F/T (PhD)","season":"Fall","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0004","name":"Matriculation & Facilities P/T (PhD)","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8600","name":"Pedagogy of Sexuality Education","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8607","name":"Health and Human Rights Advocacy","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8607","name":"Health and Human Rights Advocacy","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8615","name":"Current Issues in Sexual Health","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8623","name":"Quantitative Data Analysis","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8630","name":"Chronic Diseases in Humanitarian Settings","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8633","name":"Issues in School-Based Health","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8637","name":"Qualitative Data Analysis","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8638","name":"Digital Technology & Health Across The Lifespan","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8639","name":"Gender-Based Violence in Complex Emergencies","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8640","name":"Methods in Program Evaluation","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8645","name":"Environmental Justice Advocacy","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8651","name":"Water and Sanitation in Complex Emergencies","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8654","name":"Malaria Program Planning","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8656","name":"Immigrant Health","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8661","name":"Planning, Managing & Communicating For Evidence-Based Public Health Research & Programs","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8662","name":"Child Development & Health Programs","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8676","name":"Epidemiological Methods for Measuring Human Rights Abuses","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8684","name":"Demography and Public Health: Understanding to Action","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8687","name":"Public Health and Humanitarian Action","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8688","name":"Forced Migration Practicum Seminar","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8693","name":"Capstone Paper-Heilbrunn Department of Population and Family Health","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8694","name":"Key Issues in Adolescent Sexual and Reproductive Health","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8698","name":"Interdisciplinary Seminar in Population & Family Health","season":"Fall","rating":0,"numsReview":0},{"dept":"PUBH","code":"GU4200","name":"Environment, Health, and Justice: Concepts and Practice","season":"Fall","rating":0,"numsReview":0},{"dept":"PUBH","code":"P8086","name":"Public Health Practice Seminar","season":"Fall","rating":0,"numsReview":0},{"dept":"PUBH","code":"UN3200","name":"Introduction to Public Health","season":"Fall","rating":0,"numsReview":0},{"dept":"PUBH","code":"UN3400","name":"Data Science and Health Equity in New York City","season":"Fall","rating":0,"numsReview":0},{"dept":"RESI","code":"G0006","name":"1 Residence Unit (PhD)","season":"Fall","rating":0,"numsReview":0},{"dept":"RESI","code":"G0007","name":"1/2 Residence Unit (PhD)","season":"Fall","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0001","name":"Doctoral Research Registration F/T (DrPH)","season":"Fall","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0003","name":"Doctoral Research Registration P/T (DrPH)","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6730","name":"Vital Records and Vital Statistics: The Backbone of Public Health in America","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6775","name":"Health Communication","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8703","name":"Health Advocacy","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8705","name":"Evaluation of Health Programs","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8705","name":"Evaluation of Health Programs","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8707","name":"SMS Thesis Proposal","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8736","name":"Theories and Perspectives on Sexuality and Health","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8745","name":"Social and Economic Determinants of Health","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8750","name":"Race and Health","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8755","name":"Introduction to Medical Anthropology","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8776","name":"Advancing Health Literacy","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8796","name":"Quantitative Research Design for the Social Sciences","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8798","name":"Seminar in Research and Professional Development","season":"Fall","rating":0,"numsReview":0}]
