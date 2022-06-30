Get All Mailman Courses
================
Haolin Zhong
2022/6/27

# Dependencies

``` r
library(xml2)
library(rvest)
library(tidyverse)
```

    ## -- Attaching packages --------------------------------------- tidyverse 1.3.1 --

    ## v ggplot2 3.3.5     v purrr   0.3.4
    ## v tibble  3.1.4     v dplyr   1.0.7
    ## v tidyr   1.1.3     v stringr 1.4.0
    ## v readr   2.0.1     v forcats 0.5.1

    ## -- Conflicts ------------------------------------------ tidyverse_conflicts() --
    ## x dplyr::filter()         masks stats::filter()
    ## x readr::guess_encoding() masks rvest::guess_encoding()
    ## x dplyr::lag()            masks stats::lag()

``` r
library(jsonlite)
```

    ## 
    ## 载入程辑包：'jsonlite'

    ## The following object is masked from 'package:purrr':
    ## 
    ##     flatten

# Retrieve Web Content

``` r
url = "https://www.sac-cu.org/MSPH/CourseDB/courselist.aspx"

webpage = read_html(url,encoding = 'utf-8')
```

# Alter semester in form to get courses offered in Spring, Summer, Autumn

## fall 2022

``` r
form = html_form(webpage)[[1]]
form = form %>% html_form_set(ddlSemester = "2022|3")

resp = html_form_submit(form)
```

    ## Submitting with 'btnSearch'

``` r
fallPage = read_html(resp)

fallPage %>% html_form()
```

    ## [[1]]
    ## <form> 'form1' (POST courselist.aspx)
    ##   <field> (hidden) __VIEWSTATE: /wEPDwUJNjM5OTI4N...
    ##   <field> (hidden) __VIEWSTATEGENERATOR: C4E59EE8
    ##   <field> (hidden) __EVENTVALIDATION: /wEdAOIC9tGFNoeX5...
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

``` r
fallPage$courseId = c(c("02", "03", "04", "05", "06", "07", "08", "09"), as.character(10:161))
```

## summer 2022

``` r
form = html_form(webpage)[[1]]
form = form %>% html_form_set(ddlSemester = "2022|2")

resp = html_form_submit(form)
```

    ## Submitting with 'btnSearch'

``` r
summerPage = read_html(resp)
summerPage %>% html_form()
```

    ## [[1]]
    ## <form> 'form1' (POST courselist.aspx)
    ##   <field> (hidden) __VIEWSTATE: /wEPDwUJNjM5OTI4N...
    ##   <field> (hidden) __VIEWSTATEGENERATOR: C4E59EE8
    ##   <field> (hidden) __EVENTVALIDATION: /wEdAEzPa/qsNw0wq...
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

``` r
summerPage$courseId = c(c("02", "03", "04", "05", "06", "07", "08", "09"), as.character(10:22))
```

## spring 2022

``` r
form = html_form(webpage)[[1]]
form = form %>% html_form_set(ddlSemester = "2022|1")

resp = html_form_submit(form)
```

    ## Submitting with 'btnSearch'

``` r
springPage = read_html(resp)
springPage %>% html_form()
```

    ## [[1]]
    ## <form> 'form1' (POST courselist.aspx)
    ##   <field> (hidden) __VIEWSTATE: /wEPDwUJNjM5OTI4N...
    ##   <field> (hidden) __VIEWSTATEGENERATOR: C4E59EE8
    ##   <field> (hidden) __EVENTVALIDATION: /wEdAPADI4YuOGAxl...
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

``` r
springPage$courseId = c(c("02", "03", "04", "05", "06", "07", "08", "09"), as.character(10:232))
```

# collect courses infomation from webpages

-   department label: `_Label1`

-   course code label: `_btnPDF`

-   course name label: `_Label13`

-   course section label: `_Label3`

``` r
dept = "_Label1"
code = "_btnPDF"
name = "_Label13"
sect = "_Label3"


springPage$season = "Spring"
summerPage$season = "Summer"
fallPage$season = "Fall"


pages = list(springPage, summerPage, fallPage)

res = data.frame(matrix(ncol = 5, nrow = 0))



for (page in pages) {
  for (courseId in page$courseId) {
    deptXpathStr = paste('//*[@id="grvCourses_ctl', courseId, dept, '"]', sep = "")
    codeXpathStr = paste('//*[@id="grvCourses_ctl', courseId, code, '"]', sep = "")
    nameXpathStr = paste('//*[@id="grvCourses_ctl', courseId, name, '"]', sep = "")
    sectXpathStr = paste('//*[@id="grvCourses_ctl', courseId, sect, '"]', sep = "")
    courseDept = page %>% html_nodes(xpath = deptXpathStr) %>% html_text(T)
    courseCode = page %>% html_nodes(xpath = codeXpathStr) %>% html_text(T)
    courseName = page %>% html_nodes(xpath = nameXpathStr) %>% html_text(T)
    courseSect = page %>% html_nodes(xpath = sectXpathStr) %>% html_text(T)
    courseSeason = page$season
    res = rbind(res, c(courseDept, courseCode, courseName, courseSect, courseSeason))
  }
}

colnames(res) = c("dept", "code", "name", "sect", "season")

head(res)
```

    ##   dept  code                                                    name sect
    ## 1 BIST 89260              Building Interdisciplinary Research Models  001
    ## 2 BIST P6110                          Statistical Computing with SAS  D01
    ## 3 BIST P6170             New Drug Development: A Regulatory Overview  001
    ## 4 BIST P8100                                    Applied Regression I  001
    ## 5 BIST P8101                     Introduction to Health Data Science  001
    ## 6 BIST P8103 Patient Oriented Research Career Development Colloquium  001
    ##   season
    ## 1 Spring
    ## 2 Spring
    ## 3 Spring
    ## 4 Spring
    ## 5 Spring
    ## 6 Spring

# Save course information to JSON

``` r
# add some attribute for website development

res = res %>% mutate(
  rating = 0.0,
  numsReview = 0
)

toJSON(res)
```

    ## [{"dept":"BIST","code":"89260","name":"Building Interdisciplinary Research Models","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P6110","name":"Statistical Computing with SAS","sect":"D01","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P6170","name":"New Drug Development: A Regulatory Overview","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8100","name":"Applied Regression I","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8101","name":"Introduction to Health Data Science","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8103","name":"Patient Oriented Research Career Development Colloquium","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8106","name":"Data Science II","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8109","name":"Statistical Inference","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8110","name":"Applied Regression II","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8120","name":"Analysis of Categorical Data","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8131","name":"Biostatistical Methods II","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8139","name":"Statistical Genetic Modeling","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8140","name":"Introduction to Randomized Clinical Trials","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8144","name":"Pharmaceutical Statistics","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8158","name":"Latent Variable and Structural Equation Modeling for Health Sciences","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8160","name":"Topics in Advanced Statistical Computing","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8170","name":"Integrative Capstone Experience","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8180","name":"Relational Databases and SQL Programming for Research and Data Science","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8180","name":"Relational Databases and SQL Programming for Research and Data Science","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8185","name":"Capstone Consulting Seminar","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8185","name":"Capstone Consulting Seminar","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8185","name":"Capstone Consulting Seminar","sect":"003","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8185","name":"Capstone Consulting Seminar","sect":"004","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P9110","name":"Theory of Statistical Inference II","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P9160","name":"Master's Essay in Biostatistics: Clinical Research Methods","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P9185","name":"Statistical Practices and Research for Interdisciplinary Sciences (SPRIS)","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6320","name":"Fundamentals of Toxicology for Health-related Disciplines","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6340","name":"Sustainable Development and Global Environmental Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6360","name":"Analysis of Environmental Health Data","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6370","name":"Journal Club in Molecular Epidemiology and Toxicology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6385","name":"Principles of Genetics & the Environment","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8303","name":"Food Security, Plant Biology, Climate Change, and Public Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8304","name":"Public Health Impacts of Climate Change","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8313","name":"Toxicokinetics","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8320","name":"Applied Environmental and Industrial Hygiene","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8321","name":"Introduction to Data Science for Environmental Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8322","name":"Environmental Determinants of Human Health II","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8323","name":"Laboratory Methods in Environmental Health Sciences","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8324","name":"Climate and Health Weekly Seminar","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8327","name":"Environmental Justice Health and Policy Analysis for Environmental Health Professionals","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8329","name":"Water, Sanitation, and Human Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8332","name":"Advanced Analytic Methods in EHS","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8334","name":"Computational Toxicology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8371","name":"Public Health GIS","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8371","name":"Public Health GIS","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8377","name":"EHS Policy Seminar","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9300","name":"Capstone: Critical Thinking and Analysis in Environmental Health Sciences","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9361","name":"Master's Essay Research I","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9362","name":"Master's Essay Research II","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9370","name":"Journal Club in Environmental Health Sciences","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9380","name":"Advanced GIS and Spatial Analysis","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9395","name":"Doctoral Research","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P6811","name":"Priorities in Global Public Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P6813","name":"Priorities in Global Mental Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8406","name":"Epidemiology of Infectious Diseases","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8415","name":"Chronic Disease Epidemiology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8417","name":"Selected Problems of Measurement in Epidemiology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8429","name":"Current Work in Injury Control and Prevention Seminar","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","sect":"003","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","sect":"004","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8438","name":"Epidemiology II: Design and Conduct of Observational Epidemiology","sect":"005","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8440","name":"Epidemiology of Cardiovascular Diseases","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8442","name":"Epidemiology and Control of Tuberculosis","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8443","name":"Microbiome and Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8445","name":"Current and Emerging Issues in Injury and Violence","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8451","name":"Introduction to Machine Learning for Epidemiology and Public Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8476","name":"Epidemiology of Chronic Disease Seminar","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8477","name":"Epi Modeling for Infectious Diseases","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8481","name":"Seminar in Social Determinants of Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8483","name":"Applications of Epidemiologic Research Methods","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8490","name":"Tutorial in Epidemiology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8490","name":"Tutorial in Epidemiology","sect":"019","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8499","name":"Field Methods in Epidemiology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8820","name":"Advanced Topics in Global Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P8881","name":"Global Health Pre-Practicum Seminar","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9400","name":"Epidemiology IV: Critical Thinking in Epidemiology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9415","name":"Epidemiologic Challenges in Substance Use Research","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9419","name":"Master's Essay in Epidemiology I","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9420","name":"Master's Essay in Epidemiology II","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9420","name":"Master's Essay in Epidemiology II","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9440","name":"Applying the Causal Roadmap to Single Timepoint and Longitudinal Data","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9446","name":"Faculty-Fellow Seminar in Psychiatric Epidemiology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9487","name":"Epi VI: Advanced Techniques in Epi Methods","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9489","name":"Application of Epi Research Methods II","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9490","name":"Tutorial in Epidemiology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9493","name":"Neurological Epidemiology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"EPID","code":"P9494","name":"Publications, Presentations, and Scientific Writing","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6503","name":"Introduction to Health Economics","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6508","name":"Health Policy and the Political System","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6513","name":"Critical Issues in Hospital Management","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6520","name":"Healthcare in the Arts","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6529","name":"Healthcare Accounting and Budgeting","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6529","name":"Healthcare Accounting and Budgeting","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6545","name":"Analytics and Managerial Decision-Making I","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8202","name":"Behavioral Policy & Public Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8204","name":"Strategy for Health Policy","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8205","name":"Venture Capital: Funding Innovation in Healthcare","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8210","name":"The Untold Stories in US Health Policy History","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8211","name":"Race and Public Policy: Interpreting Sub-Systemic Racism","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8212","name":"Digital Health Revolution","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8213","name":"Health Claims Data Analytics: Real-World Strategy","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8215","name":"Case Competition Fundamentals","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8216","name":"Changing the Narrative: Disrupting Assumptions through Dialog & Self-Awareness","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8217","name":"Spurring Social Justice in Public Health: Creating Models for Practical Change","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8218","name":"Healthcare Leadership: Leading with Equity","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8219","name":"Public Health Communications:  Take this course. Communicate clearly. Save lives.","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8220","name":"Economics of Prevention","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8502","name":"Empirical Analysis for Health Policy","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8515","name":"Health Care Marketing","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8515","name":"Health Care Marketing","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8517","name":"Management Challenges in the Evolving Healthcare and Insurance System","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8520","name":"Healthcare Ethics: Development and Management of Public Policy","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8522","name":"Post-Acute and Long Term Care Delivery Systems","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8527","name":"Managing Human Capital in Health Systems","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8529","name":"Analytics & Managerial Decision Making II","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8531","name":"Health Policy and Political Analysis","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8531","name":"Health Policy and Political Analysis","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8533","name":"Healthcare Financial Management","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8536","name":"Health Innovation & Technology","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8544","name":"Environmental Health Economics","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8548","name":"Public Health Law","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8555","name":"Public Health Concepts for Managers","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8556","name":"Competitive Health Strategy","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8556","name":"Competitive Health Strategy","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8557","name":"Managerial and Organizational Behavior","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8558","name":"Strategic Management","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8568","name":"Decision Analysis for Clinical and Public Health Practices","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8571","name":"Pivot: Professional Strategic Communications","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8572","name":"Pivot: Professional Strategic Communications","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8585","name":"The Business of Healthcare: Reform and Contemporary Issues","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8586","name":"Applied Methods in Health Services and Outcomes Research","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8587","name":"Advanced Health Policy Seminar","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8593","name":"Strategic Investment in Healthcare","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8594","name":"Addressing the Opioid Crisis","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8595","name":"Emerging Markets in Health Care: Public Ends Private Means","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8598","name":"On the Road from Volume to Value: Understanding Healthcare Payment Systems","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0003","name":"Matriculation & Facilities F/T (PhD)","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0004","name":"Matriculation & Facilities P/T (PhD)","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8601","name":"Public Health Program Planning","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","sect":"003","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","sect":"004","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8602","name":"Seminar: Public Health Program Planning","sect":"005","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8607","name":"Health and Human Rights Advocacy","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8608","name":"The Public Health Impact of Sexually Transmitted Infections","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8616","name":"Public Health Aspects of Adolescent Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8617","name":"Research Design and Data Collection","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8620","name":"Protecting Children in Humanitarian Settings","sect":"D01","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8623","name":"Quantitative Data Analysis","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8623","name":"Quantitative Data Analysis","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8624","name":"Breakout sessions for P8617","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8624","name":"Breakout sessions for P8617","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8624","name":"Breakout sessions for P8617","sect":"003","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8624","name":"Breakout sessions for P8617","sect":"004","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8625","name":"Outbreak Preparedness and Response in Resource-Limited Settings","sect":"D01","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8628","name":"Evidence to Action in Child Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8635","name":"Realizing Global LGBTI Health and Human Rights:  Activism, Advocacy, and Humanitarian Action","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8636","name":"Policy on Illicit Drugs: Public Health and Human Rights Perspectives","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8637","name":"Qualitative Data Analysis","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8640","name":"Methods in Program Evaluation","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8640","name":"Methods in Program Evaluation","sect":"D01","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8645","name":"Environmental Justice Advocacy","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8648","name":"Food and Nutrition in Complex Emergencies","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8654","name":"Malaria Program Planning","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8657","name":"Adverse Childhood Experiences and Trauma Informed Care","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8665","name":"Global Sexual and Reproductive Health and Rights","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8670","name":"Training of Trainers of Public Health Programs","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8673","name":"Sexual and Reproductive Health in Humanitarian Settings","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8679","name":"Investigative Methods in Complex Emergencies","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8679","name":"Investigative Methods in Complex Emergencies","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8681","name":"Beyond Motherhood","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8682","name":"Abortion in the United States: Politics, Policy and Provision","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8683","name":"Psychosocial and Mental Health Issues in Forced Migration","sect":"D01","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8684","name":"Demography and Public Health: Understanding to Action","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8686","name":"The Protection of Human Rights in the Contemporary World","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8691","name":"Public Health Advocacy for Reproductive Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P8693","name":"Capstone Paper-Heilbrunn Department of Population and Family Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9620","name":"Applications of Implementation Science in Low- and Middle-Income Countries","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9630","name":"Research Ethics and Responsible Conduct of Research","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9651","name":"DrPH Dissertation Proposal Writing Seminar","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9675","name":"Systems Thinking for Maternal Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9691","name":"Lessons (Un)Learned in Humanitarian Assistance: A Historical Perspective","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"POPF","code":"P9691","name":"Lessons (Un)Learned in Humanitarian Assistance: A Historical Perspective","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"GU4100","name":"(Y)our Longer Life","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"P8086","name":"Public Health Practice Seminar","sect":"D01","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"P9040","name":"Seminar in Managerial and Organizational Behavior","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"P9050","name":"Seminar in Strategic Management","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"P9060","name":"Essentials of Teaching and Communication","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"PUBH","code":"UN3200","name":"Introduction to Public Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"RESI","code":"G0006","name":"1 Residence Unit (PhD)","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"RESI","code":"G0007","name":"1/2 Residence Unit (PhD)","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0001","name":"Doctoral Research Registration F/T (DrPH)","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0003","name":"Doctoral Research Registration P/T (DrPH)","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6728","name":"Health Promotion: Theory, Research, and Practice","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6728","name":"Health Promotion: Theory, Research, and Practice","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6750","name":"Confronting Obesity: Society, Structures, and Policy","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6760","name":"Community Engagement Practice","sect":"D01","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6776","name":"Digital Storytelling: Why Public Health Matters","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6777","name":"Data Visualization and Storytelling","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6785","name":"Poisoned Worlds: Corporate Behavior & Public Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8705","name":"Evaluation of Health Programs","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8708","name":"SMS Master's Thesis","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8709","name":"Seminar in Sexuality, Gender, Health, and Human Rights","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8741","name":"Structural Approaches to Global Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8745","name":"Social and Economic Determinants of Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8745","name":"Social and Economic Determinants of Health","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8747","name":"Ethics of Public Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8762","name":"Chronic Disease and Community Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8766","name":"Designing Needs and Assets Assessments in Public Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8771","name":"Community Based Participatory Research","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8772","name":"Designing Public Health Interventions","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8772","name":"Designing Public Health Interventions","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","sect":"003","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8787","name":"Advanced Intervention Design","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8789","name":"Contemporary Debates in Sociomedical Sciences","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8792","name":"Dissemination and Implementation Science","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8794","name":"Society, Health Equity and Health Communication","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8795","name":"New Media and Health","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8796","name":"Quantitative Research Design for the Social Sciences","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8796","name":"Quantitative Research Design for the Social Sciences","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8796","name":"Quantitative Research Design for the Social Sciences","sect":"003","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8798","name":"Seminar in Research and Professional Development","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8901","name":"Seminar in Health Communication","sect":"002","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8901","name":"Seminar in Health Communication","sect":"D01","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8906","name":"Communicating Health Risks to the Public","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8908","name":"The Global Menstrual Movement: Understanding Policy & Practice","sect":"001","season":"Spring","rating":0,"numsReview":0},{"dept":"BIST","code":"P8112","name":"Systematic Review and Meta-Analysis","sect":"D01","season":"Summer","rating":0,"numsReview":0},{"dept":"BIST","code":"P8120","name":"Analysis of Categorical Data","sect":"D01","season":"Summer","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9303","name":"Applied Environmental Public Health Science","sect":"D01","season":"Summer","rating":0,"numsReview":0},{"dept":"EPID","code":"P8400","name":"Principles of Epidemiology III: Applied Epidemiologic Analysis","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"EPID","code":"P9419","name":"Master's Essay in Epidemiology I","sect":"D01","season":"Summer","rating":0,"numsReview":0},{"dept":"EPID","code":"P9420","name":"Master's Essay in Epidemiology II","sect":"D01","season":"Summer","rating":0,"numsReview":0},{"dept":"EPID","code":"P9446","name":"Faculty-Fellow Seminar in Psychiatric Epidemiology","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8508","name":"Analysis of Large Scale Data","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8514","name":"Governance, Health Law & Ethics","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8515","name":"Health Care Marketing","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8529","name":"Analytics & Managerial Decision Making II","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8533","name":"Healthcare Financial Management","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8536","name":"Health Innovation & Technology","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8545","name":"Applied Analysis of Complex Survey Data","sect":"D01","season":"Summer","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8556","name":"Competitive Health Strategy","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0003","name":"Matriculation & Facilities F/T (PhD)","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0004","name":"Matriculation & Facilities P/T (PhD)","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"RESI","code":"G0006","name":"1 Residence Unit (PhD)","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"RESI","code":"G0007","name":"1/2 Residence Unit (PhD)","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0001","name":"Doctoral Research Registration F/T (DrPH)","sect":"001","season":"Summer","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0003","name":"Doctoral Research Registration P/T (DrPH)","sect":"1","season":"Summer","rating":0,"numsReview":0},{"dept":"BIST","code":"P6104","name":"Introduction to Biostatistical Methods","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P6110","name":"Statistical Computing with SAS","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8100","name":"Applied Regression I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8103","name":"Patient Oriented Research Career Development Colloquium","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8104","name":"Probability","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8105","name":"Data Science I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8107","name":"Introduction to Mathematical Statistics","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8108","name":"Survival Analysis","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8110","name":"Applied Regression II","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8119","name":"Advanced Statistical and Computational Methods in Genetics and Genomics","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8120","name":"Analysis of Categorical Data","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8122","name":"Statistical Methods for Causal Inference","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8124","name":"Graphical Models for Complex Health Data","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8130","name":"Biostatistical Methods I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8140","name":"Introduction to Randomized Clinical Trials","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8142","name":"Clinical Trial Methodology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8149","name":"Human Population Genetics","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8157","name":"Analysis of Longitudinal Data","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8180","name":"Relational Databases and SQL Programming for Research and Data Science","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P8180","name":"Relational Databases and SQL Programming for Research and Data Science","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9104","name":"Probability for Biostatisticians","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9109","name":"Theory of Statistical Inference I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9111","name":"Asymptotic Statistics","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9120","name":"Topics in Statistical Learning and Data Mining I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9130","name":"Advanced Biostatistical Method I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9165","name":"Master's Essay in Biostatistics: Patient Oriented Research","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"BIST","code":"P9186","name":"Statistical Practices and Research for Interdisciplinary Science (SPRIS) II","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P6300","name":"Environmental Health Sciences","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8301","name":"Atmospheric and Climate Science for Public Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8306","name":"Occupational and Environmental Hygiene","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8307","name":"Molecular Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8308","name":"Molecular Toxicology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8312","name":"Principles of Toxicology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8317","name":"Frameworks for Environmental Health Policy","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8318","name":"Science Basic to Public Health Practice","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8319","name":"Biomarkers in Environmental Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8325","name":"Risk Assessment, Communication, and Management","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8371","name":"Public Health GIS","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P8371","name":"Public Health GIS","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9303","name":"Applied Environmental Public Health Science","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9361","name":"Master's Essay Research I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9370","name":"Journal Club in Environmental Health Sciences","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EHSC","code":"P9395","name":"Doctoral Research","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P6400","name":"Principles of Epidemiology I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8400","name":"Principles of Epidemiology III: Applied Epidemiologic Analysis","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8410","name":"Psychiatric Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8414","name":"Cancer Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8416","name":"Spatial Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8421","name":"Introduction to Clinical Psychiatry for Epidemiology and Public Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8428","name":"Current Work in Injury Control and Prevention Seminar","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8430","name":"Public Health Surveillance","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8432","name":"Environmental Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8449","name":"Optimization for Interventions","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8450","name":"Clinical Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8465","name":"Epidemiology of HIV and AIDS","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8469","name":"Epidemiology of Malaria","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8470","name":"Epidemiology of Drug and Alcohol Problems","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8471","name":"Social Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8475","name":"Emerging Infectious Diseases","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8476","name":"Epidemiology of Chronic Disease Seminar","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8479","name":"Epidemiologic Methods in Global Mental Health Research","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8481","name":"Seminar in Social Determinants of Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P8493","name":"Lifecourse Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9405","name":"History of Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9410","name":"Biology and Pathophysiology for Epidemiologists","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9419","name":"Master's Essay in Epidemiology I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9419","name":"Master's Essay in Epidemiology I","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9420","name":"Master's Essay in Epidemiology II","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9446","name":"Faculty-Fellow Seminar in Psychiatric Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9485","name":"Epidemiology V: Concepts in Causal Inference","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9490","name":"Tutorial in Epidemiology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"EPID","code":"P9490","name":"Tutorial in Epidemiology","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6503","name":"Introduction to Health Economics","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6513","name":"Critical Issues in Hospital Management","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6529","name":"Healthcare Accounting and Budgeting","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6529","name":"Healthcare Accounting and Budgeting","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6530","name":"Issues and Approaches in Health Policy and Management","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6530","name":"Issues and Approaches in Health Policy and Management","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P6545","name":"Analytics and Managerial Decision-Making I","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8201","name":"SAS Insights for CEOR","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8214","name":"Law & Policy: Mass Incarceration in the United States","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8215","name":"Case Competition Fundamentals","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8220","name":"Economics of Prevention","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8508","name":"Analysis of Large Scale Data","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8508","name":"Analysis of Large Scale Data","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8510","name":"Strategic Issues in Health Care Quality","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8510","name":"Strategic Issues in Health Care Quality","sect":"D02","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8513","name":"Healthcare Services for Vulnerable, At-Risk Populations","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8514","name":"Governance, Health Law & Ethics","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8514","name":"Governance, Health Law & Ethics","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8517","name":"Management Challenges in the Evolving Healthcare and Insurance System","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8518","name":"Advanced Healthcare Finance: Valuation and Investment of Healthcare Businesses","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8518","name":"Advanced Healthcare Finance: Valuation and Investment of Healthcare Businesses","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8527","name":"Managing Human Capital in Health Systems","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8531","name":"Health Policy and Political Analysis","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8540","name":"Is Bigger Better? An Analysis of Consolidation in the Healthcare Industry","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8548","name":"Public Health Law","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8548","name":"Public Health Law","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8553","name":"Strategic Planning for Health Insurance Plans","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8557","name":"Managerial and Organizational Behavior","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8557","name":"Managerial and Organizational Behavior","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8558","name":"Strategic Management","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8559","name":"Comparative Strategic Management","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8561","name":"Managing Public Health Non-Profits","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8565","name":"Landscape of Healthcare Quality: Perspectives and Initiatives","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8566","name":"Entrepreneurship for Healthcare Managers","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8571","name":"Pivot: Professional Strategic Communications","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8575","name":"Cross-National Health Policy and Management","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8584","name":"Transforming the Delivery of Healthcare Services","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8596","name":"Computing in Context: Health Policy","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"HPMN","code":"P8597","name":"The Politics and Policies of Humanitarian Aid and Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0003","name":"Matriculation & Facilities F/T (PhD)","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"MTFC","code":"G0004","name":"Matriculation & Facilities P/T (PhD)","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8600","name":"Pedagogy of Sexuality Education","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8607","name":"Health and Human Rights Advocacy","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8607","name":"Health and Human Rights Advocacy","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8615","name":"Current Issues in Sexual Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8623","name":"Quantitative Data Analysis","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8630","name":"Chronic Diseases in Humanitarian Settings","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8633","name":"Issues in School-Based Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8637","name":"Qualitative Data Analysis","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8638","name":"Digital Technology & Health Across The Lifespan","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8639","name":"Gender-Based Violence in Complex Emergencies","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8640","name":"Methods in Program Evaluation","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8645","name":"Environmental Justice Advocacy","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8651","name":"Water and Sanitation in Complex Emergencies","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8654","name":"Malaria Program Planning","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8656","name":"Immigrant Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8661","name":"Planning, Managing & Communicating For Evidence-Based Public Health Research & Programs","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8662","name":"Child Development & Health Programs","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8676","name":"Epidemiological Methods for Measuring Human Rights Abuses","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8684","name":"Demography and Public Health: Understanding to Action","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8687","name":"Public Health and Humanitarian Action","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8688","name":"Forced Migration Practicum Seminar","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8693","name":"Capstone Paper-Heilbrunn Department of Population and Family Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8694","name":"Key Issues in Adolescent Sexual and Reproductive Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"POPF","code":"P8698","name":"Interdisciplinary Seminar in Population & Family Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"PUBH","code":"GU4200","name":"Environment, Health, and Justice: Concepts and Practice","sect":"010","season":"Fall","rating":0,"numsReview":0},{"dept":"PUBH","code":"P8086","name":"Public Health Practice Seminar","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"PUBH","code":"UN3200","name":"Introduction to Public Health","sect":"010","season":"Fall","rating":0,"numsReview":0},{"dept":"PUBH","code":"UN3400","name":"Data Science and Health Equity in New York City","sect":"010","season":"Fall","rating":0,"numsReview":0},{"dept":"RESI","code":"G0006","name":"1 Residence Unit (PhD)","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"RESI","code":"G0007","name":"1/2 Residence Unit (PhD)","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0001","name":"Doctoral Research Registration F/T (DrPH)","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"RSRH","code":"P0003","name":"Doctoral Research Registration P/T (DrPH)","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6730","name":"Vital Records and Vital Statistics: The Backbone of Public Health in America","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P6775","name":"Health Communication","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8703","name":"Health Advocacy","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8705","name":"Evaluation of Health Programs","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8705","name":"Evaluation of Health Programs","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8707","name":"SMS Thesis Proposal","sect":"D01","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8736","name":"Theories and Perspectives on Sexuality and Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8745","name":"Social and Economic Determinants of Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8750","name":"Race and Health","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8755","name":"Introduction to Medical Anthropology","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8776","name":"Advancing Health Literacy","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8785","name":"Qualitative Research Methods","sect":"002","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8796","name":"Quantitative Research Design for the Social Sciences","sect":"001","season":"Fall","rating":0,"numsReview":0},{"dept":"SOSC","code":"P8798","name":"Seminar in Research and Professional Development","sect":"001","season":"Fall","rating":0,"numsReview":0}]
