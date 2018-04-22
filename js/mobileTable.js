(function ($) {
    $(document).ready(function () {

        if (window.matchMedia('(max-width: 768px)').matches) {
            $('table tr').each(function(){
                $(this).find('.mobileTable__col').eq(1).addClass('m__active-col');
            });
        }

        var MobileTableToggler = function (table) {
            /**
             * Функция для работы с 
             * мобильным вариантом таблицы
             */
            if (window.matchMedia('(max-width: 768px)').matches) {
                var self = this;
                var tableElem = $(table);
                var tableTr = tableElem.find('tr');
                var columnName = tableElem.find('th.mobileTable__col');
                var visibleCol = $('.m__visible-col').index();
                var colElement = tableElem.find('.mobileTable__col');

                self.prevColumn = function () {
                    $('#prevColumn').on('click', function () {
                        var indexMinus = visibleCol - 1;
                        if (visibleCol > 1) {
                            $('.m__visible-col').removeClass('m__visible-col');
                            visibleCol = indexMinus;
                           
                            tableTr.each(function(){
                                var getTitle = $(this).find('th').eq(indexMinus).text();
                                $('.mobileTable-mobile__title').text(getTitle);
                                $(this).find('.mobileTable__col').eq(indexMinus).addClass('m__visible-col');
                            });

                            var getTitle = tableElem.find('th').eq(indexMinus).text();
                            $('.mobileTable-mobile__title').text(getTitle);
                        }
                        else {
                            return false;
                        }

                    });
                }

                self.nextColumn = function () {
                    $('#nextColumn').on('click', function () {
                        var indexPlus = visibleCol + 1;
                        if (visibleCol < 4) {
                            visibleCol = indexPlus;
                            $('.m__visible-col').removeClass('m__visible-col');

                            tableTr.each(function(){
                                
                                $(this).find('.mobileTable__col').eq(indexPlus).addClass('m__visible-col');
                            });

                            var getTitle = tableElem.find('th').eq(indexPlus).text();
                            $('.mobileTable-mobile__title').text(getTitle);
                        }
                        else {
                            return false;
                        }
                    });
                }

                self.columnChanger = function () {
                    self.prevColumn();
                    self.nextColumn();
                }

                self.init = function () {
                    self.columnChanger();
                }

                self.init();
            }

        }

        var mobileTable = new MobileTableToggler('#tableContainer');

    });
})(jQuery);